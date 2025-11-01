const galeriaImagens = document.querySelectorAll('.galeria img');
const overlay = document.querySelector('.overlay');
const overlayImagem = document.getElementById('overlay-imagem');
const menuHamburguer = document.getElementById('menu-hamburguer');
const menuNavegacao = document.getElementById('menu-navegacao');

function abrirImagem(event) {
    const imagemClicadaSrc = event.target.src;
    overlayImagem.src = imagemClicadaSrc;
    overlay.style.display = 'flex';
}

function fecharImagem() {
    overlay.style.display = 'none';
}

if (galeriaImagens.length > 0) {
    galeriaImagens.forEach(imagem => {
        imagem.addEventListener('click', abrirImagem);
    });
    overlay.addEventListener('click', fecharImagem);
}

if (menuHamburguer) {
    menuHamburguer.addEventListener('click', () => {
        menuNavegacao.classList.toggle('aberto');
    });
}