function JurosSimples(capitalInicial,taxaDeJuros ,tempoDeAplicacao) {
    //para cada mes adicionar o total a pagar
    let total = capitalInicial* taxaDeJuros * tempoDeAplicacao
    return total + capitalInicial


}
function JurosCompostos(capitalInicial,taxaDeJuros ,tempoDeAplicacao) {
    let Montante = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
    Montante = parseFloat(Montante.toFixed(2))
    return Montante
}

console.log(JurosSimples(1000,0.03,10))

console.log(JurosCompostos(1000,0.03,10))












