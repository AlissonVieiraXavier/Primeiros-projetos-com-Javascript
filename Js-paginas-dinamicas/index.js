function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const IdAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(IdAudio);
    }

    console.log(contador);
    console.log(instrumento);
}