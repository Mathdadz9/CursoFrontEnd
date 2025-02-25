//criar um programa que receba varias notas e calcule a media 
const prompt = require("prompt-sync")();

let VetorNotas = [];

let contador = 0;
let continuar = true;
while (continuar) {
    console.log("1, Digitar nova nota")
    console.log("2, Calcular Media")
    console.log("3, Sair")
    let operacao = prompt("Escolha a Opção Desejada");
    switch (operacao) {
        case "1":
            Contador++
            let nota = Number(prompt("Digite a nota do Aluno:" +contador+":" ));
            VetorNotas.push(nota);
            break;
    case "2":
        let media = VetorNotas.reduce((x,y) => x+y,0)/VetorNotas.length;
        console.log("A media da Sala é" +media)
        break

        case "3":
            continuar = false;
            console.log("Saindo");


        default:
            break;
    }
}