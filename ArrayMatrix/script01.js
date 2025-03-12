//Metodos Avançados de Arrays
let numeros = [10, 20, 30, 40, 50];

//Map - percorre o array e realiza operações
let numerosDobro = numeros.map(x => x*2);
console.log(numerosDobro);

//Filter - percorrer e filtrar
let numerosFiltro = numeros.filter(x => x>25);
console.log(numerosFiltro);
//combinar filter com map
let numFiltroDobro = numeros.filter(x => x<35).map(x => x/10);
console.log(numFiltroDobro);

//redduce
let soma =numeros.reduce((x,y) => (x+y));
console.log(soma);
