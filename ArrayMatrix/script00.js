//arrays and matrix (vetores e matrizes)
//declarar um array => []
let array = [];
let numberArray = [1,2,3,4,5,6,7,8,9];
let textArray = ["Sapato", "bola", "Caixa"];
let mixArray = [1, "Nome", true];

//como para acessar os elementos (indice)
console.log(textArray[1]); //Bola
console.log(numberArray[8]); //9

//contar elementos de um array
console.log(numberArray.length); //9
console.log(textArray.length); //3

//adicionar elementos em um array
//no começo (0) unshift
textArray.unshift("Cachorro");
console.log(textArray);
//no final - push()
textArray.push("Casa");
console.log(textArray);

//alterar o valor de um elemento do array
textArray[2] = "Carro";
console.log(textArray);

//remover elementos do array
//do começo - shift
textArray.shift(); //cachorro
console.log(textArray);
//do meio - splice(indice e quantidade)
textArray.splice(1,1); //carro
console.log(textArray);
//do fim
textArray.pop(); //casa
console.log(textArray);

// percorrer um array
for(let i=0; i<numberArray.length;i++) {
    console.log(
        "Numero["+i+"]="+numberArray[i]
    );
}
//forEach
numberArray.forEach(x => {
    console.log(x)
});


//indexOf=>retorna o indice do elemento
console.log(mixArray.indexOf("Nome"));
console.log(numberArray.indexOf(10));