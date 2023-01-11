import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <p>Mam tę moc!</p>
        </div>
        <div className="nav-items">
            <ul>
                <Link to='/'>
                    <li>Strona główna</li>
                </Link>
                <Link to='/blog'>
                    <li>Blog</li>
                </Link>
                <Link to='/findpsychologist'>
                    <li>Psycholog</li>
                </Link>
                <Link to='/help'>
                    <li>Pomoc</li>
                </Link>
                <Link>
                    <li>Lorem</li>
                </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar