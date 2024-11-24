import BaseUrl  from "./Api/baseUrl.js"
import {PostData,GetDatas} from "./Api/Requests/requests.js"

let registerForm=document.querySelector(".resgister-form")
let name=document.querySelector("#name")
let surname=document.querySelector("#surname")
let email=document.querySelector("#email")
let password=document.querySelector("#password")


registerForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newUser={
        name:name.value,
        surname:surname.value,
        email:email.value,
        password:password.value,
        isAdmin:false,
        favorites:[]
    }


// emailin databasada olub-olmaması yoxlanilmalidir

GetDatas(`${BaseUrl}/users`)
.then(res=>{
    let users=res.datas
    let findedUser=users.find(user=>user.email==email.value)
    if(findedUser){
        alert("Bu email artiq qeydiyyatdan kecirilib")
    }else{
        
    PostData(`${BaseUrl}/users`,newUser)
    .then(()=>{
        window.location.href="login.html"
    })
    }
})


})