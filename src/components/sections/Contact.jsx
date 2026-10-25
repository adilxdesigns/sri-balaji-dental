import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';
import InstagramIcon from '../ui/InstagramIcon';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Dental Implants (Single Tooth)',
    preferredTime: 'Evening (5:30 PM - 9:00 PM)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to WhatsApp with filled details
    const text = `Hi, I would like to book an appointment at Sri Balaji Dental Centre.\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Time: ${formData.preferredTime}\nMessage: ${formData.message}`;
    const url = `https://wa.me/919543709302?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Visit Our Clinic in Perambur</h2>
          <p className="section-desc">
            Serving Perambur since 2010 on Paddy Field Road. Corporate-hospital capabilities with transparent family-practice pricing. Book instantly via WhatsApp or call our clinic directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <h3 className="card-heading">Clinic Information</h3>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={22} />
              </div>
              <div className="info-text-group">
                <h4>Clinic Address</h4>
                <p>No. 119/1, Paddy Field Road, Chinnaiyan Colony, Perambur, Chennai - 600011</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Phone size={22} />
              </div>
              <div className="info-text-group">
                <h4>Phone / Contact Numbers</h4>
                <p>
                  <strong>Mobile:</strong>{' '}
                  <a href="tel:06374653568" className="phone-link">63746 53568</a>
                </p>
                <p>
                  <strong>Landline:</strong>{' '}
                  <a href="tel:04425515420" className="phone-link">044 25515420</a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{' '}
                  <a href="https://wa.me/919543709302" target="_blank" rel="noopener noreferrer" className="phone-link">95437 09302</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={22} />
              </div>
              <div className="info-text-group">
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:sribalajidental2026@gmail.com" className="phone-link">
                    sribalajidental2026@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon insta-info-icon">
                <InstagramIcon size={22} color="#ffffff" />
              </div>
              <div className="info-text-group">
                <h4>Instagram Profile</h4>
                <p>
                  <a
                    href="https://www.instagram.com/sri_balaji_dental_perambur_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="phone-link insta-profile-link"
                  >
                    @sri_balaji_dental_perambur_
                  </a>
                </p>
                <span className="insta-card-hint">Follow for smile makeovers, clinical cases & dental care tips</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Clock size={22} />
              </div>
              <div className="info-text-group">
                <h4>Consultation Hours</h4>
                <p><strong>Mon – Sat:</strong> 5:30 PM – 9:00 PM</p>
                <p className="appt-tag"><strong>Sunday:</strong> By Appointment Only</p>
              </div>
            </div>

            <div className="emergency-notice">
              <p>💡 <strong>Note:</strong> We prioritize emergency dental consultations during working hours. Call ahead for quick assistance.</p>
            </div>
          </div>

          {/* Quick Appointment Form */}
          <div className="contact-form-card">
            <h3 className="card-heading">Schedule Appointment</h3>
            <p className="form-subtext">Fill out this quick form to instantly connect with our doctor on WhatsApp.</p>

            {submitted ? (
              <div className="form-success-msg">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Thank You!</h4>
                <p>Opening WhatsApp to complete your appointment booking...</p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                  <label htmlFor="patient-name">Full Name *</label>
                  <input
                    id="patient-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="patient-phone">Phone Number *</label>
                  <input
                    id="patient-phone"
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service-select">Select Service</label>
                    <select
                      id="service-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <optgroup label="🌟 Core Clinical Specialities">
                        <option value="Advanced Implantology & Full-Mouth Rehabilitation">Advanced Implantology & Full-Mouth Rehabilitation</option>
                        <option value="Painless Root Canal Treatments (RCT)">Painless Root Canal Treatments (RCT - Single Visit)</option>
                        <option value="Premium BPS Dentures">Premium BPS Dentures (Biofunctional Fit)</option>
                        <option value="Painless Kids Dentistry under Anaesthesia">Painless Kids Dentistry under Anaesthesia / Sedation</option>
                        <option value="Advanced Laser Gum Surgery">Advanced Laser Gum Surgery (Bloodless & Stitch-Free)</option>
                        <option value="Modern Digital Impressions">Modern Digital Impressions & 3D Scanning</option>
                        <option value="Cosmetic Dentistry & Smile Makeovers">Cosmetic Dentistry & Smile Makeovers</option>
                      </optgroup>
                      <optgroup label="🩺 Diagnostic & Specialist Consultations">
                        <option value="Oral Pathology & Biopsy Consultation">Oral Pathology, Biopsy & Lesion Diagnosis (Dr. Janani)</option>
                        <option value="Comprehensive Dental Checkup & Scaling">Comprehensive Dental Checkup & Professional Cleaning</option>
                        <option value="Wisdom Tooth Removal & Surgery">Wisdom Tooth Removal & Minor Oral Surgery</option>
                        <option value="Orthodontics & Clear Aligners">Orthodontics & Invisible Aligners</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="time-select">Preferred Slot</label>
                    <select
                      id="time-select"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    >
                      <option value="Evening (5:30 PM - 7:00 PM)">5:30 PM - 7:00 PM</option>
                      <option value="Night (7:00 PM - 9:00 PM)">7:00 PM - 9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="patient-msg">Message / Concern (Optional)</label>
                  <textarea
                    id="patient-msg"
                    rows="3"
                    placeholder="Briefly describe your tooth problem..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={18} />
                  <span>Book via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="map-container">
          <h3 className="map-title">Find Us on Google Maps</h3>
          <div className="map-frame-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7771.571373132829!2d80.2457586!3d13.112759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265236dea1433%3A0xa4bf36faf94c50a5!2sSri%20Balaji%20Multispeciality%20Dental%20%26%20Implantolgy%20Centre%2C%20Perambur!5e0!3m2!1sen!2sin!4v1790095678213!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Sri Balaji Dental Clinic Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
