// cm-editor.js — CodeMirror 6 backend exposed through a minimal Monaco-compatible
// shim, so the rest of sketch-ui.js keeps using `monaco.*` / `editor.*` unchanged.
//
// Why: Monaco is multi-MB and chokes on low-power devices (Chromebook). CM6 is
// tiny and touch-friendly. We only reimplement the slice of the Monaco API that
// sketch-ui.js actually uses (createModel / setModel / markers / completion /
// a custom language + theme + Cmd-Enter).
//
// Loaded as an ES module; resolves window.__cmReady once window.monaco is ready.

import { EditorState, StateField } from "@codemirror/state";
import {
    EditorView, keymap, lineNumbers, highlightActiveLine,
    highlightActiveLineGutter, drawSelection, highlightSpecialChars,
    showTooltip
} from "@codemirror/view";
import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
import {
    StreamLanguage, syntaxHighlighting, HighlightStyle,
    indentOnInput, bracketMatching
} from "@codemirror/language";
import {
    autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap, snippet
} from "@codemirror/autocomplete";
import { lintGutter, setDiagnostics, lintKeymap } from "@codemirror/lint";
import { tags } from "@lezer/highlight";

// ---- module state ------------------------------------------------------
let view = null;             // the single EditorView
let activeModel = null;      // model whose state the view currently holds
let editorApi = null;        // the Monaco-like editor object returned by create()
let monarchDef = null;       // captured from setMonarchTokensProvider
let completionProvider = null; // captured from registerCompletionItemProvider
let runCommand = null;       // Cmd/Ctrl-Enter handler registered via addCommand
let sharedExtensions = null; // built once, reused for every model's state

// ---- snippet syntax: Monaco ${1:x}/$0 -> CM6 ${1:x}/${} ----------------
function toCMSnippet(t) {
    return String(t)
        .replace(/\$0/g, '${}')
        .replace(/\$\{0\}/g, '${}')
        .replace(/\$(\d+)(?![\w{])/g, '${$1}');
}

// ---- language (AngelScript-like "trusssketch") from the captured def ---
function buildLanguage() {
    const kw = new Set((monarchDef && monarchDef.keywords) || []);
    const ty = new Set((monarchDef && monarchDef.typeKeywords) || []);
    // Lua tokenizer: -- line comments, --[[ ]] block comments, '/" strings.
    return StreamLanguage.define({
        startState() { return { inBlockComment: false }; },
        token(stream, state) {
            if (state.inBlockComment) {
                if (stream.match(/^.*?\]\]/)) state.inBlockComment = false;
                else stream.skipToEnd();
                return 'comment';
            }
            if (stream.eatSpace()) return null;
            if (stream.match('--[[')) { state.inBlockComment = true; return 'comment'; }
            if (stream.match(/^--.*/)) return 'comment';
            if (stream.match(/^"(?:[^"\\]|\\.)*"?/)) return 'string';
            if (stream.match(/^'(?:[^'\\]|\\.)*'?/)) return 'string';
            if (stream.match(/^(?:0x[0-9a-fA-F]+|\d+\.?\d*(?:[eE][+-]?\d+)?)/)) return 'number';
            if (stream.match(/^[A-Za-z_]\w*/)) {
                const w = stream.current();
                if (kw.has(w)) return 'keyword';
                if (ty.has(w)) return 'typeName';
                return 'variableName';
            }
            stream.next();
            return null;
        }
    });
}

const highlightStyle = HighlightStyle.define([
    { tag: tags.keyword, color: '#c586c0' },
    { tag: tags.typeName, color: '#4ec9b0' },
    { tag: tags.variableName, color: '#9cdcfe' },
    { tag: tags.number, color: '#b5cea8' },
    { tag: tags.string, color: '#ce9178' },
    { tag: tags.comment, color: '#6a9955', fontStyle: 'italic' },
]);

