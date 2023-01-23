import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useGlobalContext } from '../../context/Context'

const CartProps = ({id,img, name, price, amount}) => {
    const {removeOneItem, increase, decrease} = useGlobalContext()
  return (
    <div className="cartItem">
      <img src={img} alt='product-img'/>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
            <h4>{amount}</h4>
          <button onClick={()=>{decrease(id)}}> - </button>
          <button onClick={()=>{removeOneItem(id)}}> <MdDelete /> </button>
          <button onClick={() => {increase(id)}}> + </button>
        </div>
      </div>
    </div>
  )
}

export default CartProps