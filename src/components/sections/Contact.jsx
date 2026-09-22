import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';
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
    const url = `https://wa.me/919360769576?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us & Location</h2>
          <p className="section-desc">
            Visit our clinic in Perambur or schedule your appointment directly via WhatsApp or Phone call.
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
                <p>119/1, Paddy Field Rd, Chinnaiyan Colony, Perambur, Chennai, Tamil Nadu 600011</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Phone size={22} />
              </div>
              <div className="info-text-group">
                <h4>Phone / Mobile</h4>
                <p><a href="tel:09543709302" className="phone-link">095437 09302</a></p>
                <p><a href="https://wa.me/919360769576" target="_blank" rel="noopener noreferrer" className="phone-link">WhatsApp: 93607 69576</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Clock size={22} />
              </div>
              <div className="info-text-group">
                <h4>Working Hours</h4>
                <p><strong>Mon – Sat:</strong> 5:30 PM – 9:00 PM</p>
                <p className="closed-tag"><strong>Sunday:</strong> Closed</p>
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
                      <optgroup label="🦷 Implantology">
                        <option value="Dental Implants (Single Tooth)">Dental Implants — Single Tooth</option>
                        <option value="Dental Implants (Full Mouth)">Dental Implants — Full Mouth</option>
                        <option value="All-on-4 / All-on-6 Implants">All-on-4 / All-on-6 Implants</option>
                        <option value="Implant Supported Dentures">Implant Supported Dentures</option>
                      </optgroup>
                      <optgroup label="🔬 Root Canal & Endodontics">
                        <option value="Root Canal Treatment">Root Canal Treatment (RCT)</option>
                        <option value="Single-Sitting Root Canal">Single-Sitting Root Canal</option>
                        <option value="Re-Root Canal Treatment">Re-Root Canal Treatment</option>
                      </optgroup>
                      <optgroup label="✨ Cosmetic Dentistry">
                        <option value="Teeth Whitening">Teeth Whitening / Bleaching</option>
                        <option value="Dental Veneers">Dental Veneers (Laminates)</option>
                        <option value="Smile Makeover">Smile Makeover & Design</option>
                        <option value="Composite Bonding">Composite Bonding</option>
                      </optgroup>
                      <optgroup label="🧒 Orthodontics & Alignment">
                        <option value="Dental Braces">Dental Braces (Metal / Ceramic)</option>
                        <option value="Invisible Aligners">Invisible Aligners (Clear Aligners)</option>
                        <option value="Retainers">Retainers</option>
                      </optgroup>
                      <optgroup label="🦴 Oral Surgery & Extractions">
                        <option value="Tooth Extraction">Tooth Extraction</option>
                        <option value="Wisdom Tooth Removal">Wisdom Tooth Removal</option>
                        <option value="Surgical Extractions">Surgical Extractions</option>
                        <option value="Bone Grafting">Bone Grafting</option>
                      </optgroup>
                      <optgroup label="👦 Pediatric Dentistry">
                        <option value="Kids Dental Checkup">Kids Dental Checkup</option>
                        <option value="Milk Tooth Treatment">Milk Tooth Treatment / Pulpotomy</option>
                        <option value="Fluoride Application">Fluoride Application & Pit Sealing</option>
                        <option value="Kids Braces">Pediatric Orthodontics</option>
                      </optgroup>
                      <optgroup label="🩺 General & Preventive Dentistry">
                        <option value="General Dental Checkup">General Dental Checkup</option>
                        <option value="Teeth Scaling & Cleaning">Teeth Scaling & Cleaning</option>
                        <option value="Dental Fillings">Dental Fillings (Composite / Amalgam)</option>
                        <option value="Gum Treatment">Gum Treatment (Periodontics)</option>
                        <option value="Dentures (Removable)">Dentures — Full / Partial</option>
                        <option value="Crown & Bridge">Dental Crowns & Bridges</option>
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
