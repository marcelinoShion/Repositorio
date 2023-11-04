const fabricantes = ['Mercedes','Audi','BMW']
function imprimir(nome,indice) {
    console.log(`${indice + 1 }. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante,indice = 0,arr)=> {
 console.log(`${indice + 1}. ${fabricante}       Todos: ${arr}`)
} )