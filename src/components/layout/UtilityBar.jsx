import React from 'react';
import { Clock, Phone } from 'lucide-react';
import './UtilityBar.css';

const UtilityBar = () => {
  return (
    <div className="utility-bar">
      <div className="container utility-container">
        {/* Left: Open Hours */}
        <div className="utility-left">
          <Clock size={14} className="utility-icon" />
          <span className="utility-hours-text">Monday - Saturday : 05:30 PM To 09:00 PM</span>
        </div>

        {/* Right: Quick Links */}
        <div className="utility-right">
          <a href="#about" className="utility-link show-tablet">About Us</a>
          <span className="utility-sep show-tablet">|</span>
          <a href="#services" className="utility-link">Services</a>
          <span className="utility-sep">|</span>
          <a href="#gallery" className="utility-link">Gallery</a>
          <span className="utility-sep">|</span>
          <a href="#contact" className="utility-link show-tablet">Contact Us</a>
          <span className="utility-sep hide-mobile">|</span>
          <a href="tel:09543709302" className="utility-link phone-highlight hide-mobile">
            <Phone size={13} /> 095437 09302
          </a>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
