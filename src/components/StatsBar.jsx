import React from 'react';
import { motion } from 'framer-motion';
import t from '../lib/translations';

export default function StatsBar({ lang }) {
  const stats = t[lang].stats;
  return (
    <div style={{ backgroundColor: '#0A1F44', borderTop: '1px solid rgba(58,191,191,0.2)', borderBottom: '1px solid rgba(58,191,191,0.2)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 divide-white/10 md:divide-x-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center py-4 md:py-0 relative"
            >
              {/* Separator */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12" style={{ backgroundColor: '#3ABFBF', opacity: 0.3 }} />
              )}
              <div className="font-bold text-4xl leading-none mb-2" style={{ color: '#F5C842', fontFamily: 'Inter, sans-serif' }}>
                {s.value}
              </div>
              <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}