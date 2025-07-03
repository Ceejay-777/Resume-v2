import React from 'react'
import Cee from '../../assets/Cee'
const Footer = () => {
  return (
    <footer className='w-full dark:bg-pri-fade bg-gray-100 h-20 flex justify-center'>
      <div className="w-full max-w-[450px] flex justify-around items-center">
        <Cee />
        <div className='dark:text-gray-300 text-gray-900'>
          <p>&copy; 2023 CeeJay All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
