import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Shield, Settings, BarChart2, FileText } from 'lucide-react';
import t from '../lib/translations';

const icons = [ShoppingCart, TrendingUp, Shield, Settings, BarChart2, FileText];
const colors = ['#3ABFBF', '#F5C842', '#3ABFBF', '#F5C842', '#3ABFBF', '#F5C842'];

export default function ValueSection({ lang }) {
  const tr = t[lang].value;
  const values = tr.items.map((item, i) => ({ ...item, icon: icons[i], color: colors[i] }));
  return (
    <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: 'rgba(245,200,66,0.15)', color: '#B8962E' }}>
            {tr.badge}
          </span>
          <h2 className="font-bold text-3xl mb-3" style={{ color: '#0A1F44' }}>{tr.title}</h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: '#6B7280' }}>
            {tr.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border"
              style={{ borderColor: 'rgba(0,0,0,0.07)' }}
            >
              <v.icon className="w-6 h-6 mb-4" style={{ color: v.color }} />
              <h3 className="font-bold text-base mb-2" style={{ color: '#0A1F44' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#6B7280' }}>{v.desc}</p>
              <p className="text-xs leading-relaxed italic" style={{ color: '#9CA3AF', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '10px' }}>{v.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}