import React from 'react'
// import '../asset/styles/footer.css'
import { Link, useLocation } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'


const Footer = () => {
    const {pathname} = useLocation()
    if(pathname === '/private_trips') return null



    const currYear = new Date().getFullYear()
  return (
    <div className='bg-black text-white mt-16 mb-0 mx-auto w-full fixed bottom-0 text-sm'>
    <div className='footer-wrapper grid grid-cols-5 mx-1/6'>
        <div className="footer-items">
        <div className="hamburger">
        <Link to="/"><h3 className='text-2xl'>
          <span>
            ios
          </span>
          Logo
        </h3></Link>

        {/* <button onClick={()=>{setToggle(!toggle)}}>{!toggle ? <HiMenu />  :<FaTimes />}</button> */}
      </div>
        </div>
        <div className="footer-items">
            <h3>Trips</h3>
            <ul>
                <li className='m-1 text-xs md:m-2 '>Group Trips</li>
                <li className='m-1 text-xs md:m-2 '>Private trips</li>
                <li className='m-1 text-xs md:m-2 '>Saved Trips</li>
            </ul>
        </div>
        <div className="footer-items">
            <h3>Company</h3>
            <ul>
                <li className='m-1 text-xs md:m-2 '>About Us</li>
                <li className='m-1 text-xs md:m-2 '>Contacts Us </li>
                <li className='m-1 text-xs md:m-2 '>FAQS</li>
            </ul>
        </div>
        <div className="footer-items">
            <h3>Legals</h3>
            <ul>
                <li className='m-1 text-xs md:m-2 '>Privacy Policies</li>
                <li className='m-1 text-xs md:m-2 '>Terms and Conditions</li>
            </ul>
        </div>
        <div className="footer-items">
            <h3>Follow Us</h3>
            <div className="footer-icons flex gap-2 text-lg mt-3">
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
            </div>
        </div>
    </div>
        <div className="year text-center">
            <h4>logo {currYear}</h4>
        </div>
    </div>
  )
}

export default Footer