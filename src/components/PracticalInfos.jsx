import React, { useState } from 'react';
import { Calculator, Sun, CloudRain, ShieldAlert, Phone, HelpCircle, ChevronDown, ChevronUp, DollarSign, RefreshCw, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PracticalInfos() {
  const [xofAmount, setXofAmount] = useState('50000');
  const [openFaq, setOpenFaq] = useState(0);

  // Exchange rate constants (1 EUR = 655.957 XOF, 1 USD = ~600 XOF)
  const eurValue = (parseFloat(xofAmount || 0) / 655.957).toFixed(2);
  const usdValue = (parseFloat(xofAmount || 0) / 600).toFixed(2);

  const weatherData = [
    { city: 'Abidjan', temp: '29°C', condition: 'Ensoleillé & Humide', icon: Sun },
    { city: 'Yamoussoukro', temp: '31°C', condition: 'Beau Temps', icon: Sun },
    { city: 'Man (Montagnes)', temp: '26°C', condition: 'Fraîcheur & Brume', icon: Sun },
    { city: 'San-Pédro', temp: '28°C', condition: 'Bise Marine', icon: Sun },
  ];

  const faqs = [
    {
      q: 'Faut-il un Visa pour la Côte d\'Ivoire ?',
      a: 'Oui, un visa d\'entrée (ou E-Visa électronique) est obligatoire pour les ressortissants hors CEDEAO. L\'E-Visa s\'obtient facilement en ligne sur le site officiel SNEDAI avec délivrance à l\'aéroport d\'Abidjan.'
    },
    {
      q: 'Quelle est la monnaie et le mode de paiement ?',
      a: 'La monnaie officielle est le Franc CFA (XOF), avec une parité fixe vis-à-vis de l\'Euro (1 EUR = 655,957 XOF). Les cartes Visa/Mastercard sont acceptées dans les grands hôtels et supermarchés, mais le liquide ou le Mobile Money (Wave, Orange, MTN) reste indispensable dans les maquis et marchés.'
    },
    {
      q: 'Quels sont les vaccins requis ?',
      a: 'Le vaccin contre la Fièvre Jaune est obligatoire et contrôlé à l\'arrivée avec le carnet jaune international. Un traitement préventif contre le paludisme est recommandé.'
    }
  ];

  return (
    <section id="practical" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold mb-4 text-xs font-bold text-akwaba-gold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Guide Pratique</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Infos Pratiques & <span className="text-gradient-gold">Services Voyageurs</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Outils interactifs pour préparer votre séjour en toute sérénité.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Currency Converter */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-akwaba-gold font-extrabold text-lg">
                  <Calculator className="w-5 h-5" />
                  <span>Convertisseur Franc CFA (XOF)</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Taux Officiel BCEAO</span>
              </div>

              {/* Input */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1 block">Montant en Francs CFA (XOF) :</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={xofAmount}
                      onChange={(e) => setXofAmount(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xl font-bold text-white focus:outline-none focus:border-akwaba-gold"
                    />
                    <span className="absolute right-4 top-3.5 text-xs font-extrabold text-akwaba-gold">FCFA</span>
                  </div>
                </div>

                {/* Conversion Display */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-slate-400">Équivalent Euro</span>
                    <div className="text-2xl font-black text-emerald-400 mt-1">
                      {eurValue} €
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-slate-400">Équivalent Dollar</span>
                    <div className="text-2xl font-black text-amber-400 mt-1">
                      $ {usdValue}
                    </div>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['10000', '25000', '50000', '100000'].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setXofAmount(preset)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-300 rounded-lg border border-slate-800 cursor-pointer"
                    >
                      {parseInt(preset).toLocaleString()} F
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-akwaba-green shrink-0" />
              <span>1 Euro = 655.957 FCFA (Taux fixe garanti)</span>
            </div>
          </div>

          {/* Weather Widget */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-akwaba-green font-extrabold text-lg">
                  <Sun className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
                  <span>Météo Régionale</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800">
                  En direct
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {weatherData.map((w, idx) => {
                  const Icon = w.icon;
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">{w.city}</span>
                        <Icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="text-2xl font-black text-akwaba-gold mt-2">{w.temp}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{w.condition}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
              <span className="text-slate-400 flex items-center gap-1">
                <ShieldAlert className="w-4 h-4 text-akwaba-coral shrink-0" />
                <span>Urgences Touristiques :</span>
              </span>
              <a href="tel:170" className="font-extrabold text-akwaba-coral bg-akwaba-coral/10 px-3 py-1 rounded-lg border border-akwaba-coral/30 self-start sm:self-auto">
                170 / 185 (Police & SAMU)
              </a>
            </div>
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800">
          <h3 className="text-2xl font-black text-white mb-6">Foire Aux Questions (FAQ)</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/40">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-white hover:text-akwaba-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-akwaba-gold" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-sm text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
