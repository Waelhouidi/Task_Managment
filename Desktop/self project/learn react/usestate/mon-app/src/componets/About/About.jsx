import React from 'react'
import './About.css'
import About_img from '../../edusity_assets/about.png';
import play_icon from '../../edusity_assets/play-icon.png';
function About() {
  return (
 
        <div className='about '>
<div className='about-left'>
<img src={About_img} alt="" className='About_img' />
<img src={play_icon} alt="" className='play_icon' />
</div>
<div className='about-right'>
<h3>ABOUT UNIVERCITY</h3>
<h2>Nurturing Tomorrow's Leaders Today</h2>
<p>Embark on a a transformative educational journey with our university's comprehensive edution programs.Our cutting-edge curriculum is designed to empower students with the knowledge,skiils,and experiences needed to excel in the dynamic field of education </p>
<p>Embark on a a transformative educational journey with our university's comprehensive edution programs.Our cutting-edge curriculum is designed to empower students with the knowledge,skiils,and experiences needed to excel in the dynamic field of education </p>
</div>

        </div>
   
  )
}

export default About