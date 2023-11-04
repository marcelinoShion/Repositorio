/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */
let range = document.getElementById('range')
range.setAttribute('min',0)
range.setAttribute('max',100)
range.value = 0


range.addEventListener('input',()=>{
    let h3 = document.querySelector('h3')
    h3.style.opacity = 1 - range.value/100 
    console.log(range.value)
    
})

















