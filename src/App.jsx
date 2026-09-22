import React, { useState, useEffect } from 'react';
import UtilityBar from './components/layout/UtilityBar';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TrustStrip from './components/sections/TrustStrip';
import QuickLinks from './components/sections/QuickLinks';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';
import ScrollToTop from './components/ui/ScrollToTop';
import AppointmentModal from './components/ui/AppointmentModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-main-wrapper">
      {/* SmilesIndia style Utility Bar & Main Nav */}
      <header className="sticky-header-group">
        <UtilityBar onOpenModal={() => setIsModalOpen(true)} />
        <Navbar activeSection={activeSection} />
      </header>

      {/* Main Page Sections */}
      <main>
        <Hero />
        <TrustStrip />
        <QuickLinks />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp, Call, Book) */}
      <FloatingButtons onOpenModal={() => setIsModalOpen(true)} />

      {/* Scroll to top arrow */}
      <ScrollToTop />

      {/* Appointment Booking Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
