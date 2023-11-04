console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


String.prototype.a = function() {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.a())


Array.prototype.first = function(){
    return this[0]
}
console.log([1,2,3,4,5].first())
console.log(['a','b','c','d','e'].first())

String.prototype.toString = function() {
    return 'lascou tudo'
}
console.log('Escola Cod34'.a())







