const aumentoDeSalario = (sal,aumento)=>{
    let salario = sal
    switch (true) {
        case aumento == 'A':
            salario = salario + (salario * 0.10)
            return `O salario é de ${salario}`
        case aumento == 'B':
            salario = salario + (salario * 0.15)
            return `O salario é de ${salario}`
        case aumento == 'C':
            salario = salario + (salario * 0.20)
            return `O salario é de ${salario}`
                
        default:
            return 'Plano invalido'
    }
}
console.log(aumentoDeSalario(1000,'A'))


















