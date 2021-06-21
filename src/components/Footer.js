import React from 'react'
import './Footer.css'
import { FaAngleRight } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='container'>
            <div className='items-column'>
               <div className='top-row'>
                    <h1 className='logo-footer'>Ableton</h1>
                    <ul className='items'>
                        <li><a href='#' className='item-link'>Register Live or Push<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>About Ableton<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>Jobs<FaAngleRight className='angle'/></a></li>
                    </ul>
               </div>
            </div>
        </div>
    )
}

export default Footer