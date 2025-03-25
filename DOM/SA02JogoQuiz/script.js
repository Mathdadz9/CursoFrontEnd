// script para as perguntas do quiz

let perguntas = [];
let perguntasAtual = 0;
let perguntaElemento = document.getElementById("pergunta");
let opcoesElemento = document.getElementById("opcoes");
let proximaElemento = document.getElementById("proxima");
let resultadoElemento = document.getElementById("resultado");

//carregar as perguntas do Arquivo Json 
fetch("perguntas.json").then((respose => Response.json())).then(data => {
    perguntas = data;
    carregarPergunta();
}).catch(error => console.error("error ao carregar perguntas", error));