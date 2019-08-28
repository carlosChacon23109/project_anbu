//LOGICA MENU HAMBURGUESA
const ipad = window.matchMedia('screen and (max-width:767px)');
const float_buttom = document.querySelector('#burguer_buttom');
float_buttom.addEventListener('click',f_hideOrShow,false);

ipad.addListener(f_showOrHide);
function f_showOrHide  (event) {
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