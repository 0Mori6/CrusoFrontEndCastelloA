// declaracao de variaveis e constantes

let nome = "João"; //String
nome = "José"; //reatribuição de valor let
 //let nome = "Pedro"; erro - erro não pode redeclarar

var idade = 25; //Numeric
idade = 26; //reatribuição de valor var
var idade = 30; //reatribuir

const PI = 3.1415; //Numeric
// PI = 3.1954; //erro - não pode reatribuir
let teste = true; //Boolean
var x = null; // null
var y = undefined; //undefined

console.log("nome: "+nome);
console.log("Idade: "+idade);
console.log("PI: "+PI);
console.log("Teste: "+teste);
console.log("Undefined: "+y);
console.log("Null: "+x);

// ===========================================================
// TIPOS DE OPERADORES

// operadores aritmeticos(+, -, *, /, %)
var a = 10;
var b = 3;
console.log("Soma: "+(a+b)); //13
console.log("Subtração: "+(a-b)); //7
console.log("Multiplicação: "+(a*b)); //30
console.log("Divisão: "+(a/b)); //3.33
console.log("resto: "+(a%b)); //1

// operadores relacionais (>,>=,<,<=,==,===)

var a = 10; //var numeric
var b = 20; //var numeric
var c = "10"; //var string

console.log("a>b: "+(a>b)); //comparação maior
console.log("a==c: "+(a==c)); //igualdade simples
console.log("a===c: "+(a===c)); //igualdade estrita

//operadores logicos (&& - E - || -  OU, ! - Não)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: "+(nota1>7 && nota2>7)); //false
console.log("Aprovação: "+(nota1>7 || nota2>7)); //true
console.log(!true); //false



