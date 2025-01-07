import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,completeTodo } from '../redux/slices/TodoSlice'
function Todo({todo}) {
   let dispatch=useDispatch()
    function handleDelete(id){
        dispatch(deleteTodo(id))
    }
  return (
    <li style={{textDecoration: todo.isComplete ? "line-through" : ""}}>{todo.todo} <button onClick={()=>handleDelete(todo.id)}>delete</button> <button onClick={()=>dispatch(completeTodo(todo.id))}>{todo.isComplete ? "uncomplete": "complete"}</button></li>
  )
}

export default Todo
