// context (datani lazim olan yere catdiran) (createcontext)
// provider (datani temin eden)

// App Componentini Prov ider ile ehatelemek

import { createContext, useEffect, useState } from "react";

export let favoriteContext = createContext()


 function FavoriteProvider({children}){
    let localFavorite=JSON.parse(localStorage.getItem("favorite"))
    let [favorite,setFavorite]=useState(localFavorite ? localFavorite :[])

    useEffect(()=>{
        localStorage.setItem("favorite",JSON.stringify(favorite))
    },[favorite])


    let value={
        favorite,
        setFavorite
    }
     return  <favoriteContext.Provider value={value}>{children}</favoriteContext.Provider>

 }


 export default FavoriteProvider