import React from 'react';
import './programs.css';
import Prigram1 from '../../edusity_assets/program-1.png';
import Prigram2 from '../../edusity_assets/program-2.png';
import Prigram3 from '../../edusity_assets/program-3.png';
import Programicon1 from '../../edusity_assets/program-icon-1.png';
import Programicon2 from '../../edusity_assets/program-icon-2.png';
import Programicon3 from '../../edusity_assets/program-icon-3.png';

function programs() {
  return (
    <div className='programs'>
        <div className="program">
        <img src={Prigram1} alt="Prigram1" />
        <div className='caption'>
          <img src={Programicon1} alt="" />
          <p>Graduation and Degree</p>
        </div>
        </div>
        <div className="program">
        <img src={Prigram2} alt="Prigram2" />
        <div className='caption'>
          <img src={Programicon2} alt="" />
          <p>Graduation and Degree</p>
        </div>
        </div>
        <div className="program">
        <img src={Prigram3} alt="Prigram3" />
        <div className='caption'>
          <img src={Programicon3} alt="" />
          <p>Graduation and Degree</p>
        </div>
        </div>
    </div>
  )
}

export default programs