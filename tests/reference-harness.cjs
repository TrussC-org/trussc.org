// Minimal DOM adapter: execute the real page script and its public navigation.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
function render(api, { source = fs.readFileSync(path.join(__dirname, '../reference/reference.js'), 'utf8'), lang = 'en' } = {}) {
    const nodes = Object.fromEntries(['detail', 'sidebar-list', 'search', 'subtitle'].map(id => [id, {
        innerHTML: '', value: '', handlers: {}, addEventListener(event, fn) { this.handlers[event] = fn; }, blur() {},
    }]));
    const window = { REF_LANG: lang, addEventListener() {} };
    vm.runInNewContext(source, {
        TrussCAPI: JSON.parse(JSON.stringify(api)), window, URLSearchParams,
        location: { search: '', hash: '', pathname: '/reference/' },
        history: { replaceState() {} },
        document: { getElementById: id => nodes[id] || null, querySelectorAll: () => [], querySelector: () => null },
    });
    return {
        view(kind, name) { window.navTo(kind, name); return nodes.detail.innerHTML; },
        search(query) { nodes.search.value = query; nodes.search.handlers.input(); return nodes['sidebar-list'].innerHTML; },
    };
}
module.exports = { render };
