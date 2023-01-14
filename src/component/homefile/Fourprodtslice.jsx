import React from 'react'
import { products } from '../../data/data'


const Fourprodtslice = () => {
  return (
    <div>
        <h4>New Arrivals</h4>
        <div className="responsive-box">
            {products.slice(0,4).map((product, index)=>(<div key={index}>
                <img src={product.img} alt="product img" className='aspect-square rounded-2xl  shadow-2xl'/>
            </div>))}
        </div>
    </div>
  )
}

export default Fourprodtslice