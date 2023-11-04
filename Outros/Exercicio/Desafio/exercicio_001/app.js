/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */
let resultado = document.getElementById('valor')
let x = parseInt(resultado.textContent)

let decremento = document.getElementById('btn_decremento')
let incremento = document.getElementById('btn_incremento')

incremento.addEventListener('click',()=>{
    x += 1
    resultado.textContent = x
})
decremento.addEventListener('click',()=>{
    x -= 1
    resultado.textContent = x
})




















