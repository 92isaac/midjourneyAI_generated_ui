import React from 'react'
import Sidebar from '../navbar/Sidebar'
import Fourprodtslice from './Fourprodtslice'
import Threerowprodt from './Threerowprodt'
import Twoprodtslice from './Twoprodtslice'

const Marketplace = () => {
  return (
    <div className='ml-24 relative'>
    <div className='grid twoFr_oneFr '>
        <div className="first">
            <Threerowprodt />
            <Fourprodtslice />
        </div>
        <div className="second">
            <Sidebar />
        </div>
    <Twoprodtslice />
    </div>
    </div>
  )
}

export default Marketplace