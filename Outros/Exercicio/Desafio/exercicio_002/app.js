/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */
let resultado =  document.querySelector('#valor')
let incremento = document.querySelector('#btn_incremento')
let decremento = document.querySelector('#btn_decremento')
let x = parseInt(resultado.textContent)
incremento.addEventListener('click',()=>{
    if(x < 10 ){
        x += 1
        resultado.textContent = x
        
    }
})
decremento.addEventListener('click',()=>{
    if(x > -10){
        x -= 1
        console.log(x)
        resultado.textContent = x
    }
})












