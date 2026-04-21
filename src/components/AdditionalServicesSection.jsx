import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Search } from 'lucide-react';

const extras = [
  {
    icon: FileText,
    title: 'Support administratif',
    desc: 'Missions freelances de support et assistance ponctuelle',
  },
  {
    icon: Users,
    title: 'Coordination de projets',
    desc: 'Accompagnement et coordination de vos projets',
  },
  {
    icon: Search,
    title: 'Outils professionnels',
    desc: 'Produits numériques et e-books dédiés',
  },
];

export default function AdditionalServicesSection() {
  return (
    <section className="py-16" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: 'rgba(58,191,191,0.12)', color: '#2A9D9D', border: '1px solid rgba(58,191,191,0.2)' }}>
            ✦ Prestations complémentaires
          </span>
          <h2 className="font-bold text-2xl" style={{ color: '#0A1F44' }}>Services additionnels</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {extras.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border"
              style={{ borderColor: 'rgba(0,0,0,0.07)' }}
            >
              <s.icon className="w-5 h-5 mb-3" style={{ color: '#3ABFBF' }} />
              <h3 className="font-bold text-sm mb-1.5" style={{ color: '#0A1F44' }}>{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}