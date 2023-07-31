import React from 'react'
import { navLinks } from '../data'
import { Link } from 'react-router-dom'
import "../styles/Navigation.css"


const MainNav = () => {
  return (
    <nav>
        <ul className='navlinks'>
            {navLinks.map((navLink, ID) => {
                return (
                    <li className='navlink' key={ID} >
                        {navLink.toLowerCase() === "home" ? <Link to="/">{navLink}</Link> : <Link to={navLink.toLowerCase()}>{navLink}</Link>}
                        
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default MainNav