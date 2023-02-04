import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../../context/Context';


const Navb = () => {
  const {amount, toggle, setToggle} = useGlobalContext()


 

  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0  mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={setToggle} className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
        {toggle ? <FaTimes className='text-2xl'/> : <FaBars className='text-2xl'/>}
        </button>
      </div>
      <div className={`w-full block ${toggle ? 'flex justify-center' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
            Home
          </NavLink>
          <NavLink to="/products" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
            Product
          </NavLink>
          <NavLink to="/cart" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
          Cart<sup>{amount}</sup>
          </NavLink>
          <NavLink to="#contact" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white">
            Contact
          </NavLink>
        </div>
      </div>
      <div className='hidden bg-amber-500 px-10 py-2 rounded-lg md:flex md:bg-amber-500 md:px-10 md:py-2 md:rounded-lg'><NavLink to='/'>Log In</NavLink></div>
    </nav>
  );
  };
  

export default Navb;

