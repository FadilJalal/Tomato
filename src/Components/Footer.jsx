import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section footer-left">
          <img src={assets.logo} alt="Tomato Logo" className="footer-logo" />
          <p>
            Delivering delicious meals from your favorite restaurants straight to your doorstep, fast and fresh every time.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-section footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+971 0555696002</li>
            <li>Contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="footer-bottom-text">
        &copy; 2024 Tomato.com - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
