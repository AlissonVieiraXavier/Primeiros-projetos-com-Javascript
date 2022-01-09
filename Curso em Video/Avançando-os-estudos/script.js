var lista = document.querySelector("#flista");
var valor = document.querySelector(".input");
var resultado = document.querySelector("#res");
var valores = [];

//validação
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
function inlista(n, l) {

}

function adicionar() {
    if (isNumero(valor.value) && !inlista(num.value, valores)) {

    } else {
        alert("Valor inválido ou já adicionado!")
    }
}
