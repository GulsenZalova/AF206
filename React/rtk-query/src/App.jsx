
import { useGetCategoriesQuery, useGetCategoryQuery,useDeleteCategoryMutation, usePostCategoryMutation } from './redux/slice/CategoryApi'
import './App.css'
import { useState } from 'react'

function App() {
  let [inp,setInp]=useState("")
  let {data,isLoading,refetch}=useGetCategoriesQuery()
  let result=useGetCategoriesQuery()
  console.log(result)

let [deleteCategory]=useDeleteCategoryMutation()
// let result=useDeleteCategoryMutation()
//  console.log(result)

let [postCategory]=usePostCategoryMutation()



 async function handleDelete(id){
 await deleteCategory(id)
  refetch()
 }

 async function handleSubmit(e){
  e.preventDefault()
  let newCategory={
    name:inp
  }
  await postCategory(newCategory)
  refetch()
 }
  return (
    <>
       {
        isLoading ? (
            <h1>...Loading</h1>
        ):(
          <>
            <ul>
               {
                 data.map(item=>(
                  <li key={item.id}>{item.name} <button onClick={()=>handleDelete(item.id)}>delete</button></li>
                 ))
               }
            </ul>
           <form onSubmit={(e)=>handleSubmit(e)}>
             <input onChange={(e)=>setInp(e.target.value)} type="text"  />
             <button> Add </button>
           </form>
          </>
        )
       }
    </>
  )
}

export default App
