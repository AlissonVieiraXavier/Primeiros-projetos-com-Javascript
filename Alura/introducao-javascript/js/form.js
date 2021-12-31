var botaoAdicionar = document.getElementById("adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    // desabilita o evento de envio do codigo 
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
    imcTd.textContent = calculoImc(peso, altura);

    // colocando um elemento dentro do outro com appendClild()
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // adicionando os elementos na tabela
    var adicionaElementosNaTabela = document.querySelector("#tabela-pacientes");
    adicionaElementosNaTabela.appendChild(pacienteTr);




})
