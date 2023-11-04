/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
let resultado = document.getElementById('valor')

let incremento = document.getElementById('btn_incremento')

let decremento = document.getElementById('btn_decremento')

let x = parseInt(resultado.textContent)



incremento.addEventListener('click',()=>{
    x += 1
    resultado.textContent = x
    if (x > 0) {
        resultado.style.backgroundColor =  `rgb(${0},${255},${0} )`
        resultado.style.color = 'white'
    } else if(x == 0){
        resultado.style.backgroundColor = `rgb(${255},${255},${255})`
        resultado.style.color = 'black'
        
    }else {
        resultado.style.backgroundColor = `rgb(${255},${0},${0} )`
        resultado.style.color = 'white'
    }
})
decremento.addEventListener('click',()=>{
    x -= 1
    resultado.textContent = x
    if (x > 0) {
        resultado.style.backgroundColor = `rgb(${0},${255},${0} )`
        resultado.style.color = 'white'
    } else if(x == 0){
        resultado.style.backgroundColor = `rgb(${255},${255},${255})`
        resultado.style.color = 'black'
    }else {
        resultado.style.backgroundColor =`rgb(${255},${0},${0} )`
        resultado.style.color = 'white'
    }
})










