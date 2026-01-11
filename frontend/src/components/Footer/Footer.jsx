import React from 'react'
import './Footer.css'
import logo from '../../assets/transparent-logo.png'
import phone from '../../assets/call.svg'
import mail from '../../assets/mail.svg'
import location from '../../assets/location.svg'
const Footer = () => {
  return (
    <div>
        <div className="footer-cont">
            <div className="footer-left">
            <img src={logo} alt="logo"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo vero deserunt quos.</p>
            </div>
            <div className="footer-right">
                <h2>Contact Info</h2>
                <ul>
                    <li><img src={location} alt="icon" /> <p>Gurans marg,Tintoliya-10,Biratnagar Morang Nepal</p></li>
                    <li><img src={phone} alt="icon" /><p>+977 9819045447</p></li>
                    <li><img src={mail} alt="icon" /><p>zoroo1621@gmail.com</p></li>
                </ul>
            </div>
        </div>
            <p className='rights'>&copy;Copyright All rights reserved | Made By Gopi</p>
    </div>
  )
}

export default Footer