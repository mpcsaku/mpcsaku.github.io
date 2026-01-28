// --- START OF FILE script.js ---

// ブラウザの言語設定を取得
const userLang = navigator.language.startsWith('ja') ? 'ja' : 'en';

// 共通テキストの定義
const i18n = {
    ja: {
        heroSubtitle: "<span>直感を加速させ、日常をハックする。</span><br><span>洗練された機能が、あなたのブラウザを別次元へ。</span>",
        ctaBtn: "コレクションを見る",
        eyecatch: "COLLECTION",
        sectionTitle: "Project Archive",
        footerText: "© 2026 MPCSAKU. Created with Passion.",
        storeBtn: "Chromeウェブストアで見る",
        privacyPolicy: "Privacy Policy"
    },
    en: {
        heroSubtitle: "<span>Accelerate your intuition, hack your daily life.</span><br><span>Sophisticated features take your browser to another dimension.</span>",
        ctaBtn: "Explore Collection",
        eyecatch: "COLLECTION",
        sectionTitle: "Project Archive",
        footerText: "© 2026 MPCSAKU. Created with Passion.",
        storeBtn: "View on Chrome Web Store",
        privacyPolicy: "Privacy Policy"
    }
};

// プライバシーポリシーの本文データ
const privacyContent = {
    ja: {
        title: "プライバシーポリシー",
        body: `
            <div class="policy-text">
                <h3>1. ユーザー情報の収集について</h3>
                <p>当方が公開するChrome拡張機能（以下、本拡張機能）は、ユーザーの個人情報を意図的に収集・送信することはありません。</p>
                <p>機能の実現に必要なデータ（設定値、キャッシュなど）は、ユーザーのローカル環境（Chromeストレージ）にのみ保存され、開発者のサーバーへ送信されることはありません。</p>

                <h3>2. データの利用目的</h3>
                <p>本拡張機能が扱うデータは、以下の目的でのみ使用されます。</p>
                <ul>
                    <li>拡張機能の主要な機能を提供するため</li>
                    <li>ユーザーの設定を保存・適用するため</li>
                </ul>

                <h3>3. Google Analytics等の利用</h3>
                <p>本ウェブサイト（ポートフォリオ）では、アクセス解析のためにGoogle Analyticsを使用する場合がありますが、これにより個人が特定されることはありません。</p>

                <h3>4. 免責事項</h3>
                <p>本拡張機能の利用によって生じた、いかなる損害についても、開発者は責任を負いかねます。自己責任でのご利用をお願いいたします。</p>

                <h3>5. お問い合わせ</h3>
                <p>本ポリシーに関するご質問は、各拡張機能のストアページまたはGitHub等からご連絡ください。</p>
            </div>
        `
    },
    en: {
        title: "Privacy Policy",
        body: `
            <div class="policy-text">
                <h3>1. Collection of User Information</h3>
                <p>The Chrome extensions published by us (hereinafter referred to as "these Extensions") do not intentionally collect or transmit users' personal information.</p>
                <p>Data necessary for functionality (settings, cache, etc.) is stored only in the user's local environment (Chrome Storage) and is not sent to the developer's servers.</p>

                <h3>2. Purpose of Data Use</h3>
                <p>Data handled by these Extensions is used solely for the following purposes:</p>
                <ul>
                    <li>To provide the main features of the extensions</li>
                    <li>To save and apply user settings</li>
                </ul>

                <h3>3. Use of Google Analytics</h3>
                <p>This website (Portfolio) may use Google Analytics for access analysis, but this does not identify individuals.</p>

                <h3>4. Disclaimer</h3>
                <p>The developer assumes no responsibility for any damages caused by the use of these Extensions. Please use them at your own risk.</p>

                <h3>5. Contact</h3>
                <p>If you have any questions regarding this policy, please contact us via the store page of each extension or GitHub.</p>
            </div>
        `
    }
};

