

function mostrarConteudo() {
    const titulo = document.querySelector('h1');
    const paragrafo = document.querySelector('p');
}

document.getElementById("btnColor").addEventListener(
    "click",OutraCor
)
function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "gold"
}

function MudarCorFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "red"
}


function alterarTexto() {
    const titulo = document.querySelector('h1');
    const paragrafo = document.querySelector('p');
    titulo.innerText = 'Exercicio DOM';
    paragrafo.innerText = 'Parágrafo alterado!';
}

titulo.classList.add("descricao")
document.querySelector(".descricao").style.color = "blue" 
 
document.getElementById("btnAlterarClasse").addEventListener("click", function() {
    titulo.classList.toggle("titulo-modificado");
});

let descricaoAll = document.querySelectorAll(".descricao")
descricaoAll.forEach(element => {
    element.style.fontWeight = "bold"
    
});