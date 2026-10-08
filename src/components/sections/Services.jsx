import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle,
  Award
} from 'lucide-react';
import kidsDentistryImg from '../../assets/kids-dentistry.jpg';
import './Services.css';

const servicesData = [
  {
    id: 'implants',
    badge: 'Flagship Speciality',
    doctorLead: 'Led by Dr. R. Ganesh (19 Yrs Exp)',
    title: 'Advanced Implantology & Full-Mouth Rehabilitation',
    shortDesc: 'Permanent, lifelike tooth restorations using precision, state-of-the-art implant systems.',
    fullDesc: 'Restore complete chewing power, facial aesthetics, and lifelong speech stability. From individual single-tooth replacements to full-arch restorations, our computer-guided surgical protocols ensure minimal discomfort and rapid integration.',
    features: [
      'Single tooth, multiple teeth & full-mouth arches',
      'High-grade biocompatible titanium implant systems',
      'Bone preservation & minimally invasive techniques',
      'Immediate functional loading options available'
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    tag: 'Oral Rehabilitation'
  },
  {
    id: 'rootcanal',
    badge: 'Single Sitting Relief',
    doctorLead: 'On-Call Endodontic Panel',
    title: 'Painless Root Canal Treatments (RCT)',
    shortDesc: 'Highly efficient, comfortable, single-visit root canals designed to eliminate acute dental pain instantly.',
    fullDesc: 'Save infected natural teeth with advanced rotary endodontics and apex locators. Designed for maximum patient comfort, our single-visit protocol eradicates deep infection while preserving your natural tooth root safely.',
    features: [
      'Instant relief from acute throbbing toothache',
      'Single-visit microscopic root canal efficiency',
      'Zero pain protocol with gentle localized anesthesia',
      'Permanent hermetic seal to prevent reinfection'
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    tag: 'Tooth Preservation'
  },
  {
    id: 'bps-dentures',
    badge: 'World-Class Prosthetics',
    doctorLead: 'On-Call Prosthodontic Panel',
    title: 'Premium BPS Dentures',
    shortDesc: 'World-class Biofunctional Prosthetic System (BPS) Dentures that offer unmatched comfort, a natural appearance, and a highly precise fit.',
    fullDesc: 'Say goodbye to loose, painful, and clicking traditional dentures. BPS dentures recreate natural muscle movements, chewing dynamics, and facial contours with superior materials, delivering unparalleled stability while eating and talking.',
    features: [
      'Superior chewing and speaking stability without slippage',
      'Biofunctional reproduction of natural jaw movements',
      'Premium wear-resistant composite teeth & lifelike gums',
      'Custom fabricated to exact oral anatomy contours'
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    tag: 'Prosthodontics'
  },
  {
    id: 'pediatric',
    badge: 'Safe & Anxiety-Free',
    doctorLead: 'Specialized Pediatric Panel',
    title: 'Painless Kids Dentistry under Anaesthesia',
    shortDesc: 'A specialized, safe setup for young children or anxious patients to receive complete dental care under controlled conscious sedation or general anaesthesia without fear.',
    fullDesc: 'Eliminate dental phobia for life. Children requiring extensive cavity treatment, milk tooth pulpotomy, or stainless steel crowns receive compassionate care in a gentle environment, supervised safely by pediatric specialists and certified anesthetists.',
    features: [
      'Controlled conscious sedation & general anaesthesia options',
      'Safe, gentle, trauma-free experience for young patients',
      'Milk tooth restorations, space maintainers & fluoride therapy',
      'Ideal for extremely anxious or special-needs children'
    ],
    image: kidsDentistryImg,
    tag: 'Pediatric Care'
  },
  {
    id: 'laser-gum',
    badge: 'Stitch-Free & Bloodless',
    doctorLead: 'On-Call Periodontic Panel',
    title: 'Advanced Laser Gum Surgery',
    shortDesc: 'Minimally invasive, bloodless, and stitch-free laser therapies for gum diseases, deep cleaning, and rapid aesthetic healing.',
    fullDesc: 'Modern dental lasers vaporize diseased periodontal bacteria and reshape gummy smiles without surgical scalpels, bleeding, or sutures. Patients experience virtually no post-operative swelling and resume daily routines immediately.',
    features: [
      'Bloodless & stitch-free laser tissue treatment',
      'Painless deep bacterial debridement for pyorrhea & gingivitis',
      'Laser gum depigmentation & aesthetic smile contouring',
      'Accelerated tissue regeneration & rapid healing'
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    tag: 'Periodontics & Lasers'
  },
  {
    id: 'digital-impressions',
    badge: 'Modern Technology',
    doctorLead: 'In-House Digital Suite',
    title: 'Modern Digital Impressions',
    shortDesc: 'High-speed intraoral digital scanners that eliminate messy, uncomfortable traditional putty molds.',
    fullDesc: 'Experience the future of digital dentistry. Our high-precision 3D digital scanner creates instant, micron-accurate dental maps of your teeth within seconds, making crowns, aligners, and bridges fit with astonishing perfection.',
    features: [
      'Zero gagging — no cold, sticky traditional putty trays',
      'Real-time high-resolution 3D digital visualization',
      'Micron-accurate margins for crowns, bridges & veneers',
      'Faster turnaround time with automated digital lab workflows'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    tag: 'Digital Dentistry'
  },
  {
    id: 'cosmetic',
    badge: 'Smile Architecture',
    doctorLead: 'Aesthetic Dental Team',
    title: 'Cosmetic Dentistry & Smile Makeovers',
    shortDesc: 'Precision teeth whitening, premium dental veneers, and aesthetic smile design.',
    fullDesc: 'Transform discolored, chipped, gapped, or misaligned teeth into a confident, radiant smile. Using personalized digital smile design principles, ultra-thin porcelain veneers, and safe in-office whitening, we craft harmony suited to your facial profile.',
    features: [
      'In-office instant chairside laser teeth whitening',
      'Custom porcelain laminates & ultrathin dental veneers',
      'Composite bonding for minor chips & spacing closures',
      'Digital smile makeover planning tailored to your face'
    ],
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
    tag: 'Cosmetic Smile'
  }
];

const whatsappUrl = "https://wa.me/919360769576?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20dental%20treatments%20at%20Sri%20Balaji%20Dental.";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">ADVANCED CLINICAL EXPERTISE</span>
          <h2 className="section-title">Our Core Clinical Specialities</h2>
          <p className="section-desc">
            Bringing 33+ years of combined surgical mastery and cutting-edge digital dentistry directly to Paddy Field Road, Perambur.
          </p>
        </div>

        {/* 7 Core Specialities Grid */}
        <div className="services-grid-seven">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card-v2 ${service.id === 'implants' ? 'featured-card' : ''}`}
            >
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                />
                <div className="service-img-overlay"></div>
                <div className="service-badge-pill">{service.badge}</div>
                <div className="service-num-badge">0{index + 1}</div>
              </div>

              <div className="service-body">
                <div className="service-doc-lead">
                  <ShieldCheck size={14} />
                  <span>{service.doctorLead}</span>
                </div>

                <h3 className="service-title-text">{service.title}</h3>
                <p className="service-short-desc">{service.shortDesc}</p>

                <div className="service-features-list">
                  {service.features.map((feat, fidx) => (
                    <div key={fidx} className="service-feat-item">
                      <CheckCircle2 size={15} className="feat-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="service-card-footer">
                <a 
                  href={`https://wa.me/919360769576?text=Hi%2C%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(service.title)}%20at%20Sri%20Balaji%20Dental.`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="service-cta-btn"
                >
                  <MessageCircle size={16} />
                  <span>Book for this treatment</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate vs Family Practice Promise Banner */}
        <div className="practice-promise-strip">
          <div className="promise-strip-left">
            <div className="promise-icon-bubble">
              <Award size={28} />
            </div>
            <div>
              <h4 className="promise-title">Corporate-Hospital Capabilities. Family-Practice Pricing.</h4>
              <p className="promise-desc">
                Serving Perambur since 2016 with a flawless 5.0-star reputation. We never compromise on sterile protocols, specialist quality, or transparent fees.
              </p>
            </div>
          </div>
          <div className="promise-strip-right">
            <a 
              href="tel:09543709302" 
              className="btn-white"
            >
              <span>Call: 095437 09302</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
