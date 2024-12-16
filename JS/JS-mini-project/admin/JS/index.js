import {GetDatas} from "../../JS/Api/Requests/requests.js"
import BaseUrl from "../../JS/Api/baseUrl.js"

let adminForm=document.querySelector(".admin-form")
let email=document.querySelector("#email")
let password=document.querySelector("#password")

adminForm.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let users= await GetDatas(`${BaseUrl}/users`)
    let user= users.datas.find(myUser=> myUser.email==email.value && myUser.password==password.value)
    if(user){
        if(user.isAdmin){
            window.location.href="admin/JS/admin-welcome.html"
        }else{
           alert("admin deyilsen")
        }
    }else{
        alert("bele user yoxdu")
    }
})



