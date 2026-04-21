import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import t from '../lib/translations';

const HERO_IMG = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";

export default function HeroSection({ lang }) {
  const tr = t[lang].hero;
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-64px)] py-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-5" style={{ backgroundColor: 'rgba(245,200,66,0.15)', color: '#B8962E' }}>
              {tr.badge}
            </span>

            <h1 className="font-bold leading-tight mb-3" style={{ fontSize: 'clamp(32px, 4vw, 50px)', color: '#0A1F44' }}>
              {tr.title} <span style={{ color: '#3ABFBF' }}>{tr.titleHighlight}</span>
            </h1>
            <p className="font-bold text-sm tracking-widest uppercase mb-4" style={{ color: '#3ABFBF', letterSpacing: '0.12em' }}>
              {tr.tagline}
            </p>
            <p className="text-base mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
              {tr.desc}
            </p>

            {/* 3 prestations */}
            <div className="space-y-3 mb-8">
              {tr.prestations.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl border cursor-pointer hover:shadow-sm transition-shadow"
                  style={{ borderColor: 'rgba(0,0,0,0.08)', backgroundColor: '#FAFAFA' }}
                  onClick={() => scrollTo('#services')}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg" style={{ backgroundColor: `${p.color}18` }}>
                    {p.emoji}
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#0A1F44' }}>{p.title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{p.desc}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1 ml-auto" style={{ color: p.color }} />
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#0A1F44', color: '#fff' }}
              >
                {tr.cta1} <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: 'white', color: '#0A1F44', border: '1.5px solid #0A1F44' }}
              >
                {tr.cta2}
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold" style={{ backgroundColor: '#0A1F44', color: '#F5C842' }}>{tr.badge2}</span>
              <span className="text-xs" style={{ color: '#9CA3AF' }}>{tr.badge3}</span>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden" style={{ height: '500px' }}>
              <img src={HERO_IMG} alt="APS Consulting" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}