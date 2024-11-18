

// let result = fetch("https://northwind.vercel.app/api/categories")

import { BaseURL } from "../JS-RequestsByAxios/AxiosAdvanced/Api/baseUrl"

// let BaseUrl=`https://northwind.vercel.app/api/categories`




//  function GetData(url){
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))
//  }


// GetData(BaseUrl)




let tbody=document.querySelector("tbody")
let add=document.querySelector(".add")
let desc=document.querySelector("#desc")
let name=document.querySelector("#name")



 function GetData(){
    fetch(`https://northwind.vercel.app/api/categories`,{
        method:"GET"
    })
    .then(res=>res.json())
    .then(data=>ShowCategories(data))
    .catch(err=>console.log(err))
 }

 GetData()




function ShowCategories(categories){
    tbody.innerHTML=""
     categories.forEach(category => {
        tbody.innerHTML+=`
    
        <tr>
        <th scope="row">${category.id}</th>
        <td>${category.description}</td>
        <td>${category.name}</td>
        <td><button class="btn btn-delete btn-danger" data-id=${category.id}>Delete</button></td>
        <td><a href="detail.html?id=${category.id}" class="btn  btn-info" target="_blank" data-id=${category.id}>Deatils</a></td>
      </tr>
        
    
        
        `


        let deleteBtns=document.querySelectorAll(".btn-delete")
        deleteBtns.forEach(deleteBtn=>{
            deleteBtn.addEventListener("click",()=>{
                let id=deleteBtn.getAttribute("data-id")
                DeleteFunction(id)
            })
        })
     });
}




function DeleteFunction(id){
   fetch(`https://northwind.vercel.app/api/categories/${id}`,{
    method:"DELETE"
   })
   .then((res)=>res.json())
   .then(()=> GetData())

  
}




add.addEventListener("submit",(e)=>{
    e.preventDefault()
    let NewCategory={
        // id: crypto.randomUUID(),
        description: desc.value,
        name:name.value
    }
    

    PostCategory(BaseURL,NewCategory)

    // fetch("https://northwind.vercel.app/api/categories", {
    //     method: 'POST',
    //     headers: {
    //       accept: 'application.json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(NewCategory),
    // })
    // .then(res=>res.json())
    // .then(data=>GetData())
      
})





// async function GetDataByAsync(){
//     try{    

//         let result = await  fetch(`https://northwind.vercel.app/api/categorie\\\s`)
//         let data= await result.json()
//         console.log(data)

//     } catch(err){
//         console.log(err)
//     }
// }


// GetDataByAsync()