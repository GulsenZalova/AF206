import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
function DetailPage () {
    let [product,setProduct]=useState({})
    let {id}=useParams()
    let navigate=useNavigate()
    async function GetProduct(){
        let result=await  axios.get(`https://northwind.vercel.app/api/products/${id}`)
        setProduct(result.data)
    }
    useEffect( ()=>{
       GetProduct()
    },[id])   
  return (
   <>
    <button onClick={()=>navigate("/products")}>Go Back</button>
    <div>
      <h1>{product.name}</h1>
    </div>
   </>
  )
}

export default DetailPage