class Avo {
    constructor(sobrenome = 'Silva',corDoCabelo = 'preto'){
        this.sobrenome = sobrenome
        this.corDoCabelo = corDoCabelo
    }
}
class Pai extends Avo {
    constructor(sobrenome,profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}
class Filho extends Pai{
    constructor(){
        super()
    }
}
const filho = new Filho
console.log(filho)



















