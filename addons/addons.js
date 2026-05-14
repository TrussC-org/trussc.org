// TrussC Addons - Registry browser
// Fetches registry.json from trussc-addons (gh-pages) and renders cards.

const REGISTRY_URLS = [
    'https://raw.githubusercontent.com/TrussC-org/trussc-addons/gh-pages/registry.json',
    'https://trussc-org.github.io/trussc-addons/registry.json'
];

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
    licenseUnknown: 'Unknown',
    platformsNotDeclared: 'No platforms declared',
    author: 'Author',
    version: 'Version',
    license: 'License',
    trusscVersion: 'TrussC version',
    category: 'Category',
    dependencies: 'Dependencies',
    keywords: 'Keywords',
    sourceLink: 'Source',
    demoLink: 'Demo',
    detailsToggleOpen: 'More',
    detailsToggleClose: 'Less',
    descMissing: '',
    platformLabels: {
        macos: 'macOS',
        win: 'Windows',
        linux: 'Linux',
        web: 'Web',
        android: 'Android',
        ios: 'iOS'
    },
    categoryLabels: {
        '3d': '3D',
        'ai': 'AI',
        'algorithms': 'Algorithms',
        'animation': 'Animation',
        'bridges': 'Bridges',
        'computer-vision': 'Computer Vision',
        'game': 'Game',
        'graphics': 'Graphics',
        'gui': 'GUI',
        'hardware': 'Hardware',
        'machine-learning': 'ML',
        'network': 'Network',
        'physics': 'Physics',
        'sound': 'Sound',
        'typography': 'Typography',
        'utilities': 'Utilities',
        'video': 'Video',
        'web': 'Web',
        'misc': 'Misc'
    }
};

const I18N = Object.assign({}, DEFAULT_I18N, window.ADDONS_I18N || {});
const PLATFORM_LABELS = I18N.platformLabels || DEFAULT_I18N.platformLabels;
const CATEGORY_LABELS = I18N.categoryLabels || DEFAULT_I18N.categoryLabels;
const CATEGORY_ORDER = Object.keys(DEFAULT_I18N.categoryLabels);

let ALL_ADDONS = [];
let LAST_UPDATED = '';
const FILTER_STATE = {
    query: '',
    bundle: 'all',
    category: 'all',
    platform: 'all'
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

    populateCategoryFilter(ALL_ADDONS);
    populatePlatformFilter(ALL_ADDONS);

    if (status) status.style.display = 'none';
    if (grid) grid.style.display = 'block';

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

    bindFilterGroup('addons-bundle-filter', 'bundle');
    bindFilterGroup('addons-category-filter', 'category');
    bindFilterGroup('addons-platform-filter', 'platform');
}

function bindFilterGroup(id, stateKey) {
    const group = document.getElementById(id);
    if (!group) return;
    group.addEventListener('click', (e) => {
        const btn = e.target.closest('.addons-filter-btn');
        if (!btn) return;
        FILTER_STATE[stateKey] = btn.dataset.value;
        group.querySelectorAll('.addons-filter-btn').forEach(b => {
            b.classList.toggle('active', b === btn);
        });
        render();
    });
}

function populateCategoryFilter(addons) {
    const group = document.getElementById('addons-category-filter');
    if (!group) return;

    const present = new Set();
    addons.forEach(a => { if (a.category) present.add(a.category); });

    const ordered = CATEGORY_ORDER.filter(c => present.has(c));
    const extras = [...present].filter(c => !CATEGORY_ORDER.includes(c));

    group.innerHTML = `<button class="addons-filter-btn active" data-value="all">${escapeHtml(I18N.filterAll)}</button>`;
    [...ordered, ...extras].forEach(c => {
        const label = CATEGORY_LABELS[c] || c;
        group.insertAdjacentHTML('beforeend',
            `<button class="addons-filter-btn" data-value="${escapeAttr(c)}">${escapeHtml(label)}</button>`);
    });
}

function populatePlatformFilter(addons) {
    const group = document.getElementById('addons-platform-filter');
    if (!group) return;

    const platforms = new Set();
    addons.forEach(a => (a.platforms || []).forEach(p => platforms.add(p)));

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

    grid.querySelectorAll('.addon-card').forEach(card => {
        const toggleBtn = card.querySelector('.addon-toggle-details');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                card.classList.toggle('expanded');
                toggleBtn.setAttribute('aria-expanded',
                    card.classList.contains('expanded') ? 'true' : 'false');
                toggleBtn.title = card.classList.contains('expanded')
                    ? I18N.detailsToggleClose
                    : I18N.detailsToggleOpen;
            });
        }
    });

    // Re-init masonry: fresh cards need to be observed and column
    // assignments reset (filter changes can produce a different card set).
    initMasonry();
}

