let texto = "Aula de JavaScript";

// Contar quantos caracteres tem essa variável 
console.log(texto.length); // 18 caracteres

// Maiúsculas e minúsculas
console.log(texto.toUpperCase()); // maiúsculo
console.log(texto.toLowerCase()); // minúsculo

// Parte da string
console.log(texto.substring(0, 4)); // "Aula"
console.log(texto.slice(-10)); // "JavaScript"

// Substituição de parte da String 
let texto2 = texto.replace("Java", "type"); // "Aula de typeScript"
console.log(texto2);

// Tesoura (trim)
let texto1 = "  JavaScript  ";
console.log(texto1); // "  JavaScript  "
console.log(texto1.trim()); // "JavaScript"

// Separação de String
let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens); // "JavaScript, Python, PHP, C++, Java"
console.log(linguagensArray); // ["JavaScript", "Python", "PHP", "C++", "Java"]

// Desafio: contar a quantidade de caracteres sem espaço
let desafio = "Bom dia Com Muita Alegria";
let solucaoDesafio = desafio.replace(/\s+/g, "");
console.log(desafio);
console.log(solucaoDesafio);
console.log(desafio.length);
console.log(solucaoDesafio.length); 
