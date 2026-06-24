// Hover-to-reference dictionary for the examples source viewer.
//
// When the user hovers a token in the highlighted source code (`#source-code`)
// for ~1s, a small popup shows that symbol's signature(s) and description,
// pulled from the same data the /reference/ page uses (generated/trussc-api.js).
// Clicking the popup title deep-links to /reference/#function:<name>.
//
// The 204KB API data file is loaded lazily — only the first time a source view
// is shown — so it never weighs on the initial player load. English only.

(function () {
    'use strict';

    const API_URL = '/generated/trussc-api.js';
    const HOVER_DELAY = 1000; // ms before the popup appears (hover intent)
    const HIDE_GRACE = 160;   // ms grace so the cursor can travel into the popup

    let lookup = null;        // name -> { kind, ret, sigs[], desc, value }
    let loading = null;       // in-flight load promise (load once)
    let popup = null;         // the popup element
    let showTimer = null;
    let hideTimer = null;
    let currentName = null;   // symbol the popup / pending show is bound to

    function esc(s) {
        if (s == null) return '';
        return String(s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // --- Data ---------------------------------------------------------------

    // Inject generated/trussc-api.js (defines global TrussCAPI) once, then flatten
    // it into a name-keyed object for O(1) lookups. English fields only.
    function loadData() {
        if (loading) return loading;
        loading = new Promise((resolve) => {
            // NOTE: generated/trussc-api.js declares `const TrussCAPI` at top level,
            // which lives in the global lexical scope — NOT as a window property.
            // So we read the bare global (typeof-guarded), like reference.js does.
            if (typeof TrussCAPI !== 'undefined') {
                resolve(TrussCAPI);
                return;
            }
            const s = document.createElement('script');
            s.src = API_URL;
            s.onload = () => resolve(typeof TrussCAPI !== 'undefined' ? TrussCAPI : null);
            s.onerror = () => resolve(null); // fail silent: hover just won't show
            document.head.appendChild(s);
        }).then((api) => {
            if (api && !lookup) lookup = buildLookup(api);
            return lookup;
        });
        return loading;
    }

    function buildLookup(api) {
        const map = Object.create(null);

        for (const cat of api.categories || []) {
            for (const fn of cat.functions || []) {
                const sig = fn.params_typed || fn.params || '';
                let e = map[fn.name];
                if (!e) {
                    e = map[fn.name] = {
                        kind: 'function',
                        ret: fn.return_type != null ? fn.return_type : 'void',
                        sigs: [],
                        desc: fn.desc || ''
                    };
                }
                if (!e.sigs.includes(sig)) e.sigs.push(sig);
                if (!e.desc && fn.desc) e.desc = fn.desc;
            }
        }
        for (const t of api.types || []) {
            // Don't let a type clobber a same-named function (rare); functions win.
            if (!map[t.name]) {
                map[t.name] = { kind: 'type', ret: '', sigs: [], desc: t.desc || '' };
            }
        }
        for (const c of api.constants || []) {
            if (!map[c.name]) {
                map[c.name] = { kind: 'constant', ret: '', sigs: [], desc: c.desc || '', value: c.value };
            }
        }
        return map;
    }

    // --- Popup --------------------------------------------------------------

    function ensurePopup() {
        if (popup) return popup;
        popup = document.createElement('div');
        popup.className = 'code-ref-popup';
        popup.style.display = 'none';
        // Keep the popup open while the cursor is inside it (so links are clickable).
        popup.addEventListener('mouseenter', () => clearTimeout(hideTimer));
        popup.addEventListener('mouseleave', scheduleHide);
        document.body.appendChild(popup);
        return popup;
    }

    function renderPopup(name, entry) {
        const p = ensurePopup();
        let html = '';

        const href = `/reference/#${entry.kind}:${encodeURIComponent(name)}`;
        html += `<a class="code-ref-title" href="${href}" target="_blank" rel="noopener">${esc(name)}`;
        html += `<span class="code-ref-go">↗</span></a>`;

        if (entry.kind === 'function') {
            const sigs = entry.sigs.length ? entry.sigs : [''];
            html += `<div class="code-ref-sigs">`;
            for (const sig of sigs) {
                html += `<div class="code-ref-sig">`;
                html += `<span class="cr-ret">${esc(entry.ret)}</span> `;
                html += `<span class="cr-name">${esc(name)}</span>(<span class="cr-params">${esc(sig)}</span>)`;
                html += `</div>`;
            }
            html += `</div>`;
        } else if (entry.kind === 'constant') {
            html += `<div class="code-ref-sigs"><div class="code-ref-sig"><span class="cr-val">= ${esc(String(entry.value))}</span></div></div>`;
        } else {
            html += `<div class="code-ref-kind">type</div>`;
        }

        if (entry.desc) html += `<div class="code-ref-desc">${esc(entry.desc)}</div>`;
        p.innerHTML = html;
        return p;
    }

    function positionPopup(rect) {
        const p = popup;
        p.style.display = 'block';
        p.style.visibility = 'hidden';
        const pw = p.offsetWidth, ph = p.offsetHeight;
        const margin = 8;

        let left = rect.left;
        if (left + pw > window.innerWidth - margin) left = window.innerWidth - pw - margin;
        if (left < margin) left = margin;

        // Prefer below the word; flip above if it would overflow the viewport.
        let top = rect.bottom + 6;
        if (top + ph > window.innerHeight - margin) top = rect.top - ph - 6;
        if (top < margin) top = margin;

        p.style.left = Math.round(left) + 'px';
        p.style.top = Math.round(top) + 'px';
        p.style.visibility = 'visible';
    }

    function showAt(rect, name, entry) {
        renderPopup(name, entry);
        positionPopup(rect);
    }

    function hidePopup() {
        if (popup) popup.style.display = 'none';
        currentName = null;
    }

    function scheduleHide() {
        clearTimeout(hideTimer);
        hideTimer = setTimeout(hidePopup, HIDE_GRACE);
    }

    // --- Hover wiring -------------------------------------------------------

    const IDENT = /^[A-Za-z_][A-Za-z0-9_]*$/;
    const WORD = /[A-Za-z0-9_]/;

    // Resolve the caret (text node + offset) under a viewport point, cross-browser.
    function caretAt(x, y) {
        if (document.caretRangeFromPoint) {
            const r = document.caretRangeFromPoint(x, y);
            if (r) return { node: r.startContainer, offset: r.startOffset };
        } else if (document.caretPositionFromPoint) {
            const p = document.caretPositionFromPoint(x, y);
            if (p) return { node: p.offsetNode, offset: p.offset };
        }
        return null;
    }

    // Walk to the text node immediately preceding `node` within `root` (document
    // order), so we can inspect characters that live in a separate highlight span.
    function prevTextNode(node, root) {
        let n = node;
        while (n && n !== root) {
            if (n.previousSibling) {
                n = n.previousSibling;
                while (n.lastChild) n = n.lastChild;
                if (n.nodeType === 3) return n;
            } else {
                n = n.parentNode;
            }
        }
        return null;
    }

    // True if the word starting at (node, startOffset) is a member/scope access:
    // preceded by `.`, `::`, or `->`. Such tokens are methods/qualified names, which
    // we deliberately don't resolve — only standalone symbols match. Looks back
    // across span boundaries (highlight.js may split `node`, `.`, `setPosition`).
    function precededByAccess(node, startOffset, root) {
        let buf = '', n = node, o = startOffset;
        while (buf.length < 2) {
            o--;
            if (o < 0) {
                n = prevTextNode(n, root);
                if (!n) break;
                o = n.textContent.length - 1;
                if (o < 0) continue;
            }
            const ch = n.textContent[o];
            if (ch === ' ' || ch === '\t') { if (buf.length === 0) continue; else break; }
            if (ch === '\n' || ch === '\r') break;
            buf = ch + buf;
        }
        const last = buf[buf.length - 1];
        if (last === '.' || last === ':') return true;            // `.` or `::`
        if (last === '>' && buf[buf.length - 2] === '-') return true; // `->`
        return false;
    }

    // The identifier directly under the cursor, plus its on-screen rect. Skips
    // member/qualified access (node.method, Class::method); only standalone
    // symbols resolve.
    function wordUnderCursor(x, y, container) {
        const c = caretAt(x, y);
        if (!c || !c.node || c.node.nodeType !== 3) return null;
        if (container && !container.contains(c.node)) return null;

        const text = c.node.textContent;
        let s = c.offset, e = c.offset;
        while (s > 0 && WORD.test(text[s - 1])) s--;
        while (e < text.length && WORD.test(text[e])) e++;
        if (e <= s) return null;

        const word = text.slice(s, e);
        if (!IDENT.test(word)) return null;
        if (precededByAccess(c.node, s, container)) return null;

        let rect = null;
        try {
            const r = document.createRange();
            r.setStart(c.node, s);
            r.setEnd(c.node, e);
            rect = r.getBoundingClientRect();
        } catch (_) { /* ignore */ }
        return { name: word, rect };
    }

    function onMouseMove(e) {
        const hit = wordUnderCursor(e.clientX, e.clientY, e.currentTarget);
        const name = hit && hit.name;

        if (name === currentName) return; // still on the same word
        currentName = name;
        clearTimeout(showTimer);

        const entry = name && lookup ? lookup[name] : null;
        if (!entry || !hit.rect) { scheduleHide(); return; }

        clearTimeout(hideTimer);
        showTimer = setTimeout(() => showAt(hit.rect, name, entry), HOVER_DELAY);
    }

    function onMouseLeave(e) {
        currentName = null;
        clearTimeout(showTimer);
        // Hide unless the cursor is heading into the popup (grace handles the gap).
        if (popup && e.relatedTarget && popup.contains(e.relatedTarget)) return;
        scheduleHide();
    }

    // Mark only the tokens that actually resolve to a reference entry, so the
    // hover affordance (underline) appears solely where a popup will show.
    // highlight.js wraps each token in its own span, so we tag matching leaf spans.
    function tagKnown(container) {
        if (!lookup || !container || !container.querySelectorAll) return;
        const spans = container.querySelectorAll('span');
        for (const s of spans) {
            const txt = (s.textContent || '').trim();
            const known = IDENT.test(txt) && lookup[txt] && !precededByAccess(s, 0, container);
            if (known) s.classList.add('code-ref-known');
            else s.classList.remove('code-ref-known');
        }
    }

    // Public: enable hover-reference on a code container (idempotent).
    function enable(selector) {
        const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
        if (!el || el.dataset.codeRefBound) return;
        el.dataset.codeRefBound = '1';
        loadData().then(() => tagKnown(el)); // lazy-load, then mark known tokens
        el.addEventListener('mousemove', onMouseMove);
        el.addEventListener('mouseleave', onMouseLeave);

        // Re-tag after the code is re-highlighted (e.g. switching source tabs).
        // Class changes are attribute mutations, so observing childList won't loop.
        if (typeof MutationObserver !== 'undefined') {
            new MutationObserver(() => tagKnown(el)).observe(el, { childList: true, subtree: true });
        }
    }

    window.CodeRef = { enable };
})();
