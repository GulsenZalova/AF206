import BaseUrl from "./Api/baseUrl.js"
import {GetDataById,GetDatas,UpdateData} from "./Api/Requests/requests.js"

let userId=JSON.parse(localStorage.getItem("userInfo"))
let row=document.querySelector(".row")

function GetFavorites(){
    GetDataById(`${BaseUrl}/users`,userId)
    .then(res=>{
        // userin favorites arrayi (idleri)
        let user=res.data
        let myFavs=res.data.favorites
        GetDatas(`${BaseUrl}/products`)
        .then((res)=>{
            // Mehsullarin butun datalari olan array
            let products=res.datas
            let myFavoriteProdcts= products.filter(product=>myFavs.includes(product.id))
            if(myFavoriteProdcts.length>0){
                myFavoriteProdcts.forEach(product=>{
                    row.innerHTML+=`
                    
                    <div class="col">
                    <div class="card" style="width: 18rem;">
                      <img src=${product.image} class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.price}$</p>
                        <div class="btns">
                        <a href="#" data-id=${product.id} class="btn nofav btn-outline-primary"><i class="fa-solid fa-heart-crack"></i></a>
                        <a href="#" class="btn btn-outline-danger"><i class="fa-solid fa-basket-shopping"></i> Səbətə at</a>
                        </div>
                      </div>
                    </div>
                  </div>
                    `
                    let noFavs=document.querySelectorAll(".nofav")
                    noFavs.forEach(noFav=>{
                        noFav.addEventListener("click",()=>{
                            let noFavId=noFav.getAttribute("data-id")
                            let findedNoFav=myFavs.find(myFav=>myFav==noFavId)
                            let noFavIndex = myFavs.indexOf(findedNoFav)
                            myFavs.splice(noFavIndex,1)
                            UpdateData(`${BaseUrl}/users`,userId,user)
                           
                        })
                    })
                })
            }else{
                row.innerHTML="Sizin Wishlistiniz Boşdur!!!"
            }
        })
    })
}



GetFavorites()