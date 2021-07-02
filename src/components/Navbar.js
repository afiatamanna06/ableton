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
        { content: "Help", url: "#" }
      ];

    const right_links = [
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
                <li><a href='#' className='nav-link left'>More<FaPlus className='plus-icon'/></a></li>
            </ul>
        </div>
    )
}

export default Navbar