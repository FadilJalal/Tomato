import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';;

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section footer-left">
          <h1>ZapEats</h1>
          <p>
            Delivering delicious meals from your favorite restaurants straight to your doorstep, fast and fresh every time.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} color="white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} color="white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} color="white" />
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
        &copy; 2025 ZapEats.com - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
