const divisor3 = (num)=>{
    let numero = num
    while (numero => 3) {
        numero = numero /3
        console.log(numero) 
        if (numero == 1 ){
            return true
        }
        if(numero < 1 ){
            return false
        }
    } 
    
}
console.log(divisor3(81))

function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))