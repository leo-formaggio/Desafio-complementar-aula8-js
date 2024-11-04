// Simulando objetos
class veiculo {
    constructor (marca , modelo, ano, combustivel, tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.combustivel = combustivel;
        this.tipo = tipo;
    }

    descricao() {
        alert(` Marca -> ${this.marca} \n Modelo -> ${this.modelo} \n Ano -> ${this.ano} \n Combustível -> ${this.combustivel} \n Tipo -> ${this.tipo}`)
    }
}

const carro1 = new veiculo("Ford", "Mustang", "1967", "Gasolina", "Coupe");
const carro2 = new veiculo("Toyota", "Hilux", "2024", "Diesel", "Offroad");
const carro3 = new veiculo("Audi", "RS6", "2022", "Gasolina", "Perua");
const carro4 = new veiculo("Volvo", "XC40", "2023", "Híbrido", "SUV");

carro1.descricao();
carro2.descricao();
carro3.descricao();
carro4.descricao();