function venda(fruta) {
    switch (true) {
        case fruta == 'maçã':
            console.log('Não vendemos essa fruta aqui ')
            break;
        case fruta =='kiwis':
            console.log('Estamos com escassez de kiwis')
            break;
        case fruta =='melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break;
            
    
        default:
            console.log('Erro')
            break;
    }
}



venda('ovo')