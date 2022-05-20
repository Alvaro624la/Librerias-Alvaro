// VARIABLES
const hamburguer = document.getElementById('hamburguer');
const navMenu = document.getElementById('nav-menu');

//ACTIVE
hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

let navLink = document.getElementsByClassName('shop__nav__ul__li__a');

//NO ACTIVE
function removeActive(){
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
};
//añade la funcion 'click' a todos los links mediante bucle for, para que al clickar, eliminar la clase .active y esconder el menu nav
for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', removeActive);
}