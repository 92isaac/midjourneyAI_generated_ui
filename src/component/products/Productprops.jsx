import React from 'react'

const Productprops = ({img, id, title, price, brand, desc}) => {
  return (
    <div className='shadow rounded-t-lg'>
        <img src={img} alt="" className='object-contain aspect-square bg-slate-100 rounded-t-lg' style={{aspectRatio:'4/4'}}/>
        <div className="wrapper text-xs px-2">
            <h2 className='text-xs '>{title}</h2>
            <h3>{brand}</h3>
            <div className="flex justify-between">
                <p>{desc.slice(0,15)}</p>
                <p>Read...</p>
            </div>
            <h4 className='text-center'>${price}</h4>
            <button className='bg-black rounded-lg text-yellow-50 px-2 py-1 float-right mb-2'>Add to cart</button>
        </div>
    </div>
  )
}

export default Productprops