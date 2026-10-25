import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import InstagramIcon from '../ui/InstagramIcon';
import brandLogo from '../../assets/logo.png';
import './Navbar.css';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'CONTACT US', href: '#contact' },
];

const whatsappUrl = "https://wa.me/919543709302?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sri%20Balaji%20Multispeciality%20Dental%20%26%20Implantology%20Centre.";

const Navbar = ({ activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sparks-header-wrapper">
      {/* 1. Middle White Row: Brand Logo + Contact Blocks */}
      <div className="brand-header-row">
        <div className="container brand-header-container">
          <a href="#home" className="brand-logo" aria-label="Sri Balaji Dental Home">
            <div className="logo-icon-badge">
              <img src={brandLogo} alt="Sri Balaji Dental Clinic Logo" className="brand-logo-img" />
            </div>
            <div className="logo-text-group">
              <span className="logo-title">SRI BALAJI DENTAL</span>
              <span className="logo-subtitle">
                Multispeciality & Implantology Centre • <span className="logo-est-pill">Est. 2010</span>
              </span>
            </div>
          </a>

          {/* Right Contact Info Cards (Sparks Dental Style) */}
          <div className="header-contact-group">
            <a href="tel:06374653568" className="contact-info-block">
              <div className="contact-icon-circle">
                <Phone size={18} className="contact-icon" />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">CALL CLINIC</span>
                <span className="contact-val">63746 53568</span>
              </div>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-info-block">
              <div className="contact-icon-circle">
                <MessageSquare size={18} className="contact-icon" />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">WHATSAPP</span>
                <span className="contact-val">95437 09302</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/sri_balaji_dental_perambur_/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-block header-insta-block"
              title="Follow @sri_balaji_dental_perambur_ on Instagram"
            >
              <div className="contact-icon-circle header-insta-circle">
                <InstagramIcon size={18} color="#ffffff" />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">INSTAGRAM</span>
                <span className="contact-val">Follow Us</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 2. Lower Blue Navigation Bar Row */}
      <nav className="blue-navbar-row">
        <div className="container blue-nav-container">
          <ul className="nav-menu">
            {navItems.map((item) => {
              const itemId = item.href.replace('#', '');
              const isActive = activeSection === itemId;
              return (
                <li key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active-block' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer - Full Screen */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          {/* Drawer Header */}
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand">
              <div className="logo-icon-badge" style={{ width: 38, height: 38, padding: 3 }}>
                <img src={brandLogo} alt="Sri Balaji Dental Clinic Logo" className="brand-logo-img" />
              </div>
              <span className="mobile-drawer-clinic-name">Sri Balaji Dental</span>
            </div>
            <button
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-menu">
            {navItems.map((item) => {
              const itemId = item.href.replace('#', '');
              const isActive = activeSection === itemId;
              return (
                <li key={item.label} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? 'active-mobile' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Bottom CTA in drawer */}
          <div className="mobile-drawer-footer">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-book-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              💬 WhatsApp: 95437 09302
            </a>
            <a href="tel:06374653568" className="mobile-call-btn">
              📞 Call: 63746 53568 / 044 25515420
            </a>
            <a
              href="https://www.instagram.com/sri_balaji_dental_perambur_/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-insta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <InstagramIcon size={18} color="#ffffff" />
              <span>Instagram: @sri_balaji_dental_perambur_</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
