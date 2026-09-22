import React from 'react';
import { CalendarCheck, Stethoscope, Star, Compass, ArrowRight } from 'lucide-react';
import './QuickLinks.css';

const quickLinksData = [
  {
    id: 'appointments',
    icon: <CalendarCheck size={28} />,
    title: 'Appointments',
    desc: 'Instant booking via WhatsApp or Phone',
    linkHref: '#contact',
    linkText: 'Know more'
  },
  {
    id: 'implants',
    icon: <Stethoscope size={28} />,
    title: 'Dental Implants',
    desc: 'Permanent titanium teeth replacements',
    linkHref: '#services',
    linkText: 'Know more'
  },
  {
    id: 'reviews',
    icon: <Star size={28} />,
    title: 'Patient Reviews',
    desc: '4.9★ rating from 10,000+ happy smiles',
    linkHref: '#testimonials',
    linkText: 'Know more'
  },
  {
    id: 'tour',
    icon: <Compass size={28} />,
    title: 'Virtual Tour',
    desc: 'Explore our modern hygienic facility',
    linkHref: '#gallery',
    linkText: 'Know more'
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
