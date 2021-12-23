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
        let genero = "";
        let img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            genero = "homem";
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "imgs/babyboy.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "imgs/man.jpg")
            }
            else {
                //idoso
                img.setAttribute("src", "imgs/oldman.jpg")
            }


        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "imgs/babygirl.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "imgs/woman.jpg")
            }
            else {
                //idoso
                img.setAttribute("src", "imgs/oldwoman.jpg")
            }

        }
        res.style.textAlign = "center";
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos <br>`;

        //adiciona a imagem
        res.style.marginTop = "10px";
        img.style.marginTop = "10px";
        img.style.width = "400px";
        img.style.height = "500px";
        img.style.borderRadius = "120%";

        res.appendChild(img);






    }

}