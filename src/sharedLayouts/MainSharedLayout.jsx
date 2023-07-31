import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navigation/Navbar'
import Footer from '../navigation/Footer'

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