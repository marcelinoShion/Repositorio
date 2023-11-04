// variaveis
let btnCadastrar = document.querySelector('#cadastrarBtn')
let btnEntrar = document.querySelector('#entrarBtn')
let entrar = document.querySelector('#formulario2')
let cadastro = document.querySelector('#formulario') 

let sair = document.querySelector('#sair')
let sair2 = document.querySelector('#sair2')


//---------------------------------//

//------------Eventos--------------//
//Evento cadastrar
btnCadastrar.addEventListener('click',()=>{
    cadastro.style.visibility = 'visible'
    entrar.style.visibility= 'hidden'
    sair.addEventListener('click',()=>{
        cadastro.style.visibility= 'hidden'
    })//Ao fechar apara o conteudo do formulario
})
//Evento entrar
btnEntrar.addEventListener('click',()=>{
    entrar.style.visibility = 'visible'
    cadastro.style.visibility= 'hidden'
    sair2.addEventListener('click',()=>{
        console.log('clickou')
        entrar.style.visibility= 'hidden'
    })   
})
// ------------------------------------------//


//---------Envio de dados--------//
let btnCadastro = document.querySelector('#cadastro')
let nome = document.querySelector('#usuario')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let usuariosSalvos = []


btnCadastro.addEventListener('click',()=>{
    while (true) {
        if(nome.value == '' || email.value == '' || senha.value == ''){
            console.log('é necessario preencher os campos')//funcionando
            let div = document.querySelector('#divCadastro')
            let p = document.createElement('p')
            p.innerHTML = 'Preencha os campos'
            p.style.color = `red`
            p.style.fontSize = '0.8em'
            p.style.marginTop = '0px'
            div.append(p)
            setTimeout(function (){
                p.remove()
            },2500)
            break
            
        }
        if (!email.value.includes('@')){
            console.log('necessita de arroba')//funcionando 
            let div = document.querySelector('#divEmail')
            let p = document.createElement('p')
            p.innerHTML = 'Insira um email valido'
            p.style.color = `red`
            p.style.fontSize = '0.8em'
            p.style.marginTop = '0px'
            div.append(p)
            setTimeout(function (){
                p.remove()
            },2500)
            break
        }
        if(senha.value.length < 6){
            console.log('senha muito curta')//funcionando
            let div = document.querySelector('#divSenha')
            let p = document.createElement('p')
            p.innerHTML = 'Senha muito curta'
            p.style.color = `red`
            p.style.fontSize = '0.8em'
            p.style.marginTop = '0px'
            div.style.zIndex = 1
            div.append(p)
            setTimeout(function (){
                p.remove()
            },2500)
            break
        }
        let validar = validarEmail(usuariosSalvos,email)
        console.log(usuariosSalvos)
        if(validar == true){
            let usuario1 = new usuario(nome.value,email.value,senha.value)
            console.log(usuario1)
            usuariosSalvos.push(usuario1)
            nome.value = ''
            email.value =''
            senha.value =''
            cadastro.style.visibility = 'hidden' 
            entrar.style.visibility = 'visible'
        break
        }else{
            console.log('email ocupado')
            let div = document.querySelector('#divEmail')
            let p = document.createElement('p')
            p.innerHTML = 'Alguem esta usando este Email'
            p.style.color = `red`
            p.style.fontSize = '0.8em'
            p.style.marginTop = '0px'
            div.append(p)
            setTimeout(function (){
                p.remove()
            },2500)
            break
        }
        
    //----limpando o formulario//
    }
})
function usuario(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    
}
function validarEmail(usuariosSalvos,email){
    for (const usuario of usuariosSalvos) {
        console.log('usuario email'+ usuario.email)
        console.log('nome ' + email.value)
        if (usuario.email == email.value){
            return false

        }
        
        
    }
    return true
}








//------------------Login------------------
let btnLogin = document.querySelector('#login')
let usuario2 = document.querySelector('#usuario2')
let senha2 = document.querySelector('#senha2')

//compara com a array de nomes
// se o nome nao  estiver pular para proxima interacao
// se estiver retornar nome

btnLogin.addEventListener('click',()=>{
    if (usuario2.value !== '' && senha2.value !== '') {
        let encontrar = encontrarUsuario(usuario2,senha2,usuariosSalvos)
        console.log(encontrar)
        if (encontrar == 'Encontrado'){
            let titulo = document.querySelector('#titulo')
            console.log(usuario2.value) // ha um erro aqui
            titulo.innerHTML += usuario2.value
            entrar.style.visibility= 'hidden'
            btnEntrar.remove()
            btnCadastrar.remove()
        }else{
            let div = document.querySelector('#divlogin')
            let p = document.createElement('p')
            p.innerHTML = 'Usuario ou senha incorretos'
            p.style.color = `red`
            p.style.fontSize = '0.8em'
            p.style.marginTop = '10px'
            div.append(p)
            setTimeout(function (){
                p.remove()
            },2500)
           
        }
    } else {
        console.log('preencha os campos corretamente')
    }
    
})

function encontrarUsuario(usuario2,senha2,usuariosSalvos) {
    while (true) {
        let x = 'a'
        for (const usuario of usuariosSalvos) {
            console.log(usuario.nome)
            console.log(usuario.senha)
            console.log(usuariosSalvos)
            if (usuario.nome == usuario2.value && usuario.senha == senha2.value){
                return x = 'Encontrado'
                
            }  
        }
        console.log('Erro em encontrar usuario')
        break
    }
 }


 let usuarioTeste = new usuario('marco','marco@mail','123456') 
usuariosSalvos.push(usuarioTeste)
let usuarioTeste2 = new usuario('marcos','marco@mail','123456') 
usuariosSalvos.push(usuarioTeste2)






