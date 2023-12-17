const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData,2500)

function getData(){
    header.innerHTML = ' <img src="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">'
    title.innerHTML = 'Lorem ipsum dolor it amet'
    excerpt.innerHTML ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione s'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg">'
    name.innerHTML = 'Jhon Doe'
    date.innerHTML = 'Oct 08 , 2020'

    animated_bgs.forEach(bg =>{
        bg.classList.remove('animated-bg')
    })
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
