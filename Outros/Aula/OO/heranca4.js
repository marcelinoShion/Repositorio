function meuObjeto() {
    
}
console.log(meuObjeto.prototype)

const obj1  = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)


meuObjeto.prototype.nome = 'Anonimo'
meuObjeto.prototype.falar = function () {
    console.log(`Bom dia , meu nome é ${this.nome}`)
}
obj1.falar()
obj2.nome ='Rafael'
obj2.falar()
const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = "Obj3"
obj3.falar()













