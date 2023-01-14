import React from 'react'
import { products } from '../../data/data'


const Twoprodtslice = () => {
  return (
    <div className='absolute'>
        <h4>New Arrivals</h4>
        <div className="responsive-box">
            {products.slice(0,2).map((product, index)=>(<div key={index}>
                <img src={product.img} alt="product img" className='aspect-square rounded-2xl  shadow-2xl'/>
            </div>))}
        </div>
    </div>
  )
}

export default Twoprodtslice