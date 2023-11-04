let section = document.querySelector('section')
let botao = document.querySelector('section button')
let opcao = 0
botao.classList.add('btnEscuro')
botao.addEventListener('click',()=>{
    //mudar de cor ao clicar
    //colocar um contador e resertalo ao chegar a 3
    //o botao tem mudar de cor tambem
    
    if (opcao == 3) {
        opcao = 0
    }
    if(opcao == 0) {
        section.classList.remove('dark')
        section.classList.add('light')
        botao.classList.remove('btnClaro')
        botao.classList.add('btnEscuro')
    }
    else if (opcao == 1) {
        section.classList.remove('light')
        section.classList.add('gray')
        botao.classList.remove('btnEscuro')
        botao.classList.add('btnClaro')
    }
    else if (opcao == 2) {
        section.classList.remove('gray')
        section.classList.add('dark')
    }
    else {
        console.log('Ocorreu um erro')
    }
    opcao ++
    console.log(opcao)
    //remover a classe anterior e subistuir por uma nova 
    
    console.log('Clicou')
})
botao.addEventListener('mouseenter',()=>{
    console.log('Entrou')
})
botao.addEventListener('mousemove',()=>{
    console.log('Moveu-se')
})
botao.addEventListener('mouseleave',()=>{
    console.log('Saiu')
})



