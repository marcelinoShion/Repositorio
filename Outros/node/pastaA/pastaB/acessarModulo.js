const moduloA = require ('../../moduloA')
console.log(moduloA.ola)



const saudacao = require('saudacao')
console.log(saudacao.ola)

console.log('olaaa')
const http = require ('http')
http.createServer((req,res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080) // localhost:8080
