//adicionar elementos avançados com DOM
//construir um cabeçalho com DOM (Header)

let header = document.createElement("header")
header.style.backgroundColor = "black"
header.style.height = "8vh"
document.body.appendChild(header);
document.body.style.margin = "0"

//adicionar elementos no header

let divNav = document.createElement("div")
divNav.style.display = "flex"
divNav.style.justifyContent = "space-around"
divNav.style.color = "aliceblue"
divNav.style.width = "100%"
divNav.style.alignItems = "center"
divNav.style.fontSize = "5vh"
divNav.style.fontFamily = "comic sans MS"
header.appendChild(divNav)

let intensNav = ["Home", "Produtos", "Contato"]

//adicionar itens na Nav 

intensNav.forEach(Element => {
    let item = document.createElement("a")
    item.innerText = Element;
    divNav.appendChild(item);
})

//rodape

let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.height = "10vh";
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.width = "100%";
document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.display = "flex";
divFooter.style.justifyContent = "space-around";
divFooter.style.height = "9vh";
divFooter.style.width = "90%";
divFooter.style.margin = "0 auto";
divFooter.style.alignItems = "center";
divFooter.style.color = "aliceblue";
divFooter.style.fontSize = "1vh";
divFooter.style.fontFamily = "Comic Sans MS";
footer.appendChild(divFooter);


let menuFooter = ["End. Rua Senai, 1000", "Tel. 19-9999-99999", "Email: matheuscrippa@gmail.com", "@CopyRight 2025"];

menuFooter.forEach(item =>{
    let p = document.createElement("p");
    p.innerText = item;
    divFooter.appendChild(p);
});


//clonando elementos

let card = document.createElement("div");
card.classList.add("card");
card.style.width = "120px";
card.style.height = "200px";
card.style.backgroundColor = "blue";

let container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width = "90%";
container.style.flexWrap = "wrap";

//criar botão para clonar o card

let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar";
document.body.appendChild(btnClonar);
document.body.appendChild(container);
container.appendChild(card);

btnClonar.addEventListener("click", function(){
    let clone = card.cloneNode(true);
    container.appendChild(clone);
})

//criar chave para adicionar modo escuro

//criar chave para adicionar modo escuro
let chave = document.createElement("input");
chave.type = "checkbox";
chave.id = "darkMode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px";
document.body.appendChild(chave);
//criar um evento para adicionar o modo escuro
chave.addEventListener("change", () => {
    document.body.classList.toggle("darkMode");
})

//eventos avançados com DOM
//captura.ndo letra digitada => function
document.addEventListener("keydown", (event)=>{
    console.log("Tecla pressionada: " + event.key);

    
}) 

//função para sugestão de texto -> 
let input = document.createElement("input");
input.type = "text";
input.id = "busca";
input.placeholder = "Digite para buscar...";
document.body.appendChild(input);
//criar uma lista de sugestões
let lista = document.createElement("ul");
lista.id = "sugestoes";
lista.style.listStyle = "none";
document.body.appendChild(lista);
//criar um vetor de sugestões
let sugestoes = [
    "JavaScript", "Java", "Python", "C#", "PHP", "Dart", "Kotlin"
];

//evento para capturar o texto e sugerir
document.getElementById("busca").addEventListener("keyup", ()=>{
    let texto = input.value.toLowerCase();
    lista.innerHTML = "";
    sugestoes.forEach( sugestao => {
        if(sugestao.toLowerCase().includes(texto)){
            let item = document.createElement("li");
// selecionando item da lista click
            item.style.cursor = "pointer";
            item.addEventListener("click",()=>{
                input.value = sugestao;
                lista.innerHTML=""
            })
            item.innerText = sugestao;
            lista.appendChild(item);
        }
    });

})

//criação de formulario e evento de verificação 

let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form);
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu Nome";
inputNome.id = "nome";
form.appendChild(inputNome);
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Digite seu Email";
inputEmail.id = "email";
form.appendChild(inputEmail);
//botão de envio do form
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);
// adicionar um "p" para mostar as mensagens de validação do form
let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);

//evento de validação do formulário
document.getElementById("formCadastro").addEventListener("submit", (event) =>{
    event.preventDefault(); //não recarrega a tela
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");

    //condição
    if( nome ==="" || email ===""){
        mensagem.innerText = "Preencha Todos os Campos!";
        mensagem.style.color = "red";
    } else{
        mensagem.innerText = "Cadastro Realizado com Sucesso!!!";
        mensagem.style.color = "green";
        //limpar os campos
        nome = "";
        email = "";
    }
}); 
