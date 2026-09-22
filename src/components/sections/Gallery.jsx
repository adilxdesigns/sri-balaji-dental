import React, { useState } from 'react';
import { Camera, Eye } from 'lucide-react';
import './Gallery.css';

const galleryData = [
  {
    id: 1,
    title: 'Modern Clinic Interior',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Advanced Dental Surgery Suite',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Patient Consultation Room',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Implantology Procedure',
    category: 'Treatments',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Confident Patient Smile',
    category: 'Smiles',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Child Friendly Clinic Setup',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80'
  }
];

const categories = ['All', 'Facility', 'Equipment', 'Treatments', 'Smiles'];

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = selectedFilter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CLINIC TOUR</span>
          <h2 className="section-title">Photo Gallery & Infrastructure</h2>
          <p className="section-desc">
            Take a virtual walkthrough of our state-of-the-art clinic, hygienic treatment suites, and patient comfort areas in Perambur.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item" onClick={() => setActiveImage(item)}>
              <img src={item.image} alt={item.title} className="gallery-img" />
              <div className="gallery-overlay">
                <Eye size={28} className="gallery-icon" />
                <h4 className="gallery-item-title">{item.title}</h4>
                <span className="gallery-item-cat">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="lightbox-modal" onClick={() => setActiveImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setActiveImage(null)}>✕</button>
              <img src={activeImage.image} alt={activeImage.title} className="lightbox-img" />
              <div className="lightbox-caption">
                <h3>{activeImage.title}</h3>
                <p>{activeImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
