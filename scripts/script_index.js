//LOGICA MENU HAMBURGUESA
const ipad = window.matchMedia('screen and (max-width:767px)');

ipad.addListener(f_showOrHide);
function f_showOrHide  (event) {
    const float_buttom = document.querySelector('#burguer_buttom');
     console.log(event.matches);
     if(event.matches){   
        float_buttom.addEventListener('click',f_hideOrShow,false);       
    }else{
        float_buttom.removeEventListener('click',f_hideOrShow,false);
    }
}

function f_hideOrShow (menu) {
    var menu = document.querySelector('.menu');
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }else{
        menu.classList.add('is-active');
    }
}
f_showOrHide(ipad);