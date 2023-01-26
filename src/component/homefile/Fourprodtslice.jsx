import React from 'react'
import { useGlobalContext } from '../../context/Context'
// import { products } from '../../data/data'


const Fourprodtslice = () => {
  const { products } = useGlobalContext()
  return (
    <div className='md:relative'>
        <h4>New Arrivals</h4>
        <div className="responsive-box">
            {products.slice(0,4).map((product, index)=>(<div key={index}>
                <img src={product.image} alt="product img" className='aspect-square rounded-2xl  shadow-2xl'/>
            </div>))}
        </div>
    </div>
  )
}

export default Fourprodtslice