import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo"></div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to='/'>Strona główna</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/findpsychologist'>Psycholog</Link>
                </li>
                <li>
                    <Link to='/help'>Pomoc</Link>
                </li>
                <li>
                    <Link to='/relax'>Relax</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar