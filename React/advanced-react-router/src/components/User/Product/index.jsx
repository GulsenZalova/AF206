import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { favoriteContext } from '../../../context/FavoritesContext';
import { useContext } from 'react';
import { basketContext } from '../../../context/BasketContext';
function Product({product}) {
    let  {favorites,setFavorites}=useContext(favoriteContext)
    let {basket,setBasket}=useContext(basketContext)
    function handleAddFavorite(product){
        let findFavorite=favorites.find(favorite=>favorite.id==product.id)
        if(findFavorite){
            alert("Bu mehsul artiq favoritesde movducddur")
        }else{
            setFavorites([...favorites,product])
        }

    }


    function handleAddBasket(product){
        let findBasket=basket.find(item=>item.id==product.id)
        if(findBasket){
            findBasket.count++
            setBasket([...basket])
        }else{
            setBasket([...basket,{...product,count:1}])
           
        }
    }
  return (
    <Grid size={3}>
     <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={product?.image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {product.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton onClick={()=>handleAddFavorite(product)}><FavoriteBorderIcon/></IconButton>
      <IconButton onClick={()=>handleAddBasket(product)}><ShoppingCartIcon/></IconButton>
    </CardActions>
  </Card>
  </Grid>
  
  )
}

export default Product

