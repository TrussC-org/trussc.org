// TrussC Addons - Registry browser
// Fetches registry.json from trussc-addons (gh-pages) and renders cards.

const REGISTRY_URLS = [
    'https://raw.githubusercontent.com/TrussC-org/trussc-addons/gh-pages/registry.json',
    'https://trussc-org.github.io/trussc-addons/registry.json'
];

// i18n strings — injected per page via window.ADDONS_I18N.
const DEFAULT_I18N = {
    loading: 'Loading addons...',
    errorTitle: 'Could not load addon registry',
    errorBody: 'Please check your network connection and try again.',
    emptyResult: 'No addons match your filters.',
    countLabel: (n, total) => `${n} / ${total} addons`,
    lastUpdated: 'Last updated',
    searchPlaceholder: 'Search by name, description, keyword...',
    filterAll: 'All',
    filterBundled: 'Bundled',
    filterCommunity: 'Community',
    bundledTag: 'Bundled',
    communityTag: 'Community',
    licenseUnknown: 'Unknown',
    platformsNotDeclared: 'Platforms: not declared',
    author: 'Author',
    version: 'Version',
    license: 'License',
    trusscVersion: 'TrussC version',
    dependencies: 'Dependencies',
    keywords: 'Keywords',
    longDescription: 'Description',
    sourceLink: 'Source',
    demoLink: 'Demo',
    detailsToggleOpen: 'Details',
    detailsToggleClose: 'Hide details',
    descMissing: 'No description provided.'
};

let I18N = Object.assign({}, DEFAULT_I18N, window.ADDONS_I18N || {});

let ALL_ADDONS = [];
let LAST_UPDATED = '';
let FILTER_STATE = {
    query: '',
    bundle: 'all',   // 'all' | 'bundled' | 'community'
    platform: 'all'  // 'all' | platform key
};

const PLATFORM_LABELS = {
    macos: 'macOS',
    win: 'Windows',
    linux: 'Linux',
    web: 'Web',
    android: 'Android',
    ios: 'iOS'
};

document.addEventListener('DOMContentLoaded', () => {
    initFilters();
    loadRegistry();
});

