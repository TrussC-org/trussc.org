// TrussC Landing Page - JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // モバイルナビゲーション
    initMobileNav();

    // コードタブ切り替え
    initCodeTabs();

    // コピーボタン
    initCopyButtons();

    // スクロールアニメーション
    initScrollAnimations();

    // スムーズスクロール
    initSmoothScroll();
});

/**
 * モバイルナビゲーションの初期化
 */
function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        links.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // ナビリンククリックでメニューを閉じる
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
}

/**
 * コードタブ切り替えの初期化
 */
function initCodeTabs() {
    const tabs = document.querySelectorAll('.code-tab');
    const blocks = document.querySelectorAll('.code-block');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = `code-${tab.dataset.tab}`;

            // タブのアクティブ状態を更新
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // コードブロックの表示を切り替え
            blocks.forEach(block => {
                block.classList.toggle('active', block.id === targetId);
            });
        });
    });
}

/**
 * コードコピーボタンの初期化
 */
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.code-copy');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const codeBlock = button.closest('.code-block');
            const code = codeBlock.querySelector('code');

            if (!code) return;

            try {
                // テキストをクリップボードにコピー
                await navigator.clipboard.writeText(code.textContent);

                // 成功フィードバック
                button.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                `;
                button.style.color = '#22d3ee';

                // 元に戻す
                setTimeout(() => {
                    button.innerHTML = `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                        </svg>
                    `;
                    button.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('コピーに失敗:', err);
            }
        });
    });
}

/**
 * スクロールアニメーションの初期化
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 遅延を付けてアニメーション
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // アニメーション対象の要素を監視
    const animatedElements = document.querySelectorAll(
        '.feature-card, .tech-card, .step, .benefit-item'
    );

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * スムーズスクロールの初期化
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');

            // 空のハッシュはスキップ
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * ナビゲーションの背景変化（スクロール時）
 */
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 11, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 11, 0.8)';
    }

    lastScrollY = scrollY;
}, { passive: true });
