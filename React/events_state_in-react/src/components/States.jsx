import React from 'react'
import { useState } from 'react'

function States() {
    // hooks
    // let count=0
    let [count,setCount] = useState(0)

    function handleDecrease(){
        if(count>0){
            setCount(--count)
        }
       
      
    }
    function handleIncrease(){
        setCount(++count)
        console.log(count)
    }
    function handleReset(){
        setCount(0)
    }
  return (
    <div>
      <button onClick={()=>handleDecrease()}>-</button>
      <span>{count}</span>
      <button onClick={()=>setCount(++count)} >+</button>
      <button onClick={()=>setCount(0)} >Reset</button>
    </div>
  )
}

export default States
