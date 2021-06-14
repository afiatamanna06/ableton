import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul className='nav-menu'>
                <li><a href="#" className='nav-link left'>Live</a></li>
                <li><a href="#" className='nav-link left'>Push</a></li>
                <li><a href="#" className='nav-link left'>Link</a></li>
                <li><a href="#" className='nav-link left'>Shop</a></li>
                <li><a href="#" className='nav-link left'>Packs</a></li>
                <li><a href="#" className='nav-link'>Help</a></li>
                <li><a href="#" className='nav-link'>More</a></li>
                <li><a href="#" className='rightside'>Log in or register</a></li>
                <li><a href="#" className='rightside'>Try Live for free</a></li>
            </ul>
        </div>
    )
}

export default Navbar