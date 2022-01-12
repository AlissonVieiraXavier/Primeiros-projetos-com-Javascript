var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener('input', function () {

    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i];
        let tdNome = document.querySelector(".info-nome");
        let nome = tdNome.textContent;
        if (nome != this.value) {
            paciente.classList.add("invisible");
        }
        else { paciente.remove("invisible"); }
    }

})
