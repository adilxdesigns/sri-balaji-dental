import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Calendar, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { getAssetUrl } from './Gallery';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

const slidesData = [
  {
    id: 1,
    tag: 'Top-Rated Dental Clinic in Perambur Since 2010',
    title: 'Sri Balaji Dental — Advanced Dental Care & Implant Centre in Perambur',
    subtitle: 'Looking for the best dental clinic near Perambur? Sri Balaji Multispeciality Dental & Implantology Centre on Paddy Field Road brings 33+ years of combined surgical & diagnostic mastery directly to you.',
    image: getAssetUrl('assets/doctor_nurse_headcap_authentic_v2.jpg'),
    bgPosition: 'center right',
    badge: 'Flawless 5.0★ Reputation'
  },
  {
    id: 2,
    tag: 'Advanced Laser & Dental Implants in Perambur',
    title: 'Precision Dental Implants & Painless Laser Dentistry in Perambur',
    subtitle: 'Minimally invasive laser treatments, permanent precision implants, and lifelong oral health with a gentle, patient-first approach near Perambur.',
    image: getAssetUrl('assets/laser_surgery_clean_wall_v2.jpg'),
    bgPosition: 'center right',
    badge: 'State-of-the-Art Laser Operatory'
  },
  {
    id: 3,
    tag: 'Hospital-Grade Sterile Protocols',
    title: 'Multi-Disciplinary Dental Excellence & Complete Safety',
    subtitle: 'Multi-stage autoclave sterilization, cutting-edge diagnostic technology, and the transparent, honest pricing of a trusted family dental practice.',
    image: getAssetUrl('assets/nurse_autoclave_authentic_v2.jpg'),
    bgPosition: 'center right',
    badge: '100% Sterile & Patient Safe'
  }
];

const whatsappUrl = "https://wa.me/919543709302?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sri%20Balaji%20Multispeciality%20Dental%20%26%20Implantology%20Centre.";

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
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.bgPosition || 'center right'
              }}
            >
              <div className="hero-light-overlay"></div>

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
                      href="tel:06374653568"
                      className="hero-btn-outline"
                    >
                      <Phone size={18} />
                      <span>Call: 063746 53568</span>
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
