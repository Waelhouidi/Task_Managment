import React, { useEffect, useState } from 'react';
import './navBar.css';
import logo from '../../edusity_assets/logo.png';

function NavBar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home </li>
        <li> Programs</li>
        <li>About us</li>
        <li>Compus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
