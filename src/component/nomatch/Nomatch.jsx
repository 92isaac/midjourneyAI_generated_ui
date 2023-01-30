import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nomatch = () => {
    const navigate = useNavigate()
  return (
    <div>
       <div className="wrapper w-80 my-10 mx-auto">
       <img src="https://static6.depositphotos.com/1002881/580/i/600/depositphotos_5804811-stock-photo-error-404.jpg" alt="" />
        <div>
            <button onClick={()=>{navigate('/')}}>Back to Home</button>
            <button onClick={()=>{navigate(-1)}}>Back to Prev</button>
        </div>
       </div>
    </div>
  )
}

export default Nomatch