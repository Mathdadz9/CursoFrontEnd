// Estrutura de dados e condicionais (if else / switch case) 

// Definindo o preço do produto
var precoProduto = 150;  

// Condicional if-else 
if (precoProduto >= 100) {     
    console.log("Valor a pagar: " + (precoProduto * 0.9));   
} else {     
    console.log("Valor a pagar: " + precoProduto);   
}  

// Definindo o mês 
var mes = 2;  

// Condicional switch case
switch (mes) {     
    case 1:         
        console.log("Janeiro");         
        break;     
    case 2:         
        console.log("Fevereiro");         
        break;     
    case 3:         
        console.log("Março");         
        break;     
    default:         
        console.log("Outro mês");         
        break; 
}  

// Estrutura de Repetição

// for (contáveis)
for (let i = 0; i <= 100; i++) {     
    console.log(i);  
}  

// while (Incontáveis)
var continuar = true; // Condição de parada
var numeroEscolhido = 3; 
var contador = 0;

while (continuar) { 
    // A parada acontece quando continuar for false
    contador++; 
    let numeroSorteado = Math.round(Math.random()*10); 
    if (numeroEscolhido == numeroSorteado) {                   
        continuar = false;
        console.log("Acertou miseravi");
    } 
    
    console.log("Tentativas: " + contador); 
}

//funçôes (ação especifica) podendo ser chamada a qualquer momento 
//Momento dentro do codigo 

function ola (nome){ //function return 
    return "Ola, "+nome;
}
 function hello (nome){ //function void 
    console.log("Hello " +nome);
 }
console.log(ola("Matheus"));

hello("Mathueus");