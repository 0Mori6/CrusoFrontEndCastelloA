//situação de aprendizagem 01 - Array e matrix
//calculadora de media
const prompt = require("prompt-sync")();

var notas = []; //declaração de um vetor

//função para adicionar nota -> media
function adicionarNota(){
    let nota = Number(prompt("Informe a Nota "))
    notas.push(nota);
    console.log("nota Adicionada com Sucesso");
}
//função para calcular a media
function calcularMedia(){
    if(media.length === 0) return;
    let soma = media.reduce((x,y)=>x+y);
    let mediaFinal = soma/notas.length;
    consol.log("A média é "+mediaFinal);
}

//menu de opçãoes 
    function menuOpcoes() {
    let continuar = true;
    while (continuar) {
    console.log("===Calculadora Média===");
    console.log("|1. Adicionar Nota     ");
    console.log("|2. Calcular Média     ");
    console.log("|3. Sair               ");
    console.log("=======================");
    let operacao = prompt("Informe a Opção Desejada")
    switch(operacao){
        case "1": adicionarNota();break;
        case "2": calcularMedia();break;
        case "3": continuar = false;break;
        default: console.log("Opção Invalida");break;
    }//fim do switch
}//fim do while
    console.log("Saindo...");
}

menuOpcoes();