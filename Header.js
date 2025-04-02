import React from 'react';
import logo from '../assets/logo.png';
import navIcon from '../assets/nav-icon.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav" aria-label="navigation">
          <div className="logo-content">
            <img src={logo} alt="Logo" className="nav-icon" width="70" height="60" />
            <div className="logo">FITNESS <span style={{color: "red"}}><strong>FUSION</strong></span></div>
          </div>
          <img src={navIcon} alt="navigation icon" className="nav-hamburger" width="30" height="30" />
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="aboutus.html">About</a></li>
            <li><a href="memberships.html">Memberships</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="ourteam.html">Our Team</a></li>
            <li><a href="bmi.html">BMI Calculator</a></li>
            <li><a href="contact.html">Join Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;