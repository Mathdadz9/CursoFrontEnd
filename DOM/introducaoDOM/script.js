//Script de Manipulação DOM

//getElementByid -> variavel simples
let titulo = document.getElementById("titulo"); //html -> id 
console.log(titulo); //Mostra as informações da id
titulo.innerText = "Outro titulo"; //Modificar o conteudo da Id

//getElementsByTagName -> Variavel Vetor(Array)
let paragrafo = document.getElementsByTagName("p"); //html -> p
//Modificar Elemento
paragrafo[0].innerText = "Exemplo de Paragrafo modificado por Dom"
//Modificar style do elemento
paragrafo[1].style.color = "green";

//getElementByClassName -> variavel Vetor(Array)
let descricao = document.getElementsByClassName("descricao")
//modificar elementos da array
for(let i = 0; i<descricao.length; i++){
    descricao[i].style.color ="Blue";
}

//querySelector -> Variavel Simples
let p = document.querySelector("p");
//modificação 
p.style.fontWeight = "bold";

//querySelectorAll -> Variavel Vetor
let descricaoAll = document.querySelectorAll(".descricao")
descricaoAll.forEach(element => {
    element.style.fontWeight = "bold"
    
});

//eventos listener(ouvinte)
function MudarCorFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "black"
}

//Chamando direto no script o ouvinte
document.getElementById("btnColor").addEventListener(
    "click",OutraCor
)
function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "gold"
}
