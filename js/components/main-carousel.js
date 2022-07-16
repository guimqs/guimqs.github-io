// 1 Acessar a janela
// 2 Pegar o HTML todo
// 3 Pegar o botão
// 4 Saber que está sendo clicado no botão

// 5 Acessar a janela
// 6 Pegar o HTML
// 7 Pegar o elements
// 8 Mover o elements para direita

const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 50

btnRight.addEventListener('click', function() {
    pixels = pixels + 50;
    elements.style = `transform: translateX(${pixels}px)`;
})

btnLeft.addEventListener('click', function() {
    pixels = pixels - 50;
    elements.style = `transform: translateX(${pixels}px)`;
})