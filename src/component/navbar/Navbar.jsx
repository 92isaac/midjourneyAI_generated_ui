import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='mx-24 pt-6 flex justify-between'>
        <Link to='/'>LOGO</Link>

        <ul className="flex gap-5">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Product</NavLink></li>
            <li><NavLink to="/">Cart<sup>0</sup></NavLink></li>
        </ul>

        <div className='bg-amber-500 px-10 py-2 rounded-lg'><NavLink to='/'>Log In</NavLink></div>
    </nav>
  )
}

export default Navbar