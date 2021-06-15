import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import background from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul className='nav-menu'>
                <li><a href="#"><img src={background} id='logo'/></a></li>
                <li><a href="#" className='nav-link left'>Live</a></li>
                <li><a href="#" className='nav-link left'>Push</a></li>
                <li><a href="#" className='nav-link left'>Link</a></li>
                <li><a href="#" className='nav-link left'>Shop</a></li>
                <li><a href="#" className='nav-link left'>Packs</a></li>
                <li><a href="#" className='nav-link left'>Help</a></li>
                <li><a href="#" className='nav-link left'>More</a></li>
                <li><FaPlus /></li>
                <li><a href="#" className='nav-link right'>Log in or register</a></li>
                <li><a href="#" className='nav-link right'>Try Live for free</a></li>
            </ul>
        </div>
    )
}

export default Navbar