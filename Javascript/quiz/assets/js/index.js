let name = document.querySelectorAll('#name');
let scrArr = document.querySelectorAll('#score');
let a = document.querySelector('.startBtn')
let input = document.querySelector('#inp')

let passArr = JSON.parse(localStorage.getItem('passArr'));
let nameArr = JSON.parse(localStorage.getItem('nameArr'))

let arr = passArr == null ? [0, 0, 0] : passArr
let narr = nameArr == null ? ['1st', '2nd', '3rd'] : nameArr

a.addEventListener("click", (e) => {
    localStorage.user = input.value
    input.value = ''
})


for (let index = 0; index < scrArr.length; index++) {
    scrArr[index].textContent = arr[index]
    name[index].textContent = narr[index]

}
passValue()

function passValue() {
    localStorage.passArr = JSON.stringify(arr)
    localStorage.nameArr = JSON.stringify(narr)

}