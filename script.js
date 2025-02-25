// JavaScript 功能
let currentLang = 'zh';

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.style.display = element.dataset.lang === lang ? 'inline' : 'none';
    });
}

// 标签页切换功能
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 初始化显示中文内容
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('zh');
});
