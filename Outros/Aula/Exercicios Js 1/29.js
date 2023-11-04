const vetor  = [9,10,11,12,13,14,15,16,17,18,19,20,21]
let dentro = 0
let  fora = 0
for (let index = 0; index < vetor.length; index++) {
   if (vetor[index] >= 10 && vetor[index] <= 20) {
    dentro +=1
   }else{
    fora += 1
   }
}
console.log(`O total dos numeros que estao dentro ${dentro} e os de fora ${fora}`)