const projects = [
    {
        title: "Extension Switcher",
        icon: "icons/01.png",
        link: "https://chromewebstore.google.com/detail/extension-switcher/obpnepacceoacphgpjbbfngidamameif",
        ja: {
            shortDesc: "拡張機能のON/OFFを自動化し、ブラウザを常に最適な状態に保つ管理ツール。",
            features: ["特定のウェブサイトを開いた時に、必要な拡張機能だけを自動で有効化", "作業内容に応じた「プロファイル」で拡張機能群を一括切り替え", "ショートカットキーやユニット機能による高度なカスタマイズ"]
        },
        en: {
            shortDesc: "Automation tool for toggling extensions ON/OFF to keep your browser in an optimal state.",
            features: ["Automatically enable required extensions for specific websites", "Switch groups of extensions with 'Profiles' tailored to your tasks", "High customization with shortcuts and unit functions"]
        }
    },
    {
        title: "LinkLasso",
        icon: "icons/02.png",
        link: "https://chromewebstore.google.com/detail/linklasso/gepenafankighijkdlkebpepejigioph",
        ja: {
            shortDesc: "ウェブページ上の大量のリンクを、投げ縄のように一括でキャッチ＆操作。",
            features: ["ドラッグで囲んだ範囲内のリンクを一括で抽出", "抽出したリンクを「新規タブで開く」「コピー」「ブックマーク」", "プロファイルごとにショートカットキーや動作を細かくカスタマイズ"]
        },
        en: {
            shortDesc: "Batch catch and operate links on a webpage like a lasso.",
            features: ["Extract links within the dragged area at once", "Open in new tabs, copy, or bookmark extracted links", "Fine-tune shortcuts and behaviors for each profile"]
        }
    },
    {
        title: "SleepyTab",
        icon: "icons/03.png",
        link: "https://chromewebstore.google.com/detail/sleepytab-video-auto-paus/ifchnnnlgkdbaicoackmiimagdmadaki",
        ja: {
            shortDesc: "動画や音楽を再生中のタブから離れると、自動で再生を一時停止・ミュート。",
            features: ["タブに戻ると自動で再生を再開し、ミュートを解除", "サイトごとに「ミュートのみ」などの個別設定が可能", "意図しない再生によるバッテリー消費や騒音を防止"]
        },
        en: {
            shortDesc: "Automatically pause or mute tabs playing videos/music when you switch tabs.",
            features: ["Automatically resume and unmute when returning to the tab", "Individual settings like 'Mute only' possible for each site", "Prevent battery drain and noise from unintended playback"]
        }
    },
    {
        title: "Videleon",
        icon: "icons/04.png",
        link: "https://chromewebstore.google.com/detail/videleon-easy-video-contr/laedaellhidnobdcahgimcgpclidcokf",
        ja: {
            shortDesc: "あらゆる動画サイトで使える、汎用のビデオコントローラー。",
            features: ["動画の明るさ、音量、再生速度を直感的に調整", "動画の90度回転、左右反転、自由なズーム＆パン操作", "指定区間を繰り返し再生するA-Bリピート機能"]
        },
        en: {
            shortDesc: "A universal video controller for all video platforms.",
            features: ["Intuitive adjustment of brightness, volume, and playback speed", "90-degree rotation, horizontal flip, and free zoom/pan", "A-B repeat function for looping specific segments"]
        }
    },
    {
        title: "TubeDeck",
        icon: "icons/05.png",
        link: "https://chromewebstore.google.com/detail/tubedeck/kmcbggipaohgcgkfcmkpdcopkabfagea",
        ja: {
            shortDesc: "YouTubeに20以上の機能を追加する、究極の多機能ツールキット。",
            features: ["再生速度・音量・明るさ等の高度なコントロール機能", "動画内の文字をコピー・検索できるOCR機能", "コメントのキーワード検索やフィルタリング、右側表示"]
        },
        en: {
            shortDesc: "The ultimate toolkit adding over 20 features to YouTube.",
            features: ["Advanced controls for speed, volume, and brightness", "OCR function to copy or search text within videos", "Keyword search, filtering, and side-panel display for comments"]
        }
    },
    {
        title: "HatoNavi YouTube History",
        icon: "icons/06.png",
        link: "https://chromewebstore.google.com/detail/hatonavi-youtube-history/adagmjnbcfgpagokcfpgpdpdkhhmmdpn",
        ja: {
            shortDesc: "YouTubeの公式履歴とは別に、あなただけの視聴データベースを構築。",
            features: ["動画の途中離脱位置を記憶するレジューム再生", "自由な「タグ」や「メモ」を動画に付けて情報を整理", "高度な検索・フィルター機能で見たい動画をすぐ発見"]
        },
        en: {
            shortDesc: "Build your own viewing database separate from YouTube history.",
            features: ["Resume playback by remembering the exact leave position", "Organize information with custom tags and notes on videos", "Find videos instantly with advanced search and filters"]
        }
    },
    {
        title: "YouTube Poco Poco",
        icon: "icons/07.png",
        link: "https://chromewebstore.google.com/detail/youtube-poco-poco/lobhbhggpgdekoojnaokbkbemhendmap",
        ja: {
            shortDesc: "YouTubeのコメントを、ニコニコ動画のように画面上に流して楽しむ。",
            features: ["4つの表示モード（Bubble, Flow, Ticker, Stack）", "フォント、表示速度、表示上限などを自由にカスタマイズ", "動画停止に連動したコメントの一時停止をサポート"]
        },
        en: {
            shortDesc: "Enjoy YouTube comments flowing across the screen like Nico Nico Douga.",
            features: ["4 display modes (Bubble, Flow, Ticker, Stack)", "Freely customize fonts, speed, and display limits", "Supports pausing comments in sync with video playback"]
        }
    },
    {
        title: "Comment Analyzer",
        icon: "icons/08.png",
        link: "https://chromewebstore.google.com/detail/youtube-comment-analyzer/lbcojlmcnjhhemefblapdmakhcdlacdn",
        ja: {
            shortDesc: "YouTubeのコメント欄をパワフルに分析するための専門ツール。",
            features: ["数万件のコメントも高速で一括取得", "キーワード検索、投稿者、リプライ有無など多彩なフィルタリング", "分析結果をHTML, JSON, CSV形式でエクスポート"]
        },
        en: {
            shortDesc: "A professional tool for powerful YouTube comment analysis.",
            features: ["Fast batch retrieval of tens of thousands of comments", "Diverse filtering by keywords, authors, or replies", "Export results in HTML, JSON, or CSV formats"]
        }
    },
    {
        title: "SummaryMonkey",
        icon: "icons/09.png",
        link: "https://chromewebstore.google.com/detail/summarymonkey-youtube-sum/hgfhbmplnimakbaemjicpamfhmldielm",
        ja: {
            shortDesc: "YouTube動画の情報を抽出し、ワンクリックでAIに要約を依頼。",
            features: ["字幕やコメント、概要欄など必要な情報だけを選択してAIに送信", "プロファイル機能で抽出パターンを保存・切替", "ショートカットキー一発でAIへの送信までを自動化"]
        },
        en: {
            shortDesc: "Extract YouTube video info and request AI summaries with one click.",
            features: ["Send only needed info like captions or comments to AI", "Save and switch extraction patterns with profiles", "Automate the entire AI request process with one shortcut"]
        }
    },
    {
        title: "AIChatDelete",
        icon: "icons/10.png",
        link: "https://chromewebstore.google.com/detail/ai-chat-delete/genlcmjjklkkmclbgfbpagmehcnaphbo",
        ja: {
            shortDesc: "主要AIチャットサービスの会話履歴を、まとめて管理・整理するツール。",
            features: ["複数履歴の選択と一括削除", "重要な会話を誤操作から守る保護機能", "ChatGPT, Gemini, Claude, DeepSeekに対応"]
        },
        en: {
            shortDesc: "Manage and organize conversation history across major AI chat services.",
            features: ["Select and batch-delete multiple chat histories", "Protection feature to prevent accidental deletion of key chats", "Supports ChatGPT, Gemini, Claude, and DeepSeek"]
        }
    },
    {
        title: "Dev's Quick Reload",
        icon: "icons/11.png",
        link: "https://chromewebstore.google.com/detail/devs-quick-reload-extensi/fecipjelkpijfjkpfknmgemmihkdbmfe",
        ja: {
            shortDesc: "Chrome拡張機能開発者向けの、超高速リロードツール。",
            features: ["開発中の拡張機能を複数選択してワンクリックで一括リロード", "ショートカットキー（Alt+R）でさらに高速な開発を実現", "拡張機能のリロードと同時に、タブも再読み込み可能"]
        },
        en: {
            shortDesc: "Ultra-fast reload tool for Chrome extension developers.",
            features: ["One-click batch reload for multiple extensions in development", "Speed up cycles with shortcuts (Default: Alt+R)", "Optionally reload active tabs alongside extensions"]
        }
    },
    {
        title: "Google AI Studio Lite",
        icon: "icons/12.png",
        link: "https://chromewebstore.google.com/detail/google-ai-studio-lite/elcdaloloijikmfondjaemodhfbdgeko",
        ja: {
            shortDesc: "Google AI Studioのチャット履歴を制御し、メモリ消費を抑えて動作を軽量化。",
            features: ["古い会話を自動で非表示/削除し、長時間の作業でもブラウザの重さを軽減", "目に優しいパステルカラーのテーマや色相のカスタマイズ", "トークン数や編集ボタン等の不要な要素を隠し、執筆に集中できるUIへ"]
        },
        en: {
            shortDesc: "Optimize Google AI Studio performance by managing chat history and memory usage.",
            features: ["Automatically hide/remove old messages to keep the browser running smoothly", "Apply pastel themes and customize UI hues for a pleasant experience", "Hide clutter like token counts and buttons to focus on your creative flow"]
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. 静的テキストの翻訳
    const t = i18n[userLang];
    document.getElementById('heroSubtitle').innerHTML = t.heroSubtitle;
    document.getElementById('ctaBtn').innerText = t.ctaBtn;
    document.getElementById('eyecatch').innerText = t.eyecatch;
    document.getElementById('sectionTitle').innerText = t.sectionTitle;
    document.getElementById('footerText').innerText = t.footerText;
    
    // フッターリンクのテキスト設定
    const privacyLink = document.getElementById('privacyLink');
    if(privacyLink) privacyLink.innerText = t.privacyPolicy;

    const grid = document.getElementById('projectGrid');
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-button');

    // ★ ヘルパー関数: モーダルを開く処理
    const openModal = () => {
        modal.classList.add('show');
        // 背景のスクロールを止める
        document.body.style.overflow = 'hidden';
    };

    // ★ ヘルパー関数: モーダルを閉じる処理
    const closeModal = () => {
        modal.classList.remove('show');
        // 背景のスクロールを戻す
        document.body.style.overflow = '';
    };

    // プライバシーポリシーのクリックイベント
    if (privacyLink) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            const content = privacyContent[userLang];
            
            modalBody.innerHTML = `
                <div class="modal-header-info">
                    <div style="font-size: 3rem; margin-right: 20px;">🛡️</div>
                    <h2 class="modal-title">${content.title}</h2>
                </div>
                ${content.body}
            `;
            openModal();
        });
    }

    // 2. カード生成
    projects.forEach((p) => {
        const content = p[userLang];
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="card-header">
                <img src="${p.icon}" alt="${p.title}" class="card-icon">
                <h3 class="extension-title">${p.title}</h3>
            </div>
            <p class="short-desc">${content.shortDesc}</p>
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
                <p class="modal-description">${content.shortDesc}</p>
                <ul class="feature-list">
                    ${content.features.map(f => `<li class="feature-item"><span>${f}</span></li>`).join('')}
                </ul>
                <a href="${p.link}" class="store-link" target="_blank">${t.storeBtn}</a>
            `;
            openModal();
        });

        grid.appendChild(card);
    });

    closeBtn.onclick = closeModal;
    window.onclick = (e) => { if (e.target == modal) closeModal(); };

    // 3. スムーススクロール
    const ctaButton = document.getElementById('ctaBtn');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
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

// スクロールインジケーターの制御
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.classList.add('fade-out');
        } else {
            scrollIndicator.classList.remove('fade-out');
        }
    });
}
