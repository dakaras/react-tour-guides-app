import React from 'react'
import './Navbar.scss'
import Colosseum  from '../../Colosseum.jpg'
export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={Colosseum} alt='Colosseum'className='colosseum'/>
            
            <ul className='nav-links'>
                {/* <li>
                    <a href='/' className='nav-link'>Home</a>
                </li>
                <li>
                    <a href='/' className='nav-link'>About</a>
                </li>
                <li>
                    <a href='/' className='nav-link active'>Tours</a>
                </li> */}
            </ul>
            <div className='title'>Guided Roman Tours</div>
            <div className='mobile-nav'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}

