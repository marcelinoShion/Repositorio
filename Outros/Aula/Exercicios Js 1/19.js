const pedido = (codico,quantidade) =>{
    const cardapio = [
        {codico:100 ,descricao: 'Cachorro Quente'  ,preco : 3.00},
        {codico:200 ,descricao: 'Hambúrger Simples',preco : 4.00},
        {codico:300 ,descricao: 'Cheeseburguer'    ,preco : 5.50},
        {codico:400 ,descricao: 'Bauru'            ,preco : 7.50},
        {codico:500 ,descricao: 'Refrigerante'     ,preco : 3.50},
        {codico:600 ,descricao: 'Suco'             ,preco : 2.80}
    ]
    const posicao = (codico/100) -1
    const total = cardapio[posicao].preco * quantidade
    switch (true) {
        case codico >= 100 && codico <= 600 :
            console.log(`R$ ${total}`)
            break;
    
        default:
            console.log('Produto inexistente')
            break;
    }

}
pedido(300,3)
//como no anterior














