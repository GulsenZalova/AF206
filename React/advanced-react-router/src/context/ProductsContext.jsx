import { useEffect, useState } from "react";
import { createContext } from "react";
export let productContext=createContext()
import axios from "axios"
function ProductProvider({children}){
    let [products,setProducts]=useState([])
    let [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then(res=>{
            setProducts(res.data)
            setLoading(false)
        })
    },[])

    let value={
        products,
        loading,
        setLoading,
        setProducts

    }

    return <productContext.Provider value={value}>{children}</productContext.Provider>
}


export default ProductProvider