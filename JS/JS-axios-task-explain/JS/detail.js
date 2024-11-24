
import {GetSupplierById } from "./Api/Requests/Suppliers.js"
import Base from "./Api/baseURL.js"
let id = new URLSearchParams(window.location.search).get("id")

let container=document.querySelector(".container")

GetSupplierById(Base,id)
.then(res=>ShowSupplier(res.supplier))



function ShowSupplier(obj){
  console.log(obj)
    console.log(obj)
    container.innerHTML=`

    <div class="card mb-5">
    <div class="card-body">
    <h5 class="card-title">${obj.contactName}</h5>
    <p class="card-text">${obj.companyName}</p>
    <p class="card-text"><small class="text-body-secondary">${obj.contactTitle}</small></p>
  </div>
</div>
    </div>

    
    `
}