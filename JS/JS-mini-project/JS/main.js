import BaseUrl from "./Api/baseUrl.js"
import { GetDataById, GetDatas, UpdateData } from "./Api/Requests/requests.js"
let auth = document.querySelector(".auth")
let row = document.querySelector(".row")
let favpage = document.querySelector(".favpage")

function GetLocalId() {
    let userId = JSON.parse(localStorage.getItem("userInfo"))
    if (userId) {
        GetDataById(`${BaseUrl}/users`, userId)
            .then(res => {
                let userName = res.data.name
                auth.innerHTML = `
            <div class="login-logout">
            <span>${userName}</span>
            <button class="btn logout btn-outline-danger">logout</button>
        </div>
            `

                let logout = document.querySelector(".logout")
                logout.addEventListener("click", () => {
                    localStorage.removeItem("userInfo")
                    GetLocalId()
                })
            })

    } else {
        auth.innerHTML = `<button class="btn login btn-outline-secondary">Daxil ol</button>`
        let login = document.querySelector(".login")
        login.addEventListener("click", () => {
            window.location.href = "login.html"
        })
    }
}

GetLocalId()




function GetPrododucts() {
    GetDatas(`${BaseUrl}/products`)
        .then(res => ShowProducts(res.datas))
}

function ShowProducts(products) {
    products.forEach(product => {
        row.innerHTML += `
        <div class="col">
        <div class="card" style="width: 18rem;">
          <img src=${product.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.price}$</p>
            <div class="btns">
            <a href="#" data-id=${product.id} class="btn fav btn-outline-primary"><i class="fa-solid fa-heart"></i></a>
            <a href="#" class="btn btn-outline-danger"><i class="fa-solid fa-basket-shopping"></i> Səbətə at</a>
            </div>
          </div>
        </div>
      </div>
        `
        let favBtns = document.querySelectorAll(".fav")
        favBtns.forEach(favBtn => {
            favBtn.addEventListener("click", () => {
                let userInfo = JSON.parse(localStorage.getItem("userInfo"))
                if (!userInfo) {
                    alert("login olmadiginiz ucun wishliste mehsul ata bilmersiz")
                } else {
                    let prodId = favBtn.getAttribute("data-id")
                    let userId = userInfo
                    AddFavorites(userId, prodId)
                }
            })
        })
    });
}

function AddFavorites(userId, prodId) {
    GetDataById(`${BaseUrl}/users`, userId)
        .then(res => {
            if (!res.data.favorites.includes(prodId)) {
                res.data.favorites.push(prodId)
                UpdateData(`${BaseUrl}/users`, userId, res.data)
                    .then(() => console.log("hello update"))
            } else {
                alert("bu mehsul wishlistinizde var artiq!!!")
            }
        })
}


favpage.addEventListener("click", () => {
    window.location.href = "favorites.html"
})

GetPrododucts()
