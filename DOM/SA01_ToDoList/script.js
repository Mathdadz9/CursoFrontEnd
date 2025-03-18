// Script para Lista de tarefas -> DOM

document.body.style.backgroundColor = "black";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial"
let container = document.querySelector(".container")
container.style.width = "50%";
container.style.backgroundColor = "gray";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px";
let tarefa = document.getElementById("tarefa");
tarefa.style.width = "50%";
tarefa.style.padding = "5px";
tarefa.style.borderRadius = "8px";
let btnenviar = document.getElementById("btnenviar")
btnenviar.style.padding = "6px 8px"
btnenviar.style.border = "none";
btnenviar.style.borderRadius = "7px";
btnenviar.style.background = "green";
btnenviar.style.color = "aliceblue";
btnenviar.style.cursor = "pointer";



  

// logica de funcionamento da lista de tarefa 

//criar ouvinte para tarefa
btnenviar.addEventListener(
    "click", criarTarefa
);

function criarTarefa(){
     let texto = tarefa.value.trim();
     if(texto === ""){
        return;
     }
     //se nn estiver vazio
     let li = document.createElement("li");
     li.innerHTML =  texto+'<button onclick="removeTarefa(this)" class="btnRemove">Remover</button>'
    //adicionar li -> ul
    let ul = document.getElementById("listaTarefas");
    ul.appendChild(li);
    tarefa.value = "";
}


function MudarCorFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "White"
}

function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "gray"
}

//function remover 

function removeTarefa(botao){
    botao.parentElement.remove();

}
