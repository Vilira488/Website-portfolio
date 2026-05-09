document.addEventListener('DOMContentLoaded', () => {
const menuLink = document.querySelector('.menu-link');
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');
const whiteBox2 = document.querySelector('.whitebox2');
const titleElement = document.querySelector('.title'); // Добавляем элемент заголовка

menuLink.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
    menu.style.opacity = menuContainer.classList.contains('active') ? '1' : '0';
    menu.style.visibility = menuContainer.classList.contains('active') ? 'visible' : 'hidden';
    whiteBox2.style.display = menuContainer.classList.contains('active') ? 'block' : 'none';
});

whiteBox2.addEventListener('click', () => {
    if (menuContainer.classList.contains('active')) {
        menuContainer.classList.remove('active');
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        whiteBox2.style.display = 'none';
    }
});

});
