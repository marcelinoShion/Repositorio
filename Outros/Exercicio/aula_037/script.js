/* 
OBJETIVO:
Ao clicar no botão, alterar a cor de fundo da caixa para aquamarine,
apresentar o texto 'clique' na consola e
remover o evento click do botão
*/
let botao = document.querySelector('button')
let divisoria = document.querySelector('div')
/*function adicionar (){
    divisoria.classList.add('cor-fundo-caixa')
    console.log('clique')
    botao.removeEventListener('click',adicionar)
}*/
botao.addEventListener('click', ()=>{
    divisoria.classList.add('cor-fundo-caixa')
    console.log('clique')
    //botao.removeEventListener('click',e)
},{once : true})