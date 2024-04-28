import React, { useRef } from 'react';
import './Test.css';
import Back from '../../edusity_assets/back-icon.png';
import Next from '../../edusity_assets/next-icon.png';
import User_1 from '../../edusity_assets/user-1.png';
import User_2 from '../../edusity_assets/user-2.png';
import User_3 from '../../edusity_assets/user-3.png';
import User_4 from '../../edusity_assets/user-4.png';

function Testi() {
    const slider=useRef();
    let tx=0;
const nextSLide =()=>{
  if(tx>-75){

tx-=25
  }
  slider.current.style.transform=`translateX(${-tx}%)`
};


const backtSLide =()=>{
    if(tx<25){

        tx+=25
          }
          slider.current.style.transform=`translateX(${-tx}%)`;
};
  return (
    <div className='Testimonials'>
        <img src={Next} alt="" className='next-btn' onClick={nextSLide}/>
        <img src={Back} alt="" className='back-btn' onClick={backtSLide}/>
        <div className="Slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user_info">
                        <img src={User_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions i've made.</p>
                    </div>

                </li>
                <li>
                <div className="slide">
                        <div className="user_info">
                        <img src={User_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                        </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions i've made.</p>
                    </div>
                </li>
                <li>
                <div className="slide">
                        <div className="user_info">
                        <img src={User_3} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                        </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions i've made.</p>
                    </div>
                </li>
                <li>
                <div className="slide">
                        <div className="user_info">
                        <img src={User_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                        </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions i've made.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testi