import React from 'react'
import Carousel from 'react-grid-carousel'
import { products } from '../../data/data'
import Sliderprops from './Sliderprops'

const Slider = () => {
  return (
    <Carousel cols={1} rows={1} gap={0} loop={true} autoplay= {3000}>
        {products.slice(0,6).map((img, index)=>(<Carousel.Item key={img.img}><Sliderprops 
        img={img.img}
        /> 
      </Carousel.Item>))}

    </Carousel>
  )
}

export default Slider