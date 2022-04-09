const UPBTN = document.getElementById('scroll-up-btn');

UPBTN.addEventListener('click', subir);
function subir(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
}

// Ver posicion del scroll para aparecer UPBTN (posicion 1000 aparecer)
window.addEventListener('scroll', scroll);
function scroll(){
    // console.log(scrollY);
    //Elegir en que posicion del scroll quiero que aparezca el btn(para éste ejemplo de libreria lo pondre a la posicion 0, osea, sin tener que tocar el scroll si quiera)
    if(window.scrollY > 0){
        UPBTN.classList.add('scroll-up-in');
        // UPBTN.style.display = 'none';
    } else {
        UPBTN.classList.remove('scroll-up-in');
        // UPBTN.style.display = 'block';
    }
}