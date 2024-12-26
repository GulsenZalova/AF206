import React from 'react'
import ToDo from './ToDo'
import { toDoContext } from '../context/ToDoContext'
import { useContext } from 'react'
function ToDos() {
    let {todos}=useContext(toDoContext)
    console.log(todos)
  return (
    <ul>
      {
        todos.map(todo=>(
            <li>{<ToDo todo={todo}/>}</li>
        ))
      }
     
    </ul>
  )
}

export default ToDos
