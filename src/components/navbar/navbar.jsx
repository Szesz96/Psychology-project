import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo"></div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link className='link' to='/'>Strona główna</Link>
                </li>
                <li>
                    <Link className='link' to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link className='link' to='/findpsychologist'>Psycholog</Link>
                </li>
                <li>
                    <Link className='link' to='/help'>Pomoc</Link>
                </li>
                <li>
                    <Link className='link' to='/relax'>Relax</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar