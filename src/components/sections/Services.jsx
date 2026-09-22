import React from 'react';
import { PlusCircle, ArrowRight } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 'multispeciality',
    title: 'Multispeciality Dentistry',
    desc: 'Comprehensive, all-in-one dental solutions under one roof with advanced technology.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements with titanium posts & strong crowns.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rootcanal',
    title: 'Root Canal Treatment',
    desc: 'Painless, single-sitting endodontic therapy to preserve your original tooth structure.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    desc: 'Teeth whitening, veneers, and smile design to craft your dream aesthetic smile.',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'general',
    title: 'General Dentistry',
    desc: 'Preventive checkups, professional scaling, fillings, and oral health maintenance.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    desc: 'Gentle, child-friendly dental treatments, fluorides, and cavities prevention for kids.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
  },
];

const whatsappUrl = "https://wa.me/919360769576?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20dental%20services%20at%20Sri%20Balaji%20Dental.";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">TREATMENTS & CARE</span>
          <h2 className="section-title">Our Multispeciality Dental Services</h2>
          <p className="section-desc">
            We offer world-class oral health treatments backed by modern equipment, gentle care, and decades of clinical expertise in Perambur.
          </p>
        </div>

        {/* 3-per-row Photo-topped Cards */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                />
                <div className="service-img-overlay"></div>
              </div>

              <div className="service-body">
                <p className="service-description">{service.desc}</p>
              </div>

              {/* Sparks style solid navy color banner at bottom */}
              <div className="service-banner-bottom">
                <h3 className="service-banner-title">{service.title}</h3>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="service-know-more"
                >
                  <span>Know more</span>
                  <PlusCircle size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
