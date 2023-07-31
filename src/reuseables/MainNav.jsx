import React from 'react'
import { navLinks } from '../data'
import { Link } from 'react-router-dom'


const MainNav = () => {
  return (
    <nav>
        <ul className='navlinks'>
            {navLinks.map((navLink, ID) => {
                return (
                    <li className='navitem ' key={ID} >
                        {navLink.toLowerCase() === "home" ? <Link to="/" className='navlink'>{navLink}</Link> : <Link to={navLink.toLowerCase()} className='navlink'>{navLink}</Link>}
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default MainNav