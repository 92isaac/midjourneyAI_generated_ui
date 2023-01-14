import React from 'react'
import Sidebar from '../navbar/Sidebar'
import Fourprodtslice from './Fourprodtslice'
import Threerowprodt from './Threerowprodt'

const Marketplace = () => {
  return (
    <div className='ml-24 '>
    <div className='grid twoFr_oneFr'>
        <div className="first">
            <Threerowprodt />
            <Fourprodtslice />
        </div>
        <div className="second">
            <Sidebar />
        </div>
    </div>
    {/* <Twoprodtslice /> */}
    </div>
  )
}

export default Marketplace