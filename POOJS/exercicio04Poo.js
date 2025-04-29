// Atividade 4: Criar uma classe representando um funcionário
class Funcionario {
    // Encapsulamento dos atributos
    #nome;
    #salario;
    #cargo;

    // Construtor
    constructor(nome, salario, cargo) {
        this.#nome = nome;
        this.#salario = salario;
        this.#cargo = cargo;
    }

    // Método para aumentar o salário com base em percentual
    aumentarSalario(percentual) {
        if (percentual > 0) {
            let aumento = (this.#salario * percentual) / 100;
            this.#salario += aumento;
            console.log(`Salário aumentado em ${percentual}%. Novo salário: R$${this.#salario.toFixed(2)}`);
        } else {
            console.log("Percentual inválido para aumento.");
        }
    }

    //informações do funcionário
    exibirInfo() {
        console.log(`Nome: ${this.#nome}, Cargo: ${this.#cargo}, Salário: R$${this.#salario.toFixed(2)}`);
    }
}


let funcionario1 = new Funcionario("Matheus Crippa", 3000, "Gerente");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(30); // Aumento de 30%
funcionario1.exibirInfo();
funcionario1.aumentarSalario(-5); 
