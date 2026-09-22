import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'CONTACT US', href: '#contact' },
];

const whatsappUrl = "https://wa.me/919360769576?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sri%20Balaji%20Multispeciality%20Dental%20%26%20Implantology%20Centre.";

const Navbar = ({ activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sparks-header-wrapper">
      {/* 1. Middle White Row: Brand Logo + Contact Blocks */}
      <div className="brand-header-row">
        <div className="container brand-header-container">
          <a href="#home" className="brand-logo">
            <div className="logo-icon-badge">
              <svg viewBox="0 0 24 24" className="dental-tooth-icon" fill="currentColor">
                <path d="M17 2H7C5.34 2 4 3.34 4 5v5c0 4.42 2.87 8.17 6.84 9.5.37.12.76.19 1.16.19s.79-.07 1.16-.19C17.13 18.17 20 14.42 20 10V5c0-1.66-1.34-3-3-3zm-5 15.5c-3.1-1.12-5-4.07-5-7.5V5h10v5c0 3.43-1.9 6.38-5 7.5z"/>
                <circle cx="12" cy="9" r="2.2" fill="#00838F"/>
              </svg>
            </div>
            <div className="logo-text-group">
              <span className="logo-title">SRI BALAJI DENTAL</span>
              <span className="logo-subtitle">Multispeciality & Implantology Centre</span>
            </div>
          </a>

          {/* Right Contact Info Cards (Sparks Dental Style) */}
          <div className="header-contact-group">
            <a href="tel:09543709302" className="contact-info-block">
              <div className="contact-icon-circle">
                <Phone size={18} className="contact-icon" />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">CALL US</span>
                <span className="contact-val">095437 09302</span>
              </div>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-info-block">
              <div className="contact-icon-circle">
                <MessageSquare size={18} className="contact-icon" />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">WHATSAPP US</span>
                <span className="contact-val">9360769576</span>
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
              <div className="logo-icon-badge" style={{ width: 36, height: 36 }}>
                <svg viewBox="0 0 24 24" className="dental-tooth-icon" fill="currentColor" style={{ width: 22, height: 22 }}>
                  <path d="M17 2H7C5.34 2 4 3.34 4 5v5c0 4.42 2.87 8.17 6.84 9.5.37.12.76.19 1.16.19s.79-.07 1.16-.19C17.13 18.17 20 14.42 20 10V5c0-1.66-1.34-3-3-3zm-5 15.5c-3.1-1.12-5-4.07-5-7.5V5h10v5c0 3.43-1.9 6.38-5 7.5z"/>
                  <circle cx="12" cy="9" r="2.2" fill="#00838F"/>
                </svg>
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
              📅 Book Appointment on WhatsApp
            </a>
            <a href="tel:09543709302" className="mobile-call-btn">
              📞 Call: 095437 09302
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
