const tagsEl = document.querySelector(".tags")
const textarea = document.getElementById("textarea")

textarea.focus()

textarea.addEventListener("keyup",(e)=>{
    createTags(e.target.value)
    if(e.key == "Enter"){
        setTimeout(()=>{

        },10)
        randomSelect()
        console.log("ola")
    }
})
function createTags(input){
    const tags = input.split(",").filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())
    tagsEl.innerHTML = ''
    
    tags.forEach(tag =>{
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}
function randomSelect(){
    const times = 30 
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()
        console.log(randomTag)
        hightlightTag(randomTag)
        setTimeout(()=>{
            unHightlightTag(randomTag)
        },100)
    },100)
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag = pickRandomTag()

            hightlightTag(randomTag)
            
        },100)
    },times *100)
  
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function hightlightTag(tag){
    tag.classList.add("highLight")
}
function unHightlightTag(tag){
    tag.classList.remove("highLight")
}






