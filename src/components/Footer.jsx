import React from 'react';
import t from '../lib/translations';

const LOGO_URL = "https://media.base44.com/images/public/69c80816d5543b54fe26cb48/1bb239a21_LogoAPSConsultingsurunrseaumondial.png";

export default function Footer({ lang }) {
  const tr = t[lang].footer;
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#0A1F44', borderTop: 'none' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Col 1 */}
          <div>
            <div className="mb-3">
              <div className="font-bold text-lg" style={{ color: '#fff' }}>APS Consulting</div>
              <div className="text-xs mt-0.5" style={{ color: '#F5C842' }}>{tr.tagline}</div>
            </div>
            <p className="text-xs leading-relaxed mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {tr.desc}
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {tr.subdesc}
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#fff' }}>{tr.servicesTitle}</h4>
            <ul className="space-y-2">
              {tr.services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-xs transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={e => e.target.style.color = '#F5C842'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#fff' }}>{tr.contactTitle}</h4>
            <ul className="space-y-2 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <li>📍 60 rue de Pontoise, 95870 Bezons</li>
              <li>✉️ apsconsulting.fr@gmail.com</li>
              <li>📞 +33 7 59 52 89 77</li>
              <li className="pt-1">🕐 {tr.hours}</li>
              <li className="pt-2">
                <a
                  href="https://www.linkedin.com/company/aps-consulting-qse/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all hover:opacity-90"
                  style={{ backgroundColor: '#0077b5', color: '#fff' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  {tr.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {tr.copyright}
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            {tr.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}