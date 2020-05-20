var modalBtn = document.querySelector('.subscribeBtn');
var modalBg = document.querySelector('.modal-background')
var modalClose = document.querySelector('.modal-close');
modalBtn.addEventListener('click', function(){
    modalBg.classList.add('background-active')
});
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('background-active')
});