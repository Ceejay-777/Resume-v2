import React from 'react'
import { navLinks } from '../data'
import MainNav from './MainNav'
import Close from '../assets/Icons/Close'

const Sidebar = ({setSidebarOpen, sidebarOpen}) => {
  return (
     <div  className={sidebarOpen ?"sidebar-container sidebarOpen" : "sidebar-container"}>

      <Close sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/> 
      
      <MainNav />
    </div>
  )
}

export default Sidebar