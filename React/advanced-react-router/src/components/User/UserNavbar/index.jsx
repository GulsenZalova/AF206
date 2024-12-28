import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { favoriteContext } from '../../../context/FavoritesContext';
import { useContext } from 'react';
import { basketContext } from '../../../context/BasketContext';
function UserNavbar() {
  let {favorites}=useContext(favoriteContext)
  let {basket}=useContext(basketContext)
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to={"/products"} color="inherit">Products</Link>
          <Link to={"/favorites"} color="inherit">Favorites</Link>
          <span>{favorites.length}</span>
          <Link to={"/basket"} color="inherit">Basket</Link>
          <span>{basket.length}</span>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default UserNavbar
