import React from 'react'
import { products } from '../../data/data'


const Twoprodtslice = () => {
  return (
    <div className='absolute mt-80  w-10/12'>
        <h4>New Arrivals</h4>
        <div className="responsive-box">
            {products.slice(0,3).map((product, index)=>(<div key={index}>
                <img src={product.img} alt="product img" className='aspect-square rounded-2xl  shadow-2xl object-contain z-10 h-5/6'/>
            </div>))}
        </div>
    </div>
  )
}

export default Twoprodtslice