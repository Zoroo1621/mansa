import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
            <div className="card" style={{background:`${props.clr}`}}>
            <img src={props.im} alt="icon" />
            <p>{props.desc}</p>
            </div>
    </div>
  )
}

export default Card