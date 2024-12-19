import { useEffect } from 'react'
import { useState } from 'react'
import  axios from "axios"
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
 let [data,setData]=useState([])
 let [show,setShow]=useState(true)

  function GetData(){
    // fetch("https://northwind.vercel.app/api/categories")
    // .then(res=>res.json())
    // .then(data=>setData(data))

    axios.get("https://northwind.vercel.app/api/categories")
    .then(res=>{
      setData(res.data)
      setShow(false)
    })
  }


 useEffect(()=>{
  GetData()
 },[])



  // mounting
  return (
    <>
     <button onClick={()=>setCounter(--counter)}>-</button>
     <span>{counter}</span>
     <button onClick={()=>setCounter(++counter)}>+</button>
     <button onClick={()=>GetData()}>Get Data</button>
     {
      show ? (
        <div className="loader"></div>
      ):(
        <ul>
        {
           data.map(elem=>(
            <li key={elem.id}>{elem.name}</li>
             ))
        }
      </ul>
      )
     }
     {/* <div class="loader"></div> */}

     
    </>
  )
}

export default App
