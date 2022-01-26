const menuHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const menuBarra = document.querySelector('.menu_barra');

//Função Menu Hmburguer
menuHamburguer.addEventListener('click', () => {
  menu.classList.toggle('show');
  body.classList.toggle('show');
});

itemNav = document.querySelectorAll('.menu_item');

//Função Mobile
for (var i = 0; i < itemNav.length; i++) {
  itemNav[i].addEventListener('click', () => {
    menu.classList.toggle('show');
    body.classList.toggle('show');
  });
}

const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');
const barraSlide = document.querySelector('.barra-slide');
const banner = document.querySelector('.banner');
var contador = 0;

setaDireita.addEventListener('click', () => {
  if (contador == 0) {
    barraSlide.style.justifyContent = 'center';
    contador = 1;
    banner.classList.toggle('banner-centro');
  } else if (contador == 1) {
    barraSlide.style.justifyContent = 'flex-end';
    contador = contador + 1;
    banner.classList.toggle('banner-centro');
    banner.classList.toggle('banner-end');
  } else if (contador > 1) {
    barraSlide.style.justifyContent = 'flex-start';
    contador = 0;
    banner.classList.toggle('banner-end');
  }
});

setaEsquerda.addEventListener('click', () => {
  if (contador == 0) {
    barraSlide.style.justifyContent = 'flex-end';
    contador = 2;
    banner.classList.toggle('banner-end');
  } else if (contador > 1) {
    barraSlide.style.justifyContent = 'center';
    contador = contador - 1;
    banner.classList.toggle('banner-end');
    banner.classList.toggle('banner-centro');
  } else if (contador == 1) {
    barraSlide.style.justifyContent = 'flex-start';
    contador = contador - 1;
    banner.classList.toggle('banner-centro');
  }
});

const cards = document.querySelectorAll('.card-projeto');
setaCarouselDireita = document.querySelector('#seta-carousel-direita');
var count = 0;
setaCarouselDireita.addEventListener('click', () => {
  if (count == 0) {
    cards[0].classList.toggle('card-hide');
    cards[1].classList.toggle('card-show');
    count = count + 1;
  } else if (count == 1) {
    cards[1].classList.toggle('card-hide');
    cards[1].classList.toggle('card-show');
    cards[2].classList.toggle('card-show');
    count = count + 1;
  } else if (count > 1) {
    cards[2].classList.toggle('card-hide');
    cards[2].classList.toggle('card-show');
    cards[0].classList.toggle('card-hide');
    cards[1].classList.remove('card-hide');
    cards[2].classList.remove('card-hide');
    count = 0;
    console.log(cards[0].classList, cards[1].classList, cards[2].classList);
  }
});

const ponto = document.querySelectorAll('.ponto');

ponto[0].addEventListener('click', () => {
  banner.style.backgroundImage = "url('assets/banner-1.jpg')";
  ponto[0].style.backgroundColor = 'white';
  ponto[1].style.backgroundColor = 'rgb(128, 128, 128)';
  ponto[2].style.backgroundColor = 'rgb(128, 128, 128)';
});

ponto[1].addEventListener('click', () => {
  banner.style.backgroundImage = "url('assets/foto-banner-center.png')";
  ponto[1].style.backgroundColor = 'white';
  ponto[0].style.backgroundColor = 'rgb(128, 128, 128)';
  ponto[2].style.backgroundColor = 'rgb(128, 128, 128)';
});

ponto[2].addEventListener('click', () => {
  banner.style.backgroundImage = "url('assets/foto-banner-end-mobile.png')";
  ponto[2].style.backgroundColor = 'white';
  ponto[0].style.backgroundColor = 'rgb(128, 128, 128)';
  ponto[1].style.backgroundColor = 'rgb(128, 128, 128)';
});
