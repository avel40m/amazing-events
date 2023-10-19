const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const navs = document.querySelectorAll("nav li a");
const locacion = window.location.pathname;

abrir.addEventListener("click",() => {
    nav.classList.add('visible')
})

cerrar.addEventListener('click',() => {
    nav.classList.remove('visible')
})

window.onscroll = function(){
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.ir-arriba-contenedor').classList.add('mostrar');
        document.querySelector('.ir-arriba-contenedor').classList.remove('ocultar');
    } else{
        document.querySelector('.ir-arriba-contenedor').classList.add('ocultar');
        document.querySelector('.ir-arriba-contenedor').classList.remove('mostrar');
    }
}

document.querySelector('.ir-arriba-contenedor').addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior:'smooth' 
    })
})

navs.forEach(link => {
    if (link.href.split('/')[3] == locacion.split('/')[1]) {
        link.classList.add('active')
    }
})