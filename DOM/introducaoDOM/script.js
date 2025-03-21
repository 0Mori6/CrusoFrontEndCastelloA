// Introdução ao estudo DOM

// Selecionar e modificar elementos

// getElementById -> variavel simples
let titulo = document.getElementById("titulo");
console.log(titulo);// ver o elemento
titulo.innerText = "Outro Titulo";// modificar o texto

//getElementByClassName -> Vetor(array)
let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);
descricao[1].innerText = "Outro texto";
descricao[0].style.color = "red";

//getElementsByTagName -> Vetor(array)
let P = document.getElementsByTagName("P");
console.log(P[1]);
P[1].style.fontWeight = "bold";

//QuerrySelector -> variavel simples
let paragrafo = document.querySelector("P");
console.log(paragrafo);
paragrafo.style.fontSize = "40px";

//Querry selectorAll => vetor(array)
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => element.style.color="green");


    
// lançamento de eventos(EventListener)

function mudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

//2 - adicionando o ouvinte(addEventListener)
document.querySelector(".btn").addEventListener(
    "click",outraCorFundo
);

function outraCorFundo(){
    document.body.style.backgroundColor = "orange";
}
