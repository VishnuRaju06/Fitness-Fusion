import React from 'react';
import whatsapp from '../assets/whatsapp.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

function Footer() {
  const [email, setEmail] = React.useState('');

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const subscribe = () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="section-footer" id="footer">
      <div className="footer-box container">
        <div className="contact-details">
          <h2>FITNESS FUSION</h2>
          <div className="contact-company-address">
            VIT University<br /> Vellore, Tamil Nadu 632014,<br />INDIA
          </div>
          <div className="contact-social-links">
            <img src={whatsapp} alt="WhatsApp" className="nav-hamburger" width="35" height="35" />
            <img src={facebook} alt="Facebook" className="nav-hamburger" width="35" height="35" />
            <img src={instagram} alt="Instagram" className="nav-hamburger" width="35" height="35" />
            <img src={twitter} alt="Twitter" className="nav-hamburger" width="35" height="35" />
          </div>
        </div>
        <nav className="footer-nav" aria-label="navigation">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="aboutus.html">About</a></li>
            <li><a href="memberships.html">Memberships</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="ourteam.html">Our Team</a></li>
            <li><a href="bmi.html">BMI Calculator</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div className="newsletter">
          <h3>News Letter</h3>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@domain.com" 
          />
          <button onClick={subscribe}>Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="container copyrights">
        <div>Copyright 2024 © by FITNESS FUSION</div>
      </div>
    </footer>
  );
}

export default Footer;