import React from 'react'
import { navLinks } from '../data'
import { Link } from 'react-router-dom'



const MainNav = () => {
  return (
    <nav>
        <ul className='navlinks'>
            {navLinks.map((navLink, ID) => {
                return (
                    <li className='navlink'>
                        <Link  key={ID} to={navLink.toLowerCase()}>{navLink}</Link>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default MainNav