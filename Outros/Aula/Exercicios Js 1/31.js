const vetor  = [-9,10,11,12,13,14,-15,-16,17,18,-19,20,21]
let quantidade = 0

for (let index = 0; index < vetor.length; index++) {
    if (vetor[index]< 0) {
        quantidade += 1
    }
    
}
console.log(quantidade)


