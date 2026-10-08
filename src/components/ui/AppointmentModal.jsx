import React, { useState } from 'react';
import { X, Calendar, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import './AppointmentModal.css';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Dental Implants',
    date: '',
    timeSlot: 'Evening (5:30 PM - 7:00 PM)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sri Balaji Dental Team,\nI would like to book an appointment:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Treatment: ${formData.service}\n- Preferred Date: ${formData.date || 'Earliest Available'}\n- Time Slot: ${formData.timeSlot}\n- Notes: ${formData.notes || 'None'}`;
    const url = `https://wa.me/919360769576?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="header-title-group">
            <Calendar size={22} className="modal-header-icon" />
            <div>
              <h3>Book Appointment</h3>
              <p>Sri Balaji Multispeciality Dental Centre, Perambur</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="modal-body-form">
          <div className="form-group">
            <label htmlFor="modal-name">Patient Full Name *</label>
            <input
              id="modal-name"
              type="text"
              required
              placeholder="e.g. Rajesh Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-phone">Mobile Phone Number *</label>
            <input
              id="modal-phone"
              type="tel"
              required
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="modal-service">Required Treatment</label>
              <select
                id="modal-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="Advanced Implantology & Full-Mouth Rehab">Advanced Implantology & Full-Mouth Rehab</option>
                <option value="Painless Root Canal (RCT Single Visit)">Painless Root Canal (RCT - Single Visit)</option>
                <option value="Premium BPS Dentures">Premium BPS Dentures</option>
                <option value="Kids Dentistry Under Anaesthesia">Painless Kids Dentistry Under Anaesthesia</option>
                <option value="Advanced Laser Gum Surgery">Advanced Laser Gum Surgery</option>
                <option value="Modern Digital Impressions">Modern Digital Impressions (3D Scan)</option>
                <option value="Cosmetic Dentistry & Smile Makeover">Cosmetic Dentistry & Smile Makeover</option>
                <option value="Oral Pathology & Biopsy (Dr. Janani)">Oral Pathology & Biopsy (Dr. Janani)</option>
                <option value="General Consultation & Scaling">General Consultation & Scaling</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="modal-slot">Time Slot</label>
              <select
                id="modal-slot"
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              >
                <option value="Evening (5:30 PM - 7:00 PM)">5:30 PM - 7:00 PM</option>
                <option value="Night (7:00 PM - 9:00 PM)">7:00 PM - 9:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="modal-notes">Additional Notes / Symptoms</label>
            <textarea
              id="modal-notes"
              rows="2"
              placeholder="Briefly describe tooth pain, swelling or dental concern..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            ></textarea>
          </div>

          <div className="modal-notice">
            <Clock size={15} />
            <span>Clinic Hours: Mon–Sat 5:30 PM–9:00 PM | Sunday Closed</span>
          </div>

          <button type="submit" className="btn-primary modal-submit-btn">
            <MessageCircle size={18} />
            <span>Confirm & Connect on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
