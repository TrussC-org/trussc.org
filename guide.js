// Guide Page - JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initApiCategoryToggle();
    initApiSearch();
});

/**
 * APIカテゴリの折りたたみ
 */
function initApiCategoryToggle() {
    const titles = document.querySelectorAll('.api-category-title');

    titles.forEach(title => {
        title.addEventListener('click', () => {
            const category = title.closest('.api-category');
            category.classList.toggle('collapsed');
        });
    });
}

/**
 * API検索機能
 */
function initApiSearch() {
    const searchInput = document.getElementById('api-search');
    if (!searchInput) return;

    const tables = document.querySelectorAll('.api-table');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();

        tables.forEach(table => {
            const rows = table.querySelectorAll('tbody tr');
            const category = table.closest('.api-category');
            let hasVisible = false;

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                const matches = query === '' || text.includes(query);

                row.classList.toggle('hidden', !matches);
                row.classList.toggle('highlight', query !== '' && matches);

                if (matches) hasVisible = true;
            });

            // 検索中はカテゴリを展開
            if (query !== '') {
                category.classList.remove('collapsed');
            }

            // マッチがないカテゴリは非表示にしない（折りたたまれた状態で表示）
        });
    });

    // Escキーで検索クリア
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    });
}
