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
        valores.push(Number(valor.value))

        let item = document.createElement("option");
        item.text = `Valor ${valor.value} adicionado`;
        lista.appendChild(item);


    } else {
        alert("Valor inválido ou já adicionado!")
    }
}
