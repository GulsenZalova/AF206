import {GetDatas} from "../../JS/Api/Requests/requests.js"
import BaseUrl from "../../JS/Api/baseUrl.js"


let tbody=document.querySelector("tbody")


async function GetProducts(){
  let products= await GetDatas(`${BaseUrl}/products`)
  ShowProducts(products.datas)
}
GetProducts()


function ShowProducts(products){
    console.log(products)
  
    products.forEach(({id,name,description,price})=> {
        tbody.innerHTML+=`
        <tr>
        <th scope="row">${id}</th>
        <td>${name}</td>
        <td>${price}</td>
        <td>${description}</td>
        <td><button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
        <td><a href="edit.html?id=${id}" class="btn edit btn-warning"><i class="fa-solid fa-pen-nib"></i> </a></td>
        <td><button class="btn btn-primary"> <i class="fa-solid fa-circle-info"></i> </button></td>
      </tr>
        
        
        `


    
    });
}







