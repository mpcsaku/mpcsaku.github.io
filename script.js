const projects = [
    {
        title: "Extension Switcher",
        icon: "icons/01.png",
        shortDesc: "拡張機能のON/OFFを自動化し、ブラウザを常に最適な状態に保つ管理ツール。",
        features: [
            "特定のウェブサイトを開いた時に、必要な拡張機能だけを自動で有効化",
            "作業内容に応じた「プロファイル」で拡張機能群を一括切り替え",
            "ショートカットキーやユニット機能による高度なカスタマイズ"
        ],
        link: "https://chromewebstore.google.com/detail/extension-switcher/obpnepacceoacphgpjbbfngidamameif"
    },
    {
        title: "LinkLasso",
        icon: "icons/02.png",
        shortDesc: "ウェブページ上の大量のリンクを、投げ縄のように一括でキャッチ＆操作。",
        features: [
            "ドラッグで囲んだ範囲内のリンクを一括で抽出",
            "抽出したリンクを「新規タブで開く」「コピー」「ブックマーク」",
            "プロファイルごとにショートカットキーや動作を細かくカスタマイズ"
        ],
        link: "https://chromewebstore.google.com/detail/linklasso/gepenafankighijkdlkebpepejigioph"
    },
    {
        title: "SleepyTab",
        icon: "icons/03.png",
        shortDesc: "動画や音楽を再生中のタブから離れると、自動で再生を一時停止・ミュート。",
        features: [
            "タブに戻ると自動で再生を再開し、ミュートを解除",
            "サイトごとに「ミュートのみ」などの個別設定が可能",
            "意図しない再生によるバッテリー消費や騒音を防止"
        ],
        link: "https://chromewebstore.google.com/detail/sleepytab-video-auto-paus/ifchnnnlgkdbaicoackmiimagdmadaki"
    },
    {
        title: "Videleon",
        icon: "icons/04.png",
        shortDesc: "あらゆる動画サイトで使える、汎用のビデオコントローラー。",
        features: [
            "動画の明るさ、音量、再生速度を直感的に調整",
            "動画の90度回転、左右反転、自由なズーム＆パン操作",
            "指定区間を繰り返し再生するA-Bリピート機能"
        ],
        link: "https://chromewebstore.google.com/detail/videleon-easy-video-contr/laedaellhidnobdcahgimcgpclidcokf"
    },
    {
        title: "TubeDeck",
        icon: "icons/05.png",
        shortDesc: "YouTubeに20以上の機能を追加する、究極の多機能ツールキット。",
        features: [
            "再生速度・音量・明るさ等の高度なコントロール機能",
            "動画内の文字をコピー・検索できるOCR機能",
            "コメントのキーワード検索やフィルタリング、右側表示"
        ],
        link: "https://chromewebstore.google.com/detail/tubedeck/kmcbggipaohgcgkfcmkpdcopkabfagea"
    },
    {
        title: "HatoNavi YouTube History",
        icon: "icons/06.png",
        shortDesc: "YouTubeの公式履歴とは別に、あなただけの視聴データベースを構築。",
        features: [
            "動画の途中離脱位置を記憶するレジューム再生",
            "自由な「タグ」や「メモ」を動画に付けて情報を整理",
            "高度な検索・フィルター機能で見たい動画をすぐ発見"
        ],
        link: "https://chromewebstore.google.com/detail/hatonavi-youtube-history/adagmjnbcfgpagokcfpgpdpdkhhmmdpn"
    },
    {
        title: "YouTube Poco Poco",
        icon: "icons/07.png",
        shortDesc: "YouTubeのコメントを、ニコニコ動画のように画面上に流して楽しむ。",
        features: [
            "4つの表示モード（Bubble, Flow, Ticker, Stack）",
            "フォント、表示速度、表示上限などを自由にカスタマイズ",
            "動画停止に連動したコメントの一時停止をサポート"
        ],
        link: "https://chromewebstore.google.com/detail/youtube-poco-poco/lobhbhggpgdekoojnaokbkbemhendmap"
    },
    {
        title: "Comment Analyzer",
        icon: "icons/08.png",
        shortDesc: "YouTubeのコメント欄をパワフルに分析するための専門ツール。",
        features: [
            "数万件のコメントも高速で一括取得",
            "キーワード検索、投稿者、リプライ有無など多彩なフィルタリング",
            "分析結果をHTML, JSON, CSV形式でエクスポート"
        ],
        link: "https://chromewebstore.google.com/detail/youtube-comment-analyzer/lbcojlmcnjhhemefblapdmakhcdlacdn"
    },
    {
        title: "SummaryMonkey",
        icon: "icons/09.png",
        shortDesc: "YouTube動画の情報を抽出し、ワンクリックでAIに要約を依頼。",
        features: [
            "字幕やコメント、概要欄など必要な情報だけを選択してAIに送信",
            "プロファイル機能で抽出パターンを保存・切替",
            "ショートカットキー一発でAIへの送信までを自動化"
        ],
        link: "https://chromewebstore.google.com/detail/summarymonkey-youtube-sum/hgfhbmplnimakbaemjicpamfhmldielm"
    },
    {
        title: "AIChatDelete",
        icon: "icons/10.png",
        shortDesc: "主要AIチャットサービスの会話履歴を、まとめて管理・整理するツール。",
        features: [
            "複数履歴の選択と一括削除",
            "重要な会話を誤操作から守る保護機能",
            "ChatGPT, Gemini, Claude, DeepSeekに対応"
        ],
        link: "https://chromewebstore.google.com/detail/ai-chat-delete/genlcmjjklkkmclbgfbpagmehcnaphbo"
    },
    {
        title: "Dev's Quick Reload",
        icon: "icons/11.png",
        shortDesc: "Chrome拡張機能開発者向けの、超高速リロードツール。",
        features: [
            "開発中の拡張機能を複数選択してワンクリックで一括リロード",
            "ショートカットキー（デフォルト: Alt+R）でさらに高速な開発サイクルを実現",
            "拡張機能のリロードと同時に、アクティブなタブも再読み込み可能"
        ],
        link: "https://chromewebstore.google.com/detail/devs-quick-reload-extensi/fecipjelkpijfjkpfknmgemmihkdbmfe"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projectGrid');
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-button');

    projects.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="card-header">
                <img src="${p.icon}" alt="${p.title}" class="card-icon">
                <h3 class="extension-title">${p.title}</h3>
            </div>
            <p class="short-desc">${p.shortDesc}</p>
        `;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });

        card.addEventListener('click', () => {
            modalBody.innerHTML = `
                <div class="modal-header-info">
                    <img src="${p.icon}" alt="${p.title}" class="modal-icon">
                    <h2 class="modal-title">${p.title}</h2>
                </div>
                <p class="modal-description">${p.shortDesc}</p>
                <ul class="feature-list">
                    ${p.features.map(f => `<li class="feature-item"><span>${f}</span></li>`).join('')}
                </ul>
                <a href="${p.link}" class="store-link" target="_blank">Chromeウェブストアで見る</a>
            `;
            modal.classList.add('show');
        });

        grid.appendChild(card);
    });

    closeBtn.onclick = () => modal.classList.remove('show');
    window.onclick = (e) => { if (e.target == modal) modal.classList.remove('show'); };

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
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
    }
});
