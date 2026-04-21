import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

export default function ContactSection() {
  const [form, setForm] = useState({ firstname: '', lastname: '', email: '', phone: '', company: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstname || !form.email || !form.message) {
      toast.error('Veuillez remplir les champs obligatoires.');
      return;
    }
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: 'contact@aps-consulting.fr',
      subject: `Nouveau message de ${form.firstname} ${form.lastname}`,
      body: `Prénom : ${form.firstname}\nNom : ${form.lastname}\nEmail : ${form.email}\nTéléphone : ${form.phone}\nEntreprise : ${form.company}\n\nBesoin :\n${form.message}`,
    });
    toast.success('Message envoyé ! Nous vous répondons sous 24h ouvrées.');
    setForm({ firstname: '', lastname: '', email: '', phone: '', company: '', message: '' });
    setSending(false);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid rgba(0,0,0,0.12)',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#fff',
    color: '#0A1F44',
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-bold text-3xl mb-1" style={{ color: '#0A1F44' }}>Parlons de votre projet</h2>
          <p className="text-sm" style={{ color: '#6B7280' }}>Premier échange gratuit et sans engagement</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form — takes 2/3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1F44' }}>Prénom *</label>
                  <input style={inputStyle} placeholder="Votre prénom" value={form.firstname} onChange={e => setForm({ ...form, firstname: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1F44' }}>Nom</label>
                  <input style={inputStyle} placeholder="Votre nom" value={form.lastname} onChange={e => setForm({ ...form, lastname: e.target.value })} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1F44' }}>Email *</label>
                  <input style={inputStyle} type="email" placeholder="votre@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1F44' }}>Téléphone</label>
                  <input style={inputStyle} type="tel" placeholder="+33 6 00 00 00 00" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1F44' }}>Entreprise</label>
                <input style={inputStyle} placeholder="Nom de votre entreprise" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0A1F44' }}>Votre besoin *</label>
                <textarea
                  style={{ ...inputStyle, resize: 'none' }}
                  rows={4}
                  placeholder="Décrivez votre projet en quelques mots..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#F5C842', color: '#0A1F44' }}
              >
                <Send className="w-4 h-4" />
                {sending ? 'Envoi...' : 'Envoyer ma demande'}
              </button>
            </form>
          </motion.div>

          {/* Info sidebar — takes 1/3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Bloc 1 — Informations de contact */}
            <div className="rounded-2xl p-5" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.08)' }}>
              <p className="font-bold text-sm mb-4" style={{ color: '#0A1F44' }}>Informations de contact</p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Adresse', value: '60 rue de Pontoise\n95870 Bezons' },
                  { icon: Mail, label: 'Email', value: 'apsconsulting.fr@gmail.com' },
                  { icon: Phone, label: 'Téléphone', value: '+33 7 59 52 89 77' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F5C842' }}>
                      <item.icon className="w-4 h-4" style={{ color: '#0A1F44' }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold" style={{ color: '#0A1F44' }}>{item.label}</div>
                      {item.value.split('\n').map((line, i) => (
                        <div key={i} className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloc 2 — Horaires */}
            <div className="rounded-2xl p-5 bg-white border" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
              <p className="font-bold text-sm mb-3" style={{ color: '#0A1F44' }}>Horaires d'ouverture</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#6B7280' }}>Lundi – Vendredi</span>
                  <span className="font-semibold" style={{ color: '#0A1F44' }}>9h – 16h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#6B7280' }}>Samedi – Dimanche</span>
                  <span style={{ color: '#9CA3AF' }}>Fermé</span>
                </div>
              </div>
            </div>

            {/* Bloc 3 — Délai de réponse */}
            <div className="rounded-2xl p-5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3ABFBF 0%, #1a9a9a 100%)', border: '2px solid rgba(255,255,255,0.25)' }}>
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10" style={{ background: '#fff', transform: 'translate(35%, -35%)' }} />
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-10" style={{ background: '#fff', transform: 'translate(-40%, 40%)' }} />

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.35)' }}>
                  ⏱️
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.75)' }}>Délai garanti</span>
                  </div>
                  <p className="text-lg font-bold text-white leading-tight">24 – 48h ouvrées</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Nous nous engageons à vous répondre rapidement après réception de votre message.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}