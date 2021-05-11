const menu = document.querySelector('.mm');
const child = document.querySelector('.child');
const main = document.querySelector('#main');
menu.addEventListener('click', function () {
    main.classList.toggle('hide');
});

