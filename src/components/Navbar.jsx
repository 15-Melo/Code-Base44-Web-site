import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import t from '../lib/translations';

const LOGO_URL = "https://media.base44.com/images/public/69c80816d5543b54fe26cb48/1bb239a21_LogoAPSConsultingsurunrseaumondial.png";

export default function Navbar({ lang, setLang }) {
  const tr = t[lang].navbar;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white"
      style={{ boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.08)' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollTo('#accueil')} className="flex items-center gap-3 cursor-pointer">
            <img src={LOGO_URL} alt="APS Consulting" className="h-16 w-auto" />
            <span className="font-bold text-base" style={{ color: '#0A1F44', fontFamily: 'Inter, sans-serif' }}>APS Consulting</span>
          </button>

          <div className="hidden md:flex items-center gap-7">
            {tr.links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#374151' }}
                onMouseEnter={e => e.target.style.color = '#0A1F44'}
                onMouseLeave={e => e.target.style.color = '#374151'}
              >
                {link.label}
              </button>
            ))}
            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="px-3 py-1.5 text-xs font-bold rounded-lg border transition-all hover:opacity-80"
              style={{ borderColor: '#0A1F44', color: '#0A1F44' }}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#F5C842', color: '#0A1F44' }}
            >
              {tr.cta}
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" style={{ color: '#0A1F44' }}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t bg-white"
            style={{ borderColor: 'rgba(0,0,0,0.08)' }}
          >
            <div className="px-6 py-4 space-y-3">
              {tr.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-sm font-medium py-2"
                  style={{ color: '#374151' }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                className="w-full px-4 py-2 font-bold rounded-lg text-sm border"
                style={{ borderColor: '#0A1F44', color: '#0A1F44' }}
              >
                {lang === 'fr' ? 'English' : 'Français'}
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full px-4 py-2.5 font-bold rounded-lg text-sm"
                style={{ backgroundColor: '#F5C842', color: '#0A1F44' }}
              >
                {tr.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}