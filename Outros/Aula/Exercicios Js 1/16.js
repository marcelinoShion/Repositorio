const calculadora = (num1,num2,operador)=>{
    switch (true) {
        case operador == '+':
            return num1 + num2
        case operador == '-':
            return num1 - num2
        case operador == 'x':
            return num1 * num2
        case operador == '/':
            return num1 / num2
        default:
            return 'Erro'
    }
}
console.log(calculadora(3,5,'+'))





