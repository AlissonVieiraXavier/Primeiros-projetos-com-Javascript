
class Cliente {
    nome;
    cpf;

}
class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;

        } else {
            console.log("não é possivel sacar este valor, pois ele é maior que seu saldo");
        }

    };

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(this.#saldo)
        } else {
            console.log("Impossivel depositar valor negativo");
        }
    }
}


// armazenado os Clientes no objeto;
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11629283844;

//Armazenando as contas do cliente em um objeto;
const ContaCorrenteRicardo = new ContaCorrente();
//ContaCorrenteRicardo.#saldo = 10000;
ContaCorrenteRicardo.agencia = 1001;




ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(200);
//ContaCorrenteRicardo.depositar(-1);




ContaCorrenteRicardo.sacar(60);
console.log(ContaCorrenteRicardo);


const ContaCorrenteAlice = new ContaCorrente();
ContaCorrenteAlice.agencia = 1001;
//ContaCorrenteAlice.#saldo = 0;

//console.log(cliente1);
//console.log(cliente2);
