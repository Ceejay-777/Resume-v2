import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/Footer'

const MainSharedLayout = () => {
  return (
    <div className='shared'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainSharedLayout