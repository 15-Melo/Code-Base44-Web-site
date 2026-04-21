
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ValueSection from '../components/ValueSection.jsx';

import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [lang, setLang] = useState('fr');

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <ValueSection lang={lang} />
      <ServicesSection lang={lang} />
      <AboutSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}