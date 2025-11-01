document.addEventListener('DOMContentLoaded', function() {

    const menuHamburguer = document.getElementById('menu-hamburguer');
    const menuNavegacao = document.getElementById('menu-navegacao');

    if (menuHamburguer && menuNavegacao) {
        menuHamburguer.addEventListener('click', () => {
            menuNavegacao.classList.toggle('aberto');
        });
    }

    const galeriaImagens = document.querySelectorAll('.galeria img');
    const overlay = document.querySelector('.overlay');
    const overlayImagem = document.getElementById('overlay-imagem');

    function abrirImagem(event) {
        const imagemClicadaSrc = event.target.src;
        overlayImagem.src = imagemClicadaSrc;
        overlay.style.display = 'flex';
    }

    function fecharImagem() {
        overlay.style.display = 'none';
    }

    if (galeriaImagens.length > 0 && overlay && overlayImagem) {
        galeriaImagens.forEach(imagem => {
            imagem.addEventListener('click', abrirImagem);
        });
        overlay.addEventListener('click', fecharImagem);
    }
});