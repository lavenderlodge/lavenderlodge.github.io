// 響應式導航
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 語言切換功能
const languageData = {
    zh: {
        'home-title': '設計作品',
        'home-content': '展示我們最新的設計作品。',
        // 添加所有需要翻譯的文本
    },
    en: {
        'home-title': 'Portfolio',
        'home-content': 'Showcasing our latest design works.',
        // 英文翻譯內容
    }
};

function switchLanguage(lang) {
    // 切換可見元素
    document.querySelectorAll(`[data-lang]`).forEach(el => {
        el.classList.add('hidden');
    });
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
        el.classList.remove('hidden');
    });

    // 更新動態內容
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = languageData[lang][key];
    });
}

// 選項卡功能
function openTab(tabName) {
    document.querySelectorAll('.tabcontent').forEach(tab => {
        tab.style.display = 'none';
    });
    document.querySelectorAll('.tablink').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// 初始設置
document.addEventListener('DOMContentLoaded', () => {
    // 默認顯示中文
    switchLanguage('zh');
    
    // 移動端點擊關閉菜單
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });
});
