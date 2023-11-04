/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */
let info1 = document.getElementById('info1')
let info2 = document.getElementById('info2')
let info3 = document.getElementById('info3')

let tab1 = document.querySelector('#tab1')
let tab2 = document.querySelector('#tab2') 
let tab3 = document.querySelector('#tab3')

tab1.addEventListener('click',()=>{
    info1.style.display = 'block'
    info2.style.display = 'none'
    info3.style.display = 'none'
})

tab2.addEventListener('click',()=>{
    info2.style.display = 'block'
    info1.style.display = 'none'
    info3.style.display = 'none'
}) 
tab3.addEventListener('click',()=>{
    info3.style.display = 'block'
    info1.style.display = 'none'
    info2.style.display = 'none'
})



























