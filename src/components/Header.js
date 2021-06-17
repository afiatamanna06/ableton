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
            {/*<div className='menu-pic-1'>
                <p className='photo1'></p>
            </div>
            <div className='menu-pic-2'>
                <p className='photo2'></p>
            </div>*/}
            <div className='concept'>
                <h2>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h2>
                <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
            </div>
            <div className='range'>
                <h2>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h2>
                <p>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
            </div>
            <div className='believe'>
                <h2>We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</h2>
                <p>Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.</p>
            </div>
            <div className='passion'>
                <h2>We’re passionate about what we do, but we’re equally passionate about improving who we are.</h2>
                <p>We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.

                Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
                </p>
            </div>
            <div className='work'></div>
        </div>
    )
}

export default Header