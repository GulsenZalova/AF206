


export async function GetAllCategories(url){
     let data
     let error
    await  axios.get(url)
     .then(res=>data=res.data)
     .catch(err=>error=err)
     return{
        data,
        error
     }
}


export   async function GetCategoryByİd(url,id){
    let data
    let error
    // url / id
    // https://northwind.vercel.app/api/categories/2
   await  axios.get(`${url}/${id}`)
    .then(res=>data=res.data)
    .catch(err=>error=err)
    return{
       data,
       error
    }
}





export   async function DeleteCategory(url,id){
    let data
    let error
    // url / id
    // https://northwind.vercel.app/api/categories/2
   await  axios.delete(`${url}/${id}`)
    .then(res=>data=res.data)
    .catch(err=>error=err)
    return{
       data,
       error
    }
}




export   async function PostCategory(url,newData){
    let data
    let error
    // url / id
    // https://northwind.vercel.app/api/categories/2
   await  axios.post(url,newData)
    .then(res=>data=res.data)
    .catch(err=>error=err)
    return{
       data,
       error
    }
}



export   async function UpdateCategory(url,id,updateData){
    let data
    let error
    // url / id
    // https://northwind.vercel.app/api/categories/2
   await  axios.patch(`${url}/${id}`,updateData)
    .then(res=>data=res.data)
    .catch(err=>error=err)
    return{
       data,
       error
    }
}