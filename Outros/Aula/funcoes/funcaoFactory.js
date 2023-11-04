function criarProduto(nome,preco) {
    return{
        nome,
        preco,
        desconto:0.1
        
    }
}
let novo = criarProduto('Celular',1359.99)
console.log(novo)
console.log(criarProduto('Notebook',2199.49))    
console.log(criarProduto('iPad',1199.49))





















