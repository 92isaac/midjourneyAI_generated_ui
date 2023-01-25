import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context/Context'



const ProductDetails = () => {
    const {cart} = useGlobalContext()
    const {id} =useParams()
    const details = cart[id]
  return (
    <div>
        <div>
            <img src={details.img} alt="" />
        </div>
    </div>
  )
}

export default ProductDetails