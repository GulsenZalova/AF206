import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slices/TodoSlice'

function AddTodo() {
    let [inp,setInp]=useState("")
    let dispatch=useDispatch()
    function handleSubmit(e){
        e.preventDefault()
        dispatch(addTodo(inp))
        setInp("")
    }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input value={inp} onChange={(e)=>setInp(e.target.value)} type="text" />
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodo
