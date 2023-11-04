/* ----------------------------------------------------------------------------

Exercício: 014
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. 
    Depois da inserção com sucesso, o input deve ser limpo e receber o focus para
    nova inserção.
    Não são permitidas as palavras "teste", "obrigado" e "hoje"
---------------------------------------------------------------------------- */
let sequencial = 1
let palavrasBloqueadas = ['teste','obrigado','hoje']
let validar = 0
document.querySelector('.btn').addEventListener('click',()=>{
    let texto = document.querySelector('#text_post')
    if ( texto.value !== '' && !palavrasBloqueadas.includes(texto.value) ){
        let p = document.createElement('p')
        p.textContent = sequencial+' '+ texto.value
        document.querySelector('#posts').appendChild(p)
        sequencial += 1
        texto.value = ''
        texto.focus()
    }
    
    
})









