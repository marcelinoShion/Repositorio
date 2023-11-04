/* ----------------------------------------------------------------------------

Exercício: 004
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES
    
    Estão disponíveis três input ranges e respetivas áreas de apresentação dos valores.
    Criar os mecanismos que permitem visualizar os valores dos sliders.
    Todos os sliders devem variar entre 0 e 100. Essas propriedades devem ser
    definidas através do JavaScript.

---------------------------------------------------------------------------- */
let range1 = document.querySelector('#range_1')
let valor1 = document.querySelector('#value_1')

let range2 = document.querySelector('#range_2')
let valor2 = document.querySelector('#value_2')

let range3 = document.querySelector('#range_3')
let valor3 = document.querySelector('#value_3')

range1.addEventListener('input',()=>{
   
    let y = parseInt(range1.value) 
    if (y >= 0 && y <= 100){
        valor1.textContent = y
        
    }
    
    

})
range2.addEventListener('input',()=>{
    
    let y = parseInt(range2.value) 
    if (y >= 0 && y <= 100){
        valor2.textContent = y
        
    }
    
    

})
range3.addEventListener('input',()=>{
    
    let y = parseInt(range3.value) 
    if (y >= 0 && y <= 100){
        valor3.textContent = y
        
    }
    
    

})




























