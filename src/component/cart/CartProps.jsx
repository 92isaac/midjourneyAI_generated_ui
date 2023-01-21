import React from 'react'
import { useGlobalContext } from '../../context/Context'

const CartProps = ({id, productName, price, productImage}) => {
    const {removeOneItem} = useGlobalContext()
  return (
    <div className="cartItem">
      <img src={productImage} alt='product-img'/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={()=>{}}> - </button>
          <button onClick={()=>{removeOneItem(id)}}> Remove </button>
          <button onClick={() => {}}> + </button>
        </div>
      </div>
    </div>
  )
}

export default CartProps