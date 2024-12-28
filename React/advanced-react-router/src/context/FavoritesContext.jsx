import { useEffect, useState } from "react";
import { createContext } from "react";
export let favoriteContext = createContext()

function FavotiteProvider({children}){
    let localFavorite=JSON.parse(localStorage.getItem("favorites"))
    let [favorites,setFavorites]=useState(localFavorite ? localFavorite : [])

    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(favorites))
    },[favorites])

    let value={
        favorites,
        setFavorites
    }
    return <favoriteContext.Provider value={value}>{children}</favoriteContext.Provider>
}


export default FavotiteProvider