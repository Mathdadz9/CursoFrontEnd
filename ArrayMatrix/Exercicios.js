

let arrayTexto = ["maçã", "banana", "laranja", "uva"];

console.log(arrayTexto[1]);
arrayTexto.push("melancia");
console.log(arrayTexto); 

arrayTexto.shift();
console.log(arrayTexto); 
console.log(arrayTexto.length); 


//exercicio 2


let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < ArrayNumeros.length; i++) {
    console.log(ArrayNumeros[i]); 
}
ArrayNumeros.forEach(num => {
    console.log(num); 
});

//exercicio 3 

let palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];
let frase = palavras.join(" "); 
console.log(frase);

palavras.splice(2, 0, "muito"); 
console.log(palavras); 

let fraseAtualizada = palavras.join(" ");
console.log(fraseAtualizada); 

//exercicio 4 


