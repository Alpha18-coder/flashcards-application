const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

/* EVENT LISTENERS */

hamburger.addEventListener('click', () => { 
    mobileMenu.classList.toggle('active');

    const isOpen = mobileMenu.classList.contains('active');
    const icon = hamburger.firstElementChild;

    icon.textContent = isOpen 
    ? 'close'
    : 'menu';
});