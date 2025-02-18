var prompt = require("prompt-sync")();  

// Funções de cálculo   
function Soma(a, b) {     
    return a + b; 
} 

// Subtração  
function sub(a, b) {     
    return a - b; 
} 

// Multiplicação  
function mult(a, b) {     
    return a * b; 
}  

// Divisão  
function div(a, b) {     
    return a / b; 
}  

// Menu
function menu() {     
    let operacao;     
    let numero1;     
    let numero2;     
    let resultado; 

    console.log("====Calculadora Simples====");
    console.log("=Escolha a Operação Desejada: =");
    console.log("| 1. Soma                |");
    console.log("| 2. Subtração           |");
    console.log("| 3. Multiplicação       |");
    console.log("| 4. Divisão             |");
    console.log("==========================");
    
    operacao = prompt();
    numero1 = Number(prompt("Informe o número 1: "));
    numero2 = Number(prompt("Informe o número 2: "));
    
    switch (operacao) {         
        case "1":
            resultado = Soma(numero1, numero2);         
            break;       
        case "2":         
            resultado = sub(numero1, numero2);          
            break;          
        case "3":             
            resultado = mult(numero1, numero2);             
            break;         
        case "4":             
            if (numero2 == 0) {                 
                console.log("Não é possível dividir por zero.");
            } else {                 
                resultado = div(numero1, numero2);                         
            }             
            break;      
        default:         
            console.log("Operação inválida");         
            resultado = null;         
            break; 
    } // Fim do switch

    if (resultado !== null) {
        console.log("O resultado é: " + resultado);
    }
}  

// Aplicar a função menu  
var continuar = true;  

while (continuar) {     
    menu();     1
    let escolha = prompt("1. Continuar // 2. Sair: ");     
    if (escolha == 2) {         
        continuar = false;         
        console.log("Saindo...");     
    }  
}
