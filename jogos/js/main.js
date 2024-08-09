// Seleciona o ícone do menu e o elemento de navegação
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu'); // Certifique-se de que o seletor corresponda ao seu HTML

// Notificação
let bell = document.querySelector('.notification');

menu.onclick = () => {
    // Alterna a classe 'active' no navbar e a classe 'move' no menu
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');
}

// Inicializa o Swiper
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1068: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// Custom Scroll Bar
window.onscroll = function() {mufunction()};

function mufunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
}
