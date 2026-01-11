import React from 'react'
import wifi from '../../assets/wifi.svg'
import machine from '../../assets/machine.svg'
import study from '../../assets/study.svg'
import clean from '../../assets/clean.svg'
import water from '../../assets/water.svg'
import './Services.css'
import Card from '../Card/Card'
const Services = () => {
  return (
    <div className='ServiceSection'>
        <h1>Our Services</h1>
        <div className="card-cont">
            <Card im={study} desc={"Peaceful Study Environment"} clr={"#1D546D"}/>
            <Card im={clean} desc={"Clean Environment"}  clr={"#5F9598"}/>
            <Card im={machine} desc={"Free Laundry Service"}  clr={"#BBE0EF"}/>
            <Card im={water} desc={"Fresh and Filter Water"}  clr={"#BDE8F5"}/>
            <Card im={wifi} desc={"Free wifi 24/7"}  clr={"#79C9C5"}/>
            <Card im={wifi} desc={"Free wifi 24/7"}  clr={"#3F9AAE"}/>
        </div>
    </div>
  )
}

export default Services