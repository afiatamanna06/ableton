import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul className='nav-menu'>
                <li><a href="#">Live</a></li>
                <li><a href="#">Push</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Packs</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">More</a></li>
                <li><a href="#" className='rightside'>Try Live for free</a></li>
                <li><a href="#" className='rightside'>Log in or register</a></li>
            </ul>
        </div>
    )
}

export default Navbar