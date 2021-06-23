import React from 'react'
import './Footer.css'
import { FaAngleRight } from 'react-icons/fa'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='container'>
            <div className='items-column'>
               <div className='top-row'>
                    <ul className='items'>
                        <li><h1 className='logo-footer'>Ableton</h1></li>
                        <li><a href='#' className='item-link'>Register Live or Push<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>About Ableton<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>Jobs<FaAngleRight className='angle'/></a></li>
                        <li>
                            <div className='item-inline'>
                                <a href='https://www.facebook.com/'><FaFacebook className='fb icon'/></a>
                                <a href='https://www.twitter.com/'><FaTwitter className='tw icon'/></a>
                                <a href='https://www.youtube.com/'><FaYoutube className='yt icon'/></a>
                                <a href='https://www.instagram.com/'><FaInstagram className='it icon'/></a>
                            </div>
                        </li>
                    </ul>
               </div>
               <div>
                   <ul className='items'>
                       <li><h3>Community</h3></li>
                        <li><a href='#' className='item-link'>Find Ableton User Groups<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>Find Certified Training<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>Become a Certified Trainer<FaAngleRight className='angle'/></a></li>
                   </ul>
               </div>
            </div>
            <div className='items-column'>
                <div>
                   <ul className='items'>
                       <li><h3>Education</h3></li>
                        <li><a href='#' className='item-link'>Offers for students and teachers<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>Ableton for the Classroom<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>Ableton for Colleges and Universities<FaAngleRight className='angle'/></a></li>
                   </ul>
               </div>
            </div>
        </div>
    )
}

export default Footer