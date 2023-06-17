import React from 'react'
import { navLinks } from '../data'


const MainNav = () => {
  return (
    <nav>
        <ul>
            {navLinks.map((navLink, ID) => {
                return (
                    <li key={ID}>
                        <p>{navLink}</p>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default MainNav