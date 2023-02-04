import React from 'react'
// import Navbar from '../navbar/Navbar'
// import Slider from '../slider/Slider'
import heroimage from '../../asset/mid2.PNG'
import Navb from '../navbar/Navb'
import ProductCarousel from '../slider/ProductCarousel'

const Hero = () => {
  return (
    <div className='bg-black text-yellow-50 min-h-0 pb-10'>
      <Navb />
        {/* <Navbar /> */}
        {/* w-full flex-col-reverse  */}
    {/* <div className='grid md:flex mx-10 md:flex-row md:mx-24 mt-24'>
        <div className="md:w-8/12" >
        <h1 className='text-2xl md:text-4xl md:w-8/12'>Shop the latest products at unbeatable prices. <br /><span className='text-yellow-400 text-2xl'>Easy checkout and fast shipping.</span></h1>
        <p className='text-xs md:text-sm mt-6 text-justify md:w-10/12'>Here, you'll find a wide selection of the latest and greatest products, all at unbeatable prices. From fashion to electronics, home goods to outdoor gear, we've got it all. Plus, with our easy checkout and fast shipping, shopping with us is a breeze. Treat yourself or find the perfect gift for a loved one, all while enjoying the convenience of shopping from the comfort of your own home.</p>

        <button className='bg-amber-400 px-10 py-2 my-4 rounded-lg'>Start shopping now</button>
        </div>
        <img src={heroimage} alt="" className=" aspect-video"/>
            <Slider />
    </div> */}
    <ProductCarousel />
    </div>
  )
}

export default Hero