function matchesFilter(a) {
    if (FILTER_STATE.bundle === 'bundled' && !a.bundled) return false;
    if (FILTER_STATE.bundle === 'community' && a.bundled) return false;

    if (FILTER_STATE.category !== 'all') {
        if ((a.category || 'misc') !== FILTER_STATE.category) return false;
    }

    if (FILTER_STATE.platform !== 'all') {
        if (!(a.platforms || []).includes(FILTER_STATE.platform)) return false;
    }

    if (FILTER_STATE.query) {
        const q = FILTER_STATE.query;
        const haystack = [
            a.name,
            a.owner,
            a.description,
            a.author,
            a.category,
            ...(a.keywords || [])
        ].filter(Boolean).join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
    }
    return true;
}

function renderCard(a) {
    const hasThumb = !!a.screenshot;
    const cardClass = hasThumb ? 'addon-card has-thumb' : 'addon-card';

    const displayName = a.bundled
        ? escapeHtml(a.name)
        : `<span class="addon-owner">${escapeHtml(a.owner || '')}/</span>${escapeHtml(a.name)}`;

    const categoryLabel = CATEGORY_LABELS[a.category] || a.category || '';
    const categoryBadge = categoryLabel
        ? `<span class="addon-category" data-category="${escapeAttr(a.category || 'misc')}">${escapeHtml(categoryLabel)}</span>`
        : '';

    const license = (a.license && a.license.trim()) ? a.license : I18N.licenseUnknown;

    const thumbBlock = hasThumb
        ? `<div class="addon-thumb">
              <img src="${escapeAttr(a.screenshot)}"
                   alt="${escapeAttr(a.name)} screenshot"
                   loading="lazy"
                   onerror="this.closest('.addon-card').classList.remove('has-thumb');this.parentNode.remove();">
           </div>`
        : '';

    const description = (a.description && a.description.trim())
        ? `<p class="addon-description">${escapeHtml(a.description)}</p>`
        : '';

    const demoBtn = a.demo_url
        ? `<a class="addon-iconbtn addon-iconbtn-primary" href="${escapeAttr(a.demo_url)}" target="_blank" rel="noopener" title="${escapeAttr(I18N.demoLink)}" aria-label="${escapeAttr(I18N.demoLink)}">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z"/>
              </svg>
           </a>`
        : '';

    const sourceBtn = `
        <a class="addon-iconbtn" href="${escapeAttr(a.url)}" target="_blank" rel="noopener" title="${escapeAttr(I18N.sourceLink)}" aria-label="${escapeAttr(I18N.sourceLink)}">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
        </a>`;

    const hasDetails =
        (a.author && a.author.trim()) ||
        (a.version && a.version.trim() && a.version !== 'unknown') ||
        (a.platforms && a.platforms.length > 0) ||
        (a.keywords && a.keywords.length > 0) ||
        (a.dependencies && a.dependencies.length > 0) ||
        (a.trussc_version && a.trussc_version.trim()) ||
        (a.latest_tag && a.latest_tag.trim());

    const toggleBtn = hasDetails
        ? `<button class="addon-iconbtn addon-toggle-details" type="button" title="${escapeAttr(I18N.detailsToggleOpen)}" aria-label="${escapeAttr(I18N.detailsToggleOpen)}" aria-expanded="false">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"/>
              </svg>
           </button>`
        : '';

    return `
        <article class="${cardClass}">
            ${thumbBlock}
            <div class="addon-body">
                <div class="addon-header">
                    <h3 class="addon-name">${displayName}</h3>
                    ${categoryBadge}
                </div>
                ${description}
                <div class="addon-footer">
                    <span class="addon-license">${escapeHtml(license)}</span>
                    <div class="addon-actions">
                        ${demoBtn}
                        ${sourceBtn}
                        ${toggleBtn}
                    </div>
                </div>
            </div>
            ${hasDetails ? renderDetails(a) : ''}
        </article>
    `;
}

function renderDetails(a) {
    const parts = [];

    if (a.author && a.author.trim()) {
        parts.push(`<div class="addon-detail-row"><span class="addon-detail-key">${escapeHtml(I18N.author)}</span><span class="addon-detail-val">${escapeHtml(a.author)}</span></div>`);
    }

    if (a.version && a.version.trim() && a.version !== 'unknown') {
        parts.push(`<div class="addon-detail-row"><span class="addon-detail-key">${escapeHtml(I18N.version)}</span><span class="addon-detail-val">${escapeHtml(a.version)}</span></div>`);
    } else if (a.latest_tag && a.latest_tag.trim()) {
        parts.push(`<div class="addon-detail-row"><span class="addon-detail-key">${escapeHtml(I18N.version)}</span><span class="addon-detail-val">${escapeHtml(a.latest_tag)}</span></div>`);
    }

    if (a.trussc_version && a.trussc_version.trim()) {
        parts.push(`<div class="addon-detail-row"><span class="addon-detail-key">${escapeHtml(I18N.trusscVersion)}</span><span class="addon-detail-val">${escapeHtml(a.trussc_version)}</span></div>`);
    }

    if (a.platforms && a.platforms.length > 0) {
        const badges = a.platforms.map(p =>
            `<span class="addon-pill">${escapeHtml(PLATFORM_LABELS[p] || p)}</span>`).join('');
        parts.push(`<div class="addon-detail-row"><span class="addon-detail-key">Platforms</span><div class="addon-detail-val addon-pills">${badges}</div></div>`);
    }

    if (a.keywords && a.keywords.length > 0) {
        const kws = a.keywords.map(k => `<span class="addon-pill">${escapeHtml(k)}</span>`).join('');
        parts.push(`<div class="addon-detail-row"><span class="addon-detail-key">${escapeHtml(I18N.keywords)}</span><div class="addon-detail-val addon-pills">${kws}</div></div>`);
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
        parts.push(`<div class="addon-detail-row"><span class="addon-detail-key">${escapeHtml(I18N.dependencies)}</span><ul class="addon-detail-val addon-deplist">${items}</ul></div>`);
    }

    return `<div class="addon-details">${parts.join('')}</div>`;
}

