//adicionar elementos avançados com DOM
//construir u cabeçaljo com DOM (HEADER)

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