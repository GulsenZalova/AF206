import { Box, Grid2 } from '@mui/material'
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
import { useContext } from 'react'
import { favoriteContext } from '../../../context/FavoritesContext'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import style from "./style.module.css"
function Favorites() {
  let { favorites,setFavorites } = useContext(favoriteContext)
  function  handleDeleteFavorite(id){
    let deleteFavorite=favorites.filter(favorite=>favorite.id!==id)
    setFavorites(deleteFavorite)
  }
  return (

    <Box sx={{ flexGrow: 1 }} my={5}>
    {
      favorites.length==0 ? (
        <h2 className={style.head}>Sizin Favoritesiniz Boşdur</h2>
      ): (
        <Grid2 container spacing={2}>
        {
          favorites.map(favorite => (
            <Grid size={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={favorite.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {favorite.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton onClick={()=>handleDeleteFavorite(favorite.id)}><DisabledByDefaultIcon /></IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid2>
      )
    }
    </Box>
  )
}

export default Favorites
