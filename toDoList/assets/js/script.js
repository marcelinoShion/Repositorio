// elementos do html
let task = document.querySelector('#inputTask');

let btn = document.querySelector('#btnAdd');

let list = document.querySelector('#list');



//event listener  para armazenar
btn.addEventListener("click",(e)=>{
    if(task.value != '' && listSize()){
        // adicionando elementos na lista
        let div = document.createElement("div");
        div.className = 'toDo';

        let p = document.createElement("p");
        p.className = 'task';
        p.textContent = task.value ;

        let button =  document.createElement('button');
        button.className = 'icon';

        let img = document.createElement('img');
        img.src = 'assets/img/trash.svg';

        button.appendChild(img);

        div.appendChild(p);
        div.appendChild(button);
        div.setAttribute("id","icon")

        list.appendChild(div);
        
        task.value = "";
        
        
        allowRemoval();

    }
    
    
});

function listSize(){
    let btnRmv = document.querySelectorAll('#icon')
    return btnRmv.length <= 6 ? true : false  
}


function allowRemoval(){
    let btnRmv = document.querySelectorAll('#icon')
    btnRmv.forEach((b,index)=>{
        b.addEventListener("click" ,(e)=>{
            list.removeChild(btnRmv[index]);
        
        })
    })
}




















