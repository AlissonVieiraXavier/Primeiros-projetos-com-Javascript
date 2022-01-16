function sortWord(word) {
    var wordol = word.split("");
    var wordul = [];

    while (wordol.length) {
        let sorteado = parseInt(Math.random() * wordol.length);
        let selectLetter = wordol.splice(sorteado, 1)[0];
        wordul.push(selectLetter);
    }
    return wordul.join("");
}


//exemplo para teste;

console.log(sortWord("Alisson"));