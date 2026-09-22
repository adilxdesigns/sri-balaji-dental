import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Calendar, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

const slidesData = [
  {
    id: 1,
    tag: 'Multispeciality & Implantology',
    title: 'Welcome to Sri Balaji Multispeciality Dental & Implantology Centre',
    subtitle: 'A Dental office with extraordinary team providing Extraordinary Dentistry in Perambur, Chennai.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80',
    badge: 'Trusted Dental Experts'
  },
  {
    id: 2,
    tag: 'Advanced Dental Implants',
    title: 'Restore Your Chewing Power with Permanent Titanium Implants',
    subtitle: 'State-of-the-art implant procedures designed for maximum comfort, durability, and a natural smile.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    badge: '30+ Years Experience'
  },
  {
    id: 3,
    tag: 'Painless Root Canal & Cosmetics',
    title: 'Gentle, Single-Sitting Root Canal Treatments',
    subtitle: 'Preserve your natural teeth painlessly with precision microscopic endodontic procedures.',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1600&q=80',
    badge: '100% Gentle Care'
  }
];

const whatsappUrl = "https://wa.me/919360769576?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sri%20Balaji%20Multispeciality%20Dental%20%26%20Implantology%20Centre.";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="full-bleed-hero-swiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="full-bleed-slide-bg" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-dark-overlay"></div>
              
              <div className="container hero-full-bleed-container">
                <div className="hero-overlay-content">
                  <div className="hero-badge">
                    <ShieldCheck size={16} />
                    <span>{slide.tag}</span>
                  </div>
                  
                  <h1 className="full-bleed-heading">{slide.title}</h1>
                  <p className="full-bleed-subtitle">{slide.subtitle}</p>
                  
                  <div className="hero-cta-group">
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary hero-btn"
                    >
                      <Calendar size={18} />
                      <span>Book An Appointment</span>
                      <ArrowRight size={16} />
                    </a>
                    
                    <a 
                      href="tel:09543709302" 
                      className="btn-outline-white hero-btn-outline"
                    >
                      <Phone size={18} />
                      <span>Call: 095437 09302</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
