import React from 'react'
import Navbar from '../navbar/Navbar'
import Slider from '../slider/Slider'

const Hero = () => {
  return (
    <div className='bg-black text-yellow-50 h-5/6'>
        <Navbar />
    <div className='mx-24 flex mt-24'>
        <div className="">
        <h1 className='text-4xl'>Shop the latest products at unbeatable prices. <br /><span className='text-yellow-400 text-2xl'>Easy checkout and fast shipping.</span></h1>
        <p className='text-sm mt-6 text-justify'>Here, you'll find a wide selection of the latest and greatest products, all at unbeatable prices. From fashion to electronics, home goods to outdoor gear, we've got it all. Plus, with our easy checkout and fast shipping, shopping with us is a breeze. Treat yourself or find the perfect gift for a loved one, all while enjoying the convenience of shopping from the comfort of your own home.</p>

        <button className='bg-amber-400 px-10 py-2 mt-4 rounded-lg'>Start shopping now</button>
        </div>
        <div className="slider">
            <Slider />
        </div>
    </div>
    </div>
  )
}

export default Hero