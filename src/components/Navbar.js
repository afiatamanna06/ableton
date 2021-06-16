import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import background from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const links = [
        { content: <img src={background} alt="logo" id="logo" />, url: "/" },
        { content: "Live", url: "#" },
        { content: "Push", url: "#" },
        { content: "Link", url: "#" },
        { content: "Shop", url: "#" },
        { content: "Packs", url: "#" },
        { content: "Help", url: "#" },
        { content: "More", url: "#" },
        { content: <FaPlus />, url: "#" },
        { content: "Log in or register", url: "#" },
        { content: "Try Live for free", url: "#" }
      ];

    return (
        <div>
            <ul className='nav-menu'>
                {links?.map(({ content, url }) => (
                // an unique key is vital for React for optimization purpose
                <li key={url}>
                    <a href={url} className="nav-link left">
                    {content}
                    </a>
                </li>
                ))}
                {/*<li><a href="#"><img src={background} id='logo'/></a></li>
                <li><a href="#" className='nav-link left'>Live</a></li>
                <li><a href="#" className='nav-link left'>Push</a></li>
                <li><a href="#" className='nav-link left'>Link</a></li>
                <li><a href="#" className='nav-link left'>Shop</a></li>
                <li><a href="#" className='nav-link left'>Packs</a></li>
                <li><a href="#" className='nav-link left'>Help</a></li>
                <li><a href="#" className='nav-link left'>More</a></li>
                <li><FaPlus /></li>
                <li><a href="#" className='nav-link right'>Log in or register</a></li>
                <li><a href="#" className='nav-link right'>Try Live for free</a></li>*/}
            </ul>
        </div>
    )
}

export default Navbar