let id = new URLSearchParams(window.location.search).get("id")

let name=document.querySelector(".name")

fetch(`https://northwind.vercel.app/api/categories/${id}`)
.then(res=>res.json())
.then(data=>{
    name.textContent=data.name
    console.log(data)
})