import React from 'react'
import { useState } from 'react'
import students from '../students'
function Students() {
   
    let [myStudents,setMystudents]=useState(students)
    let [newStudentName,setNewStudentName]=useState("")

    function handleDelete(id){
        let filtered = myStudents.filter(student=>student.id!==id)
        setMystudents(filtered)
    }

    function handleSubmit(e){
        e.preventDefault()
        let newStudent={
            id: myStudents.length+1,
            name:newStudentName
        }
        
        setMystudents([...myStudents,newStudent])
       
    }
    console.log(myStudents)
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" value={newStudentName} onChange={(e)=>setNewStudentName(e.target.value)} placeholder='student' />
            <button>Add</button>
        </form>
      <ul>
          {
            myStudents.map((student,index)=>(
                <li key={student?.id}>{student?.name}  <button onClick={()=>handleDelete(student?.id)}>delete</button></li>
            ))
          }
      </ul>
    </div>
  )
}

export default Students
