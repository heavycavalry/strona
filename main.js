document.addEventListener('DOMContentLoaded', function (event) {
    var modalBtn = document.querySelector('.subscribeBtn');
    var modalBg = document.querySelector('.modal-background')
    var modalClose = document.querySelector('.modal-close');
    modalBtn.addEventListener('click', function () {
        modalBg.classList.add('background-active')
    });
    modalClose.addEventListener('click', function () {
        modalBg.classList.remove('background-active')
    });

    const menuIcon = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.mobilenav')
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change');
    });

});