import React from 'react'
import { useState } from 'react'
import { toDoContext } from '../context/ToDoContext'
import { useContext } from 'react'
function AddTodo() {
    let [inp,setInp]=useState()
    let {todos,setToDos}=useContext(toDoContext)
    function handleSubmit(e){
        e.preventDefault()
        setToDos([...todos,{id:todos.length+1,text:inp}])
    }

   
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
