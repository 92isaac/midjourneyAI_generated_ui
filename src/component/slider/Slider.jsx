import React from 'react'
import Carousel from 'react-grid-carousel'

const Slider = () => {
  return (
    <Carousel cols={1} rows={1} gap={0} loop={true} autoplay= {3000}>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" className='aspect-video'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" className='aspect-video'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" className='aspect-video'/>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider