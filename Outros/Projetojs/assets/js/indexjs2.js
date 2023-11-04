let transporte = {
    tipo : 'automovel',
    ano : 2012,
    marca : 'audi'
}


let transporte2 = {...transporte}
transporte2.marca = 'nissan'
console.table(transporte)
console.table(transporte2)

let link = document.querySelector('a')

link.setAttribute('target','_blank')


// novo documento
let novoElemento = document.createElement('p')
novoElemento.innerHTML = 'Texto de paragrafo'
document.body.appendChild(novoElemento)
// adicionar a um div
let div = document.querySelector('#elemento_1')
div.appendChild(novoElemento)

// criar um div 
let novoDiv = document.createElement('div')
novoDiv.classList.add('elemento')
novoDiv.setAttribute('id','element_4')

// titulo
let titulo = document.createElement('h1')
titulo.textContent = 'Titulo do elemento4'
novoDiv.appendChild(titulo)
document.body.appendChild(novoDiv)




















