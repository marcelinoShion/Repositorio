const addBtn = document.getElementById('add')
console.log(addBtn)
addBtn.addEventListener('click', () => addNewNote("Hello"))

const notes = JSON.parse(localStorage.getItem('notes'))
if(notes){
    notes.forEach(note => addNewNote(note))
}
function addNewNote(text = '') {
    console.log('click')
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? '' : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}" ></textarea>`
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = text
    

    deleteBtn.addEventListener('click',()=>{
        note.remove()
        updateLS()
    })
    editBtn.addEventListener('click',()=>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
        document.body.appendChild(note)
    textArea.addEventListener('input',(e)=>{
        const{value} = e.target
        main.innerHTML = value
        updateLS()
    })
}
function updateLS(){
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(node => notes.push(node.value))
    console.log(notes)

    localStorage.setItem('notes',JSON.stringify(notes))
}