import React from 'react'
import { useGlobalContext } from '../../context/Context'
import Productprops from '../products/Productprops'

const Homeproduct = () => {
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
            // title={product.name}
            // img={product.img}
            // price={product.price}
            // desc={product.desc}
            />)).slice(0,13)}...
        </div>
    </div>
  )
}

export default Homeproduct