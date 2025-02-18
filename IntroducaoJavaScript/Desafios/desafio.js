var prompt = require("prompt-sync")();  

function verificarIdade() {
    let idade = Number(prompt("Qual é a sua idade? "));
    
    if (isNaN(idade)) {
        console.log("Por favor, insira um número válido.");
    } else {
        if (idade < 18) {
            console.log("Você é menor de idade.");
        } else {
            console.log("Você é maior de idade.");
        }
    }
}

// Menu
function menu() {
    console.log("|==== Verificação de Marioridade ====|");
    console.log("|Escolha uma opção:|");
    console.log("|1. Verificar se você é menor ou maior de idade");
    console.log("|2. Sair");
    
    let escolha = prompt();

    if (escolha === "1") {
        verificarIdade();
    } else if (escolha === "2") {
        return false; 
    } else {
        console.log("Opção inválida, tente novamente.");
    }
    return true; 
}


var continuar = true;  

while (continuar) {     
    menu();     1
    let escolha = prompt("1. Fazer Novamente // 2. Sair: ");     
    if (escolha == 2) {         
        continuar = false;   
        console.log("Saindo...Volte Sempre");         
    }  
}

