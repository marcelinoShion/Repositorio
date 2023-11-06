let choiceText = document.querySelectorAll('.choiceText');
let choice = document.querySelectorAll('.cDiv');

let question = document.querySelector('.question');
let btnNext = document.querySelector('.nextQuestion');

let score = document.querySelector('.score');
let rBtn = document.querySelector('.returnBtn')

let passArr = JSON.parse(localStorage.getItem('passArr'))
let nameArr = JSON.parse(localStorage.getItem('nameArr'))
let user = localStorage.getItem('user') == '' ? 'Player' : localStorage.getItem('user')
console.log(user)

let arr = passArr
let name = nameArr
// indice das perguntas
let i = 0;

// implemntar loop for para pecorrer todo o hscore

//botão para proxima ação
btnNext.addEventListener("click",(e)=>{
    if (i < questions.length-1) {
        i +=1
        newQuestion()
        defaultColors()
        
    }
    
})





let url = 'question.json'
fetch(url).then((res)=>{
    return res.json();
}).then((data)=>{ 
    questions = data;
    gameStart();
    

}).catch((err)=>{
    console.log(err)
})


function gameStart(){
   choice.forEach((element,index)=>{
    element.addEventListener("click",(e)=>{
        
        if(index+1 == parseInt(questions[i].anwser)){
            choiceText[index].style.backgroundColor = "rgba(0, 255, 0, 0.466)" // resposta correta
            updateScore();
        }else{
            choiceText[index].style.backgroundColor = "rgba(255, 0, 0, 0.9)" // resposta errada
            findCorrectAnwser()
        }
        //visibilidade do botao
        if(questions[i + 1] == undefined){
            rBtn.style.visibility = "initial"
            passValue()
        }else{
            btnNext.style.visibility = "initial"

        }
        console.log(score.textContent)
         
        
        
    })
    newQuestion()
   })
    
    
}
// adicionando novas perguntas e respostas
function newQuestion(){
    rBtn.style.visibility = "hidden"
    btnNext.style.visibility ="hidden" // visibilidade do botao
    question.textContent =  questions[i].question
    choiceText[0].textContent = questions[i].choices[0].choice
    choiceText[1].textContent = questions[i].choices[1].choice
    choiceText[2].textContent = questions[i].choices[2].choice
    choiceText[3].textContent = questions[i].choices[3].choice
}

// para encontrar a verdadeira ao responder incorretamente
function findCorrectAnwser() {
    for (let index = 0; index < choiceText.length; index++) {
        if (index + 1 == parseInt(questions[i].anwser)) {
            choiceText[index].style.backgroundColor = "rgba(0, 255, 0, 0.466)"
            break
        }
    }
}


// ir para proxima questao

// deixar as cores como padrao
function defaultColors(){
    choiceText.forEach((e,index)=>{
        choiceText[index].style.backgroundColor ="whitesmoke"
    })
}


// atualizar a pontuação

function updateScore (){
    score.textContent = parseInt(score.textContent) + 1 ;
}

// Colocar o score na ordem

function passValue(){
    let sc = parseInt(score.textContent)

    for (let index = 0; index < arr.length; index++) {
        if(sc > arr[index]){
            let prev = arr[index]
            let prevname = name[index]
            name[index] = user 
            user = prevname 
            arr[index] = sc 
            sc = prev 
        }
        
    }
    localStorage.passArr = JSON.stringify(arr)
    localStorage.nameArr = JSON.stringify(name)
}