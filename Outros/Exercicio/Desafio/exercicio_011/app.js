/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezasseis imgs sem souce.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */
// let filled_imgs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// let symbol = "x"
// document.querySelectorAll('[id^="img"]').forEach(img => {
//     img.addEventListener('click',img =>{
//         let index = img.target.id.substring(3)
//         place_symbol(index)
//     })
// })
// function place_symbol(index){
//     if (filled_imgs[index-1]!= 0) return
//     document.querySelector('#img'+index).setAttribute('src','./' + symbol + '.png')
//     filled_imgs[index - 1] = 1
//     if (symbol == 'x'){
//         symbol = 'o'
//     } else {
//         symbol = 'x'
//     }
// }


let filled_imgs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let simbolo = 0 
let img = document.querySelectorAll('[id^="img"]')
for (let index = 0; index < img.length; index++) {
    const imagem = img[index];
    imagem.addEventListener('click',()=>{
        if (filled_imgs[index] == 0){
            
            console.log(simbolo)
            if (simbolo == 0){
                imagem.style.backgroundImage = "url('x.png')";
                filled_imgs[index] = 1
                console.log(filled_imgs)
                simbolo += 1
            }else{
                imagem.style.backgroundImage = "url('o.png')";
                filled_imgs[index] = 1
                console.log(filled_imgs)
                simbolo -= 1
            }

        }
    
    })

}


























