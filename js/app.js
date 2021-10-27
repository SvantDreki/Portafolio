const hamburger = document.querySelector('.hamburger');
const movile_menu = document.querySelector('.nav-list ul');
const header = document.querySelector('.header.contenedor');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('activo');
    movile_menu.classList.toggle('activo');
});

document.addEventListener('scroll', () => {
    let scrollPosicion = window.scrollY;

    if(scrollPosicion > 250) {
        header.style.backgroundColor = '#29323c'
    } else {
        header.style.backgroundColor = 'transparent';
    }
});