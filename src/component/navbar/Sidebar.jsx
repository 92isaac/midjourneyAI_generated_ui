import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className='bg-black text-white h-full relative'>
        <ul className='responsive-box mx-6 pt-6'>
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