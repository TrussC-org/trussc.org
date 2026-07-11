// cm-editor.js — CodeMirror 6 backend exposed through a minimal Monaco-compatible
// shim, so the rest of sketch-ui.js keeps using `monaco.*` / `editor.*` unchanged.
//
// Why: Monaco is multi-MB and chokes on low-power devices (Chromebook). CM6 is
// tiny and touch-friendly. We only reimplement the slice of the Monaco API that
// sketch-ui.js actually uses (createModel / setModel / markers / completion /
// a custom language + theme + Cmd-Enter).
//
// Loaded as an ES module; resolves window.__cmReady once window.monaco is ready.

import { EditorState } from "@codemirror/state";
import {
    EditorView, keymap, lineNumbers, highlightActiveLine,
    highlightActiveLineGutter, drawSelection, highlightSpecialChars
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
}, { dark: true });

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
