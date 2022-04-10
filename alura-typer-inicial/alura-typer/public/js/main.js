let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;
let tamanhoDaFrase = $("#tamanhoDaFrase");
tamanhoDaFrase.text(numPalavras);

let campo = $(".campo-de-digitacao");
campo.on("click", function(){
    let numPalavrass = frase.split(" ").length;
    campo.text(numPalavrass)
})
