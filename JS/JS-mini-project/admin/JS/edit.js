import {GetDataById ,UpdateData} from "../../JS/Api/Requests/requests.js"
import BaseUrl from "../../JS/Api/baseUrl.js"
let nameInp=document.querySelector("#name")
let descInp=document.querySelector("#desc")
let priceInp=document.querySelector("#price")
let imageInp=document.querySelector("#image")
let editForm=document.querySelector(".edit-form")
let id= new URLSearchParams(window.location.search).get("id")
console.log(id)

async function GetData(){
    let product= await GetDataById(`${BaseUrl}/products`,id)
    ShowProduct(product.data)
}


GetData()


function ShowProduct(product){
    let {name,description, price,image}=product
    nameInp.value=name
    descInp.value=description
    priceInp.value=price
    imageInp.value=image
}



editForm.addEventListener("submit", async (e)=>{
    e.preventDefault()
    let editedProduct={
        name:nameInp.value,
        description:descInp.value,
        price:priceInp.value,
        image:imageInp.value
    }

   await UpdateData(`${BaseUrl}/products`, id,editedProduct)
   window.location.href="admin-products.html"
})