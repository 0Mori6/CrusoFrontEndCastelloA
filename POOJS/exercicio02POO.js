class Veiculo {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInfo(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano);
        this.portas = portas;
    }
    
    exibirInfo(){
        super.exibirInfo();
        console.log(`Portas: ${this.portas}`);	
    }
}

let carro1 = new Carro("Honda", "Civic", 2022, 4);
carro1.exibirInfo();

