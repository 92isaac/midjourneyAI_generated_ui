import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex justify-between mx-10 md:mx-24 md:pt-6'>  
        <Link to='/' className='text-2xl'>LOGO</Link>

        <ul className="hidden md:flex gap-5 ">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Product</NavLink></li>
            <li><NavLink to="/">Cart<sup>0</sup></NavLink></li>
        </ul>

        <div className='hidden bg-amber-500 px-10 py-2 rounded-lg md:flex md:bg-amber-500 md:px-10 md:py-2 md:rounded-lg'><NavLink to='/'>Log In</NavLink></div>
        <div className="md:hidden">
        <FaBars className='text-2xl'/>
        </div>
    </nav>
  )
}

export default Navbar