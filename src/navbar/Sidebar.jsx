import React from 'react'
import close from '../assets/Icons/x-mark.svg'
import { navLinks } from '../data'
import MainNav from './MainNav'

const Sidebar = ({setSidebarOpen, sidebarOpen}) => {
  return (
    <div  className={sidebarOpen ?"sidebar-container sidebarOpen" : "sidebar-container"}>
        <img src={close} alt="Close" onClick={() => setSidebarOpen(false)} className='nav-control nav-close'/>
        
        <MainNav />
    </div>
  )
}

export default Sidebar