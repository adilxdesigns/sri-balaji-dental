import React from 'react';
import { Clock, Phone, Mail } from 'lucide-react';
import InstagramIcon from '../ui/InstagramIcon';
import './UtilityBar.css';

const UtilityBar = () => {
  return (
    <div className="utility-bar">
      <div className="container utility-container">
        {/* Left: Open Hours & Heritage */}
        <div className="utility-left">
          <Clock size={14} className="utility-icon" />
          <span className="utility-hours-text">
            Serving Perambur Since 2010 | Mon - Sat: 5:30 PM - 9:00 PM | Sun: By Appt Only
          </span>
        </div>

        {/* Right: Quick Links */}
        <div className="utility-right">
          <a
            href="https://www.instagram.com/sri_balaji_dental_perambur_/"
            target="_blank"
            rel="noopener noreferrer"
            className="utility-link insta-highlight hide-mobile"
            title="Follow us on Instagram"
          >
            <InstagramIcon size={13} className="utility-insta-icon" />
            <span>@sri_balaji_dental_perambur_</span>
          </a>
          <span className="utility-sep hide-mobile">|</span>
          <a href="mailto:sribalajidental2026@gmail.com" className="utility-link hide-mobile">
            <Mail size={13} /> sribalajidental2026@gmail.com
          </a>
          <span className="utility-sep hide-mobile">|</span>
          <a href="#about" className="utility-link show-tablet">About Us</a>
          <span className="utility-sep show-tablet">|</span>
          <a href="#services" className="utility-link">Services</a>
          <span className="utility-sep">|</span>
          <a href="#gallery" className="utility-link">Gallery</a>
          <span className="utility-sep">|</span>
          <a href="#contact" className="utility-link show-tablet">Contact Us</a>
          <span className="utility-sep hide-mobile">|</span>
          <a href="tel:06374653568" className="utility-link phone-highlight hide-mobile">
            <Phone size={13} /> 63746 53568 / 044 25515420
          </a>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
