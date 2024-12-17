import React from 'react'

function Events() {

  function sayHello(id){
    console.log("salam")
  }

  function handleSubmit(e){
    e.preventDefault()
       
  }

  return (
    <>
      <form onSubmit={handleSubmit()}>
        <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        <button>Add</button>
      </form>
    
      <h1 onClick={()=>console.log("salam")}>Click</h1>
    </>
  )
}

export default Events
