// script para as perguntas do quiz

let perguntas = [];
let perguntaAtual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let resultadoElement = document.getElementById("resultado");

//carregar as perguntas do Arquivo Json
fetch("perguntas.json")
.then(response => response.json())
.then(data =>{
    perguntas = data;
    carregarPerguntas();
}).catch(error => console.error("Erro ao carregar perguntas: ", error));

//criar a função para carregar as Perguntas no Html
function carregarPerguntas(){
    resultadoElement.innerText = "";
    proximaElement.disabled = true;

    if(perguntaAtual>=perguntas.length){// quando o index for maior ou igual ao nº perguntas
        perguntaElement.innerText = "Quiz Finalizado!";
        opcoesElement.innerHTML = "";
        proximaElement.style.display = "none";
        return;
    }
    //escrever código para mostrar as perguntas
    let p = perguntas[perguntaAtual];//colegação referente ao índice
    perguntaElement.innerText = p.pergunta;
    opcoesElement.innerHTML = "";
    //preencher as opções
    p.opcoes.forEach( opcao => {
        let btnOpcao = document.createElement("button");
        btnOpcao.innerText = opcao;
        btnOpcao.classList.add("opcao"); //classe opcao -> style
        btnOpcao.addEventListener("click",() => verificarResposta(opcao, btnOpcao));
        opcoesElement.appendChild(btnOpcao);
    });

// função apra verificar as respostas
function verificarResposta(opcao,btnOpcao){
    let respostaCorreta = perguntas[perguntaAtual].resposta;

    if(opcao === respostaCorreta){
        btnOpcao.classList.add("correta");
        resultadoElement.innerText = "Correto!!!";
    }else{
        btnOpcao.classList.add("errado");
        resultadoElement.innerText = "Errado!! A resposta Correta é "+respostaCorreta;
    }
    //configuração para desabilitat os botões
    document.querySelectorAll(".opcao").forEach( botao => botao.disabled = true);
    proximaElement.disabled = false;  
} //fim da função verificarResposta

// adicionar evento para o botão da próxima pergunta

proximaElement.addEventListener("click", () => {
    perguntaAtual++;
    carregarPerguntas();
});
}