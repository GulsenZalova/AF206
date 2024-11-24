
export async function GetAllProducts(url){
    let products
    let error

    await axios.get(url)
    .then(res=>products=res.data)
    .catch(err=>error=err)

    return{
        products,
        error
    }
}