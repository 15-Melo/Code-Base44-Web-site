import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Diagnostic personnalisé',
    desc: "Analyse de votre maturité organisationnelle, vos enjeux réels et vos contraintes terrain. On part de votre réalité, pas d'un modèle générique.",
  },
  {
    number: '02',
    title: "Plan d'action concret",
    desc: "Feuille de route priorisée, livrables clairs, délais tenus. Zéro jargon inutile — des actions directement actionnables.",
  },
  {
    number: '03',
    title: "Accompagnement jusqu'au résultat",
    desc: "À vos côtés en présentiel ou distanciel, de l'audit initial jusqu'à la mise en œuvre complète et le suivi des résultats.",
  },
];

export default function MethodSection() {
  return (
    <section id="approche" className="py-24" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: 'rgba(58,191,191,0.12)', color: '#3ABFBF', border: '1px solid rgba(58,191,191,0.25)' }}>
            Notre approche
          </span>
          <h2 className="font-bold tracking-tight leading-tight mb-3" style={{ fontSize: '32px', color: '#0A1F44' }}>
            Une méthode claire, des résultats mesurables
          </h2>
          <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: '#F5C842' }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(100%-16px)] w-full h-px z-0" style={{ backgroundColor: 'rgba(58,191,191,0.25)' }} />
              )}

              <div className="relative z-10">
                {/* Number circle */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg mb-6 shadow-lg" style={{ backgroundColor: '#3ABFBF' }}>
                  {step.number}
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: '#0A1F44' }}>{step.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}