import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import './FloatingButtons.css';

const whatsappUrl = "https://wa.me/919360769576?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sri%20Balaji%20Multispeciality%20Dental%20%26%20Implantology%20Centre.";

const FloatingButtons = ({ onOpenModal }) => {
  return (
    <div className="floating-action-stack">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="#ffffff" color="#ffffff" />
        <span className="tooltip">WhatsApp Us</span>
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:09543709302"
        className="floating-btn call-btn"
        aria-label="Call Clinic Now"
        title="Call 095437 09302"
      >
        <Phone size={22} />
        <span className="tooltip">Call Now</span>
      </a>

      {/* Book Appointment Button */}
      <button
        onClick={onOpenModal}
        className="floating-btn book-btn"
        aria-label="Book Appointment Modal"
        title="Book Appointment"
      >
        <Calendar size={22} />
        <span className="tooltip">Book Slot</span>
      </button>
    </div>
  );
};

export default FloatingButtons;
