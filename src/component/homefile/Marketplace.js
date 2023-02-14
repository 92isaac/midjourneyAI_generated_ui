import React from 'react'
import Sidebar from '../navbar/Sidebar'
import Fourprodtslice from './Fourprodtslice'
import Threerowprodt from './Threerowprodt'
import Twoprodtslice from './Twoprodtslice'

const Marketplace = () => {
  return (
    <div className='md:ml-24 md:relative'>
    <div className='grid twoFr_oneFr '>
        <div className="first">
            <Threerowprodt />
            <Fourprodtslice />
        </div>
        {/* <div className=" absolute"> */}
            <Sidebar />
        {/* </div> */}
    <Twoprodtslice />
    </div>
    </div>
  )
}

export default Marketplace