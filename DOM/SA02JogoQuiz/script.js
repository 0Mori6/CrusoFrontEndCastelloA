//DOM -> Jogo Quiz interativo

let perguntas = [];
let proximaPergunta = 0;

//DOM -> elementos

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let respostaElement = document.getElementById("resposta");

//fetch -> pegar as perguntas Json
fetch("perguntar.json")
    .then(response => response.json())
    .then(data => {
        perguntas = data;
        carregarPerguntas();//função para carregar no html
    })

    //DOM -> funcoes
    function carregarPerguntas(){}
