let num = document.querySelectorAll("#num")
let res = document.querySelector("#res")
let ft = document.querySelector("#float")

let remove = document.querySelector("#ce")
let operator = document.querySelectorAll("#operator")
let getRes = document.querySelector("#getRes")

let clear = document.querySelector("#Clear")
//togglers
let notDot = true
let cal= false
let toggler = false
//armazenamento temporario
let temp = []

// funcção de calcular 
function calculate (array , value){
    let x = parseFloat(array[0])
    let y = parseFloat(value)
    switch (true) {
        case array[1] == 0:
            res.textContent =  x / y
            break;
        case array[1] == 1:
            res.textContent =  x * y
            break;
        case array[1] == 2:
            res.textContent =  x - y
            break;
        case array[1] == 3:
            res.textContent =  x + y
            break;
        default:
            console.log("Error function calculate")
            break;
    }
}
function checkLength (){
    let arr = res.textContent.split("")
    return arr.length >=  16 ? false : true
}


// adicionando numeros
num.forEach((n)=>{
    n.addEventListener("click",(e)=>{
        if(res.textContent == '0' || toggler == true ){
            res.textContent = n.textContent
            toggler = false
        }else{
            if(checkLength()){
                res.textContent += n.textContent
                res.textContent = res.textContent.split(' ').join('')
            }
            
        }
        
    })
})

ft.addEventListener("click",(e)=>{
    if(notDot){
        res.textContent  += ft.textContent
        notDot = false
    }
})

// apagando numeros 
remove.addEventListener("click",(e)=>{
    let array = res.textContent.split('')
    array[array.length-1] = ''
    res.textContent = array.join('')
    if(res.textContent == ''){
        res.textContent = '0'
    }
    
})
// apagando tudo 
clear.addEventListener("click",(e)=>{
    res.textContent = '0'
})

// operações
operator.forEach((op,index)=>{
    op.addEventListener("click",(e)=>{
        if(cal){
            calculate(temp,res.textContent)
            cal = false
            temp = []
        }else{
            temp.push(res.textContent)
            temp.push(index)
            console.log(temp)
            toggler = true
            cal = true
        }
    })
})

// obter resultado

getRes.addEventListener("click",(e)=>{
    if(cal){
        calculate(temp,res.textContent)
        cal = false
        temp = []
    }
})








