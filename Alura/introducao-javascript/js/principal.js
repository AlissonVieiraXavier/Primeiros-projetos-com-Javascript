var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("linha-com-erro-de-validacao");


    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("linha-com-erro-de-validacao");

    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.getElementById("adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    //armazena os valores
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //createElemento(), cria o elemento tr e td

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    console.log(nomeTd)
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // o conteudo de cada variavel recebe o valor digicado pelo usuario e ja coloca no elemento
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // colocando um elemento dentro do outro com appendClild()
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // adicionando os elementos na tabela
    var adicionaElementosNaTabela = document.querySelector("#tabela-pacientes");
    console.log(adicionaElementosNaTabela)
    adicionaElementosNaTabela.appendChild(pacienteTr);




})



