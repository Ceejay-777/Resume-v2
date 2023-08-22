import React, { useEffect } from 'react'
import { navLinks } from '../data'
import MainNav from '../reuseables/MainNav'
import Close from '../assets/Icons/Close'
import { useLocation } from 'react-router'


const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {

  const currentLocation = useLocation();

  const bodyClickHandler = (e) => {
    if (sidebarOpen) {
      setSidebarOpen(false)
    }
  }

  useEffect(() => {
    const main = document.querySelector(".main")
    main.addEventListener("click", bodyClickHandler)
    // console.log(main)
    return () => {
      main.removeEventListener("click", bodyClickHandler)
    }
  }, [sidebarOpen, currentLocation.pathname])

  return (
    <div className={sidebarOpen ? "sidebar-container sidebarOpen" : "sidebar-container"}>

      <Close sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <MainNav main={false} />
    </div>
  )
}

export default Sidebar