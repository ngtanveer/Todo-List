const button = document.getElementById('add');
const input = document.getElementById('input');
const todoList = document.getElementById('todoList');
// var showButton = document.getElementById('show');
// var content = document.getElementsByClassName("content");


let todos = []
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addTodo(todo))

}

button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))

    addTodo(input.value)
    input.value= ''
})

function addTodo(todo){
    let para = document.createElement('p')
    para.innerText= todo;
    todoList.appendChild(para)
    
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index >-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))

}


        
        // showButton.onclick = function() {

        //     if(content.className == "content-open" ){
        //         //shrink the content
        //         content.className = "";
        //         showButton.innerHTML = "show more"

        //     }else{
        //         //open the content
        //         content.className = "content-open";
        //         showButton.innerHTML = "show less"
        //     }




        // }