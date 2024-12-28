import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { productContext } from '../../../context/ProductsContext';
import { useContext } from 'react';
import Product from '../../../components/User/Product';
import { CircularProgress } from '@mui/material';

function Products() {
  let {products,loading}=useContext(productContext)
  return (

         <Box sx={{ flexGrow: 1 }} my={5}>
      <Grid container spacing={2}>
      {
        loading ? (
          <CircularProgress />
        ):(
          
            products.map(product=>(
              <Product key={product.id} product={product}/>
            ))
          
        )
      }
      </Grid>
    </Box>

  )
}

export default Products
