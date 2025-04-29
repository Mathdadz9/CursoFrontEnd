// Atividade 2: Criar uma classe representando um veículo
class Veiculo {
    // Encapsulamento dos atributos
    #marca;
    #modelo;
    #ano;

    // Construtor
    constructor(marca, modelo, ano) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    // Método 
    exibirInfo() {
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, Ano: ${this.#ano}`);
    }
}

class Carro extends Veiculo {
    // Atributo específico da subclasse
    #quantidadePortas;

    // Construtor com chamada à superclasse
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);
        this.#quantidadePortas = quantidadePortas;
    }

    // Sobrescrevendo o método exibirInfo
    exibirInfo() {
        super.exibirInfo(); // Chama o método da classe pai
        console.log(`Quantidade de Portas: ${this.#quantidadePortas}`);
    }
}

// Instanciar os objetos
let veiculo1 = new Veiculo("Yamaha", "Fazer 250", 2021, 0);
console.log("Veículo:");
veiculo1.exibirInfo();

console.log("\nCarro:");
let carro1 = new Carro("Ford", "Focus", 2018, 4);
carro1.exibirInfo();
