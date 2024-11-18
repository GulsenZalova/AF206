let initialProducts = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
]

let row = document.querySelector(".row")
let addForm = document.querySelector(".add-form")
let title = document.querySelector("#title")
let price = document.querySelector("#price")
let description = document.querySelector("#description")
let image = document.querySelector("#image")
let modal=document.querySelector(".product-modal")
let overlay=document.querySelector(".overlay")
let edit=document.querySelector(".edit")
let editClose=document.querySelector(".edit-close")
let editTitle=document.querySelector("#editTitle")
let editPrice=document.querySelector("#editPrice")
let editDesc=document.querySelector("#editDescription")
let editImage=document.querySelector("#editImage")
let search=document.querySelector("#search")

let products=JSON.parse(localStorage.getItem("products")) || initialProducts

document.addEventListener("DOMContentLoaded", ShowProducts(products))


function ShowProducts(myProducts) {
    row.innerHTML = ""
    myProducts.forEach(myProduct => {
        row.innerHTML += `
        <div class="col my-3">
        <div class="card" style="width: 18rem;">
            <img src=${myProduct.image} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${myProduct.title.slice(0, 15)}...</h5>
              <p class="card-price">${myProduct.price}$</p>
              <p class="card-text">${myProduct.description.slice(0, 50)}...</p>
              <a href="#" class="btn btn-detail btn-primary"  data-id=${myProduct.id}>Details</a>
              <a href="#" class="btn btn-delete btn-danger" data-id=${myProduct.id}  >Delete</a>
              <a href="#" class="btn btn-edit btn-warning" data-id=${myProduct.id}  >Edit</a>
            </div>
          </div>
      </div> 

        `

        let deleteBtns = document.querySelectorAll(".btn-delete")
        deleteBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener("click", () => {
                let id = deleteBtn.getAttribute("data-id")
                //  find, indexOf, splice


                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {

                        let findedProduct = products.find(product => product.id == id)
                        let index = products.indexOf(findedProduct)
                        products.splice(index, 1)
                        localStorage.setItem("products",JSON.stringify(products))
                        ShowProducts(products)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        // row.scrollIntoView({ behavior: 'smooth' })
                    }
                });

            })
        })



        let detailBtns=document.querySelectorAll(".btn-detail")
        detailBtns.forEach(detailBtn=>{
            detailBtn.addEventListener("click",()=>{
                modal.classList.replace("d-none","d-block")
                overlay.classList.replace("d-none","d-block")
                let id= detailBtn.getAttribute("data-id")
                let findedProduct=products.find(product=>product.id==id)
                modal.innerHTML=`
                <img src=${findedProduct.image} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${findedProduct.title}</h5>
                  <p class="card-text">${findedProduct.description}</p>
                  <p class="card-text"><small class="text-body-secondary">${findedProduct.price}$</small></p>
                </div>
        
                <button class="close btn btn-danger"><i class="fa-solid fa-x"></i></button>
                
                `
                let close=document.querySelector(".close")
                close.addEventListener("click",()=>{
                    modal.classList.replace("d-block","d-none")
                    overlay.classList.replace("d-block","d-none")
                })
            })

         
        })

        let editBtns=document.querySelectorAll(".btn-edit")
        editBtns.forEach(editBtn=>{
            editBtn.addEventListener("click",()=>{
                let id = editBtn.getAttribute("data-id")
                editProduct(id)
                // document.body.style.overflow="hidden"
            })
        })
   
        
    });
}



function editProduct(id){
    let editForm=document.querySelector(".edit-form")
    overlay.classList.replace("d-none","d-block")
    edit.classList.replace("d-none","d-block")
    let findedProduct= products.find(product=>product.id==id)
    let index=products.indexOf(findedProduct)
    editTitle.value=findedProduct.title
    editPrice.value=findedProduct.price
    editDesc.value=findedProduct.description
    editImage.value=findedProduct.image


    editForm.addEventListener("submit",(e)=>{
        e.preventDefault()

        let editedProduct={
            id:id,
            title:editTitle.value,
            price:editPrice.value,
            description:editDesc.value,
            image:editImage.value
        }

        products.splice(index,1,editedProduct)
        localStorage.setItem("products",JSON.stringify(products))
        ShowProducts(products)
        overlay.classList.replace("d-block","d-none")
        edit.classList.replace("d-block","d-none")
        row.scrollIntoView({ behavior: 'smooth' })
        
    })
}






editClose.addEventListener("click",()=>{
    overlay.classList.replace("d-block","d-none")
    edit.classList.replace("d-block","d-none")
})

addForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if (title.value.trim() != "" && price.value.trim() != "" && description.value.trim() != "" && image.value.trim() != "") {
        let id = crypto.randomUUID();
        let newProduct = {
            id: id,
            title: title.value,
            price: price.value,
            description: description.value,
            image: image.value
        }

        products.push(newProduct)
        console.log(products)
        localStorage.setItem("products", JSON.stringify(products))
        ShowProducts(products)
        Clear()

        Swal.fire({
            icon: "success",
            title: `${newProduct.title} adlı məhsul uğurla əlavə olundu.`,
            showConfirmButton: false,
            timer: 2500
        });

        // row.scrollIntoView({ behavior: 'smooth' })
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Inputları tam doldurun",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
})



function Clear() {
    title.value = ""
    price.value = ""
    description.value = ""
    image.value = ""
}



window.addEventListener("scroll",()=>{
    let scrollPosition=window.scrollY
    let header=document.querySelector("header")
   if(scrollPosition>100){
    header.style.backgroundColor="black"
    header.style.color="white"
   }else{
    header.style.backgroundColor="white"
    header.style.color="black"
   }
})




search.addEventListener("keyup",()=>{
    console.log(search.value)
    let filteredProducts= products.filter(product=>product.title.toLowerCase().trim().includes(search.value.toLowerCase().trim()))
    ShowProducts(filteredProducts)
})



