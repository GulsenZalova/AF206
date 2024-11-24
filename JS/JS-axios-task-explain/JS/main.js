import { GetAllSuppliers,GetSupplierById,PostSupplier,UpdateSupplier,DeleteSupplier} from "./Api/Requests/Suppliers.js"
import Base from "./Api/baseURL.js"


// Selectors

let row=document.querySelector(".row")
let addForm=document.querySelector(".add-form")
let contactName=document.querySelector("#contactName")
let contactTitle=document.querySelector("#contactTitle")
let companyName=document.querySelector("#companyName")
let overlay=document.querySelector(".overlay")
let editModal=document.querySelector(".edit")
let close=document.querySelector(".close")
let editCompanyName=document.querySelector("#edit-companyName")
let editContactName=document.querySelector("#edit-contactName")
let editContactTitle=document.querySelector("#edit-contactTitle")
let editForm=document.querySelector(".edit-form")

function GetData(){
    GetAllSuppliers(Base)
    .then(res=>ShowSuppliers(res.suppliers))
    .catch(err=>console.log(err))
}


GetData()

function ShowSuppliers(array){
    console.log(array)
    row.innerHTML=""
    array.forEach(element => {
        row.innerHTML+=`
        <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.companyName}</h5>
              <p class="card-text">${element.contactName}</p>
              <p class="card-text">${element.contactTitle}</p>
              <a href="detail.html?id=${element.id}" class="btn btn-primary">Detail</a>
              <button class="btn btn-edit btn-warning" data-id=${element.id}>Edit</button>
              <button class="btn btn-delete btn-danger" data-id=${element.id}>Delete</button>
            </div>
          </div>
      </div>
        
        `


        let editBtns=document.querySelectorAll(".btn-edit")
        editBtns.forEach(editBtn=>{
            editBtn.addEventListener("click",()=>{
                let id=editBtn.getAttribute("data-id")
                EditSupplier(id)
            })
        })

        let deleteBtns=document.querySelectorAll(".btn-delete")
        deleteBtns.forEach(deleteBtn=>{
            deleteBtn.addEventListener("click",()=>{
                let id=deleteBtn.getAttribute("data-id")
                DeleteSupplierById(id)
            })
        })
    });
}


function DeleteSupplierById(id){
    DeleteSupplier(Base,id)
    .then(()=>GetData())
}

addForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newSupplier={
        companyName:companyName.value,
        contactName:contactName.value,
        contactTitle:contactTitle.value
    }
    PostSupplier(Base,newSupplier)
    .then(()=>GetData())
    
})



function EditSupplier(id){

   GetSupplierById(Base,id)
   .then(res=>{
    overlay.classList.replace("d-none","d-block")
    editModal.classList.replace("d-none","d-block")

    editCompanyName.value=res.supplier.companyName,
    editContactName.value=res.supplier.contactName,
    editContactTitle.value=res.supplier.contactTitle

    editForm.addEventListener("submit",(e)=>{
        e.preventDefault()

        let updatedSupplier={
            companyName:editCompanyName.value,
            contactName:editContactName.value,
            contactTitle:editContactTitle.value
        }
        
        UpdateSupplier(Base,id,updatedSupplier)
        .then(()=>{
            overlay.classList.replace("d-block","d-none")
            editModal.classList.replace("d-block","d-none")
            GetData()
        })
    })


   })
}

close.addEventListener("click",(e)=>{
    e.preventDefault()
    overlay.classList.replace("d-block","d-none")
    editModal.classList.replace("d-block","d-none")
})