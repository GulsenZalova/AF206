import React from 'react'

function Product(props) {
    console.log(props)
  return (
    <div>
      <h1>{props.mytitle}</h1>
      <span>{props.myPrice}</span>
      <span>{props.discount ? <del>{props.discount}</del> :""}</span>
      <span>{props.isSale ? "sale" : ""}</span>
    </div>
  )
}

export default Product
