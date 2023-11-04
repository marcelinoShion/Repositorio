const lerNumero = (num)=> {
    numero = ['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove','dez']
    switch (true) {
        case num  >= 0 && num <=10 :
            console.log('O numero é : ' + numero[num])
            break;
    
        default:
            console.log('Número fora do intervalo')
            break;
    }
}
lerNumero(5)