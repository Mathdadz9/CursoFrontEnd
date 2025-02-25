// funçoes data e hora 

let agora = new Date();
console.log(agora); // Retorna a data e hora atual

console.log(agora.toDateString()); // Retorna a data no formato abreviado
console.log(agora.toLocaleDateString()); // Retorna a data formatada conforme o local
console.log(agora.toLocaleTimeString()); // Retorna apenas a hora formatada


//get
console.log(agora.getFullYear()); // mostrar o ano

//set
agora.setFUllYear(2030);
console.log(agora.toLocalDateString()); //25/02/2030

//operações de data e hora 
let data1 = new Date("2025-02-04");
let data2 = new Date("2025-12-17");

let diferenca = data2-data1;

console.log(diferenca/(1000*60*60*24)) //caulcular em dias a diferença
