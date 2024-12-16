import React from 'react'
import Product from './Product'
function Products() {
  return (
    <div>
      My Products
    <div className='products'>
      <Product mytitle="Fancy" myPrice="10" discount="20"/>
      <Product mytitle="Special" myPrice="100" isSale="sale"/>
      <Product mytitle="Lorem" myPrice="200"/>
    </div>
    </div>
  )
}

export default Products
