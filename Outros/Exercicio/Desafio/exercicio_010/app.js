/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */
let boxes = document.querySelectorAll('[id^="box"]')
boxes.forEach(box => {
    console.log(box)
    box.addEventListener('click',(box)=>{
        console.log('click')
        all_red()
        box.target.style.backgroundColor ='yellow'
    })
    
});
function all_red(){
    boxes.forEach(box =>{
        box.style.backgroundColor = 'red'
    })
}
















