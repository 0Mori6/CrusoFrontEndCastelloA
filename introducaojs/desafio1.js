const prompt=require("prompt-sync")();

function verificarIdade(idade) {
    if (idade < 18) {
        return "Você é menor de idade.";
    } else if (idade >= 18 && idade <= 60) {
        return "Você é maior de idade.";
    } else {
        return "Você é idoso.";
    }
}

let idadeUsuario = prompt("Qual é a sua idade?");
idadeUsuario = parseInt(idadeUsuario);

if (isNaN(idadeUsuario)) {
    console.log("Por favor, insira um número válido para a idade.");
} else {
    console.log(verificarIdade(idadeUsuario));
}