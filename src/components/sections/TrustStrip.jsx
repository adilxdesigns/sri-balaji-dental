import React from 'react';
import { MessageSquareText, Sparkles, ArrowRight } from 'lucide-react';
import './TrustStrip.css';

const whatsappUrl = "https://wa.me/919360769576?text=Hi%20Doctor%2C%20I%20have%20a%20question%20regarding%20my%20dental%20health%20at%20Sri%20Balaji%20Dental%20Centre.";

const TrustStrip = () => {
  return (
    <section className="trust-strip">
      <div className="container trust-strip-container">
        <div className="trust-strip-left">
          <div className="trust-icon-box">
            <Sparkles size={24} />
          </div>
          <h2 className="trust-strip-text">
            Your First Step Toward Complete Oral Health Starts Here
          </h2>
        </div>

        <div className="trust-strip-right">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white trust-cta-btn"
          >
            <MessageSquareText size={18} />
            <span>Ask a Doctor</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
