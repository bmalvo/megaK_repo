const hamburgerButton = document.querySelector('.container__hamburger');
const menu = document.querySelector('.container__menu');


hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
})