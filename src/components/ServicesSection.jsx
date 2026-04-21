import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import t from '../lib/translations';

function ServiceCard({ s, index, keyLabel }) {
  const [openGroups, setOpenGroups] = useState([0]);

  const toggle = (i) => {
    setOpenGroups((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden border"
      style={{ borderColor: 'rgba(0,0,0,0.08)', backgroundColor: '#FAFAFA' }}
    >
      <div className={`grid lg:grid-cols-2 ${s.imageRight ? '' : 'lg:grid-flow-dense'}`}>
        {/* Content */}
        <div className={`p-8 lg:p-10 ${s.imageRight ? '' : 'lg:col-start-2'}`}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3" style={{ backgroundColor: 'rgba(10,31,68,0.06)' }}>
            {s.emoji}
          </div>
          <p className="text-xs font-bold mb-1 tracking-wider" style={{ color: s.color }}>{s.category}</p>
          <h3 className="font-bold text-xl mb-6" style={{ color: '#0A1F44' }}>{s.title}</h3>

          <div className="space-y-2">
            {s.groups.map((g, i) => {
              const isOpen = openGroups.includes(i);
              return (
                <div
                  key={g.label}
                  className="rounded-xl border overflow-hidden"
                  style={{
                    borderColor: g.highlight ? s.color : 'rgba(0,0,0,0.08)',
                    boxShadow: g.highlight ? `0 0 0 1px ${s.color}30` : 'none',
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    style={{ backgroundColor: g.highlight ? `${s.color}10` : '#fff' }}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: s.color }} />
                      <span className="text-sm font-semibold" style={{ color: '#0A1F44' }}>{g.label}</span>
                      {g.highlight && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: s.color, color: s.color === '#0A1F44' ? '#fff' : '#0A1F44' }}>
                          {keyLabel}
                        </span>
                      )}
                    </div>
                    {isOpen
                      ? <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: '#9CA3AF' }} />
                      : <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: '#9CA3AF' }} />}
                  </button>
                  {isOpen && (
                    <ul className="px-4 pb-3 pt-2 bg-white space-y-1.5 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                      {g.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#6B7280' }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Image */}
        <div className={`hidden lg:block ${s.imageRight ? '' : 'lg:col-start-1 lg:row-start-1'}`} style={{ minHeight: '400px' }}>
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" style={{ minHeight: '400px' }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection({ lang }) {
  const tr = t[lang].services;
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: 'rgba(245,200,66,0.15)', color: '#B8962E' }}>
            {tr.badge}
          </span>
          <h2 className="font-bold text-3xl mb-3" style={{ color: '#0A1F44' }}>{tr.title}</h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: '#6B7280' }}>
            {tr.subtitle}
          </p>
        </motion.div>

        <div className="space-y-8">
          {tr.items.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} keyLabel={tr.keyLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}