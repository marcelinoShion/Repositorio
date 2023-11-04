const moduloA = require('./moduloA')
const moduloB = require('./moduloB')
const moduloC = require('./moduloC.js')()
const contador = require('./moduloC.js')()

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

moduloC.inc()
moduloC.inc()
console.log(moduloC.valor,contador.valor)
