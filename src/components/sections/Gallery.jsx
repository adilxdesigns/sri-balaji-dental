import React, { useState } from 'react';
import { Eye, ArrowRightLeft, MessageCircle, X, Sparkles, CheckCircle2 } from 'lucide-react';
import './Gallery.css';

const whatsappBaseUrl = "https://wa.me/919543709302?text=";

// Resolve public asset URLs with Vite base path and safe URL encoding
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  let clean = path;
  try {
    clean = decodeURI(path);
  } catch (e) {
    clean = path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  if (clean.startsWith(normalizedBase)) {
    clean = clean.slice(normalizedBase.length);
  }
  clean = clean.replace(/^\/+/, '');

  return encodeURI(`${normalizedBase}${clean}`);
};

// Before & After Specific Transformation Cases
const beforeAfterCases = [
  {
    id: 'ba-zirconia',
    title: 'Zirconia Crowns Smile Transformation',
    category: 'Zirconia Crowns',
    procedure: 'Aesthetic Full Mouth Rehabilitation',
    beforeImg: getAssetUrl('assets/Zirconia_crowns/before.jpeg'),
    afterImg: getAssetUrl('assets/Zirconia_crowns/after.jpeg'),
    desc: 'Patient presented with severe attrition and aesthetic concerns. Treated with precision CAD/CAM monolithic Zirconia crowns restoring natural tooth anatomy, bite height, and a radiant smile.'
  },
  {
    id: 'ba-kids',
    title: 'Restoring Smiles in Children',
    category: 'Pediatric Dentistry',
    procedure: 'Early Childhood Caries Rehabilitation',
    beforeImg: getAssetUrl('assets/Restoring_smiles_in_Children/before.jpeg'),
    afterImg: getAssetUrl('assets/Restoring_smiles_in_Children/after.jpeg'),
    desc: 'Gentle, painless pediatric smile restoration for decayed anterior teeth, restoring chewing confidence, speech development, and a joyful smile.'
  }
];

