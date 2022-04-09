//CAROUSEL
//VARIABLES
//elemento slider que no va a cambiar, por eso, constante
const SLIDER = document.getElementById('slider');

//para ir moviendo de ultima a primera las img y hacerlo infinito
let sliderSection = document.getElementsByClassName('main__carousel-cont__slider__section');

//ULTIMA FOTO
//para referirme a la última foto
let sliderSectionLast = sliderSection[sliderSection.length - 1];

//BOTONES
//para referirme a los botones
const BTNRIGHT = document.getElementById('btn-right');
const BTNLEFT = document.getElementById('btn-left');
//YA TENEMOS TODOS LOS ELEMENTOS QUE VAMOS A TRABAJAR


//Usamos éste método, para obtener el último elemento y colocamos en el slider, pero en que posicion? Despues que empieze el elemento(afterbegin)
//Recuerda: La imagen que veamos en el carousel, sera la img2 del HTML, por eso ésto tiene sentido, porque JS lo añadirá como la img1 del HTML.
SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
//Habrá que enfocar a la 2a img (en CSS, &__slider, con margin: -100%;)

//FUNCIONES
//CREAMOS LAS FUNCIONES (una para mover a la derecha, y otra para la izquierda)
function next(){
    //obtengo el primer sliderSection
    let sliderSectionFirst = sliderSection[0];
    //añado estilos. Avanza 1 foto más.(porque cada foto es 100%)
    SLIDER.style.marginLeft = '-200%';

    SLIDER.style.transition = 'all .5s';
    //cuando haya acabado el efecto de entrada de la nueva imagen(500ms más tarde):
    setTimeout(function(){
        //elimino la transición
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
        //regresamos el margin a la normalidad
        SLIDER.style.marginLeft = '-100%';
        //500ms(=0.5s que dura la anterior transición)
    }, 500);
};

function prev(){
    //volvemos a declarar las variables, porque recordemos que en cada click, cambia
    let sliderSection = document.getElementsByClassName('main__carousel-cont__slider__section');
    //como ahora trabajamos con el último:
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    //el margin left a 0
    SLIDER.style.marginLeft = '0';
    SLIDER.style.transition = 'all .5s';
    //cuando haya acabado el efecto de entrada de la nueva imagen(500ms más tarde):
    setTimeout(function(){
        //elimino la transición
        SLIDER.style.transition = 'none';
        //obtengo el ...Last despues de empezar (la ultima foto a la 1a posición)
        SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
        //lo volvemos a poner a -100%
        SLIDER.style.marginLeft = '-100%';
        //500ms(=0.5s que dura la anterior transición)
    }, 500);
};

BTNRIGHT.addEventListener('click', function(){
    next();
});
BTNLEFT.addEventListener('click', function(){
    prev();
});

//MOVIMIENTO AUTOMÁTICO
setInterval(function(){
    next();
}, 3000);


//COMO PUEDO REINICIAR EL INTERVALO CADA VEZ QUE HAGA CLICK EN LOS BOTONES
// function dcha(){
//     next();
// };
// BTNRIGHT.addEventListener('click', dcha);

// function izq(){
//     prev();
//     if (izq == true){
//         console.log('reiniciar intervalo 3000');
//     }
// };
// BTNLEFT.addEventListener('click', izq);

//MOVIMIENTO AUTOMÁTICO
//Para ejecutar cada x ms la funcion next(), es decir, que el carousel/slide se mueva automáticamente
// setInterval(function(){
//     next();
// }, 3000);