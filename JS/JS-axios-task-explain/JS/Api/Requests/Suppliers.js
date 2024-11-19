// Requests

// GetAll
export async function GetAllSuppliers(url){
     let suppliers
     let error

 await  axios.get(url)
     .then(res=> suppliers=res.data)
     .catch(err=>error=err)

    return{
        suppliers,
        error
    }
}



// GetById


export async function GetSupplierById(url,id){
    let supplier
    let error

    // https://northwind.vercel.app/api/suppliers/6
  await axios.get(`${url}/${id}`)
    .then(res=>supplier=res.data)
    .catch(err=>error=err)

    return{
    supplier,
     error
    }
}



// Post 



 export async function PostSupplier(url,newSupplier){
    let supplier
    let error
    // (https://northwind.vercel.app/api/suppliers, {companyName:"new",contactName:"Code",contactTitle:"hello"})
  await axios.post(url,newSupplier)
    .then(res=>supplier=res.data)
    .catch(err=>error=err)

    return{
    supplier,
     error
    }
}





// Edit


export async function UpdateSupplier(url,id,updatedSupplier){
    let supplier
    let error
    // (https://northwind.vercel.app/api/suppliers/2, {companyName:"new",contactName:"Code",contactTitle:"hello"})
  await axios.put(`${url}/${id}`,updatedSupplier)
    .then(res=>supplier=res.data)
    .catch(err=>error=err)
    return{
    supplier,
     error
    }
}


// Delete


export async function DeleteSupplier(url,id){
    let supplier
    let error
    // (https://northwind.vercel.app/api/suppliers/2)
  await axios.delete(`${url}/${id}`)
    .then(res=>supplier=res.data)
    .catch(err=>error=err)
    return{
    supplier,
     error
    }
}