// Complete Real Clinical Assets Gallery
const galleryData = [
  // Before & After entries for the grid
  {
    id: 1,
    title: 'Zirconia Crowns Smile Restoration (Before & After)',
    category: 'Before & After',
    image: getAssetUrl('assets/Zirconia_crowns/after.jpeg'),
    beforeImage: getAssetUrl('assets/Zirconia_crowns/before.jpeg'),
    isBeforeAfter: true,
    tag: 'Before / After'
  },
  {
    id: 2,
    title: 'Restoring Smiles in Children (Before & After)',
    category: 'Before & After',
    image: getAssetUrl('assets/Restoring_smiles_in_Children/after.jpeg'),
    beforeImage: getAssetUrl('assets/Restoring_smiles_in_Children/before.jpeg'),
    isBeforeAfter: true,
    tag: 'Before / After'
  },
  // Surgery Team
  {
    id: 3,
    title: 'Advanced Surgical Suite in Operation',
    category: 'Clinical Surgery',
    image: getAssetUrl('assets/doctor_nurse_headcap_authentic_v2.jpg'),
    tag: 'Dental Team'
  },
  {
    id: 3.1,
    title: 'Doctor Performing Painless Treatment',
    category: 'Clinical Surgery',
    image: getAssetUrl('assets/docotr handling patient.jpeg'),
    tag: 'Patient Care'
  },
  {
    id: 3.2,
    title: 'Autoclave Instrument Sterilization & Safety Protocol',
    category: 'Clinical Surgery',
    image: getAssetUrl('assets/nurse_autoclave_authentic_v2.jpg'),
    tag: 'Sterilization & Safety'
  },
  // Gum Surgery & Bone Graft Placement (Pruned cases)
  {
    id: 4,
    title: 'Gum Surgery & Flap Procedure Step 1',
    category: 'Gum Surgery',
    image: getAssetUrl('assets/Gum_surgery_and_Bone_graft_placement/WhatsApp Image 2026-10-07 at 3.39.27 PM.jpeg'),
    tag: 'Periodontics'
  },
  {
    id: 5,
    title: 'Periodontal Pocket Therapy & Debridement',
    category: 'Gum Surgery',
    image: getAssetUrl('assets/Gum_surgery_and_Bone_graft_placement/WhatsApp Image 2026-10-07 at 3.39.27 PM (1).jpeg'),
    tag: 'Periodontics'
  },
  {
    id: 9,
    title: 'Laser Gum Recontouring & Pocket Elimination',
    category: 'Gum Surgery',
    image: getAssetUrl('assets/Gum_surgery_and_Bone_graft_placement/WhatsApp Image 2026-10-07 at 3.39.29 PM.jpeg'),
    tag: 'Laser Dentistry'
  },
  {
    id: 10,
    title: 'Healthy Periodontal Architecture Restored',
    category: 'Gum Surgery',
    image: getAssetUrl('assets/Gum_surgery_and_Bone_graft_placement/WhatsApp Image 2026-10-07 at 3.39.29 PM (1).jpeg'),
    tag: 'Periodontics'
  },
  // Orthodontics & Braces Treatment (Curated milestone cases)
  {
    id: 11,
    title: 'Malocclusion Diagnostic Alignment View',
    category: 'Orthodontics',
    image: getAssetUrl('assets/Orthodontics_Braces_treatment/WhatsApp Image 2026-10-07 at 3.40.47 PM.jpeg'),
    tag: 'Braces'
  },
  {
    id: 12,
    title: 'Ceramic / Metal Bracket Placement',
    category: 'Orthodontics',
    image: getAssetUrl('assets/Orthodontics_Braces_treatment/WhatsApp Image 2026-10-07 at 3.40.47 PM (1).jpeg'),
    tag: 'Orthodontics'
  },
  {
    id: 16,
    title: 'Bite Rectification & Canine Guidance',
    category: 'Orthodontics',
    image: getAssetUrl('assets/Orthodontics_Braces_treatment/WhatsApp Image 2026-10-07 at 3.40.48 PM (2).jpeg'),
    tag: 'Bite Correction'
  },
  {
    id: 19,
    title: 'Debonding & Confident Aligned Smile',
    category: 'Orthodontics',
    image: getAssetUrl('assets/Orthodontics_Braces_treatment/WhatsApp Image 2026-10-07 at 3.40.49 PM (2).jpeg'),
    tag: 'Braces Result'
  },
  // Kids Dentistry / Restoring Smiles in Children (3 clinical cases)
  {
    id: 20,
    title: 'Painless Pediatric Dental Restoration',
    category: 'Kids Dentistry',
    image: getAssetUrl('assets/Restoring_smiles_in_Children/WhatsApp Image 2026-10-07 at 3.46.47 PM.jpeg'),
    tag: 'Pediatric Care'
  },
  {
    id: 21,
    title: 'Composite Strip Crown Reconstruction in Child',
    category: 'Kids Dentistry',
    image: getAssetUrl('assets/Restoring_smiles_in_Children/WhatsApp Image 2026-10-07 at 3.48.13 PM.jpeg'),
    tag: 'Smile Restoration'
  },
  {
    id: 22,
    title: 'Happy Child Smile After Aesthetic Treatment',
    category: 'Kids Dentistry',
    image: getAssetUrl('assets/Restoring_smiles_in_Children/WhatsApp Image 2026-10-07 at 3.49.22 PM.jpeg'),
    tag: 'Pediatric Smile'
  },
  // Dental Implants & Implant Crowns (6 clinical cases)
  {
    id: 23,
    title: 'Primary Stability Verification & Cover Screw',
    category: 'Dental Implants',
    image: getAssetUrl('assets/implant_treatment/WhatsApp Image 2026-10-07 at 12.50.30 PM.jpeg'),
    tag: 'Surgical Phase'
  },
  {
    id: 24,
    title: 'Osseointegrated Implant Site Healing',
    category: 'Dental Implants',
    image: getAssetUrl('assets/implant_treatment/WhatsApp Image 2026-10-07 at 12.50.30 PM (1).jpeg'),
    tag: 'Implantology'
  },
  {
    id: 25,
    title: 'Digital Impression Scanning for Implant',
    category: 'Dental Implants',
    image: getAssetUrl('assets/implant_treatment/WhatsApp Image 2026-10-07 at 12.50.30 PM (2).jpeg'),
    tag: 'Digital Scanning'
  },
  {
    id: 26,
    title: 'Final Monolithic Zirconia Implant Crown In-Situ',
    category: 'Dental Implants',
    image: getAssetUrl('assets/implant_crown/WhatsApp Image 2026-10-07 at 1.07.34 PM (1).jpeg'),
    tag: 'Permanent Crown'
  },
  {
    id: 27,
    title: 'Implant Osteotomy & Fixture Placement',
    category: 'Dental Implants',
    image: getAssetUrl('assets/implant_treatment/WhatsApp Image 2026-10-07 at 12.50.29 PM.jpeg'),
    tag: 'Implantology'
  },
  {
    id: 28,
    title: 'Custom Titanium Abutment Try-In',
    category: 'Dental Implants',
    image: getAssetUrl('assets/implant_crown/WhatsApp Image 2026-10-07 at 1.07.34 PM.jpeg'),
    tag: 'Implant Crown'
  },
  {
    id: 29,
    title: 'Mandibular Ball Abutments for Implant-Retained Overdenture',
    category: 'Dental Implants',
    image: getAssetUrl('assets/WhatsApp Image 2026-10-12 at 5.54.31 PM (1).jpeg'),
    tag: 'Implantology'
  },
  {
    id: 30,
    title: 'Precision Implant-Supported Overdenture with Locator Housings',
    category: 'Dental Implants',
    image: getAssetUrl('assets/WhatsApp Image 2026-10-12 at 5.54.31 PM.jpeg'),
    tag: 'Overdenture'
  },
  // Dentures & Prosthetics
  {
    id: 31,
    title: 'Natural Smile Aesthetics with Biofunctional (BPS) Dentures',
    category: 'Dentures & Prosthetics',
    image: getAssetUrl('assets/bps denture.jpeg'),
    tag: 'BPS Dentures'
  },
  {
    id: 32,
    title: 'Precision Anatomical Lower Complete Denture Arch',
    category: 'Dentures & Prosthetics',
    image: getAssetUrl('assets/artificial teaathset lower.jpeg'),
    tag: 'Prosthodontics'
  }
];

