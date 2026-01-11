import React from 'react'
import './Navbar.css'
import logo from '../../assets/transparent-logo.png'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" width={100}/>
            </div>
            <div className="nav-menu">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="contact-btn">
                 <a href="#contact"><button>Contact</button></a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar