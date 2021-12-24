function contar() {
    let inicio = document.getElementById("txt1")
    let fim = document.querySelector("#txtf")
    let passo = document.querySelector("#txtp")
    let res = document.getElementById("resultado")


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ERRO] Faltam dados!")

    } else {
        res.innerHTML = "Contando...  <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} <br>`
            } else {
                alert("[ERRO] Dados incorretos!")
            };
        }

    }
}