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
    name: 'Harish R.',
    location: 'Perambur',
    title: 'A pleasant experience',
    rating: 5,
    quote: 'One of my most amazing experiences has been at Sri Balaji Dental where I was advised to get my wisdom teeth extracted. The treatment was absolutely painless and smooth.'
  },
  {
    id: 2,
    name: 'Priya Sundaram',
    location: 'Chinnaiyan Colony',
    title: 'Best Implant Treatment in Perambur',
    rating: 5,
    quote: 'Got 2 dental implants done here. Dr. and staff are extremely soft-spoken and professional. The clinic is spotlessly clean and prices are very fair.'
  },
  {
    id: 3,
    name: 'Karthik N.',
    location: 'Vyasarpadi',
    title: 'Single Sitting Root Canal Saved My Tooth',
    rating: 5,
    quote: 'I had severe tooth pain and was worried about root canal. They finished the procedure in 45 minutes with zero pain! Highly recommended.'
  },
  {
    id: 4,
    name: 'Ananya & Family',
    location: 'Paddy Field Rd',
    title: 'Our Family Dental Clinic',
    rating: 5,
    quote: 'We have been coming here for past 8 years for scaling, kids dental checkups, and fillings. Always gentle care and prompt evening appointments.'
  },
  {
    id: 5,
    name: 'Venkatesh Kumar',
    location: 'Perambur',
    title: 'Excellent Patient Care',
    rating: 5,
    quote: 'Very neat and sanitized clinic. Explained the issue clearly before starting treatment. No unnecessary expenses.'
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
        name: 'Sangeetha M.',
        location: 'Ayanavaram',
        title: 'Wonderful Teeth Whitening',
        rating: 5,
        quote: 'My smile looks so bright and natural after the cosmetic treatment. Thank you team Sri Balaji!'
      },
      {
        id: 7,
        name: 'Rajesh Sharma',
        location: 'Perambur',
        title: 'Highly Skilled Doctors',
        rating: 5,
        quote: 'Top notch dental care! The timing (5:30 to 9:00 PM) is super convenient after office hours.'
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
