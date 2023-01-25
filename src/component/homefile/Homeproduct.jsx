import React from 'react'
import { products2 } from '../../data/data'
import Productprops from '../products/Productprops'

const Homeproduct = () => {
  return (
    <div className='mx-6 mt-10 mb-72 md:mt-6 md:mx-24 '>
        <h2 className='text-center'>New Arrivals: Shop the Latest and Greatest Products</h2>
        <div className="w-full responsive-box md:responsive-box mt-2">
            {products2.map((product)=>(<Productprops 
            id={product.id}
            key={product.id}
            title={product.name}
            img={product.img}
            price={product.price}
            desc={product.desc}
            />)).slice(0,5)}
        </div>
    </div>
  )
}

export default Homeproduct