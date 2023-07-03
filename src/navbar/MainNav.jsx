import React from 'react'
import { navLinks } from '../data'


const MainNav = () => {
  return (
    <nav>
        <ul className='navlinks'>
            {navLinks.map((navLink, ID) => {
                return (
                    <li key={ID} className='navlink'>
                        {navLink}
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default MainNav