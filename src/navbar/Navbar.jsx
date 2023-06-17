import React, { useState } from 'react'
import Cee from '../assets/Cee.svg'
import Hamburger from '../assets/Icons/Hamburger.svg'
import MainNav from './MainNav'
import Sidebar from './Sidebar'



const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="navbar">
      <img src={Cee} alt="Ceejay Logo" className='ceejay-logo'/>

      <img src={Hamburger} className='hamburger nav-control' onClick={() => setSidebarOpen(!sidebarOpen)}/>

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
    </div>
  )
}

export default Navbar