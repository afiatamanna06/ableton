import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='grid-container'>
            <div className='header-pic'><p className='logo'>Ableton</p></div>
            <div className='header-description'>
                <h2>We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h2>
                <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>
        </div>
    )
}

export default Header