import React from 'react';
import { MapPin, Phone, Clock, Mail, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import InstagramIcon from '../ui/InstagramIcon';
import brandLogo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        {/* Col 1: Brand & Bio */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <div className="footer-logo-badge">
              <img src={brandLogo} alt="Sri Balaji Dental Clinic" className="footer-logo-img" />
            </div>
            <div className="footer-brand-text">
              <span className="footer-brand-title">Sri Balaji</span>
              <span className="footer-brand-sub">Dental & Implantology Centre</span>
            </div>
          </div>

          <p className="footer-bio">
            Serving Perambur Since 2010. Bringing over 33 years of combined surgical and diagnostic mastery directly to Paddy Field Road under a multi-disciplinary hospital model. Corporate-hospital excellence with transparent, honest family-practice pricing.
          </p>

          <div className="footer-badges-group">
            <div className="footer-badge-strip">
              <ShieldCheck size={16} />
              <span>Serving Perambur Since 2010 • 5.0★ Rated</span>
            </div>
            <a
              href="https://www.instagram.com/sri_balaji_dental_perambur_/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-insta-badge"
              title="Follow us on Instagram"
            >
              <InstagramIcon size={15} />
              <span>@sri_balaji_dental_perambur_</span>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Our Directors</a></li>
            <li><a href="#about">Elite Specialty Panel</a></li>
            <li><a href="#services">Core Specialities</a></li>
            <li><a href="#gallery">Clinic Infrastructure</a></li>
            <li><a href="#testimonials">Patient Reviews (5.0★)</a></li>
            <li><a href="#contact">Contact & Location</a></li>
          </ul>
        </div>

        {/* Col 3: Core Specialities */}
        <div className="footer-col">
          <h4 className="footer-heading">Core Clinical Specialities</h4>
          <ul className="footer-links">
            <li><a href="#services">Advanced Implantology</a></li>
            <li><a href="#services">Painless Root Canal (RCT)</a></li>
            <li><a href="#services">Premium BPS Dentures</a></li>
            <li><a href="#services">Kids Dentistry Under Anaesthesia</a></li>
            <li><a href="#services">Advanced Laser Gum Surgery</a></li>
            <li><a href="#services">Modern Digital Impressions</a></li>
            <li><a href="#services">Cosmetic Smile Makeovers</a></li>
          </ul>
        </div>

        {/* Col 4: Contact & Hours */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Clinic Details</h4>
          
          <div className="footer-info-row">
            <MapPin size={18} className="footer-info-icon" />
            <span>No. 119/1, Paddy Field Road, Perambur, Chennai - 600011</span>
          </div>

          <div className="footer-info-row">
            <Phone size={18} className="footer-info-icon" />
            <div>
              <p><a href="tel:06374653568">Mobile: 63746 53568</a></p>
              <p><a href="tel:04425515420">Landline: 044 25515420</a></p>
              <p><a href="https://wa.me/919543709302" target="_blank" rel="noopener noreferrer">WhatsApp: 95437 09302</a></p>
            </div>
          </div>

          <div className="footer-info-row">
            <Mail size={18} className="footer-info-icon" />
            <a href="mailto:sribalajidental2026@gmail.com" className="footer-email-link">
              sribalajidental2026@gmail.com
            </a>
          </div>

          <div className="footer-info-row">
            <InstagramIcon size={18} className="footer-info-icon footer-insta-icon" />
            <a
              href="https://www.instagram.com/sri_balaji_dental_perambur_/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-email-link"
              title="Sri Balaji Dental Instagram"
            >
              @sri_balaji_dental_perambur_
            </a>
          </div>

          <div className="footer-info-row">
            <Clock size={18} className="footer-info-icon" />
            <span>Mon–Sat: 5:30 PM – 9:00 PM<br/><strong>Sunday:</strong> By Appointment Only</span>
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
