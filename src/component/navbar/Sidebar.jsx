import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className='bg-black text-white h-screen z-0 ' style={{zIndex:"-100"}}>
        <ul className='mx-2 text-sm pt-6 md:block md:mx-6 md:pt-6 lg:responsive-box'>
            <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
            <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
            <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
            <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
            <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
            <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
        </ul>
    </nav>
  )
}

export default Sidebar