import React from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <section className="py-14" style={{ backgroundColor: '#0A1F44' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-5" style={{ backgroundColor: 'rgba(245,200,66,0.15)', color: '#F5C842' }}>
            ✦ Pourquoi APS Consulting ?
          </span>
          <h2 className="font-bold text-2xl text-white mb-3">Une expertise au service de votre performance</h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Une double compétence en management QSE et en achats, pour piloter votre organisation de bout en bout.
          </p>
        </motion.div>
      </div>
    </section>
  );
}