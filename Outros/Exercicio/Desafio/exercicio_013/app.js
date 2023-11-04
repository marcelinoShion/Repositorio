/* ----------------------------------------------------------------------------

Exercício: 013
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. O texto deve apresentar uma numeração
    sequencial e depois de inserido, o input deve ser limpo e receber o focus para
    nova inserção.
---------------------------------------------------------------------------- */

let sequencial = 1
document.querySelector('.btn').addEventListener('click',()=>{
    let texto = document.querySelector('#text_post') 
    
    if ( texto.value !== ''){
        let p = document.createElement('p')
        p.textContent = sequencial+' '+ texto.value
        document.querySelector('#posts').appendChild(p)
        sequencial += 1
        texto.value = ''
        texto.focus()
    }
})

















