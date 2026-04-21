import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Leaf, Shield } from 'lucide-react';
import t from '../lib/translations';

const ABOUT_IMG = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80";

export default function AboutSection({ lang }) {
  const tr = t[lang].about;
  const tagIcons = [Target, Users, Lightbulb];
  const tagColors = ['#F5C842', '#3ABFBF', '#0A1F44'];
  return (
    <section id="apropos" className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div style={{ flex: 1, borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', minHeight: '260px' }}>
              <img src={ABOUT_IMG} alt="APS Consulting" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: 'rgba(58,191,191,0.12)', color: '#2A9D9D', border: '1px solid rgba(58,191,191,0.2)' }}>
              {tr.badge}
            </span>

            <h2 className="font-bold text-3xl leading-tight" style={{ color: '#0A1F44' }}>
              {tr.title}
            </h2>

            <p className="text-sm leading-relaxed" style={{ color: '#374151' }} dangerouslySetInnerHTML={{ __html: tr.desc }} />

            <div className="rounded-xl p-5 border-l-4" style={{ backgroundColor: 'rgba(58,191,191,0.07)', borderColor: '#3ABFBF' }}>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#2A9D9D', letterSpacing: '0.1em' }}>
                {tr.quoteTitle}
              </p>
              <p className="text-xs mt-2 leading-relaxed" style={{ color: '#6B7280' }}>
                {tr.quoteDesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {tr.tags.map((label, i) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
                  <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: `${tagColors[i]}18` }}>
                    {React.createElement(tagIcons[i], { className: 'w-3.5 h-3.5', style: { color: tagColors[i] } })}
                  </div>
                  <span className="text-xs font-semibold" style={{ color: '#0A1F44' }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Norms */}
            <div className="bg-white rounded-xl p-5 border mt-2" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
              <p className="font-semibold text-sm mb-3 text-center" style={{ color: '#0A1F44' }}>{tr.normsTitle}</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'ISO 9001', icon: Award, color: '#F5C842' },
                  { name: 'ISO 14001', icon: Leaf, color: '#3ABFBF' },
                  { name: 'ISO 45001', icon: Shield, color: '#0A1F44' }
                ].map((n) => (
                  <div key={n.name} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border w-full" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
                    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${n.color}18` }}>
                      <n.icon className="w-5 h-5" style={{ color: n.color }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: '#0A1F44' }}>{n.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}