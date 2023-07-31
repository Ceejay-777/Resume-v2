import React, { useEffect } from 'react'
import { navLinks } from '../data'
import MainNav from '../reuseables/MainNav'
import Close from '../assets/Icons/Close'

const Sidebar = ({setSidebarOpen, sidebarOpen}) => {

 const  bodyClickHandler = () => {
  if(sidebarOpen) {
    setSidebarOpen(false)
  }
}

  useEffect(() => {
    const main = document.querySelector(".main")
    main.addEventListener("click", bodyClickHandler)
  }, [sidebarOpen])

  return (
     <div  className={sidebarOpen ?"sidebar-container sidebarOpen" : "sidebar-container"}>

      <Close sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/> 
      
      <MainNav />
    </div>
  )
}

export default Sidebar