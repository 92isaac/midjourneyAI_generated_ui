import React from 'react'
import { useGlobalContext } from '../../context/Context'
import Spinner from '../../data/Spinner'
import Productprops from './Productprops'
import Error from '../../data/Error'

const Productall = () => {
    const { products, loading, products_error  } = useGlobalContext()
    console.log(products)
    return (
      <div className='mx-6 mt-10 mb-72 md:mt-6 md:mx-24 '>
          <h2 className='text-center'>New Arrivals: Shop the Latest and Greatest Products</h2>
        { loading ? <Spinner /> : <div className="w-full responsive-box md:responsive-box mt-2">
              {products.map((product)=>(<Productprops 
              id={product.id}
              key={product.id}
              {...product}
              />))}
          </div>}
          {products_error ? <Error message='Something went wrong'/> : null }
      </div>
    )
}

export default Productall