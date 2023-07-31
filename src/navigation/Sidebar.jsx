import React, { useEffect } from 'react'
import { navLinks } from '../data'
import MainNav from '../reuseables/MainNav'
import Close from '../assets/Icons/Close'

const Sidebar = ({setSidebarOpen, sidebarOpen}) => {

 const  bodyClickHandler = (e) => {
  if(sidebarOpen) {
    console.log(e.target)
    setSidebarOpen(false)
  }
}

const main = document.querySelector(".main")

useEffect(() => {
    const main = document.querySelector(".main")
    main.addEventListener("click", bodyClickHandler)
    return () => {
      main.removeEventListener("click", bodyClickHandler)
    }
  }, [main])

  return (
     <div  className={sidebarOpen ?"sidebar-container sidebarOpen" : "sidebar-container"}>

      <Close sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/> 
      
      <MainNav />
    </div>
  )
}

export default Sidebar