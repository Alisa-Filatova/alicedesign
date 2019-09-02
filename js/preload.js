const preloader = document.querySelector('.overlay-loader');
const loader = preloader.querySelector('.loader-icon');

window.addEventListener('load', () => {
    loader.classList.add('fade-out');
    preloader.classList.add('fade-out-slow');
});
