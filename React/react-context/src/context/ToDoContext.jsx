import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const toDoContext=createContext()

function ToDoProvider({children}) {
    let [todos,setToDos]=useState([
        {
          id:1,
          text:"Go"
        },
        {
          id:2,
          text:"Come"
        },
        {
          id:3,
          text:"Walk"
        }
       ])

       const value={
          todos,
          setToDos
       }
 return (
    <toDoContext.Provider value={value}>
      {children}
    </toDoContext.Provider>
  )
}

export default ToDoProvider
