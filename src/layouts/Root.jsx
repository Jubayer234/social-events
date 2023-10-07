import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar'

const Root = () => {
  return (
    <div className='mx-auto font-kanit'>
       <div className='bg-gradient-to-r from-[#FFDFE7] to-[#F86486]'>
       <Navbar></Navbar>
       </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Root