/* CSS 样式 */
:root {
    --lavender: #9D81BA;
    --lavender-dark: #7B6796;
    --lavender-light: #E6E0EC;
    --text-dark: #333333;
    --text-light: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    background-color: var(--lavender-light);
    color: var(--text-dark);
}

header {
    background-color: var(--lavender);
    padding: 1rem 5%;
}

.logo {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo img {
    height: 50px;
}

.logo h1 {
    font-family: 'Playfair Display', serif;
    color: var(--text-light);
    font-size: 1.8rem;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
}

.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--lavender-light);
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
}

.dropdown:hover .dropdown-content {
    display: block;
}

.lang-switch {
    position: absolute;
    top: 1rem;
    right: 5%;
}

.lang-switch button {
    background: none;
    border: 1px solid var(--text-light);
    color: var(--text-light);
    padding: 0.3rem 0.8rem;
    margin-left: 0.5rem;
    cursor: pointer;
}

.content-section {
    padding: 4rem 5%;
    min-height: 60vh;
}

footer {
    background-color: var(--lavender-dark);
    color: var(--text-light);
    text-align: center;
    padding: 2rem 5%;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
    }
    
    .dropdown-content {
        position: static;
    }
}
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
