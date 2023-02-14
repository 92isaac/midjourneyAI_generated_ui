import React from 'react'
import { useGlobalContext } from '../../context/Context'
// import { products } from '../../data/data'


const Twoprodtslice = () => {
  const { products } = useGlobalContext()
  return (
    <div className='  md:w-full'>
        <h4>New Arrivals</h4>
        <div className="w-full responsive-box md:responsive-box">
            {products.map((product, index)=>(<div key={index} className='aspect-square rounded-2xl shadow-2xl z-20 h-5/6 object-contain'>
                <img src={product.image} alt="product img" className='mx-auto mt-6 aspect-square rounded-2xl  shadow-2xl object-cover z-20 h-5/6'/>
            </div>)).splice(0,4).reverse()}
        </div>
    </div>
  )
}

export default Twoprodtslice