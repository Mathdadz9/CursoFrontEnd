// Atividade 3: Criar uma classe representando uma conta bancária
class ContaBancaria {
    // Encapsulamento dos atributos
    #titular;
    #saldo;

    // Construtor
    constructor(titular, saldoInicial) {
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    // Método para depositar valor na conta
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!!`);
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    //  sacar valor da conta
    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log(`Saldo insuficiente! Saldo atual: R$${this.#saldo.toFixed(2)}`);
        }
    }

    // Método para exibir o saldo atual
    exibirSaldo() {
        console.log(`Titular: ${this.#titular}, Saldo atual: R$${this.#saldo.toFixed(2)}`);
    }
}

// Exemplo de uso:
let conta1 = new ContaBancaria("Matheus Crippa", 500);
conta1.exibirSaldo();
conta1.depositar(300);
conta1.sacar(200);
conta1.exibirSaldo();
conta1.sacar(700);
conta1.exibirSaldo();
