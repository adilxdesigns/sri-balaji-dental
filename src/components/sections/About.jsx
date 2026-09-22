import React from 'react';
import { Award, CheckCircle2, Shield, HeartHandshake, Sparkles, Clock, MapPin } from 'lucide-react';
import './About.css';

const highlights = [
  'Advanced Implantology & Laser Dental Tech',
  'Strict 4-Step Sterilization & Hygiene Protocol',
  'Painless & Single-Sitting Root Canal Treatments',
  'Friendly Care for Children & Elderly Patients'
];

const whatsappUrl = "https://wa.me/919360769576?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sri%20Balaji%20Dental%20Centre.";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-panel">
          {/* Left Column: Clinic Story */}
          <div className="about-text-col">
            <span className="about-badge">
              <Award size={16} />
              <span>30+ Years of Dental Excellence</span>
            </span>

            <h2 className="about-title">
              Leading & Most Trusted Dental Clinic in Perambur
            </h2>

            <p className="about-paragraph">
              At <strong>Sri Balaji Multispeciality Dental & Implantology Centre</strong>, we believe a healthy smile is the foundation of confidence and overall well-being. Located on Paddy Field Road in Perambur, Chennai, our clinic combines cutting-edge dental technology with gentle, patient-first care.
            </p>

            <p className="about-paragraph">
              Our multidisciplinary team specializes in high-precision Dental Implants, Painless Root Canals, Cosmetic Smile Redesigns, and Comprehensive Pediatric Dentistry in a warm and sterile environment.
            </p>

            <div className="about-highlights-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-white"
              >
                <span>Book Consultation</span>
              </a>
              <a href="#services" className="btn-outline-white">
                <span>Explore Treatments</span>
              </a>
            </div>
          </div>

          {/* Right Column: Doctor Photo & Card */}
          <div className="about-doctor-col">
            <div className="doctor-card">
              <div className="doctor-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                  alt="Chief Dental Surgeon"
                  className="doctor-img"
                />
                <div className="doctor-experience-tag">
                  <span className="exp-num">15+</span>
                  <span className="exp-label">Years Exp.</span>
                </div>
              </div>

              <div className="doctor-info">
                <h3 className="doctor-name">Dr. Chief Specialist (MDS)</h3>
                <p className="doctor-credentials">
                  M.D.S. – Senior Dental Surgeon & Specialist Implantologist
                </p>
                <div className="doctor-badges">
                  <span className="doc-badge">Implants Expert</span>
                  <span className="doc-badge">Endodontics</span>
                  <span className="doc-badge">IDA Certified</span>
                </div>

                <div className="clinic-location-info">
                  <div className="info-row">
                    <MapPin size={16} />
                    <span>Perambur, Chennai</span>
                  </div>
                  <div className="info-row">
                    <Clock size={16} />
                    <span>Mon–Sat 5:30 PM–9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
