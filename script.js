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

galeriaImagens.forEach(imagem => {
    imagem.addEventListener('click', abrirImagem);
});

overlay.addEventListener('click', fecharImagem);