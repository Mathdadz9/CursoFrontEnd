// Declaração de uma array "[]"
let array = []; // Array dinâmico 

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "caixa", "meia"];
let arrayMisto = [1, "José", true];

// Tamanho de uma array
console.log(arrayNumeros.length); // 9 

// Acessar um elemento do array (index) - "caixa"
console.log(arrayTexto[1]); // "caixa"

// Adicionar elementos no array
// No começo (unshift)
arrayTexto.unshift("Tênis");
console.log(arrayTexto); 

// No fim (push)
arrayTexto.push("Chinelos");
console.log(arrayTexto); 

// Trocar um valor 
arrayTexto[2] = "Sacola";
console.log(arrayTexto); 

// Remover elementos do array
// No começo (shift)
arrayTexto.shift();
console.log(arrayTexto); 

// No fim (pop)
arrayTexto.pop();
console.log(arrayTexto);

// Percorrer um array (Laço de repetição)
for (let i = 0; i < arrayNumeros.length; i++) {
    console.log("índice [" + i + "] = " + arrayNumeros[i]);
}

//ForEach
arrayTexto.forEach(elemento => {
    console.log(elemento)

});

// metodos uteis

//indexOf
console.log(arrayNumeros.indexOf(5));//4
console.log(arrayNumeros.indexOf(10));//-1 (elemento inexistente)

//splice (remover elemento da posião)

arrayMisto.splice(1, 2)
console.log(arrayMisto)

//operaçoes avançasdas de arrays 
