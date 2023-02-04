import React from 'react'
import Navb from '../component/navbar/Navb'
import Productall from '../component/products/Productall'
import ProductSlider from '../component/slider/ProductSlider'

const Product = () => {
  return (
    <div>
        <Navb />
        <ProductSlider />
        <Productall />
    </div>
  )
}

export default Product