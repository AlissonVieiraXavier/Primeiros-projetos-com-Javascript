const campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener('input', () => {

    let pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i];
        let tdNome = document.querySelectorAll(".info-nome");
        let nome = paciente.textContent;
    }

})