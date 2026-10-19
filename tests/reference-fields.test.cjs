const assert = require('node:assert/strict');
const { test } = require('node:test');
const { render } = require('./reference-harness.cjs');
const notes = { details: '**English notes**', details_ja: '日本語の詳細', details_ko: '한국어 설명', related: ['Target'], keywords: ['uniqueTerm'], snippet: 'if (a < b) use("<script>");', platformNote: 'English platform', platformNote_ja: '日本語の環境', platformNote_ko: '한국어 환경' };
const member = { name: 'method', desc: 'description', signatures: [{ ret: 'void', params: '' }], ...notes };
const api = {
    categories: [{ name: 'Functions', functions: [{ name: 'function', ...notes }] }],
    types: [{ name: 'Type', ...notes, methods: [member], static_methods: [{ ...member, name: 'staticMethod' }], nested: [{ name: 'Type::Nested', short: 'Nested', kind: 'type', ...notes, methods: [member] }] }, { name: 'Target' }],
    constants: [{ name: 'CONSTANT', value: 1, ...notes }], enums: [],
};
for (const lang of ['en', 'ja', 'ko']) test(`all detail views render localized notes and literal code (${lang})`, () => {
    const page = render(api, { lang });
    for (const [kind, name, copies] of [['function', 'function', 1], ['constant', 'CONSTANT', 1], ['type', 'Type', 5]]) {
        const html = page.view(kind, name);
        assert.equal((html.match(/<pre /g) || []).length, copies);
        assert.equal((html.match(/<div class="detail-details"/g) || []).length, copies);
        assert.ok(html.includes(lang === 'ja' ? notes.details_ja : lang === 'ko' ? notes.details_ko : 'English notes'));
        assert.ok(html.includes(lang === 'ja' ? notes.platformNote_ja : lang === 'ko' ? notes.platformNote_ko : notes.platformNote));
        assert.ok(html.includes('if (a &lt; b) use(&quot;&lt;script&gt;&quot;);'));
        assert.ok(html.includes("navTo('type','Target')"));
        assert.ok(!html.includes('<script>'));
    }
});
test('legacy constructor snippet remains a fallback', () => {
    const old = { ...api, types: [{ name: 'Old', constructor: { snippet: 'Old old;', signatures: [''] } }] };
    assert.ok(render(old).view('type', 'Old').includes('Old old;'));
});

for (const [label, nested] of [
    ['nested type', { keywords: ['typeset'] }],
    ['nested method', { methods: [{ name: 'draw', keywords: ['typeset'] }] }],
    ['nested static method', { static_methods: [{ name: 'make', keywords: ['typeset'] }] }],
]) test(`${label} keywords make the owning type searchable`, () => {
    const fixture = { categories: [], constants: [], enums: [], types: [{ name: 'Font', nested: [{ name: 'Font::PlacedGlyph', ...nested }] }, { name: 'Target' }] };
    const html = render(fixture).search('typeset');
    assert.ok(html.includes('data-name="Font"'));
    assert.ok(!html.includes('data-name="Target"'));
});
test('immediate method keywords make the owning type searchable', () => {
    const fixture = { categories: [], constants: [], enums: [], types: [{ name: 'Font', methods: [{ name: 'draw', keywords: ['typeset'] }] }] };
    assert.ok(render(fixture).search('typeset').includes('data-name="Font"'));
});
