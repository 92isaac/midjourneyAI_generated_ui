import React from 'react'
import { useGlobalContext } from '../../context/Context'
import Productprops from './Productprops'

const Productall = () => {
    const { products } = useGlobalContext()
    console.log(products)
    return (
      <div className='mx-6 mt-10 mb-72 md:mt-6 md:mx-24 '>
          <h2 className='text-center'>New Arrivals: Shop the Latest and Greatest Products</h2>
          <div className="w-full responsive-box md:responsive-box mt-2">
              {products.map((product)=>(<Productprops 
              id={product.id}
              key={product.id}
              {...product}
              />))}
          </div>
      </div>
    )
}

export default Productall