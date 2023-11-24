const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");

const sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "asdfghjklqwertyuiopzxcvbnmZXCVBNMASDFGHJKLQWERTYUIOP1234567890@#$!";
let novasenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value ;
}

function generatePassword(){
    let pass =""
    for(let i = 0 ; i < sliderElement.value ; i++){
        pass += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    novasenha = pass
}
function copyPassword(){
    alert("Senha copiada com Sucesso")
    navigator.clipboard.writeText(novasenha)
}