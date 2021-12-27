
// armazenando Valores
var paciente = document.querySelector("#primeiropaciente");

var tdpeso = document.querySelector(".info-peso");
peso = tdpeso.textContent;

var tdaltura = document.querySelector(".info-altura");
altura = tdaltura.textContent;

var tdinfo = document.querySelector(".info-imc");
info = tdinfo.textContent;


if (peso < 0 || peso > 600 || altura > 3.00) {
    tdinfo.textContent = " Peso ou altura inválidos!";
} else {
    //calculo imc
    var resultadoimc = peso / (altura * altura);

    // apresentando resultado ao usuario
    tdinfo.innerHTML = resultadoimc;

    //segundo paciente


}