const categories = [
  'All',
  'Before & After',
  'Clinical Surgery',
  'Dentures & Prosthetics',
  'Gum Surgery',
  'Orthodontics',
  'Kids Dentistry',
  'Dental Implants'
];

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeImage, setActiveImage] = useState(null);
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState({
    'ba-zirconia': 'after',
    'ba-kids': 'after'
  });

  const filteredItems = selectedFilter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedFilter);

  const toggleBeforeAfter = (caseId, view) => {
    setActiveBeforeAfterTab(prev => ({ ...prev, [caseId]: view }));
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">REAL PATIENT RESULTS</span>
          <h2 className="section-title">Clinical Photo Gallery & Case Studies</h2>
          <p className="section-desc">
            Explore genuine before-and-after transformations and advanced clinical treatments performed by our specialists at Sri Balaji Dental Centre, Perambur.
          </p>
        </div>

        {/* Featured Interactive Before & After Cards */}
        <div className="before-after-feature-section">
          <div className="ba-header-badge">
            <Sparkles size={16} />
            <span>Featured Clinical Transformations</span>
          </div>
          <h3 className="ba-section-heading">Before & After Smile Makeovers</h3>
          <p className="ba-section-sub">
            Toggle between Before and After to examine precision treatment outcomes achieved with gentle, minimally-invasive protocols.
          </p>

          <div className="ba-cards-grid">
            {beforeAfterCases.map((baCase) => {
              const currentView = activeBeforeAfterTab[baCase.id] || 'after';
              const displayImg = currentView === 'before' ? baCase.beforeImg : baCase.afterImg;

              return (
                <div key={baCase.id} className="ba-card">
                  <div className="ba-image-container">
                    <img 
                      src={getAssetUrl(displayImg)} 
                      alt={`${baCase.title} - ${currentView}`} 
                      className="ba-main-img" 
                    />
                    <div className={`ba-state-pill ${currentView}`}>
                      {currentView === 'before' ? 'BEFORE TREATMENT' : 'AFTER TREATMENT'}
                    </div>

                    {/* Toggle Controls */}
                    <div className="ba-toggle-strip">
                      <button 
                        type="button"
                        className={`ba-toggle-btn ${currentView === 'before' ? 'active' : ''}`}
                        onClick={() => toggleBeforeAfter(baCase.id, 'before')}
                      >
                        Before
                      </button>
                      <button 
                        type="button"
                        className={`ba-toggle-btn ${currentView === 'after' ? 'active' : ''}`}
                        onClick={() => toggleBeforeAfter(baCase.id, 'after')}
                      >
                        After
                      </button>
                    </div>
                  </div>

                  <div className="ba-card-info">
                    <div className="ba-cat-row">
                      <span className="ba-cat-badge">{baCase.category}</span>
                      <span className="ba-proc-badge">{baCase.procedure}</span>
                    </div>
                    <h4 className="ba-card-title">{baCase.title}</h4>
                    <p className="ba-card-desc">{baCase.desc}</p>
                    
                    <a
                      href={`${whatsappBaseUrl}${encodeURIComponent(`Hi Dr. Ganesh, I saw the ${baCase.title} case in your gallery and would like a consultation.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ba-whatsapp-btn"
                    >
                      <MessageCircle size={15} />
                      <span>Consult on this procedure</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat === 'Before & After' ? '✨ Before & After' : cat}
            </button>
          ))}
        </div>

        {/* Clinical Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-item ${item.isBeforeAfter ? 'is-ba-item' : ''}`} 
              onClick={() => setActiveImage(item)}
            >
              <img src={getAssetUrl(item.image)} alt={item.title} className="gallery-img" loading="lazy" />
              {item.tag && (
                <span className="gallery-floating-tag">{item.tag}</span>
              )}
              <div className="gallery-overlay">
                <Eye size={26} className="gallery-icon" />
                <h4 className="gallery-item-title">{item.title}</h4>
                <span className="gallery-item-cat">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="lightbox-modal" onClick={() => setActiveImage(null)}>
            <div className="lightbox-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-close" 
                onClick={() => setActiveImage(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {activeImage.isBeforeAfter && activeImage.beforeImage ? (
                /* Dual Before / After Lightbox View */
                <div className="lightbox-dual-wrapper">
                  <div className="lightbox-dual-col">
                    <div className="lightbox-img-box">
                      <img src={getAssetUrl(activeImage.beforeImage)} alt="Before Treatment" className="lightbox-img" />
                      <span className="lightbox-dual-tag before">BEFORE</span>
                    </div>
                  </div>
                  <div className="lightbox-dual-col">
                    <div className="lightbox-img-box">
                      <img src={getAssetUrl(activeImage.image)} alt="After Treatment" className="lightbox-img" />
                      <span className="lightbox-dual-tag after">AFTER</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Single Image Lightbox View */
                <img src={getAssetUrl(activeImage.image)} alt={activeImage.title} className="lightbox-img" />
              )}

              <div className="lightbox-caption">
                <div className="lightbox-caption-header">
                  <div>
                    <span className="lightbox-category-tag">{activeImage.category}</span>
                    <h3 className="lightbox-title">{activeImage.title}</h3>
                  </div>
                  <a
                    href={`${whatsappBaseUrl}${encodeURIComponent(`Hi Dr. Ganesh, I am inquiring about the ${activeImage.title} case shown in your gallery.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary lightbox-cta-btn"
                  >
                    <MessageCircle size={16} />
                    <span>Ask Doctor via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
