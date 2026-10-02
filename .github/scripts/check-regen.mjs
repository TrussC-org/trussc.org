// Refuse a reference regeneration that lost a large part of the API.
//
// Run from the trussc.org checkout after the emitters have rewritten generated/.
// Counts the symbols in each generated file and compares them with the committed
// version (git HEAD). A clean regeneration moves these counts by a handful at a
// time; a broken one (a clang parse that dropped a header, an emitter that read an
// empty input) removes hundreds at once. Exits 1 when any file shrank by more than
// MAX_SHRINK (default 0.05 = 5%), so the workflow stops before committing.
//
//   node .github/scripts/check-regen.mjs            # MAX_SHRINK=1 disables the gate
//
// Writes a markdown table to $GITHUB_STEP_SUMMARY when it is set.
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync, appendFileSync } from 'node:fs';
import vm from 'node:vm';

const MAX_SHRINK = Number(process.env.MAX_SHRINK ?? 0.05);

// [path, global the script defines (null = plain JSON)]
const FILES = [
    ['generated/trussc-api.js', 'TrussCAPI'],
    ['generated/trusssketch-ref.js', 'TrussCAPI'],
    ['generated/trusssketch-api.js', 'TrussSketchAPI'],
    ['generated/of-mapping.json', null],
];

function parse(src, global) {
    if (!global) return JSON.parse(src);
    // The .js files declare `const <global> = {…}` for the browser (and export it
    // only under CommonJS), so evaluate them in a sandbox and read the binding.
    const ctx = {};
    vm.runInNewContext(`${src}\n;globalThis.__data = ${global};`, ctx);
    return ctx.__data;
}

function count(d) {
    // of-mapping.json: groups of { of, tc } mappings
    if (d.functions && d.types && !d.categories) {
        const leaves = (groups) => groups.reduce((n, g) => n + (g.mappings || []).length, 0);
        return leaves(d.functions) + leaves(d.types);
    }
    let n = 0;
    for (const c of d.categories || []) n += (c.functions || []).length;
    for (const t of d.types || []) n += 1 + (t.methods || []).length + (t.static_methods || []).length;
    n += (d.enums || []).length + (d.constants || []).length;
    return n;
}

const rows = [];
let failed = false;
for (const [path, global] of FILES) {
    if (!existsSync(path)) {
        rows.push([path, '?', 'missing', 'FAIL']);
        failed = true;
        continue;
    }
    let before = null;
    try {
        before = count(parse(execFileSync('git', ['show', `HEAD:${path}`], { encoding: 'utf8', maxBuffer: 64 << 20 }), global));
    } catch { /* not committed yet: nothing to compare against */ }
    let after;
    try {
        after = count(parse(readFileSync(path, 'utf8'), global));
    } catch (e) {
        rows.push([path, before ?? '-', `unreadable: ${e.message}`, 'FAIL']);
        failed = true;
        continue;
    }
    const shrink = before ? (before - after) / before : 0;
    const bad = after === 0 || shrink > MAX_SHRINK;
    if (bad) failed = true;
    const delta = before == null ? 'new' : `${after - before >= 0 ? '+' : ''}${after - before} (${(-shrink * 100).toFixed(1)}%)`;
    rows.push([path, before ?? '-', `${after}  ${delta}`, bad ? 'FAIL' : 'ok']);
}

const table = ['| file | before | after | |', '|---|---|---|---|', ...rows.map((r) => `| ${r.join(' | ')} |`)].join('\n');
console.log(table);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### Reference symbol counts\n\n${table}\n\n`);
if (failed) {
    console.error(`\nRefusing: a generated file lost more than ${MAX_SHRINK * 100}% of its symbols (or is missing).`);
    console.error('If the removal is intended, re-run the workflow by hand with allow_shrink enabled.');
    process.exit(1);
}
