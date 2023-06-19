import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'

const MainSharedLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default MainSharedLayout