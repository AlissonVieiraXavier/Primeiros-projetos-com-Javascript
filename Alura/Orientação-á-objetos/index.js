
class Cliente {
    nome;
    cpf;

}
class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (ContaCorrenteRicardo.saldo >= valor) {
            ContaCorrenteRicardo.saldo -= valor;
            console.log(ContaCorrenteRicardo.saldo);

        } else {
            console.log("não é possivel sacar este valor, pois ele é maior que seu saldo");
        }
    };
}



const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11629283844;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.saldo = 0;
ContaCorrenteRicardo.agencia = 1001;

console.log(ContaCorrenteRicardo.saldo);
ContaCorrenteRicardo.saldo = 100;
console.log(ContaCorrenteRicardo.saldo);
let valorSacado = 200;




const ContaCorrenteAlice = new ContaCorrente();
ContaCorrenteAlice.agencia = 1001;
ContaCorrenteAlice.saldo = 0;

console.log(cliente1);
console.log(cliente2);
