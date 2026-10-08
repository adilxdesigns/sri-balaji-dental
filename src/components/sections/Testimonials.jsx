import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';

const initialReviews = [
  {
    id: 1,
    name: 'Priya Sundaram',
    location: 'Chinnaiyan Colony, Perambur',
    title: 'Dr. Ganesh is remarkably gentle and soft-spoken',
    rating: 5,
    quote: 'I had two dental implants placed by Dr. Ganesh. I was terrified before the procedure, but his calm, soft-spoken explanation and gentle touch put me at complete ease. Truly hospital-grade care at transparent fees.'
  },
  {
    id: 2,
    name: 'Karthik Narayanan',
    location: 'Paddy Field Road',
    title: 'Instant relief with single-visit painless root canal',
    rating: 5,
    quote: 'Came in with unbearable throbbing tooth pain. The endodontist performed a single-visit root canal in under 45 minutes with zero pain. The digital scanner eliminated that awful putty mold. Outstanding clinic!'
  },
  {
    id: 3,
    name: 'V. Ramanathan',
    location: 'Perambur, Chennai',
    title: 'Life-changing BPS Dentures for my mother',
    rating: 5,
    quote: 'My mother struggled for years with slipping dentures that caused sores. The BPS Dentures made here fit so securely and naturally that she can eat normally again without any discomfort or adhesives.'
  },
  {
    id: 4,
    name: 'Ananya & Suresh',
    location: 'Perambur',
    title: 'Stress-free kids dentistry under anaesthesia',
    rating: 5,
    quote: 'Our 5-year-old was extremely anxious about dental visits. The team arranged painless dental treatment under safe conscious sedation. She felt zero pain and wasn\'t frightened at all. We are so grateful!'
  },
  {
    id: 5,
    name: 'Dr. S. Meenakshi',
    location: 'Chennai',
    title: 'Accurate pathology diagnosis by Dr. Janani',
    rating: 5,
    quote: 'I consulted Dr. Janani for an unusual oral mucosal lesion. As a Gold Medalist oral pathologist, her diagnostic report and tissue biopsy guidance were prompt, thorough, and gave our family complete clarity.'
  }
];

const Testimonials = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [loadedMore, setLoadedMore] = useState(false);

  const handleLoadMore = () => {
    setReviews([
      ...reviews,
      {
        id: 6,
        name: 'Harish R.',
        location: 'Perambur',
        title: 'Bloodless laser gum treatment and quick recovery',
        rating: 5,
        quote: 'Underwent laser gum surgery for deep bleeding gums. No scalpels, no stitches, and virtually zero bleeding. Healed completely within 48 hours!'
      },
      {
        id: 7,
        name: 'Rajesh Sharma & Family',
        location: 'Perambur (Patient Since 2017)',
        title: 'Flawless 5-star standard for our whole family',
        rating: 5,
        quote: 'Sri Balaji Dental has been our family practice since 2017. Their evening hours (5:30 to 9:00 PM) are super convenient and the pricing is completely honest.'
      }
    ]);
    setLoadedMore(true);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* SmilesIndia style title */}
        <div className="section-header">
          <span className="section-subtitle">PATIENT REVIEWS</span>
          <h2 className="section-title">What Our Patients Say About Us</h2>
          <p className="section-desc">
            Real stories and reviews from patients who restored their smiles at Sri Balaji Multispeciality Dental & Implantology Centre.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="testimonials-carousel-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {reviews.map((rev) => (
              <SwiperSlide key={rev.id}>
                <div className="testimonial-card">
                  {/* Circular Avatar Placeholder */}
                  <div className="avatar-placeholder">
                    <User size={38} className="avatar-icon" />
                  </div>

                  <h3 className="patient-name">{rev.name}</h3>
                  <span className="patient-loc">{rev.location}</span>

                  <h4 className="review-title-line">"{rev.title}"</h4>

                  {/* 5 Star Rating */}
                  <div className="star-rating">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  {/* Quotes */}
                  <div className="quote-box">
                    <Quote size={28} className="quote-mark quote-left" />
                    <p className="review-text">{rev.quote}</p>
                    <Quote size={28} className="quote-mark quote-right" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left/Right Arrow Navigation */}
          <button className="testimonial-prev nav-arrow" aria-label="Previous review">
            <ChevronLeft size={22} />
          </button>
          <button className="testimonial-next nav-arrow" aria-label="Next review">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* SmilesIndia style "Load More" button at bottom */}
        <div className="load-more-wrapper">
          <button
            className={`btn-load-more ${loadedMore ? 'disabled' : ''}`}
            onClick={handleLoadMore}
            disabled={loadedMore}
          >
            {loadedMore ? 'All Reviews Loaded' : 'Load More Reviews'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
