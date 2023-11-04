//coleção dinâmica de pare chaves / valor 
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220


console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

//mais complexo
const carro = {
    modelo:'A4',
    valor : 89000,
    proprietarios: {
        nome : 'Raul',
        idade : 56 , 
        endereco : {
            logradouro :'Rua ABC',
            numero :123
        }

    },
    condutores: [{
        nome : 'Junior',
        idade : 19
    }, {
        nome : 'Ana',
        idade :42
    }],
    calcularValorSeguro : function () {
        //////
    }
}
carro.proprietarios.endereco.numero = 1000
carro['proprietarios']['endereco']['logradouro'] ='Av Gigante'

console.log(carro.proprietarios)
delete carro.condutores 
delete carro.proprietarios.endereco
delete carro.calcularValorSeguro

console.log(carro)








