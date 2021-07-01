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
                        <li><a href='#' className='item-link'>Register Live or Push<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>About Ableton<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>Jobs<FaAngleRight className='angle'/></a></li>
                        <li>
                            <div className='item-inline'>
                                <a href='https://www.facebook.com/ableton'><FaFacebook className='fb icon'/></a>
                                <a href='https://www.twitter.com/ableton'><FaTwitter className='tw icon'/></a>
                                <a href='https://www.youtube.com/ableton'><FaYoutube className='yt icon'/></a>
                                <a href='https://www.instagram.com/ableton'><FaInstagram className='it icon'/></a>
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
               <div>
                   <ul className='items'>
                        <li><h3>Distributors</h3></li>
                        <li><a href='#' className='item-link'>Find Distributors<FaAngleRight className='angle'/></a></li>
                        <li><a href='#' className='item-link'>Try Push in-store<FaAngleRight className='angle'/></a></li>
                   </ul>
               </div>
            </div>
            <div className='items-column'>
                <div>
                   <ul className='items'>
                        <li><h3>Sign up to our newsletter</h3></li>
                        <li><p>Enter your email address to stay up to date with the latest<br></br> offers, tutorials, downloads, surveys and more.</p></li>
                        <li><input type='email' placeholder='Email Address' className='input-signup'></input><button className='btn-signup'>Sign Up</button></li>
                   </ul>
               </div>
               <div>
                   <ul className='items'>
                        <li><h3>Language and Location</h3></li>
                        <li className='inline-items'>
                            <div className='language-select'>
                                <select className='languages'>
                                    <option id='english' selected>English</option>
                                    <option id='deutsch'>Deutsch</option>
                                    <option id='francais'>Français</option>
                                    <option id='japanese'>日本語</option>
                                    <option id='chinese'>简体中文</option>
                                </select>
                            </div>
                            <div className='country-select'>
                                <select className='countries'>
                                    <optgroup label='Common Countries'>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                    </optgroup>
                                </select>
                            </div>
                        </li>
                   </ul>
               </div>
            </div>
        </div>
    )
}

export default Footer