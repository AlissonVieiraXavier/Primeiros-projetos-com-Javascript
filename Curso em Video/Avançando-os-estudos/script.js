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
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}
//Adicionando valores
function adicionar() {
    if (isNumero(valor.value) && !inlista(valor.value, valores)) {
        valores.push(valor.value)
        console.log(valores)


    } else {
        alert("Valor inválido ou já adicionado!")
    }
}
