let confirmar = confirm('Voce deseja registrar um carro?') 
let carros = [];

function Carro(marca, modelo, ano, cor) { 
    this.marca = marca;
	this.modelo = modelo;
	this.ano = ano;
	this.cor = cor;
}

while(confirmar){ 
    let marca = prompt('Marca do carro') 
    let modelo = prompt('Modelo')
    let ano = Number(prompt('ano'))
    let cor = prompt('Cor')
    let carro = new Carro(marca,modelo,ano,cor)
    carros.push(carro); 
    confirmar = confirm('Voce deseja registrar outro carro?'); 
}

function calcularCarroMaisNovo(carro){
    carro.sort(function(a, b,) {
        return a.ano - b.ano 
    });
    
    let resultado = carro[carro.length - 1]; 
        return resultado;
}

function calcularCarroMaisVelho(carro){
    carro.sort(function(a, b) {
        return b.ano - a.ano
    });
    
    let resultado = carro[carro.length - 1]; 
    return resultado;
}

function MostrarTodosOsRegistros(carro){ 
  console.table(carro)
}

function MostrarCarroMaisNovo() { 
     let carroMaisNovo = calcularCarroMaisNovo(carros); 
     console.log(`O carro mais novo e: ${carroMaisNovo.marca}  Modelo:${carroMaisNovo.modelo} ano de fabicacao: ${carroMaisNovo.ano} cor: ${carroMaisNovo.cor}`); 
     return
    }

  function MostrarCarroMaisVelho() {
    let carroMaisVelho = calcularCarroMaisVelho(carros); 
    console.log(`O carro mais velho e: ${carroMaisVelho.marca} Modelo:${carroMaisVelho.modelo} ano de fabricacao: ${carroMaisVelho.ano} cor: ${carroMaisVelho.cor}`);
    return
 }
 
 carros.forEach(MostrarTodosOsRegistros);
 MostrarCarroMaisNovo();
 MostrarCarroMaisVelho();

