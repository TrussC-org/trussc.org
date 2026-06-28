// Shared logic for the TrussC API reference pages (en / ja / ko).
//
// Each page sets these globals BEFORE loading this file:
//   window.REF_LANG : 'en' | 'ja' | 'ko'   (selects which localized strings to show)
//   window.REF_UI   : object of UI label strings (see the en page for the full set)
// and loads the single combined data file (generated/trussc-api.js), which defines
// a global `const TrussCAPI` carrying base + *_ja/*_ko variants inline. One cached
// file serves all locales; localizeData() below collapses desc/category-name to the
// active language so the rest of this file works on base fields (.name, .desc).
// Each symbol may also carry a `keywords: string[]` array (possibly empty/absent).

(function () {
    'use strict';

    const LANG = window.REF_LANG || 'en';

    // Collapse localized variants (desc_ja / name_ko / ...) onto the base field for
    // the active language, in place. en (or a missing variant) keeps the base value.
    function localizeData(api) {
        if (LANG === 'en') return;
        const suf = '_' + LANG;
        const pick = (o, base) => { if (o && o[base + suf] != null) o[base] = o[base + suf]; };
        for (const cat of api.categories || []) {
            pick(cat, 'name');
            for (const fn of cat.functions || []) { pick(fn, 'desc'); pick(fn, 'details'); pick(fn, 'sigDesc'); pick(fn, 'platformNote'); }
        }
        for (const t of api.types || []) {
            pick(t, 'desc'); pick(t, 'platformNote');
            for (const p of t.properties || []) pick(p, 'desc');
            for (const m of (t.methods || []).concat(t.static_methods || [])) { pick(m, 'desc'); pick(m, 'platformNote'); }
            for (const o of t.operators || []) pick(o, 'desc');
        }
        for (const c of api.constants || []) { pick(c, 'desc'); pick(c, 'details'); }
        for (const e of api.enums || []) { pick(e, 'desc'); for (const v of e.values || []) pick(v, 'desc'); for (const o of e.operators || []) pick(o, 'desc'); }
        for (const m of api.macros || []) pick(m, 'desc');
    }
    localizeData(TrussCAPI);

    // UI labels with English fallbacks (so a page that forgets a key still works).
    const UI = Object.assign({
        subtitle: 'C++ API Reference',
        groupFunctions: 'Functions',
        groupTypes: 'Types',
        groupEnums: 'Enums',
        groupMacros: 'Macros',
        groupConstants: 'Constants',
        searchPlaceholder: 'Search functions, types...',
        backToOverview: '← Back to overview',
        signatures: 'Signatures',
        constructor: 'Constructor',
        properties: 'Properties',
        methods: 'Methods',
        staticMethods: 'Static Methods',
        operators: 'Operators',
        deprecated: 'Deprecated',
        deprecatedUse: 'Use',
        colors: 'Colors',
        colorsDesc: 'Named colors in the colors:: namespace. Values are 0–1 float RGBA; hex is the 0–255 form.',
        category: 'Category',
        related: 'Related',
        examples: 'Examples',
        platforms: 'Platforms',
        values: 'Values',
        value: 'Value',
        constantValue: 'Constant value',
        noResults: 'No results'
    }, window.REF_UI || {});

    // Show version in subtitle
    const subtitleEl = document.getElementById('subtitle');
    if (subtitleEl) {
        subtitleEl.textContent = TrussCAPI.version
            ? UI.subtitle + ' — ' + TrussCAPI.version
            : UI.subtitle;
    }

    const sidebar = document.getElementById('sidebar-list');
    const detail = document.getElementById('detail');
    const searchInput = document.getElementById('search');
    if (searchInput && UI.searchPlaceholder) {
        searchInput.placeholder = UI.searchPlaceholder;
    }

    // Build flat index of all items for search and detail rendering
    const items = [];

    // Functions (grouped by category)
    for (const cat of TrussCAPI.categories) {
        for (const fn of cat.functions) {
            items.push({ kind: 'function', category: cat.name, name: fn.name, data: fn });
        }
    }
    // Types
    for (const t of TrussCAPI.types) {
        items.push({ kind: 'type', category: UI.groupTypes, name: t.name, data: t });
    }
    // Enums
    for (const e of TrussCAPI.enums || []) {
        items.push({ kind: 'enum', category: UI.groupEnums, name: e.name, data: e });
    }
    // Macros
    for (const m of TrussCAPI.macros || []) {
        items.push({ kind: 'macro', category: UI.groupMacros, name: m.name, data: m });
    }
    // Constants
    for (const c of TrussCAPI.constants) {
        items.push({ kind: 'constant', category: UI.groupConstants, name: c.name, data: c });
    }
    // Colors (palette) — each named color is individually searchable; the data
    // carries its source group so selecting one opens the palette at that group.
    for (const g of TrussCAPI.colors || []) {
        for (const c of g.items || []) {
            items.push({ kind: 'color', category: UI.colors, name: c.name, data: { name: c.name, hex: c.hex, rgba: c.rgba, group: g.group } });
        }
    }

    // A function is deprecated if ANY of its overloads carries a `deprecated`
    // marker; collect those names once so the sidebar/overview can flag them
    // inline (deprecated symbols stay in their normal category — no separate group).
    const deprecatedFns = new Set();
    for (const cat of TrussCAPI.categories) {
        for (const fn of cat.functions) if (fn.deprecated) deprecatedFns.add(fn.name);
    }
    function isDeprecated(item) {
        if (item.kind === 'function') return deprecatedFns.has(item.name);
        return !!(item.data && item.data.deprecated);
    }
    const DEPR_ATTR = ' style="text-decoration:line-through;opacity:0.6;" title="Deprecated"';

    // ---------------------------------------------------------------------
    // Fuzzy matching (no dependencies).
    //
    // A query token matches a haystack string if any of:
    //   - case-insensitive substring
    //   - subsequence (chars appear in order, e.g. "drwrct" in "drawrect")
    //   - Levenshtein distance <= 2 against any whitespace word of length >= 4
    //     (so "drawRct" still hits "drawRect")
    // A multi-token query matches only if EVERY token matches the item.
    // ---------------------------------------------------------------------

    function isSubsequence(needle, haystack) {
        let i = 0;
        for (let j = 0; j < haystack.length && i < needle.length; j++) {
            if (haystack[j] === needle[i]) i++;
        }
        return i === needle.length;
    }

    // Damerau-Levenshtein (optimal string alignment): adjacent transpositions
    // cost 1, so "curev" -> "curve" is distance 1 (a common typo class).
    function editDistance(a, b) {
        const al = a.length, bl = b.length;
        if (al === 0) return bl;
        if (bl === 0) return al;
        // d[i][j] over three rolling rows (need i-2 for transposition).
        let row0 = new Array(bl + 1), row1 = new Array(bl + 1), row2 = new Array(bl + 1);
        for (let j = 0; j <= bl; j++) row1[j] = j;
        for (let i = 1; i <= al; i++) {
            row2[0] = i;
            for (let j = 1; j <= bl; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                let v = Math.min(row1[j] + 1, row2[j - 1] + 1, row1[j - 1] + cost);
                if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
                    v = Math.min(v, row0[j - 2] + 1); // transposition
                }
                row2[j] = v;
            }
            const tmp = row0; row0 = row1; row1 = row2; row2 = tmp;
        }
        return row1[bl];
    }

    // Split an identifier into lowercase sub-words on non-alphanumeric AND
    // camelCase / letter-digit boundaries: "drawCurve" -> ["draw","curve"].
    function subWords(s) {
        return s
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .replace(/([A-Za-z])([0-9])/g, '$1 $2')
            .split(/[^A-Za-z0-9]+/)
            .filter(Boolean)
            .map(w => w.toLowerCase());
    }

    // Edit distance allowed for a typo, scaled to token length so short tokens
    // don't match wildly different words (e.g. a 4-char token allows 1 edit).
    function maxEditDist(token) {
        if (token.length >= 8) return 2;
        if (token.length >= 4) return 1;
        return 0;
    }

    // Fuzzy match against an IDENTIFIER-like string (name, keyword, method name):
    // substring, dense subsequence, or bounded Levenshtein. These are short, so
    // subsequence/edit-distance stay meaningful.
    function identMatches(token, haystack) {
        if (!haystack) return false;
        const lower = haystack.toLowerCase();
        if (lower.indexOf(token) !== -1) return true;
        const maxDist = maxEditDist(token);
        // Match against the whole identifier AND each camelCase sub-word, so both a
        // full-name typo ("drawCurev"->drawCurve) and a fragment typo ("curev"->curve) hit.
        for (const w of [lower, ...subWords(haystack)]) {
            // Dense subsequence (sub-word not much longer than the token).
            if (token.length >= 3 && w.length <= token.length + 3 &&
                isSubsequence(token, w)) return true;
            if (maxDist > 0 && Math.abs(w.length - token.length) <= maxDist &&
                editDistance(token, w) <= maxDist) return true;
        }
        return false;
    }

    // Match against PROSE (descriptions): substring only — never fuzz a sentence,
    // that is what produced far-fetched hits.
    function proseMatches(token, haystack) {
        return !!haystack && haystack.toLowerCase().indexOf(token) !== -1;
    }

    // Collect searchable fragments, split by how strictly to match them.
    function searchableFields(item) {
        const idents = [], prose = [];
        if (item.name) idents.push(item.name);
        if (item.category) idents.push(item.category);
        // So `deprecated` as a query filters to deprecated symbols (they live in
        // their normal category, not a dedicated group).
        if (isDeprecated(item)) idents.push('deprecated');
        const d = item.data || {};
        if (Array.isArray(d.keywords)) for (const kw of d.keywords) if (kw) idents.push(kw);
        if (item.kind === 'type') {
            if (Array.isArray(d.methods)) for (const m of d.methods) if (m.name) idents.push(m.name);
            if (Array.isArray(d.properties)) for (const p of d.properties) if (p.name) idents.push(p.name);
        }
        if (item.kind === 'enum' && Array.isArray(d.values)) {
            for (const v of d.values) if (v.name) idents.push(v.name);
        }
        if (d.desc) prose.push(d.desc);
        return { idents, prose };
    }

    function matchItem(item, query) {
        const tokens = query.split(/\s+/).filter(Boolean);
        if (tokens.length === 0) return true;
        const { idents, prose } = searchableFields(item);
        // Every token must match at least one field (fuzzy on idents, substring on prose).
        for (const token of tokens) {
            let hit = false;
            for (const f of idents) { if (identMatches(token, f)) { hit = true; break; } }
            if (!hit) for (const f of prose) { if (proseMatches(token, f)) { hit = true; break; } }
            if (!hit) return false;
        }
        return true;
    }

    // ---------------------------------------------------------------------

    function renderSidebar(query) {
        query = (query || '').toLowerCase().trim();
        let html = '';

        // Group: Functions by category
        const funcCats = {};
        for (const item of items) {
            if (item.kind !== 'function') continue;
            if (query && !matchItem(item, query)) continue;
            if (!funcCats[item.category]) funcCats[item.category] = [];
            funcCats[item.category].push(item);
        }

        const hasFuncs = Object.keys(funcCats).length > 0;
        if (hasFuncs) {
            html += `<div class="sidebar-group" id="group-functions">`;
            html += `<div class="sidebar-group-title" onclick="toggleGroup('group-functions')">`;
            html += `${esc(UI.groupFunctions)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>`;
            for (const [catName, catItems] of Object.entries(funcCats)) {
                html += `<div class="sidebar-group-items">`;
                html += `<div class="sidebar-cat-title">${esc(catName)}</div>`;
                const seen = new Set();
                for (const item of catItems) {
                    if (seen.has(item.name)) continue;
                    seen.add(item.name);
                    const _ret = item.data.return_type || 'void';
                    const _params = item.data.params_typed || item.data.params || '';
                    const _desc = item.data.desc || '';
                    const _depr = isDeprecated(item);
                    html += `<div class="sidebar-item" data-kind="${item.kind}" data-name="${esc(item.name)}" data-cat="${esc(item.category)}" data-ret="${esc(_ret)}" data-params="${esc(_params)}" data-desc="${esc(_desc)}" onclick="selectItem(this)"${_depr ? DEPR_ATTR : ''}>${esc(item.name)}()${_depr ? ' ⚠' : ''}</div>`;
                }
                html += `</div>`;
            }
            html += `</div>`;
        }

        // Group: Types
        const typeItems = items.filter(i => i.kind === 'type' && (!query || matchItem(i, query)));
        if (typeItems.length > 0) {
            html += `<div class="sidebar-group" id="group-types">`;
            html += `<div class="sidebar-group-title" onclick="toggleGroup('group-types')">`;
            html += `${esc(UI.groupTypes)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>`;
            html += `<div class="sidebar-group-items">`;
            for (const item of typeItems) {
                const _depr = isDeprecated(item);
                html += `<div class="sidebar-item type-item" data-kind="${item.kind}" data-name="${esc(item.name)}" onclick="selectItem(this)"${_depr ? DEPR_ATTR : ''}>${esc(item.name)}${_depr ? ' ⚠' : ''}</div>`;
            }
            html += `</div></div>`;
        }

        // Group: Enums
        const enumItems = items.filter(i => i.kind === 'enum' && (!query || matchItem(i, query)));
        if (enumItems.length > 0) {
            html += `<div class="sidebar-group" id="group-enums">`;
            html += `<div class="sidebar-group-title" onclick="toggleGroup('group-enums')">`;
            html += `${esc(UI.groupEnums)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>`;
            html += `<div class="sidebar-group-items">`;
            for (const item of enumItems) {
                const _depr = isDeprecated(item);
                html += `<div class="sidebar-item type-item" data-kind="${item.kind}" data-name="${esc(item.name)}" onclick="selectItem(this)"${_depr ? DEPR_ATTR : ''}>${esc(item.name)}${_depr ? ' ⚠' : ''}</div>`;
            }
            html += `</div></div>`;
        }

        // Group: Macros
        const macroItems = items.filter(i => i.kind === 'macro' && (!query || matchItem(i, query)));
        if (macroItems.length > 0) {
            html += `<div class="sidebar-group" id="group-macros">`;
            html += `<div class="sidebar-group-title" onclick="toggleGroup('group-macros')">`;
            html += `${esc(UI.groupMacros)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>`;
            html += `<div class="sidebar-group-items">`;
            for (const item of macroItems) {
                const _depr = isDeprecated(item);
                html += `<div class="sidebar-item const-item" data-kind="${item.kind}" data-name="${esc(item.name)}" onclick="selectItem(this)"${_depr ? DEPR_ATTR : ''}>${esc(item.name)}${_depr ? ' ⚠' : ''}</div>`;
            }
            html += `</div></div>`;
        }

        // Group: Constants
        const constItems = items.filter(i => i.kind === 'constant' && (!query || matchItem(i, query)));
        if (constItems.length > 0) {
            html += `<div class="sidebar-group" id="group-constants">`;
            html += `<div class="sidebar-group-title" onclick="toggleGroup('group-constants')">`;
            html += `${esc(UI.groupConstants)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>`;
            html += `<div class="sidebar-group-items">`;
            for (const item of constItems) {
                html += `<div class="sidebar-item const-item" data-kind="${item.kind}" data-name="${esc(item.name)}" onclick="selectItem(this)">${esc(item.name)}<span class="item-kind">= ${esc(String(item.data.value))}</span></div>`;
            }
            html += `</div></div>`;
        }

        // Group: Colors (palette). The sidebar only ever drills down to the color
        // sub-groups (categories) — never individual colors. A query narrows the
        // list to groups that contain a matching color. Collapsed by default.
        const colorItems = items.filter(i => i.kind === 'color' && (!query || matchItem(i, query)));
        if (colorItems.length > 0) {
            const matchedGroups = query ? new Set(colorItems.map(i => i.data.group)) : null;
            html += `<div class="sidebar-group collapsed" id="group-colors">`;
            html += `<div class="sidebar-group-title" onclick="toggleGroup('group-colors')">`;
            html += `${esc(UI.colors)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>`;
            html += `<div class="sidebar-group-items">`;
            for (const g of TrussCAPI.colors || []) {
                if (matchedGroups && !matchedGroups.has(g.group)) continue;
                html += `<div class="sidebar-item" data-kind="colorgroup" data-name="${esc(g.group)}" onclick="selectItem(this)">${esc(g.group)}<span class="item-kind">${g.items.length}</span></div>`;
            }
            html += `</div></div>`;
        }

        sidebar.innerHTML = html || `<div style="padding:20px;color:#666;">${esc(UI.noResults)}</div>`;
    }

    function selectItem(el) {
        const kind = el.dataset.kind;
        const name = el.dataset.name;
        const cat = el.dataset.cat || '';
        if (kind === 'color') openColor(el.dataset.group, name);
        else if (kind === 'colorgroup') showColors(name);
        else navTo(kind, name, cat);
    }

    // "drawRectSquircleExample" -> "Draw Rect Squircle"
    function exampleLabel(name) {
        return name.replace(/Example$/, '').replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .replace(/^./, c => c.toUpperCase()).trim();
    }
    function renderExamples(list) {
        if (!list || !list.length) return '';
        let h = `<div class="detail-section"><div class="detail-section-title">${esc(UI.examples)}</div>`;
        h += `<div style="font-size:13px;line-height:1.8;">`;
        h += list.map(e => `<a href="/examples/player.html?type=examples&group=${encodeURIComponent(e.group)}&name=${encodeURIComponent(e.name)}" style="color:var(--color-accent,#4ec9b0);text-decoration:none;">${esc(exampleLabel(e.name))}</a>`).join(' · ');
        h += `</div></div>`;
        return h;
    }

    // Platform-support badges. Absent `platforms` = universal → render nothing.
    // `platforms: []` (supported nowhere, e.g. a not-yet-implemented stub) renders
    // all-dimmed, which is the honest signal.
    const PLAT_ORDER = ['linux', 'windows', 'macos', 'ios', 'android', 'wasm'];
    const PLAT_LABEL = { linux: 'Linux', windows: 'Windows', macos: 'macOS', ios: 'iOS', android: 'Android', wasm: 'WASM' };
    function platBadges(list) {
        const on = new Set((list || []).map(p => p === 'web' ? 'wasm' : p));  // data emits 'web'; the badge is labelled WASM
        return PLAT_ORDER.map(p =>
            `<span class="plat-badge ${on.has(p) ? 'plat-on' : 'plat-off'}">${esc(PLAT_LABEL[p])}</span>`
        ).join('');
    }
    function renderPlatforms(d, inline) {
        if (!d) return '';
        const hasPlat = Array.isArray(d.platforms);
        if (!hasPlat && !d.platformNote) return '';   // a platformNote alone should still show
        if (inline) {
            let h = '';
            if (hasPlat) h += `<div class="plat-row plat-inline">${platBadges(d.platforms)}</div>`;
            if (d.platformNote) h += `<div class="plat-note">${esc(d.platformNote)}</div>`;
            return h;
        }
        let h = `<div class="detail-section"><div class="detail-section-title">${esc(UI.platforms)}</div>`;
        if (hasPlat) h += `<div class="plat-row">${platBadges(d.platforms)}</div>`;
        if (d.platformNote) h += `<div class="plat-note">${esc(d.platformNote)}</div>`;
        h += `</div>`;
        return h;
    }

    // Resolve a related symbol name to its kind so links navigate correctly
    // (a related entry may be a function, type, enum, macro or constant). Built once.
    let _kindIndex = null;
    function kindOf(name) {
        if (!_kindIndex) {
            _kindIndex = new Map();
            for (const c of TrussCAPI.categories || []) for (const f of c.functions || []) if (!_kindIndex.has(f.name)) _kindIndex.set(f.name, 'function');
            for (const t of TrussCAPI.types || []) if (!_kindIndex.has(t.name)) _kindIndex.set(t.name, 'type');
            for (const e of TrussCAPI.enums || []) if (!_kindIndex.has(e.name)) _kindIndex.set(e.name, 'enum');
            for (const m of TrussCAPI.macros || []) if (!_kindIndex.has(m.name)) _kindIndex.set(m.name, 'macro');
            for (const c of TrussCAPI.constants || []) if (!_kindIndex.has(c.name)) _kindIndex.set(c.name, 'constant');
        }
        return _kindIndex.get(name) || 'function';
    }
    // Is this name a real top-level reference entry? (builds the index lazily)
    function isKnown(name) { kindOf(name); return _kindIndex.has(name); }
    // A related target becomes a link ONLY when it resolves — a top-level symbol, or
    // a `Type::method` whose owning type exists (routed to that type's page). Anything
    // unresolvable renders as plain text instead of a silently-dead clickable link.
    function relatedLink(r) {
        const A = 'style="color:var(--color-accent,#4ec9b0);text-decoration:none;"';
        if (isKnown(r)) return `<a href="#" onclick="navTo('${kindOf(r)}','${esc(r)}');return false;" ${A}>${esc(r)}</a>`;
        // template targets (Tween<T>, Event<T>, ThreadChannel<T>) → resolve to the base type
        const base = r.replace(/<[^>]*>\s*$/, '');
        if (base !== r && isKnown(base)) return `<a href="#" onclick="navTo('${kindOf(base)}','${esc(base)}');return false;" title="${esc(r)}" ${A}>${esc(r)}</a>`;
        const ix = r.indexOf('::');
        if (ix > 0) {
            const owner = r.slice(0, ix);
            if (isKnown(owner) && kindOf(owner) === 'type')
                return `<a href="#" onclick="navTo('type','${esc(owner)}');return false;" title="${esc(r)}" ${A}>${esc(r)}</a>`;
        }
        return `<span style="color:#888;">${esc(r)}</span>`;
    }
    function renderRelated(list) {
        if (!list || !list.length) return '';
        let h = `<div class="detail-section"><div class="detail-section-title">${esc(UI.related)}</div>`;
        h += `<div style="font-size:13px;line-height:1.8;">`;
        h += list.map(relatedLink).join(' · ');
        h += `</div></div>`;
        return h;
    }

    // Deprecation banner: reason + optional clickable replacement + optional url.
    // `dep` is {reason, replacement?, url?} (or a bare string reason).
    function renderDeprecated(dep) {
        if (!dep) return '';
        const reason = typeof dep === 'string' ? dep : (dep.reason || '');
        let body = esc(reason);
        if (dep.replacement) {
            body += ` ${esc(UI.deprecatedUse)} <a href="#" onclick="navTo('${kindOf(dep.replacement)}','${esc(dep.replacement)}');return false;" style="color:var(--color-accent,#4ec9b0);text-decoration:none;">${esc(dep.replacement)}</a>`;
        }
        if (dep.url) {
            body += ` <a href="${esc(dep.url)}" target="_blank" rel="noopener" style="color:var(--color-accent,#4ec9b0);">↗</a>`;
        }
        return `<div style="margin:10px 0;padding:8px 12px;border-left:3px solid #d7a657;background:rgba(215,166,87,0.12);color:#d7a657;font-size:13px;border-radius:0 4px 4px 0;">⚠ <b>${esc(UI.deprecated)}</b> — ${body}</div>`;
    }

    // Operators: each carries a human-readable `signature` ("Vec2 + Vec2 → Vec2"),
    // the exact C++ `cpp` decl ("Vec2 operator+(const Vec2&) const"), and a desc.
    function renderOperators(list) {
        if (!list || !list.length) return '';
        let h = `<div class="detail-section"><div class="detail-section-title">${esc(UI.operators)}</div>`;
        for (const o of list) {
            h += `<div class="detail-entry">`;
            h += `<div class="detail-sig"><span class="name" style="color:var(--color-accent,#4ec9b0);">${esc(o.signature || o.cpp)}</span></div>`;
            if (o.cpp && o.cpp !== o.signature) {
                h += `<div class="detail-entry-desc" style="color:#888;">${esc(o.cpp)}</div>`;
            }
            if (o.desc) h += `<div class="detail-entry-desc">// ${esc(o.desc)}</div>`;
            h += `</div>`;
        }
        h += `</div>`;
        return h;
    }

    // Minimal Markdown → HTML for long-form `details` (fenced code, GFM tables,
    // headings, lists, inline code/bold/italic). Self-contained inline styles so no
    // CSS file change is needed; all output is escaped.
    const MD = {
        pre: 'background:var(--color-bg,#0a0a0b);border:1px solid var(--color-border,#3c3c3c);border-radius:6px;padding:10px 12px;margin:8px 0;overflow-x:auto;',
        codeBlk: "font-family:'JetBrains Mono','SF Mono',Consolas,monospace;font-size:12px;line-height:1.6;color:#d4d4d4;",
        codeInline: "font-family:'JetBrains Mono','SF Mono',Consolas,monospace;font-size:0.92em;background:rgba(255,255,255,0.07);padding:1px 5px;border-radius:3px;",
        tbl: 'border-collapse:collapse;margin:8px 0;font-size:13px;',
        th: 'border:1px solid var(--color-border,#3c3c3c);padding:5px 11px;text-align:left;background:rgba(255,255,255,0.05);font-weight:600;',
        td: 'border:1px solid var(--color-border,#3c3c3c);padding:5px 11px;',
        h: { 1: 'font-size:18px;font-weight:700;margin:14px 0 6px;', 2: 'font-size:16px;font-weight:700;margin:12px 0 5px;', 3: 'font-size:14px;font-weight:600;margin:10px 0 4px;' },
    };
    function mdInline(s) {
        return esc(s)
            .replace(/`([^`]+)`/g, (_, c) => `<code style="${MD.codeInline}">${c}</code>`)
            .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
            .replace(/\*([^*]+)\*/g, '<em>$1</em>');
    }
    function mdToHtml(src) {
        const L = String(src).replace(/\r\n/g, '\n').split('\n');
        const isSep = (s) => /-/.test(s) && /^\s*\|?[\s:|-]+\|?\s*$/.test(s);
        const row = (s) => s.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
        const out = [];
        let i = 0;
        while (i < L.length) {
            const line = L[i];
            let m = /^```(\w*)\s*$/.exec(line);
            if (m) { const buf = []; i++; while (i < L.length && !/^```\s*$/.test(L[i])) { buf.push(L[i]); i++; } i++; out.push(`<pre style="${MD.pre}"><code style="${MD.codeBlk}">${esc(buf.join('\n'))}</code></pre>`); continue; }
            m = /^(#{1,4})\s+(.*)$/.exec(line);
            if (m) { out.push(`<div style="${MD.h[m[1].length] || MD.h[3]}">${mdInline(m[2])}</div>`); i++; continue; }
            if (/\|/.test(line) && i + 1 < L.length && isSep(L[i + 1])) {
                const head = row(line); i += 2; const body = [];
                while (i < L.length && /\|/.test(L[i]) && L[i].trim()) { body.push(row(L[i])); i++; }
                let t = `<table style="${MD.tbl}"><thead><tr>` + head.map((h) => `<th style="${MD.th}">${mdInline(h)}</th>`).join('') + '</tr></thead><tbody>';
                for (const r of body) t += '<tr>' + r.map((c) => `<td style="${MD.td}">${mdInline(c)}</td>`).join('') + '</tr>';
                out.push(t + '</tbody></table>'); continue;
            }
            if (/^\s*[-*]\s+/.test(line)) { const items = []; while (i < L.length && /^\s*[-*]\s+/.test(L[i])) { items.push(L[i].replace(/^\s*[-*]\s+/, '')); i++; } out.push('<ul style="margin:6px 0;padding-left:20px;">' + items.map((it) => `<li>${mdInline(it)}</li>`).join('') + '</ul>'); continue; }
            if (line.trim() === '') { i++; continue; }
            const para = [line]; i++;
            while (i < L.length && L[i].trim() && !/^```/.test(L[i]) && !/^#{1,4}\s/.test(L[i]) && !/^\s*[-*]\s+/.test(L[i]) && !(/\|/.test(L[i]) && i + 1 < L.length && isSep(L[i + 1]))) { para.push(L[i]); i++; }
            out.push(`<p style="margin:6px 0;">${para.map(mdInline).join('<br>')}</p>`);
        }
        return out.join('');
    }

    function renderFunctionDetail(name, category) {
        const overloads = [];
        for (const cat of TrussCAPI.categories) {
            for (const fn of cat.functions) {
                if (fn.name === name) overloads.push({ ...fn, category: cat.name });
            }
        }
        if (overloads.length === 0) {
            detail.innerHTML = backButton() + `<div class="detail-title">${esc(name)}</div><div class="detail-desc" style="color:#888;">${esc(UI.noResults || 'Not found')}</div>`;
            return;
        }
        const first = overloads[0];

        let html = backButton();
        html += `<div class="detail-title">${esc(name)}</div>`;
        html += `<div class="detail-desc">${esc(first.desc || '')}</div>`;
        html += renderDeprecated((overloads.find(o => o.deprecated) || {}).deprecated);

        // Optional long-form details (multi-line), shown only here in the detail pane.
        const details = (overloads.find(o => o.details) || {}).details;
        if (details) {
            html += `<div class="detail-details" style="color:#bbb;font-size:13px;line-height:1.7;margin:6px 0 4px;">${mdToHtml(details)}</div>`;
        }

        // Platform support (only when the symbol is restricted on some platform).
        html += renderPlatforms(overloads.find(o => Array.isArray(o.platforms)) || {});

        html += `<div class="detail-section">`;
        html += `<div class="detail-section-title">${esc(UI.signatures)}</div>`;

        const seen = new Set();
        for (const fn of overloads) {
            const params = fn.params_typed || fn.params || '';
            const retType = fn.return_type !== undefined && fn.return_type !== null ? fn.return_type : 'void';
            const key = retType + name + '(' + params + ')';
            if (seen.has(key)) continue;
            seen.add(key);

            html += `<div class="detail-entry">`;
            html += `<div class="detail-sig"><span class="ret">${esc(retType)}</span> <span class="name">${esc(name)}</span>(<span class="params">${esc(params)}</span>)</div>`;
            // Annotate a signature only when this overload carries its own description.
            if (fn.sigDesc) html += `<div class="detail-entry-desc">// ${esc(fn.sigDesc)}</div>`;
            html += `</div>`;
        }
        html += `</div>`;

        // Optional related symbols → kind-aware clickable links.
        html += renderRelated((overloads.find(o => Array.isArray(o.related)) || {}).related);

        // Optional example links.
        html += renderExamples((overloads.find(o => Array.isArray(o.examples)) || {}).examples);

        html += `<div class="detail-section">`;
        html += `<div class="detail-section-title">${esc(UI.category)}</div>`;
        html += `<div style="color:#888;font-size:13px;">${esc(category || first.category)}</div>`;
        html += `</div>`;

        detail.innerHTML = html;
    }

    function renderTypeDetail(name) {
        const t = TrussCAPI.types.find(t => t.name === name);
        if (!t) return;

        let html = backButton();
        html += `<div class="detail-title">${esc(t.name)}</div>`;
        html += `<div class="detail-desc">${esc(t.desc || '')}</div>`;
        html += renderPlatforms(t);

        if (t.constructor && t.constructor.signatures) {
            html += `<div class="detail-section">`;
            html += `<div class="detail-section-title">${esc(UI.constructor)}</div>`;
            for (const sig of t.constructor.signatures) {
                html += `<div class="detail-entry">`;
                html += `<div class="detail-sig"><span class="name">${esc(t.name)}</span>(<span class="params">${esc(sig)}</span>)</div>`;
                html += `</div>`;
            }
            html += `</div>`;
        }

        if (t.properties && t.properties.length > 0) {
            html += `<div class="detail-section">`;
            html += `<div class="detail-section-title">${esc(UI.properties)}</div>`;
            for (const p of t.properties) {
                html += `<div class="detail-entry">`;
                const ptype = p.type ? `<span class="type">${esc(p.type)}</span> ` : '';
                html += `<div class="detail-sig">${ptype}<span class="prop-name">${esc(p.name)}</span></div>`;
                if (p.desc) html += `<div class="detail-entry-desc">// ${esc(p.desc)}</div>`;
                html += `</div>`;
            }
            html += `</div>`;
        }

        if (t.methods && t.methods.length > 0) {
            html += `<div class="detail-section">`;
            html += `<div class="detail-section-title">${esc(UI.methods)}</div>`;
            for (const m of t.methods) {
                html += `<div class="detail-entry">`;
                for (const sig of [...new Set(m.signatures)]) {   // dedupe identical const/non-const rows
                    html += `<div class="detail-sig"><span class="ret">${esc(m.return || 'void')}</span> <span class="name">${esc(m.name)}</span>(<span class="params">${esc(sig)}</span>)</div>`;
                }
                if (m.desc) html += `<div class="detail-entry-desc">// ${esc(m.desc)}</div>`;
                if (m.deprecated) html += renderDeprecated(m.deprecated);
                html += renderPlatforms(m, true);
                html += `</div>`;
            }
            html += `</div>`;
        }

        if (t.static_methods && t.static_methods.length > 0) {
            html += `<div class="detail-section">`;
            html += `<div class="detail-section-title">${esc(UI.staticMethods)}</div>`;
            for (const m of t.static_methods) {
                html += `<div class="detail-entry">`;
                for (const sig of [...new Set(m.signatures)]) {   // dedupe identical const/non-const rows
                    html += `<div class="detail-sig"><span class="ret">${esc(m.return || 'void')}</span> <span class="name">${esc(m.name)}</span>(<span class="params">${esc(sig)}</span>)</div>`;
                }
                if (m.desc) html += `<div class="detail-entry-desc">// ${esc(m.desc)}</div>`;
                html += renderPlatforms(m, true);
                html += `</div>`;
            }
            html += `</div>`;
        }

        html += renderOperators(t.operators);

        html += renderRelated(t.related);
        html += renderExamples(t.examples);

        detail.innerHTML = html;
    }

    function renderEnumDetail(name) {
        const e = (TrussCAPI.enums || []).find(e => e.name === name);
        if (!e) return;
        let html = backButton();
        html += `<div class="detail-title">${esc(e.name)}</div>`;
        html += `<div class="detail-desc">${esc(e.desc || '')}</div>`;
        html += `<div class="detail-section">`;
        html += `<div class="detail-section-title">${esc(UI.values)}</div>`;
        for (const v of e.values || []) {
            const val = (v.value !== undefined && v.value !== null) ? ` <span class="ov-val">= ${esc(String(v.value))}</span>` : '';
            html += `<div class="detail-entry">`;
            html += `<div class="detail-sig"><span class="name" style="color:var(--color-accent,#4ec9b0);">${esc(e.name)}::${esc(v.name)}</span>${val}</div>`;
            if (v.desc) html += `<div class="detail-entry-desc">// ${esc(v.desc)}</div>`;
            html += `</div>`;
        }
        html += `</div>`;
        html += renderOperators(e.operators);
        html += renderRelated(e.related);
        detail.innerHTML = html;
    }

    function renderMacroDetail(name) {
        const m = (TrussCAPI.macros || []).find(m => m.name === name);
        if (!m) return;
        let html = backButton();
        html += `<div class="detail-title">${esc(m.name)}</div>`;
        html += `<div class="detail-desc">${esc(m.desc || '')}</div>`;
        html += `<div class="detail-section">`;
        html += `<div class="detail-section-title">${esc(UI.signatures)}</div>`;
        html += `<div class="detail-entry"><div class="detail-sig"><span class="name" style="color:#dcdcaa;">${esc(m.signature || m.name)}</span></div></div>`;
        html += `</div>`;
        detail.innerHTML = html;
    }

    function renderConstantDetail(name) {
        const c = TrussCAPI.constants.find(c => c.name === name);
        if (!c) return;

        let html = backButton();
        html += `<div class="detail-title">${esc(c.name)}</div>`;
        html += `<div class="detail-desc">${esc(c.desc || UI.constantValue)}</div>`;
        // Long-form notes (e.g. the TAU/PI essays) — Markdown-rendered, same as functions.
        if (c.details) {
            html += `<div class="detail-details" style="color:#bbb;font-size:13px;line-height:1.7;margin:6px 0 4px;">${mdToHtml(c.details)}</div>`;
        }
        if (c.value !== undefined && c.value !== null) {   // don't print the literal word "undefined"
            html += `<div class="detail-section">`;
            html += `<div class="detail-section-title">${esc(UI.value)}</div>`;
            html += `<div class="detail-entry"><div class="detail-sig" style="color:#b5cea8;font-size:16px;">${esc(String(c.value))}</div></div>`;
            html += `</div>`;
        }
        html += renderRelated(c.related);

        detail.innerHTML = html;
    }

    // Slug a group name into a stable element id ("Basic" -> "colorgrp-Basic").
    function colorGroupId(group) {
        return 'colorgrp-' + String(group).replace(/[^A-Za-z0-9]+/g, '-');
    }

    // Render the whole palette as group sections of swatch cells. All groups are
    // expanded by default (each is still collapsible via its header). `scrollGroup`
    // (optional) scrolls that group's header into view; `highlightName` (optional)
    // rings a swatch and scrolls it into view instead.
    function renderColorsDetail(scrollGroup, highlightName) {
        const groups = TrussCAPI.colors || [];
        if (!groups.length) return;

        let html = backButton();
        html += `<div class="detail-title">${esc(UI.colors)}</div>`;
        html += `<div class="detail-desc">${esc(UI.colorsDesc)}</div>`;

        for (const g of groups) {
            const gid = colorGroupId(g.group);
            html += `<div class="color-group" id="${gid}">`;
            html += `<div class="color-group-title" onclick="toggleGroup('${gid}')">${esc(g.group)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg><span class="color-group-count">${(g.items || []).length}</span></div>`;
            html += `<div class="color-grid">`;
            for (const c of g.items || []) {
                const rgb = Array.isArray(c.rgba) ? `rgb(${c.rgba.slice(0, 3).join(', ')})` : '';
                const hl = highlightName && c.name === highlightName ? ' color-swatch-hl' : '';
                html += `<div class="color-swatch${hl}" id="swatch-${esc(c.name)}" title="${esc(c.name)} — ${esc(c.hex)} — ${esc(rgb)}">`;
                html += `<span class="color-chip" style="background:${esc(c.hex)}"></span>`;
                html += `<span class="color-name">${esc(c.name)}</span>`;
                html += `<span class="color-hex">${esc(c.hex)}</span>`;
                html += `</div>`;
            }
            html += `</div></div>`;
        }
        detail.innerHTML = html;
        detail.scrollTop = 0;

        if (highlightName) {
            const sw = document.getElementById('swatch-' + highlightName);
            if (sw) sw.scrollIntoView({ block: 'center' });
        } else if (scrollGroup) {
            const gh = document.getElementById(colorGroupId(scrollGroup));
            if (gh) gh.scrollIntoView({ block: 'start' });
        }
    }

    function renderOverview() {
        let html = '';

        html += `<div class="overview-section">`;
        html += `<div class="overview-section-title">${esc(UI.groupFunctions)}</div>`;
        for (const cat of TrussCAPI.categories) {
            html += `<div class="overview-cat-title">${esc(cat.name)}</div>`;
            html += `<div class="overview-grid">`;
            const seen = new Set();
            for (const fn of cat.functions) {
                const key = fn.name;   // one card per function; overloads live on the detail page
                if (seen.has(key)) continue;
                seen.add(key);

                const retType = fn.return_type !== undefined && fn.return_type !== null ? fn.return_type : '';
                const params = fn.params_typed || fn.params || '';

                const depr = deprecatedFns.has(fn.name);
                html += `<div class="overview-item${depr ? ' ov-deprecated' : ''}" onclick="navTo('function','${esc(fn.name)}','${esc(cat.name)}')">`;
                if (retType) html += `<span class="ov-ret">${esc(retType)}</span> `;
                html += `<span class="ov-name">${esc(fn.name)}</span>(<span class="ov-params">${esc(params)}</span>)`;
                if (depr) html += ` <span class="ov-depr-tag">⚠ ${esc(UI.deprecated)}</span>`;
                if (fn.desc) html += `<span class="ov-desc">// ${esc(fn.desc)}</span>`;
                html += `</div>`;
            }
            html += `</div>`;
        }
        html += `</div>`;

        html += `<div class="overview-section">`;
        html += `<div class="overview-section-title">${esc(UI.groupTypes)}</div>`;
        html += `<div class="overview-grid">`;
        for (const t of TrussCAPI.types) {
            const depr = !!t.deprecated;
            html += `<div class="overview-item ov-type${depr ? ' ov-deprecated' : ''}" onclick="navTo('type','${esc(t.name)}')">`;
            html += `<span class="ov-name">${esc(t.name)}</span>`;
            if (depr) html += ` <span class="ov-depr-tag">⚠ ${esc(UI.deprecated)}</span>`;
            if (t.desc) html += `<span class="ov-desc">${esc(t.desc)}</span>`;
            html += `</div>`;
        }
        html += `</div></div>`;

        if ((TrussCAPI.enums || []).length) {
            html += `<div class="overview-section">`;
            html += `<div class="overview-section-title">${esc(UI.groupEnums)}</div>`;
            html += `<div class="overview-grid">`;
            for (const e of TrussCAPI.enums) {
                html += `<div class="overview-item ov-type" onclick="navTo('enum','${esc(e.name)}')">`;
                html += `<span class="ov-name">${esc(e.name)}</span>`;
                if (e.desc) html += `<span class="ov-desc">${esc(e.desc)}</span>`;
                html += `</div>`;
            }
            html += `</div></div>`;
        }

        if ((TrussCAPI.macros || []).length) {
            html += `<div class="overview-section">`;
            html += `<div class="overview-section-title">${esc(UI.groupMacros)}</div>`;
            html += `<div class="overview-grid">`;
            for (const m of TrussCAPI.macros) {
                html += `<div class="overview-item ov-const" onclick="navTo('macro','${esc(m.name)}')">`;
                html += `<span class="ov-name">${esc(m.name)}</span>`;
                if (m.desc) html += `<span class="ov-desc">${esc(m.desc)}</span>`;
                html += `</div>`;
            }
            html += `</div></div>`;
        }

        html += `<div class="overview-section">`;
        html += `<div class="overview-section-title">${esc(UI.groupConstants)}</div>`;
        html += `<div class="overview-grid">`;
        for (const c of TrussCAPI.constants) {
            html += `<div class="overview-item ov-const" onclick="navTo('constant','${esc(c.name)}')">`;
            html += `<span class="ov-name">${esc(c.name)}</span>`;
            html += `<span class="ov-val">= ${esc(String(c.value))}</span>`;
            html += `</div>`;
        }
        html += `</div></div>`;

        if ((TrussCAPI.colors || []).length) {
            html += `<div class="overview-section">`;
            html += `<div class="overview-section-title">${esc(UI.colors)}</div>`;
            html += `<div class="overview-grid">`;
            for (const g of TrussCAPI.colors) {
                html += `<div class="overview-item ov-type" onclick="showColors('${esc(g.group)}')">`;
                html += `<span class="ov-name">${esc(g.group)}</span>`;
                html += `<span class="color-preview">`;
                for (const c of (g.items || []).slice(0, 8)) {
                    html += `<span class="color-chip" style="background:${esc(c.hex)}" title="${esc(c.name)}"></span>`;
                }
                html += `</span>`;
                html += `</div>`;
            }
            html += `</div></div>`;
        }

        detail.innerHTML = html;
    }

    // --- URL state -------------------------------------------------------
    // Search lives in the query string (?q=...); the open item lives in the hash
    // (#function:drawRect, #type:Color, #colors, #color:cornflowerBlue). The two
    // coexist (e.g. /reference/?q=draw#function:drawRect) and update independently.
    // replaceState keeps the address bar shareable without spamming history.
    // The #kind:name hash is a contract the examples source-viewer links into
    // (examples/code-reference.js) — keep it stable.
    function setUrl(opts) {
        const params = new URLSearchParams(location.search);
        if (opts.q !== undefined) {
            const q = opts.q.trim();
            if (q) params.set('q', q); else params.delete('q');
        }
        const qs = params.toString();
        const frag = opts.frag !== undefined ? opts.frag : location.hash.slice(1);
        history.replaceState(null, '',
            location.pathname + (qs ? '?' + qs : '') + (frag ? '#' + frag : ''));
    }

    // Render an item's detail pane and mark its sidebar entry active. Pure — does
    // NOT touch the URL (used when applying state read FROM the URL).
    function renderDetail(kind, name, cat) {
        document.querySelectorAll('.sidebar-item.active').forEach(e => e.classList.remove('active'));
        const el = document.querySelector(`.sidebar-item[data-kind="${kind}"][data-name="${name}"]`);
        if (el) el.classList.add('active');
        if (kind === 'function') renderFunctionDetail(name, cat);
        else if (kind === 'type') renderTypeDetail(name);
        else if (kind === 'enum') renderEnumDetail(name);
        else if (kind === 'macro') renderMacroDetail(name);
        else if (kind === 'constant') renderConstantDetail(name);
    }

    // Navigate to an item (user action): render it AND reflect it in the URL hash.
    function navTo(kind, name, cat) {
        renderDetail(kind, name, cat);
        setUrl({ frag: kind + ':' + name });
    }

    function backButton() {
        return `<div class="detail-back" onclick="showOverview()">${esc(UI.backToOverview)}</div>`;
    }

    function showOverview() {
        document.querySelectorAll('.sidebar-item.active').forEach(e => e.classList.remove('active'));
        renderOverview();
        setUrl({ frag: '' });
    }

    function showColors(group) {
        document.querySelectorAll('.sidebar-item.active').forEach(e => e.classList.remove('active'));
        renderColorsDetail(group);
        setUrl({ frag: group ? 'colors:' + group : 'colors' });
    }

    // Open the palette at a specific swatch (from a color search result).
    function openColor(group, name) {
        document.querySelectorAll('.sidebar-item.active').forEach(e => e.classList.remove('active'));
        renderColorsDetail(group, name);
        setUrl({ frag: 'color:' + name });
    }

    // Find which color group a color name belongs to (for #color:<name> links).
    function colorGroupOf(name) {
        for (const g of TrussCAPI.colors || []) {
            if ((g.items || []).some(c => c.name === name)) return g.group;
        }
        return undefined;
    }

    function toggleGroup(id) {
        document.getElementById(id).classList.toggle('collapsed');
    }

    function esc(str) {
        if (!str && str !== 0) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // Expose handlers referenced from inline onclick attributes.
    window.selectItem = selectItem;
    window.navTo = navTo;
    window.showOverview = showOverview;
    window.showColors = showColors;
    window.toggleGroup = toggleGroup;

    // Tooltip
    const tooltip = document.getElementById('tooltip');
    if (tooltip && sidebar) {
        sidebar.addEventListener('mouseover', (e) => {
            const item = e.target.closest('.sidebar-item');
            if (!item || item.dataset.kind !== 'function') {
                tooltip.style.display = 'none';
                return;
            }
            const ret = item.dataset.ret || '';
            const params = item.dataset.params || '';
            const desc = item.dataset.desc || '';
            let html = `<span class="tt-ret">${esc(ret)}</span> <span class="tt-name">${esc(item.dataset.name)}</span>(<span class="tt-params">${esc(params)}</span>)`;
            if (desc) html += `<span class="tt-desc">// ${esc(desc)}</span>`;
            tooltip.innerHTML = html;
            tooltip.style.display = 'block';

            const rect = item.getBoundingClientRect();
            tooltip.style.left = (rect.right + 8) + 'px';
            tooltip.style.top = rect.top + 'px';
        });

        sidebar.addEventListener('mouseout', (e) => {
            const item = e.target.closest('.sidebar-item');
            if (!item || !e.relatedTarget || !item.contains(e.relatedTarget)) {
                tooltip.style.display = 'none';
            }
        });
    }

    // Search → query string (?q=...), preserving the open item in the hash.
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderSidebar(searchInput.value);
            setUrl({ q: searchInput.value });
        });
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                renderSidebar('');
                setUrl({ q: '' });
                searchInput.blur();
            }
        });
    }

    // Apply state FROM the URL: ?q= drives the sidebar filter, the #hash opens an
    // item. Both are optional and independent, e.g. "?q=draw#function:drawRect".
    //   #function:drawRect #type:Color #enum:… #macro:… #constant:…
    //   #colors  #colors:Blues  #color:cornflowerBlue        (palette)
    //   #drawRect                                             (bare → function)
    //   #search:foo                                           (legacy → ?q=foo)
    function applyState() {
        const params = new URLSearchParams(location.search);
        let q = params.get('q') || '';

        const raw = decodeURIComponent(location.hash.slice(1));
        const ci = raw.indexOf(':');
        const a = ci === -1 ? raw : raw.slice(0, ci);
        const b = ci === -1 ? '' : raw.slice(ci + 1);

        // Legacy "#search:foo" — fold into ?q= and normalize the URL.
        if (a === 'search') {
            q = b;
            if (searchInput) searchInput.value = q;
            renderSidebar(q);
            renderOverview();
            setUrl({ q: q, frag: '' });
            return;
        }

        if (searchInput) searchInput.value = q;
        renderSidebar(q);

        if (!raw) { renderOverview(); return; }
        if (a === 'colors') { renderColorsDetail(b || undefined); return; }
        if (a === 'color') { renderColorsDetail(colorGroupOf(b), b); return; }
        if (b) renderDetail(a, b);
        else renderDetail('function', a);
    }
    // replaceState (used by our writes) never fires these, so no feedback loop —
    // they fire only for real navigation (manual URL edit, back/forward, deep link).
    window.addEventListener('hashchange', applyState);
    window.addEventListener('popstate', applyState);
    applyState();
})();
