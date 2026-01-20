document.addEventListener('DOMContentLoaded', () => {
    // スムーズスクロール用のJavaScript
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000;
                let startTime = null;
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }
                function easeInOutQuad(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
                requestAnimationFrame(animation);
            }
        });
    });

    // マウス追従スポットライト（画面全体対応）
    document.addEventListener('mousemove', e => {
        const x = e.clientX;
        const y = e.clientY;
        // body（全体）にCSS変数をセット
        document.body.style.setProperty('--mouse-x', `${x}px`);
        document.body.style.setProperty('--mouse-y', `${y}px`);
    });

    // スクロールでのカード表示アニメーション
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px'
    });

    // モーダル関連の要素
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const extensionCards = document.querySelectorAll('.extension-card');

    // 既存のカードに対して処理を行う
    extensionCards.forEach((card) => {
        // カードをIntersection Observerの監視対象に追加
        observer.observe(card);

        // クリックイベント追加
        card.addEventListener('click', () => {
            // HTML要素から情報を取得
            const iconSrc = card.querySelector('.card-icon').src;
            const title = card.querySelector('.card-title').textContent;
            const longDescHTML = card.querySelector('.source-long-desc').innerHTML;
            const storeUrl = card.querySelector('.source-store-url').textContent;

            // 取得した情報でモーダルを開く
            openModal(iconSrc, title, longDescHTML, storeUrl);
        });
    });

    // モーダルを開く関数
    function openModal(iconSrc, title, longDescHTML, storeUrl) {
        modalContent.innerHTML = `
            <div class="modal-header">
                <img src="${iconSrc}" alt="${title}" class="modal-icon">
                <h2 class="modal-title">${title}</h2>
            </div>
            <div class="modal-description">${longDescHTML}</div>
            <div class="modal-footer">
                <a href="${storeUrl}" target="_blank" class="store-link">ストアページへ 🚀</a>
                <button class="close-btn">閉じる</button>
            </div>
        `;
        modalOverlay.classList.add('visible');

        modalContent.querySelector('.close-btn').addEventListener('click', closeModal);
    }

    // モーダルを閉じる関数
    function closeModal() {
        modalOverlay.classList.remove('visible');
    }

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
});