const theme = EditorView.theme({
    '&': { height: '100%', backgroundColor: '#1e1e1e', color: '#d4d4d4', fontSize: '14px' },
    '.cm-scroller': { fontFamily: "'JetBrains Mono','Fira Code',monospace", lineHeight: '1.5', overflow: 'auto' },
    '.cm-gutters': { backgroundColor: '#1e1e1e', color: '#6a737d', border: 'none' },
    '.cm-activeLine': { backgroundColor: 'rgba(255,255,255,0.04)' },
    '.cm-activeLineGutter': { backgroundColor: 'rgba(255,255,255,0.05)' },
    '&.cm-focused .cm-cursor': { borderLeftColor: '#fff' },
    '.cm-tooltip-autocomplete': { backgroundColor: '#252526', border: '1px solid #454545' },
    '.cm-tooltip.cm-number-tweak': {
        backgroundColor: '#252526', border: '1px solid #454545',
        borderRadius: '6px', padding: '6px 10px',
    },
    '.cm-number-tweak input[type=range]': {
        width: '160px', margin: '0', display: 'block',
        accentColor: '#569cd6', touchAction: 'none',
    },
}, { dark: true });

// ---- number tweak: cursor on a number literal -> slider tooltip ---------
// Touch-friendly live tweaking: tap/click a number, drag the slider that
// appears above it; each change rewrites the literal and fires a
// 'tcs-number-tweak' DOM event so the page can hot-reload immediately.
function numberTokenAt(state) {
    const sel = state.selection.main;
    if (!sel.empty) return null;
    const line = state.doc.lineAt(sel.head);
    const text = line.text;
    const cursor = sel.head - line.from;
    const commentIdx = text.indexOf('--');
    const re = /\d+\.?\d*(?:[eE][+-]?\d+)?/g;
    let m;
    while ((m = re.exec(text)) !== null) {
        let start = m.index;
        const end = start + m[0].length;
        if (start > cursor + 1) break;                   // +1: cursor may sit on a leading '-'
        if (commentIdx >= 0 && start > commentIdx) break;
        const prev = start > 0 ? text[start - 1] : '';
        if (/[A-Za-z_]/.test(prev)) continue;            // hex body / identifier tail
        if (text[end] === 'x' || text[end] === 'X') continue; // the 0 of 0x...
        // cheap string check: unbalanced quote before the token
        const before = text.slice(0, start);
        if (((before.match(/"/g) || []).length % 2) !== 0) continue;
        if (((before.match(/'/g) || []).length % 2) !== 0) continue;
        // ".5"-style decimal: pull the dot in (but not ".." concat)
        if (prev === '.' && text[start - 2] !== '.' && !/\d/.test(text[start - 2] || '')) start--;
        // leading '-' is part of the number only when it's a sign, not subtraction
        if (start > 0 && text[start - 1] === '-' && text[start - 2] !== '-') {
            let j = start - 2;
            while (j >= 0 && text[j] === ' ') j--;
            if (j < 0 || '(=+*/%<>[{,;'.includes(text[j])) start--;
        }
        if (cursor < start || cursor > end) continue;    // end-inclusive
        const raw = text.slice(start, end);
        return {
            from: line.from + start, to: line.from + end,
            value: parseFloat(raw), hasDot: raw.includes('.'),
        };
    }
    return null;
}

// One stable `create` so CM6 reuses the tooltip DOM across cursor moves and
// our own slider-driven doc edits (reuse is keyed on create identity).
function tweakTooltipView(ev) {
    const dom = document.createElement('div');
    dom.className = 'cm-number-tweak';
    const slider = document.createElement('input');
    slider.type = 'range';
    dom.appendChild(slider);

    let cur = null;       // { from, to, decimals } — tracked across our edits
    let dragging = false; // freeze the range while the thumb is held

    function configure(state) {
        const tok = numberTokenAt(state);
        if (!tok) return;
        const v = tok.value;
        let min, max, step;
        if (tok.hasDot && v >= 0 && v <= 1) {
            min = 0; max = 1; step = 0.01;
        } else if (tok.hasDot) {
            const span = Math.max(1, Math.abs(v)) * 2;
            min = v - span; max = v + span; step = span / 100;
        } else {
            const span = Math.max(10, Math.abs(v) * 2);
            min = Math.round(v - span); max = Math.round(v + span); step = 1;
        }
        const decimals = step >= 1 ? 0 : Math.min(6, Math.max(2, -Math.floor(Math.log10(step))));
        cur = { from: tok.from, to: tok.to, decimals };
        slider.min = String(min);
        slider.max = String(max);
        slider.step = String(step);
        slider.value = String(v);
    }
    configure(ev.state);

    slider.addEventListener('pointerdown', () => { dragging = true; });
    const endDrag = () => {
        if (!dragging) return;
        dragging = false;
        configure(ev.state);  // re-center the range around the final value
        ev.focus();
    };
    slider.addEventListener('pointerup', endDrag);
    slider.addEventListener('pointercancel', endDrag);

    slider.addEventListener('input', () => {
        if (!cur) return;
        const num = parseFloat(slider.value);
        let text;
        if (cur.decimals) {
            text = num.toFixed(cur.decimals).replace(/(\.\d*?)0+$/, '$1');
            if (text.endsWith('.')) text += '0';
        } else {
            text = String(Math.round(num));
        }
        ev.dispatch({
            changes: { from: cur.from, to: cur.to, insert: text },
            selection: { anchor: cur.from + text.length },
        });
        cur.to = cur.from + text.length;
        ev.dom.dispatchEvent(new CustomEvent('tcs-number-tweak', { bubbles: true }));
    });

    return {
        dom,
        update(u) {
            // Reconfigure when the cursor lands on a (different) number; never
            // mid-drag, or the scale would slide under the thumb.
            if (!dragging && (u.selectionSet || u.docChanged)) configure(u.state);
        },
    };
}

const numberTweakField = StateField.define({
    create: (state) => {
        const tok = numberTokenAt(state);
        return tok ? { pos: tok.from, above: true, strictSide: false, create: tweakTooltipView } : null;
    },
    update(value, tr) {
        if (!tr.docChanged && !tr.selection) return value;
        const tok = numberTokenAt(tr.state);
        return tok ? { pos: tok.from, above: true, strictSide: false, create: tweakTooltipView } : null;
    },
    provide: (f) => showTooltip.from(f),
});

// ---- completion: adapt the captured Monaco provider to a CM6 source -----
function cmCompletionSource(context) {
    if (!completionProvider) return null;
    const pos = context.pos;
    const line = context.state.doc.lineAt(pos);
    const column = pos - line.from + 1; // 1-based, like Monaco
    const before = line.text.slice(0, column - 1);
    const word = (before.match(/[A-Za-z0-9_]*$/) || [''])[0];
    const afterDot = /[.:]\s*[A-Za-z0-9_]*$/.test(before);   // '.' fields/statics, ':' Lua methods

    // Don't pop on every keystroke with no context.
    if (!context.explicit && !word && !afterDot) return null;

    const fakeModel = {
        getValue: () => context.state.doc.toString(),
        getLineContent: (ln) => { try { return context.state.doc.line(ln).text; } catch (e) { return ''; } },
        getWordUntilPosition: () => ({ word, startColumn: column - word.length, endColumn: column }),
    };
    const res = completionProvider.provideCompletionItems(fakeModel, { lineNumber: line.number, column });
    if (!res || !res.suggestions || !res.suggestions.length) return null;

    const from = pos - word.length;
    const options = res.suggestions.map((s) => {
        const opt = { label: s.label, type: s.kind || 'text', detail: s.detail };
        if (s.insertTextRules && /\$/.test(s.insertText || '')) opt.apply = snippet(toCMSnippet(s.insertText));
        else opt.apply = s.insertText || s.label;
        return opt;
    });
    return { from, options, validFor: /[A-Za-z0-9_]*$/ };
}

function buildExtensions() {
    return [
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightActiveLine(),
        highlightSpecialChars(),
        history(),
        drawSelection(),
        indentOnInput(),
        bracketMatching(),
        closeBrackets(),
        buildLanguage(),
        syntaxHighlighting(highlightStyle),
        autocompletion({ override: [cmCompletionSource], activateOnTyping: true }),
        numberTweakField,
        lintGutter(),
        theme,
        EditorState.tabSize.of(4),
        keymap.of([
            { key: 'Mod-Enter', run: () => { if (runCommand) runCommand(); return true; } },
            ...closeBracketsKeymap,
            ...defaultKeymap,
            ...historyKeymap,
            ...completionKeymap,
            ...lintKeymap,
            indentWithTab,
        ]),
        EditorView.updateListener.of((u) => {
            if (u.docChanged && activeModel) {
                activeModel._content = u.state.doc.toString();
                for (const cb of activeModel._listeners.slice()) cb();
            }
        }),
    ];
}

function ensureExtensions() {
    if (!sharedExtensions) sharedExtensions = buildExtensions();
}

// ---- markers -> CM6 lint diagnostics -----------------------------------
function applyMarkers(model) {
    if (!view || model !== activeModel) return;
    const doc = view.state.doc;
    const diags = (model._markers || []).map((mk) => {
        const ln = Math.max(1, Math.min(mk.startLineNumber || 1, doc.lines));
        const line = doc.line(ln);
        let from = Math.min(line.from + Math.max(0, (mk.startColumn || 1) - 1), doc.length);
        let to = Math.min(line.from + Math.max(0, (mk.endColumn || 1) - 1), doc.length);
        if (to <= from) to = Math.min(from + 1, doc.length);
        return { from, to, severity: 'error', message: mk.message || '' };
    });
    try { view.dispatch(setDiagnostics(view.state, diags)); } catch (e) { /* lint field absent: ignore */ }
}

// ---- model shim --------------------------------------------------------
function createModel(content) {
    ensureExtensions();
    const model = {
        _content: content,
        _listeners: [],
        _markers: [],
        _state: EditorState.create({ doc: content, extensions: sharedExtensions }),
        getValue() { return (this === activeModel && view) ? view.state.doc.toString() : this._content; },
        onDidChangeContent(cb) { this._listeners.push(cb); },
        dispose() { this._listeners.length = 0; },
    };
    return model;
}

function setModel(model) {
    if (!view || !model) return;
    if (activeModel) {
        activeModel._state = view.state;
        activeModel._content = view.state.doc.toString();
    }
    activeModel = model;
    view.setState(model._state);
    applyMarkers(model);
}

// ---- editor shim -------------------------------------------------------
function create(el) {
    ensureExtensions();
    view = new EditorView({
        state: EditorState.create({ doc: '', extensions: sharedExtensions }),
        parent: el,
    });
    window.__cmView = view;  // debug/testing hook
    editorApi = {
        setModel,
        focus() { view.focus(); },
        getSelection() { return view.state.selection.main; },
        executeEdits(_source, edits) {
            const e = edits && edits[0];
            if (!e) return;
            const sel = view.state.selection.main;
            const text = e.text || '';
            view.dispatch({
                changes: { from: sel.from, to: sel.to, insert: text },
                selection: { anchor: sel.from + text.length },
            });
            view.focus();
        },
        addCommand(_combo, fn) { runCommand = fn; },
        // layout()/dispose() etc. are no-ops under CM6 (auto-layout via CSS).
        layout() {},
    };
    return editorApi;
}

// ---- Monaco-compatible global ------------------------------------------
window.monaco = {
    editor: {
        create,
        createModel,
        setModelMarkers(model, _owner, markers) {
            if (!model) return;
            model._markers = markers || [];
            applyMarkers(model);
        },
        defineTheme() { /* theme is baked into the CM6 setup */ },
    },
    languages: {
        register() {},
        setMonarchTokensProvider(_id, def) { monarchDef = def; },
        setLanguageConfiguration() {},
        registerCompletionItemProvider(_id, provider) { completionProvider = provider; },
        CompletionItemKind: {
            Function: 'function', Constant: 'constant', Constructor: 'class',
            Field: 'property', Method: 'method', Variable: 'variable',
            Keyword: 'keyword', Property: 'property',
        },
        CompletionItemInsertTextRule: { InsertAsSnippet: 1 },
    },
    MarkerSeverity: { Error: 'error', Warning: 'warning', Info: 'info' },
    KeyMod: { CtrlCmd: 2048, Shift: 1024, Alt: 512, WinCtrl: 256 },
    KeyCode: { Enter: 3 },
};

// Signal sketch-ui.js that the editor backend is ready.
if (typeof window.__cmResolve === 'function') window.__cmResolve();
