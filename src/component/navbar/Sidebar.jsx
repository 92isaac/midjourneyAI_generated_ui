// import React from 'react'
// import { Link } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <nav className='bg-black text-white h-screen z-0 ' style={{zIndex:"-100"}}>
//         <ul className='mx-2 text-sm pt-6 md:block md:mx-6 md:pt-6 lg:responsive-box'>
//             <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
//             <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
//             <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
//             <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
//             <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
//             <li className='mb-4'><Link  to='new_arrivals'>New Arivals</Link></li>
//         </ul>
//     </nav>
//   )
// }

// export default Sidebar

import React, { useState } from "react";
import { Link } from 'react-router-dom'

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-black z-50 w-full ${!isOpen ? 'md:w-10' : 'md:w-full'}`}>
      <button
        className="px-3 text-white py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={isOpen ? "hidden" : "inline"}
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
          <path
            className={isOpen ? "inline" : "hidden"}
            d="M20 9.5L12 16l-8-6.5V5h16v4.5z"
          />
        </svg>
      </button>
      <nav
        className={`bg-gray-800 w-64 sm:w-auto sm:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-2 py-6">
          <Link to="/" className="block py-1 font-medium text-white">
            
            
            Home
          </Link>
          <Link to="/" className="block py-1 font-medium text-gray-400 hover:text-white">
            About
          </Link>
          <Link to="/" className="block py-1 font-medium text-gray-400 hover:text-white">
            Services
          </Link>
          <Link to="/" className="block py-1 font-medium text-gray-400 hover:text-white">
            Contact
          </Link>
        </div>
      </nav>
    </nav>
  );
};

export default SideNav;
