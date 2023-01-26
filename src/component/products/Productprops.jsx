import React from 'react'
import { useNavigate } from 'react-router-dom'

const Productprops = ({image, id, name, price, company, description}) => {
  const navigate=useNavigate()
  return (
    <div className='shadow rounded-t-lg'>
        <img src={image} alt="" className='object-cover aspect-square bg-slate-100 rounded-t-lg' style={{aspectRatio:'4/4'}}/>
        <div className="wrapper text-xs px-2">
            <h2 className='text-xs uppercase font-bold'>{name}</h2>
            <h3>{company}</h3>
            <div className="flex justify-between">
                <p>{description.slice(0,20)}</p>
                <p>Read...</p>
            </div>
            <h4 className='text-center'>${price}</h4>
            <button className='bg-black rounded-lg text-yellow-50 px-2 py-1 float-right mb-2' onClick={()=>{navigate('/products/' + id)}}>More...</button>
        </div>
    </div>
  )
}

export default Productprops