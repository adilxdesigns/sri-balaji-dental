import React from 'react';
import { MapPin, Phone, Clock, Mail, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        {/* Col 1: Brand & Bio */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <div className="footer-logo-badge">
              <svg viewBox="0 0 24 24" className="footer-tooth-icon" fill="currentColor">
                <path d="M17 2H7C5.34 2 4 3.34 4 5v5c0 4.42 2.87 8.17 6.84 9.5.37.12.76.19 1.16.19s.79-.07 1.16-.19C17.13 18.17 20 14.42 20 10V5c0-1.66-1.34-3-3-3zm-5 15.5c-3.1-1.12-5-4.07-5-7.5V5h10v5c0 3.43-1.9 6.38-5 7.5z"/>
              </svg>
            </div>
            <div className="footer-brand-text">
              <span className="footer-brand-title">Sri Balaji</span>
              <span className="footer-brand-sub">Dental & Implantology Centre</span>
            </div>
          </div>

          <p className="footer-bio">
            Providing high-quality, trusted, and affordable dental care in Perambur, Chennai. Specializing in Dental Implants, Painless Root Canals, and Cosmetic Dentistry.
          </p>

          <div className="footer-badge-strip">
            <ShieldCheck size={16} />
            <span>ISO Sterilized Standard Clinic</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Dental Services</a></li>
            <li><a href="#gallery">Photo Gallery</a></li>
            <li><a href="#testimonials">Patient Reviews</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Col 3: Treatments */}
        <div className="footer-col">
          <h4 className="footer-heading">Specialised Care</h4>
          <ul className="footer-links">
            <li><a href="#services">Dental Implants</a></li>
            <li><a href="#services">Single-Sitting Root Canal</a></li>
            <li><a href="#services">Teeth Whitening & Veneers</a></li>
            <li><a href="#services">Pediatric Dental Care</a></li>
            <li><a href="#services">Scaling & Tooth Polishing</a></li>
            <li><a href="#services">Crowns & Dental Bridges</a></li>
          </ul>
        </div>

        {/* Col 4: Contact & Hours */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Clinic Details</h4>
          
          <div className="footer-info-row">
            <MapPin size={18} className="footer-info-icon" />
            <span>119/1, Paddy Field Rd, Chinnaiyan Colony, Perambur, Chennai - 600011</span>
          </div>

          <div className="footer-info-row">
            <Phone size={18} className="footer-info-icon" />
            <div>
              <p><a href="tel:09543709302">095437 09302</a></p>
              <p><a href="https://wa.me/919360769576" target="_blank" rel="noopener noreferrer">WA: 93607 69576</a></p>
            </div>
          </div>

          <div className="footer-info-row">
            <Clock size={18} className="footer-info-icon" />
            <span>Mon–Sat: 5:30 PM – 9:00 PM<br/>Sunday Closed</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© {new Date().getFullYear()} Sri Balaji Multispeciality Dental & Implantology Centre. All Rights Reserved.</p>
          <p className="credit-text">Designed for Perambur, Chennai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
