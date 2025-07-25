import React from 'react'

const Hamburger = ({sidebarOpen, setSidebarOpen}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-6 h-6  border-2 border-sec rounded-full p-2 box-content text-sec transition-all hover:scale-110 md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

export default Hamburger

