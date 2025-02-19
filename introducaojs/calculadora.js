//criar uma calculadora simples em JS
//import da biblioteca
const prompt=require("prompt-sync")();

// funções - operações
//soma
function soma(a, b){
    return (a+b);
}
//subtração
function sub (a, b){
    return (a-b);
}
//multiplicação
function multi(a, b){
    return (a*b);
}
// divisão
function div(a, b){
    return (a/b);
}

//menu de operações
function menuOperacoes(){
    console.log("===Calculadora Simples===");
    console.log("| 1. Soma");
    console.log("| 2 Subtração");
    console.log("| 3 Multiplicação");
    console.log("| 4 Divisão");
    console.log("=========================");
    let operacao = prompt("Escolha a Operação Desejada: ");
    //entrada dos n°s
    let numero1 = Number(prompt("Digite nº 1: "));
    let numero2 = Number(prompt("Digite nº 2: "));
    let resultado;
    //condicional

    switch (operacao) {
        case "1":
            resultado = Soma(numero1, numero2);
            break;
        case "2":
            resultado = Sub(numero1, numero2);
            break;
        case "3":
            resultado = Multi(numero1, numero2);
            break;
        case "4":
            if(numero2==0){
                console.log("Não Dividirás por Zero!!!");
            resultado = null;
        }else{
            resultado=div(numero1, numero2);
        }
           break;
        default:
            console.log("Operação Invalida")
            break;
    }//fim  switch
    console.log ("Resultado: "+resultado);
}

//Execução do programa

var continuar = true;
while (continuar) {
    menuOperacoes();
    let sair = prompt("1. Continuar | 2. Sair | ");
    if (sair == "2") {
    continuar = false;
    console.log("Saindo...");
    }
}