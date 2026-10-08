import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  Stethoscope, 
  Activity, 
  HeartHandshake, 
  Building2, 
  Microscope,
  Baby,
  Smile
} from 'lucide-react';
import './About.css';

const whatsappUrl = "https://wa.me/919360769576?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Sri%20Balaji%20Dental%20Centre.";

const specialtyPanel = [
  {
    role: 'Endodontics',
    tagline: 'Complex Root Canals',
    desc: 'Senior consultants for complex single & multi-visit root canals, calcified canals, and tooth-saving endodontic interventions.',
    icon: <Activity size={22} />
  },
  {
    role: 'Prosthodontics',
    tagline: 'Advanced Dentures & Bridges',
    desc: 'Specialized consultants for precision Biofunctional (BPS) dentures, crowns, bridges, and complete smile architecture.',
    icon: <Smile size={22} />
  },
  {
    role: 'Periodontics',
    tagline: 'Deep Gum Diseases & Lasers',
    desc: 'Expert care for severe periodontal issues, bone preservation, pocket therapy, and bloodless laser gum procedures.',
    icon: <Microscope size={22} />
  },
  {
    role: 'Pediatric Dentistry',
    tagline: 'Specialized Children\'s Oral Care',
    desc: 'Dedicated child dental specialists offering stress-free treatments, habit breaking, and painless procedures under anaesthesia.',
    icon: <Baby size={22} />
  }
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Top Story Panel */}
        <div className="about-panel">
          <div className="about-text-col">
            <div className="about-badge-row">
              <span className="about-badge">
                <Award size={15} />
                <span>Serving Perambur Since 2016</span>
              </span>
              <span className="about-badge-accent">
                <Sparkles size={14} />
                <span>33+ Years Combined Mastery</span>
              </span>
            </div>

            <h2 className="about-title">
              Over Three Decades of Combined Surgical & Diagnostic Excellence
            </h2>

            <p className="about-paragraph lead-p">
              Welcome to <strong>Sri Balaji Multispeciality Dental & Implantology Centre</strong>, an established landmark of trusted dental care serving the Perambur community since 2016.
            </p>

            <p className="about-paragraph">
              Founded on a legacy of academic brilliance, cutting-edge digital technology, and deep patient care, our practice brings <strong>over 33 years of combined surgical and diagnostic mastery</strong> directly to Paddy Field Road.
            </p>

            <p className="about-paragraph">
              Our center operates on a <strong>comprehensive, multi-disciplinary hospital model</strong>. In addition to our senior directors, we house a dedicated panel of attached on-call specialists—ensuring you receive highly targeted, precise interventions under one roof.
            </p>

            {/* Value Highlights */}
            <div className="about-highlights-grid">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Corporate-hospital capabilities with transparent, honest pricing</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Flawless 5.0-star patient reputation built over the last decade</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>High-speed digital scanning — zero messy traditional putty molds</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Pain-free kids dentistry under controlled conscious sedation</span>
              </div>
            </div>

            <div className="about-actions">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                <span>Consult Our Specialists</span>
              </a>
              <a href="#services" className="btn-outline-white">
                <span>View 7 Core Specialties</span>
              </a>
            </div>
          </div>

          {/* Quick Stats Sidebar Card */}
          <div className="about-glance-col">
            <div className="glance-card">
              <div className="glance-header">
                <Building2 size={24} className="glance-icon" />
                <div>
                  <h3 className="glance-title">Hospital Care Model</h3>
                  <p className="glance-sub">Paddy Field Road, Perambur</p>
                </div>
              </div>

              <div className="glance-stats-list">
                <div className="glance-stat-box">
                  <div className="stat-big">2016</div>
                  <div className="stat-desc">Established landmark serving the Perambur community</div>
                </div>
                <div className="glance-stat-box">
                  <div className="stat-big">33+ Yrs</div>
                  <div className="stat-desc">Combined surgical & diagnostic clinical excellence</div>
                </div>
                <div className="glance-stat-box">
                  <div className="stat-big">5.0 ★</div>
                  <div className="stat-desc">Flawless patient reputation across 10+ years</div>
                </div>
              </div>

              <div className="clinic-location-info">
                <div className="info-row">
                  <MapPin size={16} />
                  <span>119/1, Paddy Field Rd, Perambur, Chennai</span>
                </div>
                <div className="info-row">
                  <Clock size={16} />
                  <span>Mon–Sat 5:30 PM – 9:00 PM (Sun Closed)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directors Section */}
        <div className="directors-section">
          <div className="directors-header">
            <span className="section-subtitle">CLINICAL LEADERSHIP</span>
            <h3 className="directors-title">Meet Our Senior Directors</h3>
            <p className="directors-subtext">
              Directing each case with decades of surgical expertise, academic distinction, and patient-first empathy.
            </p>
          </div>

          <div className="directors-grid">
            {/* Director 1: Dr. R. Ganesh */}
            <div className="director-card">
              <div className="director-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. R. Ganesh, BDS, MDS, PGCOI"
                  className="director-img"
                />
                <div className="director-experience-tag">
                  <span className="exp-num">19</span>
                  <span className="exp-label">Years Exp.</span>
                </div>
              </div>

              <div className="director-body">
                <div className="director-badge-chip">Chief Implantologist</div>
                <h4 className="director-name">Dr. R. Ganesh</h4>
                <p className="director-deg">BDS, MDS, PGCOI</p>
                <p className="director-role-title">Chief Implantologist & Public Health Dentist</p>
                
                <p className="director-bio">
                  A specialist in <strong>advanced oral rehabilitation and minimally invasive dentistry</strong>, widely recognized across Chennai for his exceptionally gentle, soft-spoken approach and surgical precision.
                </p>

                <div className="director-expertise-tags">
                  <span>Oral Rehabilitation</span>
                  <span>Dental Implant Systems</span>
                  <span>Minimally Invasive</span>
                  <span>Public Health Dentistry</span>
                </div>
              </div>
            </div>

            {/* Director 2: Dr. R. Janani */}
            <div className="director-card gold-medalist-card">
              <div className="director-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1594824813583-f3659247656d?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. R. Janani, BDS, MDS"
                  className="director-img"
                />
                <div className="director-experience-tag gold-exp-tag">
                  <span className="exp-num">14</span>
                  <span className="exp-label">Years Exp.</span>
                </div>
                <div className="gold-medal-banner">
                  🏅 University Gold Medalist
                </div>
              </div>

              <div className="director-body">
                <div className="director-badge-chip gold-chip">Chief Oral Pathologist</div>
                <h4 className="director-name">Dr. R. Janani</h4>
                <p className="director-deg">BDS, MDS</p>
                <p className="director-role-title">Chief Oral & Maxillofacial Pathologist</p>
                
                <p className="director-bio">
                  A distinguished <strong>Gold Medalist from The Tamil Nadu Dr. M.G.R. Medical University</strong>, specializing in advanced diagnostic reporting, oral mucosal lesions, and precision tissue biopsies.
                </p>

                <div className="director-expertise-tags">
                  <span>Gold Medalist M.G.R. Univ</span>
                  <span>Oral & Maxillofacial Pathology</span>
                  <span>Tissue Biopsies</span>
                  <span>Mucosal Lesions Diagnosis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elite Specialty Panel */}
        <div className="panel-container-box">
          <div className="panel-header-block">
            <div className="panel-icon-circle">
              <Stethoscope size={28} />
            </div>
            <div>
              <span className="panel-pill">MULTI-DISCIPLINARY MODEL</span>
              <h3 className="panel-heading">Our Elite Specialty Panel</h3>
              <p className="panel-subheading">
                To provide highly targeted, precise interventions, our clinic is proudly attached to senior consultants across vital dental specialties under one roof.
              </p>
            </div>
          </div>

          <div className="specialty-panel-grid">
            {specialtyPanel.map((item, idx) => (
              <div key={idx} className="specialty-panel-card">
                <div className="specialty-card-top">
                  <div className="specialty-icon-box">{item.icon}</div>
                  <div>
                    <h5 className="specialty-role">{item.role}</h5>
                    <span className="specialty-tagline">{item.tagline}</span>
                  </div>
                </div>
                <p className="specialty-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="panel-footer-note">
            <HeartHandshake size={20} className="panel-footer-icon" />
            <p>
              <strong>The Sri Balaji Advantage:</strong> You get hospital-level collaborative specialty consultations without corporate markups, guaranteed transparent pricing, and direct personal attention from our senior directors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