// ============================================================================
// Masonry layout
// Sticky column assignment: once a card is placed in a column, it stays
// there until the column count changes (resize). Expanding a card grows it
// in place and pushes the cards below it in the same column down — cards in
// other columns don't move.
// ============================================================================

const MASONRY = {
    columnAssignments: new WeakMap(),
    colCount: 0,
    colWidth: 0,
    gap: 12,
    targetColWidth: 200,
    resizeObserver: null,
    cards: [],
    pending: false
};

function readMasonryConfig() {
    const cs = getComputedStyle(document.documentElement);
    const w = parseInt(cs.getPropertyValue('--masonry-col-width'), 10);
    const g = parseInt(cs.getPropertyValue('--masonry-gap'), 10);
    MASONRY.targetColWidth = Number.isFinite(w) && w > 0 ? w : 200;
    MASONRY.gap = Number.isFinite(g) && g > 0 ? g : 12;
}

function initMasonry() {
    const grid = document.getElementById('addons-grid');
    if (!grid) return;

    readMasonryConfig();

    // (Re)create the ResizeObserver. Each call to render() recreates the
    // cards (innerHTML replacement), so we observe the fresh set.
    if (MASONRY.resizeObserver) MASONRY.resizeObserver.disconnect();
    MASONRY.resizeObserver = new ResizeObserver(() => scheduleRelayout(grid));

    MASONRY.cards = Array.from(grid.querySelectorAll('.addon-card'));
    MASONRY.cards.forEach(c => MASONRY.resizeObserver.observe(c));

    // Observe the grid too — picks up viewport changes that don't fire
    // window 'resize' (e.g. browser chrome appearing/disappearing).
    MASONRY.resizeObserver.observe(grid);

    // Force a column re-assignment on this fresh layout.
    MASONRY.colCount = 0;
    relayoutMasonry(grid);
}

function scheduleRelayout(grid) {
    if (MASONRY.pending) return;
    MASONRY.pending = true;
    requestAnimationFrame(() => {
        MASONRY.pending = false;
        relayoutMasonry(grid);
    });
}

function relayoutMasonry(grid) {
    const cards = MASONRY.cards;
    if (!cards.length) {
        grid.style.height = '';
        return;
    }

    const containerWidth = grid.clientWidth;
    if (containerWidth <= 0) return;

    readMasonryConfig();
    const gap = MASONRY.gap;
    const target = MASONRY.targetColWidth;

    const colCount = Math.max(1, Math.floor((containerWidth + gap) / (target + gap)));
    const colWidth = (containerWidth - gap * (colCount - 1)) / colCount;

    const colCountChanged = MASONRY.colCount !== colCount;
    MASONRY.colCount = colCount;
    MASONRY.colWidth = colWidth;

    // Set width on each card (always — column count may have changed even
    // if assignment stays).
    cards.forEach(card => { card.style.width = colWidth + 'px'; });

    // Reassign columns on count change or first layout.
    if (colCountChanged) {
        const heights = new Array(colCount).fill(0);
        cards.forEach(card => {
            let shortest = 0;
            for (let i = 1; i < colCount; i++) {
                if (heights[i] < heights[shortest]) shortest = i;
            }
            MASONRY.columnAssignments.set(card, shortest);
            heights[shortest] += card.offsetHeight + gap;
        });
    }

    // Lay out using existing assignments.
    const colHeights = new Array(colCount).fill(0);
    cards.forEach(card => {
        let col = MASONRY.columnAssignments.get(card);
        if (col == null || col >= colCount) {
            // Safety: place into shortest column.
            col = 0;
            for (let i = 1; i < colCount; i++) {
                if (colHeights[i] < colHeights[col]) col = i;
            }
            MASONRY.columnAssignments.set(card, col);
        }
        card.style.left = col * (colWidth + gap) + 'px';
        card.style.top = colHeights[col] + 'px';
        colHeights[col] += card.offsetHeight + gap;
    });

    grid.style.height = (Math.max(...colHeights) - gap) + 'px';
}

window.addEventListener('resize', () => {
    const grid = document.getElementById('addons-grid');
    if (grid) scheduleRelayout(grid);
});

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
