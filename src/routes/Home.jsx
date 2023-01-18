import React from 'react'
import Hero from '../component/homefile/Hero'
import Homeproduct from '../component/homefile/Homeproduct'
import Marketplace from '../component/homefile/Marketplace'



const Home = () => {

  return (
    <div className='h-screen'>
        <Hero />
        <Marketplace/>
        <Homeproduct />
    </div>
  )
}

export default Home