import React from 'react'
import './hero.css';
import arowlogo from'../../edusity_assets/dark-arrow.png';
const hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Better Education for Better world</h1>
            <p>explore your skills in our univercity</p>
            <button className='btn'>Explore More <img src={arowlogo} alt="" /></button>
        </div>
    </div>
  )
}

export default hero