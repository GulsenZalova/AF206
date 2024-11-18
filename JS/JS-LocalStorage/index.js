
let todosDiv=document.querySelector(".todos")
let input=document.querySelector("input")
let form=document.querySelector("form")
let clearTodo=document.querySelector(".clear")

// let todos=JSON.parse(localStorage.getItem("todos")) || []

let todos= JSON.parse(localStorage.getItem("todos")) || []
console.log(todos)
ShowTodo(todos)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newTodo=input.value
    todos.push(newTodo)
    ShowTodo(todos)
    localStorage.setItem("todos",JSON.stringify(todos))
    input.value=""
})




function ShowTodo(array){
    todosDiv.innerHTML=""
    array.forEach(element=>{
        todosDiv.innerHTML+=`<li><span  class="todo">${element}</span> <button class="deleteBtn">Delete</button></li>`
    })
}






































// let eduTodos=[]
// let basket=[]

// localStorage.setItem("eduToDos",JSON.stringify(eduTodos))

// localStorage.setItem("basket",JSON.stringify(basket))

// window.addEventListener("DOMContentLoaded",()=>{

//     console.log(todos)
//     ShowTodo(todos)
// })


// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     let newTodo={
//         id:crypto.randomUUID(),
//         name:input.value
//     }

//     todos.push(newTodo)
//     ShowTodo(todos)
//     localStorage.setItem("todos",JSON.stringify(todos))
//     input.value=""
// })




// function ShowTodo(todos){
//     todosDiv.innerHTML=""
//     todos.forEach(todo => {
//         todosDiv.innerHTML+=`<li><span  class="todo">${todo.name}</span> <button data-id=${todo.id} class="deleteBtn">Delete</button></li>`

//         let deletes=document.querySelectorAll(".deleteBtn")


//         deletes.forEach(deleteBtn=>{
//             deleteBtn.addEventListener("click",()=>{
//                 let id=deleteBtn.getAttribute("data-id")
//                 let deleteToDo=todos.find(todo=>todo.id==id)
//                 let index=todos.indexOf(deleteToDo)
//                 todos.splice(index,1)
//                 localStorage.setItem("todos",JSON.stringify(todos))
//                 ShowTodo(todos)
//             })
//         })
        

//     });
// }





// clearTodo.addEventListener("click",()=>{
//     // localStorage.clear()

//   localStorage.removeItem("todos")
//   todos =[]
//     ShowTodo(todos)
// })