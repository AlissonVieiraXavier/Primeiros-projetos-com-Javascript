var pacientes = document.querySelectorAll(".paciente")
var tabela = document.querySelector(".table");

tabela.forEach("dblclick", function (event) {
    console.log(event.target)

})





/*pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function () {
        this.remove();

    })
})*/