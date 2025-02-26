//Fuções de texto (string)

let texto ="Aula de JavaScript";

//contar os caracteres (length)
console.log(texto.length); //18

//maiusculas e minusculas
console.log(texto.toUpperCase()); //maiusculas
console.log(texto.toLowerCase()); //minusculas

// partes do texto
// substring (inicio, fim)
console.log(texto.substring(0,4)); //aula
//slice(Quantidade)
console.log(texto.slice(-10));

//substiruir parte do texto
console.log(texto.replace("Java", "Type"));

//tesoura (Trim)
let texto1 ="  javaScript  ";
console.log(texto1); //"  JavaScript  "
console.log(texto1.trim());

//separar texto (split) caracter comum
let linguagens = "JavaScript, Python, PHP, Java, C#";
let vetorlinguagens = linguagens.split(", ");
console.log(linguagens);
console.log(vetorlinguagens);

//desafio
let caracter = "Bom Dia Com Muita Alegria";
let caracterSemEspaco = caracter.replaceAll(" ", "");
console.log(caracter);
console.log(caracter.length);
console.log(caracterSemEspaco);
console.log(caracterSemEspaco.length);