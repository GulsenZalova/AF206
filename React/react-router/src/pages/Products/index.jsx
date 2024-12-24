import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from "axios"
import { Link, NavLink } from 'react-router-dom';
function Products() {
    let [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("https://northwind.vercel.app/api/products")
        .then(res=>setProducts(res.data))
    },[])

  return (
    <>
    <Link to={"/products/addproduct"}>Add</Link>
       <Table striped bordered hover>

      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>UnitsInStock</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
       {
          products && products.map(product=>(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.unitsInStock}</td>
            <td><NavLink  className='btn btn-primary' to={`/products/${product.id}`}>Deatil</NavLink></td>
          </tr>
          ))
       }

      </tbody>
    </Table>
    </>
  )
}

export default Products
