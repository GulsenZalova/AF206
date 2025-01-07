import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
function Todos() {
    let {todos}= useSelector(state=>state.todo)
     useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
     },[todos])
  return (
    <ul>
      {
        todos.map((todo)=>{
           return <Todo key={todo.id}  todo={todo}/>
        })
      }
    </ul>
  )
}

export default Todos
