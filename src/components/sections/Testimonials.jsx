import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Padmavathy Elavarasu',
    rating: 5,
    quote: 'Had a good experience at Sri Balaji Multispeciality Dental Clinic. The clinic is clean, the staff are friendly, and the doctor explained the treatment clearly. The procedure was smooth and comfortable. Would definitely recommend this place for dental care.'
  },
  {
    id: 2,
    name: 'Ms Karishma Vincent',
    rating: 5,
    quote: 'My family has been associated with Sri Balaji Multispeciality Dental clinic for over a decade now and we are grateful to Dr Ganesh for his patient guidance and efficient treatment provided.'
  },
  {
    id: 3,
    name: 'Sathish Vc',
    rating: 5,
    quote: 'Balaji dental clinic is one of the most affordable dental clinic in north chennai, dr is very kind cleanly explained me for what is the cause of my pain and treated me with great care...really kind & great person.'
  },
  {
    id: 4,
    name: 'sarathy Chennai',
    rating: 5,
    quote: 'More friendly approach Rate also normal more comfortable for everyone. One more thing Dr Ganesh assistant Kokila also nice approaching mainly smiling face.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* SmilesIndia style title */}
        <div className="section-header">
          <span className="section-subtitle">PATIENT REVIEWS</span>
          <h2 className="section-title">What Our Patients Say About Us</h2>
          <p className="section-desc">
            Real stories and reviews from patients who restored their smiles at Sri Balaji Multispeciality Dental &amp; Implantology Centre.
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
      </div>
    </section>
  );
};

export default Testimonials;

