import React from 'react';
import { Award, Stethoscope, Sparkles, Star, ArrowRight } from 'lucide-react';
import './QuickLinks.css';

const quickLinksData = [
  {
    id: 'directors',
    icon: <Award size={28} />,
    title: '33+ Years Mastery',
    desc: 'Led by Dr. R. Ganesh & Gold Medalist Dr. R. Janani',
    linkHref: '#about',
    linkText: 'Meet Directors'
  },
  {
    id: 'implants',
    icon: <Stethoscope size={28} />,
    title: 'Advanced Implantology',
    desc: 'Permanent full-mouth restorations with precision implant systems',
    linkHref: '#services',
    linkText: 'Explore Implants'
  },
  {
    id: 'digital',
    icon: <Sparkles size={28} />,
    title: 'Modern Digital Scans',
    desc: 'High-speed intraoral 3D scanners — zero messy putty molds',
    linkHref: '#services',
    linkText: 'Digital Dentistry'
  },
  {
    id: 'hospital-model',
    icon: <Star size={28} />,
    title: '5.0★ Hospital Model',
    desc: 'BPS dentures, laser gums, & painless kids dentistry under anaesthesia',
    linkHref: '#testimonials',
    linkText: 'Patient Reviews'
  }
];

const QuickLinks = () => {
  return (
    <section className="quicklinks-section">
      <div className="container">
        <div className="quicklinks-grid">
          {quickLinksData.map((item) => (
            <div key={item.id} className="quicklink-card">
              <div className="quicklink-icon-circle">
                {item.icon}
              </div>
              <h3 className="quicklink-title">{item.title}</h3>
              <p className="quicklink-desc">{item.desc}</p>
              <a href={item.linkHref} className="quicklink-knowmore">
                <span>{item.linkText}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
