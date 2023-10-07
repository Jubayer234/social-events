import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar'

const Root = () => {
  return (
    <div className='max-w-7xl mx-auto font-kanit'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Root