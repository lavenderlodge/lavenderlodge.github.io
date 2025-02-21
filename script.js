// 中英文翻譯對照
const translations = {
  'zh-Hant': {
    '首頁': '首頁',
    '產品': '產品',
    '關於我們': '關於我們',
    '聯絡我們': '聯絡我們',
    '歡迎來到拉洛設計，我們提供創新的設計方案。': '歡迎來到拉洛設計，我們提供創新的設計方案。',
    '我們有多樣化的設計產品。': '我們有多樣化的設計產品。',
    '我們是一支充滿熱情的設計團隊。': '我們是一支充滿熱情的設計團隊。',
    '請隨時聯繫我們以獲取更多資訊。': '請隨時聯繫我們以獲取更多資訊。'
  },
  'en': {
    '首頁': 'Home',
    '產品': 'Products',
    '關於我們': 'About Us',
    '聯絡我們': 'Contact Us',
    '歡迎來到拉洛設計，我們提供創新的設計方案。': 'Welcome to LALO DESIGN. We offer innovative design solutions.',
    '我們有多樣化的設計產品。': 'We have a variety of design products.',
    '我們是一支充滿熱情的設計團隊。': 'We are a passionate design team.',
    '請隨時聯繫我們以獲取更多資訊。': 'Please feel free to contact us for more information.'
  }
};

// 語言切換功能
const languageSwitcher = document.querySelector('.language-switcher');
const allLangImages = languageSwitcher.querySelectorAll('img');
allLangImages.forEach(img => {
  img.addEventListener('click', function () {
    const lang = this.dataset.lang;
    allLangImages.forEach(img => img.classList.remove('active-lang'));
    this.classList.add('active-lang');

    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
      const originalText = element.dataset.translate;
      element.textContent = translations[lang][originalText];
    });
  });
});

// 頁面切換功能（簡單示例）
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');
navLinks.forEach((link, index) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    sections.forEach(section => section.classList.remove('active-section'));
    sections[index].classList.add('active-section');
  });
});
