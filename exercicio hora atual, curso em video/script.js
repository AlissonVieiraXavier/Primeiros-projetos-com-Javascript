
function carregar() {
    var mensagem = document.querySelector("#msg");
    var imagem = document.getElementById("img");
    var dataAtual = new Date();
    var horaAtual = dataAtual.getHours();
    mensagem.innerHTML = `Agora são ${horaAtual} horas!`;

    if (horaAtual >= 0 && horaAtual < 12) {
        imagem.src = 'photos/manhã.jpg';
        document.body.style.background = "RGB(254, 227, 199)";

    } else if (horaAtual >= 12 && horaAtual < 18) {
        imagem.src = 'photos/afternoon.jpg';
        document.body.style.background = "RGB(209, 118, 37)";
    } else {
        imagem.src = 'photos/night.jpg';
        document.body.style.background = "#06202c";
        document.body.style.color = "white";

    }

};

