const automoveis = (carro)=>{
    let outrosModelos = ['sedan','motocicleta' ,'caminhonete']
    switch (true) {
        case carro == 'hatch' :
            return "Compra efetuada com sucesso"
        case outrosModelos.includes(carro):
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(automoveis('sedan'))






