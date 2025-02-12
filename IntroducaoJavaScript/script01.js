//tipo de operações

//operadores aritmeticos (+,-,*,/,%)
var a = 10;
var b = 3;

console.log("Soma: "+ (a+b));//13
console.log("Subitração: "+ (a-b));//7
console.log("Multiplicação: "+ (a*b));//30
console.log("Divisão: "+ (a/b));//3.333
console.log("Resto: "+ (a%b));//1

//operadores Relacionais (>,>+,<=,==,===)
//true ou falsa

var a = 10
var b = 20 
var c ="10"

console.log("Relacionais" + (A>b)); //false
console.log("Igualdade Simples" +(A==c)); //true
console.log("Igualdade Estrita" +(A===c)); //false

//operadores logicos (&& - E, || - OU, | - Não)
var nota1 = 5
var nota2 = 8

console.log("Aprovação: "+ nota1>7 && nota2>7); //false
console.log("Aprovação: "+ nota1>7 || nota2>7); //True
console.log(!false); //true