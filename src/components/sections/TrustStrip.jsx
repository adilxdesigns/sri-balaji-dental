import React from 'react';
import { Award, Star, ShieldCheck, Stethoscope, ArrowRight, MessageSquareText } from 'lucide-react';
import './TrustStrip.css';

const whatsappUrl = "https://wa.me/919360769576?text=Hi%20Doctor%2C%20I%20have%20a%20question%20regarding%20my%20dental%20health%20at%20Sri%20Balaji%20Dental%20Centre.";

const trustPillars = [
  {
    icon: <Award size={20} />,
    title: 'Serving Perambur',
    highlight: 'Since 2016'
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Surgical & Diagnostic Mastery',
    highlight: '33+ Years Combined'
  },
  {
    icon: <Star size={20} />,
    title: 'Patient Reputation',
    highlight: 'Flawless 5.0★ Rated'
  },
  {
    icon: <Stethoscope size={20} />,
    title: 'Hospital Care Model',
    highlight: 'Specialists Under One Roof'
  }
];

const TrustStrip = () => {
  return (
    <section className="trust-strip">
      <div className="container trust-strip-container">
        <div className="trust-pillars-row">
          {trustPillars.map((item, idx) => (
            <div key={idx} className="trust-pillar-item">
              <div className="trust-icon-box">
                {item.icon}
              </div>
              <div className="trust-pillar-text">
                <span className="trust-pillar-highlight">{item.highlight}</span>
                <span className="trust-pillar-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-strip-right">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white trust-cta-btn"
          >
            <MessageSquareText size={18} />
            <span>Consult on WhatsApp</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
