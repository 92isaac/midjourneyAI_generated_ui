import React from 'react'
import Navb from '../component/navbar/Navb'
// import Navbar from '../component/navbar/Navbar'
import Productall from '../component/products/Productall'
// import ProductCarousel from '../component/slider/ProductCarousel'
import ProductSlider from '../component/slider/ProductSlider'
import Spinner from '../data/Spinner'

const Product = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Navb />
        <Spinner />
        <ProductSlider />
        {/* <ProductCarousel /> */}
        <Productall />
    </div>
  )
}

export default Product