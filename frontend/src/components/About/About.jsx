import React from 'react'
import './About.css'
import about from '../../assets/hero.jpg'
import AOS from 'aos'
import Aos from 'aos'
const About = () => {
  Aos.init({
    duration:300,
  })
  return (
    <div>
        <div className="cont">
            <div className="left left-right">
                <h1>About Us</h1>
                <p>We are waiting for you here at Happy Hostel, your home in the heart of London!
Our hostel is a family business that has been home for travellers and backpackers in London for the past 17 years. Our founder wanted to create a place which will be more than just a place to stay in a big city.</p>
            </div>
            <div className="right left-right">
                <img src={about} alt="Image" width={400} data-aos='fade-left'/>
            </div>
        </div>
    </div>
  )
}

export default About