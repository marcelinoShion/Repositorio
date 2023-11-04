function diaUtil(dia) {
    let diasUteis = [2,3,4,5,6]
    let fimDeSemana = [1,7]
    
    switch (true) {
        case diasUteis.includes(dia):
            console.log('É um dia util')
            break;
        case fimDeSemana.includes(dia):
            console.log('É Fim de semana ')
            break;
        default:
            console.log('É um dia invalido')
            break;
    }
}
diaUtil(0)