async function loadRegistry() {
    const grid = document.getElementById('addons-grid');
    const status = document.getElementById('addons-status');

    let data = null;
    let lastErr = null;

    for (const url of REGISTRY_URLS) {
        try {
            const res = await fetch(url, { cache: 'no-cache' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            data = await res.json();
            break;
        } catch (err) {
            lastErr = err;
        }
    }

    if (!data) {
        showError(lastErr);
        return;
    }

    ALL_ADDONS = Array.isArray(data.addons) ? data.addons : [];
    LAST_UPDATED = data.last_updated || '';

    // Collect distinct platforms for filter
    populatePlatformFilter(ALL_ADDONS);

    // Hide status, render
    if (status) status.style.display = 'none';
    if (grid) grid.style.display = 'grid';

    renderMeta();
    render();
}

function showError(err) {
    const status = document.getElementById('addons-status');
    if (!status) return;
    status.className = 'addons-status error';
    status.innerHTML = `
        <p><strong>${escapeHtml(I18N.errorTitle)}</strong></p>
        <p>${escapeHtml(I18N.errorBody)}</p>
        ${err ? `<p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--color-text-subtle);margin-top:1rem;">${escapeHtml(String(err))}</p>` : ''}
    `;
}

function initFilters() {
    const search = document.getElementById('addons-search');
    if (search) {
        search.placeholder = I18N.searchPlaceholder;
        search.addEventListener('input', (e) => {
            FILTER_STATE.query = e.target.value.trim().toLowerCase();
            render();
        });
    }

    const filterGroup = document.getElementById('addons-bundle-filter');
    if (filterGroup) {
        filterGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('.addons-filter-btn');
            if (!btn) return;
            const value = btn.dataset.value;
            FILTER_STATE.bundle = value;
            filterGroup.querySelectorAll('.addons-filter-btn').forEach(b => {
                b.classList.toggle('active', b === btn);
            });
            render();
        });
    }

    const platformGroup = document.getElementById('addons-platform-filter');
    if (platformGroup) {
        platformGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('.addons-filter-btn');
            if (!btn) return;
            FILTER_STATE.platform = btn.dataset.value;
            platformGroup.querySelectorAll('.addons-filter-btn').forEach(b => {
                b.classList.toggle('active', b === btn);
            });
            render();
        });
    }
}

function populatePlatformFilter(addons) {
    const group = document.getElementById('addons-platform-filter');
    if (!group) return;

    const platforms = new Set();
    addons.forEach(a => (a.platforms || []).forEach(p => platforms.add(p)));

    // Keep order from PLATFORM_LABELS where possible, then any extras
    const ordered = Object.keys(PLATFORM_LABELS).filter(p => platforms.has(p));
    const extras = [...platforms].filter(p => !PLATFORM_LABELS[p]);

    group.innerHTML = `<button class="addons-filter-btn active" data-value="all">${escapeHtml(I18N.filterAll)}</button>`;
    [...ordered, ...extras].forEach(p => {
        const label = PLATFORM_LABELS[p] || p;
        group.insertAdjacentHTML('beforeend',
            `<button class="addons-filter-btn" data-value="${escapeAttr(p)}">${escapeHtml(label)}</button>`);
    });
}

function renderMeta() {
    const meta = document.getElementById('addons-meta');
    if (!meta) return;
    let txt = '';
    if (LAST_UPDATED) {
        const d = new Date(LAST_UPDATED);
        if (!Number.isNaN(d.getTime())) {
            txt = `${I18N.lastUpdated}: ${d.toLocaleString()}`;
        }
    }
    meta.textContent = txt;
}

function render() {
    const grid = document.getElementById('addons-grid');
    const empty = document.getElementById('addons-empty');
    const countEl = document.getElementById('addons-count');
    if (!grid) return;

    const filtered = ALL_ADDONS.filter(matchesFilter);

    if (countEl) {
        countEl.textContent = I18N.countLabel(filtered.length, ALL_ADDONS.length);
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        if (empty) {
            empty.style.display = 'block';
            empty.textContent = I18N.emptyResult;
        }
        return;
    }

    if (empty) empty.style.display = 'none';
    grid.innerHTML = filtered.map(renderCard).join('');

    // Attach detail toggle handlers
    grid.querySelectorAll('.addon-card').forEach(card => {
        const toggleBtn = card.querySelector('.addon-toggle-details');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                card.classList.toggle('expanded');
                toggleBtn.textContent = card.classList.contains('expanded')
                    ? I18N.detailsToggleClose
                    : I18N.detailsToggleOpen;
            });
        }
    });
}

function matchesFilter(a) {
    // bundle/community filter
    if (FILTER_STATE.bundle === 'bundled' && !a.bundled) return false;
    if (FILTER_STATE.bundle === 'community' && a.bundled) return false;

    // platform filter
    if (FILTER_STATE.platform !== 'all') {
        if (!(a.platforms || []).includes(FILTER_STATE.platform)) return false;
    }

    // text query
    if (FILTER_STATE.query) {
        const q = FILTER_STATE.query;
        const haystack = [
            a.name,
            a.owner,
            a.description,
            a.author,
            ...(a.keywords || [])
        ].filter(Boolean).join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
    }
    return true;
}

function renderCard(a) {
    const displayName = a.bundled
        ? a.name
        : `<span class="addon-owner">${escapeHtml(a.owner || '')}/</span>${escapeHtml(a.name)}`;

    const tag = a.bundled
        ? `<span class="addon-tag addon-tag-bundled">${escapeHtml(I18N.bundledTag)}</span>`
        : `<span class="addon-tag addon-tag-community">${escapeHtml(I18N.communityTag)}</span>`;

    const license = (a.license && a.license.trim()) ? a.license : I18N.licenseUnknown;

    const platforms = (a.platforms && a.platforms.length > 0)
        ? a.platforms.map(p => `<span class="addon-badge addon-badge-platform">${escapeHtml(PLATFORM_LABELS[p] || p)}</span>`).join('')
        : `<span class="addon-badge addon-badge-platform empty">${escapeHtml(I18N.platformsNotDeclared)}</span>`;

    const thumb = a.screenshot
        ? `<img src="${escapeAttr(a.screenshot)}" alt="${escapeAttr(a.name)} screenshot" loading="lazy" onerror="this.style.display='none';this.parentNode.classList.add('addon-thumb-failed');">`
        : `<div class="addon-thumb-placeholder">${escapeHtml(a.name)}</div>`;

    const description = (a.description && a.description.trim())
        ? `<p class="addon-description">${escapeHtml(a.description)}</p>`
        : `<p class="addon-description empty">${escapeHtml(I18N.descMissing)}</p>`;

    const author = a.author ? `<span class="addon-author" title="${escapeAttr(a.author)}">${escapeHtml(a.author)}</span>` : '<span></span>';
    const version = (a.version && a.version !== 'unknown')
        ? `<span class="addon-version">${escapeHtml(a.version)}</span>`
        : '';

    const demoBtn = a.demo_url
        ? `<a class="addon-btn addon-btn-primary" href="${escapeAttr(a.demo_url)}" target="_blank" rel="noopener">${escapeHtml(I18N.demoLink)}</a>`
        : '';

    const sourceBtn = `
        <a class="addon-btn" href="${escapeAttr(a.url)}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            ${escapeHtml(I18N.sourceLink)}
        </a>`;

    const hasDetails = (a.keywords && a.keywords.length > 0)
        || (a.dependencies && a.dependencies.length > 0)
        || (a.trussc_version && a.trussc_version.trim())
        || (a.latest_tag && a.latest_tag.trim());

    const toggleBtn = hasDetails
        ? `<button class="addon-btn addon-toggle-details" type="button">${escapeHtml(I18N.detailsToggleOpen)}</button>`
        : '';

    return `
        <article class="addon-card">
            <div class="addon-thumb">${thumb}</div>
            <div class="addon-body">
                <div class="addon-header">
                    <h3 class="addon-name">${displayName}</h3>
                    ${tag}
                </div>
                ${description}
                <div class="addon-badges">
                    <span class="addon-badge addon-badge-license">${escapeHtml(license)}</span>
                    ${platforms}
                </div>
                <div class="addon-meta-row">
                    ${author}
                    ${version}
                </div>
                <div class="addon-actions">
                    ${demoBtn}
                    ${sourceBtn}
                    ${toggleBtn}
                </div>
            </div>
            ${hasDetails ? renderDetails(a) : ''}
        </article>
    `;
}

function renderDetails(a) {
    const parts = [];

    if (a.latest_tag && a.latest_tag.trim()) {
        parts.push(`<h4>${escapeHtml(I18N.version)}</h4><ul><li>${escapeHtml(a.latest_tag)}</li></ul>`);
    }

    if (a.trussc_version && a.trussc_version.trim()) {
        parts.push(`<h4>${escapeHtml(I18N.trusscVersion)}</h4><ul><li>${escapeHtml(a.trussc_version)}</li></ul>`);
    }

    if (a.dependencies && a.dependencies.length > 0) {
        const items = a.dependencies.map(d => {
            if (typeof d === 'string') return `<li>${escapeHtml(d)}</li>`;
            const ref = d.tag || d.branch || d.commit || '';
            const refStr = ref ? ` @ ${ref}` : '';
            const label = (d.name || d.url || '') + refStr;
            if (d.url) return `<li><a href="${escapeAttr(d.url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a></li>`;
            return `<li>${escapeHtml(label)}</li>`;
        }).join('');
        parts.push(`<h4>${escapeHtml(I18N.dependencies)}</h4><ul>${items}</ul>`);
    }

    if (a.keywords && a.keywords.length > 0) {
        const kws = a.keywords.map(k => `<span class="addon-keyword">${escapeHtml(k)}</span>`).join('');
        parts.push(`<h4>${escapeHtml(I18N.keywords)}</h4><div class="addon-keywords">${kws}</div>`);
    }

    return `<div class="addon-details">${parts.join('')}</div>`;
}

function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeAttr(s) {
    return escapeHtml(s);
}
