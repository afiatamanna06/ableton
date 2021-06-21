import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='container'>
            <div className='items-column'>
               <div className='top-row'>
                    <h1>Ableton</h1>
                    <ul className='items'>
                        <li><a href='#' className='item-link'>Register Live or Push</a></li>
                        <li><a href='#' className='item-link'>About Ableton</a></li>
                        <li><a href='#' className='item-link'>Jobs</a></li>
                    </ul>
               </div>
            </div>
        </div>
    )
}

export default Footer