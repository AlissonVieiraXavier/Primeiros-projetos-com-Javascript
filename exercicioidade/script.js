function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector("#anodenasc");
    let res = document.querySelector("#resultado");

    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] verifique os dados e tente novamente");
    } else {
        let fsex = document.getElementsByName("radsex");
        let idade = ano - Number(fano.value);


    }

}