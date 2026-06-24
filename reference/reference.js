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
            for (const fn of cat.functions || []) pick(fn, 'desc');
        }
        for (const t of api.types || []) {
            pick(t, 'desc');
            for (const p of t.properties || []) pick(p, 'desc');
            for (const m of (t.methods || []).concat(t.static_methods || [])) pick(m, 'desc');
        }
        for (const c of api.constants || []) pick(c, 'desc');
    }
    localizeData(TrussCAPI);

    // UI labels with English fallbacks (so a page that forgets a key still works).
    const UI = Object.assign({
        subtitle: 'C++ API Reference',
        groupFunctions: 'Functions',
        groupTypes: 'Types',
        groupConstants: 'Constants',
        searchPlaceholder: 'Search functions, types...',
        backToOverview: '← Back to overview',
        signatures: 'Signatures',
        constructor: 'Constructor',
        properties: 'Properties',
        methods: 'Methods',
        staticMethods: 'Static Methods',
        category: 'Category',
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
    // Constants
    for (const c of TrussCAPI.constants) {
        items.push({ kind: 'constant', category: UI.groupConstants, name: c.name, data: c });
    }

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
        const d = item.data || {};
        if (Array.isArray(d.keywords)) for (const kw of d.keywords) if (kw) idents.push(kw);
        if (item.kind === 'type') {
            if (Array.isArray(d.methods)) for (const m of d.methods) if (m.name) idents.push(m.name);
            if (Array.isArray(d.properties)) for (const p of d.properties) if (p.name) idents.push(p.name);
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
                    html += `<div class="sidebar-item" data-kind="${item.kind}" data-name="${esc(item.name)}" data-cat="${esc(item.category)}" data-ret="${esc(_ret)}" data-params="${esc(_params)}" data-desc="${esc(_desc)}" onclick="selectItem(this)">${esc(item.name)}()</div>`;
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
                html += `<div class="sidebar-item type-item" data-kind="${item.kind}" data-name="${esc(item.name)}" onclick="selectItem(this)">${esc(item.name)}</div>`;
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

        sidebar.innerHTML = html || `<div style="padding:20px;color:#666;">${esc(UI.noResults)}</div>`;
    }

    function selectItem(el) {
        document.querySelectorAll('.sidebar-item.active').forEach(e => e.classList.remove('active'));
        el.classList.add('active');

        const kind = el.dataset.kind;
        const name = el.dataset.name;
        const cat = el.dataset.cat || '';

        if (kind === 'function') renderFunctionDetail(name, cat);
        else if (kind === 'type') renderTypeDetail(name);
        else if (kind === 'constant') renderConstantDetail(name);
    }

    function renderFunctionDetail(name, category) {
        const overloads = [];
        for (const cat of TrussCAPI.categories) {
            for (const fn of cat.functions) {
                if (fn.name === name) overloads.push({ ...fn, category: cat.name });
            }
        }
        if (overloads.length === 0) return;
        const first = overloads[0];

        let html = backButton();
        html += `<div class="detail-title">${esc(name)}</div>`;
        html += `<div class="detail-desc">${esc(first.desc || '')}</div>`;

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
            if (fn.desc) html += `<div class="detail-entry-desc">// ${esc(fn.desc)}</div>`;
            html += `</div>`;
        }
        html += `</div>`;

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
                html += `<div class="detail-sig"><span class="type">${esc(p.type)}</span> <span class="prop-name">${esc(p.name)}</span></div>`;
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
                if (m.signatures.length === 1) {
                    html += `<div class="detail-sig"><span class="ret">${esc(m.return || 'void')}</span> <span class="name">${esc(m.name)}</span>(<span class="params">${esc(m.signatures[0])}</span>)</div>`;
                } else {
                    for (const sig of m.signatures) {
                        html += `<div class="detail-sig"><span class="ret">${esc(m.return || 'void')}</span> <span class="name">${esc(m.name)}</span>(<span class="params">${esc(sig)}</span>)</div>`;
                    }
                }
                if (m.desc) html += `<div class="detail-entry-desc">// ${esc(m.desc)}</div>`;
                html += `</div>`;
            }
            html += `</div>`;
        }

        if (t.static_methods && t.static_methods.length > 0) {
            html += `<div class="detail-section">`;
            html += `<div class="detail-section-title">${esc(UI.staticMethods)}</div>`;
            for (const m of t.static_methods) {
                html += `<div class="detail-entry">`;
                for (const sig of m.signatures) {
                    html += `<div class="detail-sig"><span class="ret">${esc(m.return || 'void')}</span> <span class="name">${esc(m.name)}</span>(<span class="params">${esc(sig)}</span>)</div>`;
                }
                if (m.desc) html += `<div class="detail-entry-desc">// ${esc(m.desc)}</div>`;
                html += `</div>`;
            }
            html += `</div>`;
        }

        detail.innerHTML = html;
    }

    function renderConstantDetail(name) {
        const c = TrussCAPI.constants.find(c => c.name === name);
        if (!c) return;

        let html = backButton();
        html += `<div class="detail-title">${esc(c.name)}</div>`;
        html += `<div class="detail-desc">${esc(UI.constantValue)}</div>`;
        html += `<div class="detail-section">`;
        html += `<div class="detail-section-title">${esc(UI.value)}</div>`;
        html += `<div class="detail-entry"><div class="detail-sig" style="color:#b5cea8;font-size:16px;">${esc(String(c.value))}</div></div>`;
        html += `</div>`;

        detail.innerHTML = html;
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
                const key = fn.name + '(' + (fn.params || '') + ')';
                if (seen.has(key)) continue;
                seen.add(key);

                const retType = fn.return_type !== undefined && fn.return_type !== null ? fn.return_type : '';
                const params = fn.params_typed || fn.params || '';

                html += `<div class="overview-item" onclick="navTo('function','${esc(fn.name)}','${esc(cat.name)}')">`;
                if (retType) html += `<span class="ov-ret">${esc(retType)}</span> `;
                html += `<span class="ov-name">${esc(fn.name)}</span>(<span class="ov-params">${esc(params)}</span>)`;
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
            html += `<div class="overview-item ov-type" onclick="navTo('type','${esc(t.name)}')">`;
            html += `<span class="ov-name">${esc(t.name)}</span>`;
            if (t.desc) html += `<span class="ov-desc">${esc(t.desc)}</span>`;
            html += `</div>`;
        }
        html += `</div></div>`;

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

        detail.innerHTML = html;
    }

    function navTo(kind, name, cat) {
        document.querySelectorAll('.sidebar-item.active').forEach(e => e.classList.remove('active'));
        const el = document.querySelector(`.sidebar-item[data-kind="${kind}"][data-name="${name}"]`);
        if (el) el.classList.add('active');

        if (kind === 'function') renderFunctionDetail(name, cat);
        else if (kind === 'type') renderTypeDetail(name);
        else if (kind === 'constant') renderConstantDetail(name);
    }

    function backButton() {
        return `<div class="detail-back" onclick="showOverview()">${esc(UI.backToOverview)}</div>`;
    }

    function showOverview() {
        document.querySelectorAll('.sidebar-item.active').forEach(e => e.classList.remove('active'));
        renderOverview();
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

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', () => renderSidebar(searchInput.value));
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                renderSidebar('');
                searchInput.blur();
            }
        });
    }

    // Initial render
    renderSidebar('');
    renderOverview();
})();
