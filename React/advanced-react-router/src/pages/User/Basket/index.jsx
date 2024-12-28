import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { basketContext } from '../../../context/BasketContext';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import style from "./style.module.css"
function Basket() {
  let {basket,setBasket}=useContext(basketContext)
  let [totalPrice,setTotalPrice]=useState(0)
  function handleDecrease(item){
  if(item.count>1){
    item.count--
    setBasket([...basket])
  }else{
    let filtered=basket.filter(elem=>elem.id!=item.id)
    setBasket(filtered)
  }
  }

  function handleIncrease(item){
     item.count++
     setBasket([...basket])
  }

  function handleDelete(item){
    let filtered=basket.filter(elem=>elem.id!=item.id)
    setBasket(filtered)

  }


  function calcTotalPrice(){
      let total = basket.reduce((sum,item)=>sum + (item.price * item.count),0)
      setTotalPrice(total)
  }
  useEffect(()=>{
    calcTotalPrice()
  },[basket])




  return (
    <>
    <h1 >Basket</h1>
       {
        basket.length==0 ? (
          <h2 className={style.head}>Sebetinizde mehsul yoxdur</h2>
        ):(
          <>
          
          <TableContainer component={Paper} my={5}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Total Price</TableCell>
            <TableCell align="left">Decrease</TableCell>
            <TableCell align="left">Count</TableCell>
            <TableCell align="left">Increase</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="left"><img style={{width:"100px",height:"100px"}} src={item.image} alt="" /></TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{(item.price * item.count).toFixed(2)}</TableCell>
              <TableCell align="left"><IconButton onClick={()=>handleDecrease(item)}><RemoveIcon/></IconButton></TableCell>
              <TableCell align="left">{item.count}</TableCell>
              <TableCell align="left"><IconButton onClick={()=>handleIncrease(item)}><AddIcon/></IconButton></TableCell>
              <TableCell align="left"><IconButton onClick={()=>handleDelete(item)}><DeleteIcon/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <span> Total : {totalPrice.toFixed(2)} </span>
          
          </>
        )
       }
    </>
  )
}

export default Basket
