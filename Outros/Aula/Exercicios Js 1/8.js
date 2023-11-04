function Comparar() {
    let pontuacoes = [10, 20 ,20 ,8 ,25 ,3 ,0 ,30 ,1]
    let numeroDeVezes = 0
    let maiorNumero = 0
    let piorResultado =  pontuacoes[0]
    for (i = 0 ; i < pontuacoes.length ; i++) {
        console.log(i)
        console.log('Poosicao'+ pontuacoes[i])
        switch (true) {
            case pontuacoes[i] > maiorNumero:
                maiorNumero = pontuacoes[i]
                numeroDeVezes += 1
                break;
            
            case pontuacoes[i] < piorResultado :
                piorResultado =  i
                
                console.log('pior'+ pontuacoes[i])
                break
        
            default:
                
                break;
        }
    }
    return `O recorde foi quebrado ${numeroDeVezes} e o pior resultado foi ${piorResultado}`
    
}
console.log(Comparar())












