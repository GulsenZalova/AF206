
import { useEffect } from 'react'
import axios from "axios"
import './App.css'
import { useState } from 'react'

function App() {
 
  let [products,setProducts]=useState([])
  function getData(){
    axios.get("http://localhost:3000/products")
    .then((res)=>{
      setProducts(res.data)
    })
  }
  useEffect(()=>{
     getData()
  },[])


    async  function handleDelete(id){
     await axios.delete(`http://localhost:3000/products/${id}`)
     getData()
  }
  return (
    <>
      <table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
  </tr>
 {
  products.map(product=>(
    <tr>
    <td>{product.name}</td>
    <td>{product.description}</td>
    <td>{product.price}</td>
    <td><button onClick={()=>handleDelete(product._id)}>delete</button></td>
  </tr>
  
  ))
 }
</table>
    </>
  )
}

export default App
