import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Compass, Sparkles, Check, Copy, Share2, MapPin, ArrowRight, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ItineraryBuilder({ onOpenBooking }) {
  const [duration, setDuration] = useState('7');
  const [vibe, setVibe] = useState('Mix Total');
  const [style, setStyle] = useState('Luxe & Confort');
  const [copied, setCopied] = useState(false);

  const durationOptions = [
    { label: '3 Jours', value: '3', sub: 'Abidjan Express' },
    { label: '7 Jours', value: '7', sub: 'Incontournables' },
    { label: '14 Jours', value: '14', sub: 'Grand Tour Ivoirien' },
  ];

  const vibeOptions = ['Mix Total', 'Plages & Détente', 'Culture & Histoire', 'Aventure & Nature'];
  const styleOptions = ['Économique / Sac à dos', 'Authentique & Confort', 'Luxe & Confort'];

  // Generated Plan Logic
  const getGeneratedItinerary = () => {
    if (duration === '3') {
      return [
        {
          day: 'Jour 1',
          title: 'Arrivée à Abidjan & Immersion Plateau',
          activities: [
            'Arrivée à l\'Aéroport Félix Houphouët-Boigny & installation',
            'Déjeuner Garba VIP ou Poisson Grillé au Val d\'Angré',
            'Visite de la Cathédrale Saint-Paul et vue sur la skyline du Plateau',
            'Soirée lounge & cocktails à Cocody / Zone 4'
          ],
          spot: 'Abidjan'
        },
        {
          day: 'Jour 2',
          title: 'Escapade Historique à Grand-Bassam',
          activities: [
            'Départ pour le Quartier France (UNESCO) à Grand-Bassam',
            'Visite du Musée du Costume & ateliers d\'artisans locaux',
            'Déjeuner pieds dans l\'eau face à l\'Océan Atlantique',
            'Retour à Abidjan & concert Zouglou en direct'
          ],
          spot: 'Grand-Bassam'
        },
        {
          day: 'Jour 3',
          title: 'Parc du Banco & Souvenirs d\'Akwaba',
          activities: [
            'Balade matinale guidée dans le Parc National du Banco',
            'Achat d\'artisanat local au CAVA (Centre Artisanal)',
            'Déjeuner Kedjenou traditionnel',
            'Transfert retour à l\'aéroport'
          ],
          spot: 'Abidjan'
        }
      ];
    }

    if (duration === '7') {
      return [
        {
          day: 'Jour 1 & 2',
          title: 'Abidjan la Trépidante',
          activities: [
            'Visite guidée du Plateau, Cité Administrative et Cathédrale',
            'Balade en bateau lagunaire sur la Lagune Ébrié',
            'Tour gastronomique : Garba, Choucouya & Maquis VIP'
          ],
          spot: 'Abidjan'
        },
        {
          day: 'Jour 3 & 4',
          title: 'Yamoussoukro la Majestueuse',
          activities: [
            'Route vers la capitale politique Yamoussoukro',
            'Découverte de la Basilique Notre-Dame de la Paix',
            'Observation du rituel des crocodiles sacrés du Palais'
          ],
          spot: 'Yamoussoukro'
        },
        {
          day: 'Jour 5 à 7',
          title: 'Détente Tropiques à Assinie-Mafia',
          activities: [
            'Transfert vers la presqu\'île paradisiaque d\'Assinie',
            'Balade en pirogue à moteur à la Passe (rencontre Océan & Lagune)',
            'Session surf, jet-ski ou farniente dans un écolodge VIP',
            'Dîner langoustes grillées sous les cocotiers'
          ],
          spot: 'Assinie'
        }
      ];
    }

    return [
      {
        day: 'Jour 1 à 3',
        title: 'Abidjan & Grand-Bassam',
        activities: ['Découverte de la capitale économique', 'Quartier France UNESCO & plages'],
        spot: 'Abidjan & Bassam'
      },
      {
        day: 'Jour 4 & 5',
        title: 'Yamoussoukro & Centre',
        activities: ['Basilique géante, Fondations et savanes'],
        spot: 'Yamoussoukro'
      },
      {
        day: 'Jour 6 à 9',
        title: 'L\'Ouest Mystique (Man)',
        activities: ['Mont Tonkpi, Cascade de Man & ponts de lianes sacrés'],
        spot: 'Man'
      },
      {
        day: 'Jour 10 à 14',
        title: 'Le Littoral du Sud & Assinie',
        activities: ['Séjour balnéaire de luxe et détente absolue'],
        spot: 'Assinie & San-Pédro'
      }
    ];
  };

  const currentPlan = getGeneratedItinerary();

  const handleCopyPlan = () => {
    const text = currentPlan
      .map(p => `${p.day}: ${p.title}\n${p.activities.map(a => ` - ${a}`).join('\n')}`)
      .join('\n\n');
    navigator.clipboard.writeText(`--- ITINÉRAIRE CÔTE D'IVOIRE (${duration} JOURS) ---\n\n${text}`);
    setCopied(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="itinerary" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0A0E17]/90">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold mb-4 text-xs font-bold text-akwaba-gold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Générateur Sur Mesure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Composez Votre <span className="text-gradient-gold">Itinéraire Ivoirien</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Personnalisez votre voyage selon la durée et vos envies, notre algorithme génère votre parcours idéal instantanément.
          </p>
        </div>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Step 1: Duration */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-2 text-akwaba-gold font-bold text-sm mb-4">
              <Calendar className="w-4 h-4" />
              <span>1. Durée du Séjour</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {durationOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setDuration(opt.value)}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    duration === opt.value
                      ? 'bg-akwaba-gold text-slate-950 border-akwaba-gold font-extrabold shadow-lg shadow-akwaba-gold/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="text-base font-black">{opt.label}</div>
                  <div className="text-[10px] opacity-80 mt-0.5">{opt.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Vibe */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-2 text-akwaba-green font-bold text-sm mb-4">
              <Compass className="w-4 h-4" />
              <span>2. Thématique Principale</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {vibeOptions.map((v) => (
                <button
                  key={v}
                  onClick={() => setVibe(v)}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                    vibe === v
                      ? 'bg-akwaba-green text-slate-950 border-akwaba-green shadow-md'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Style */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>3. Style de Voyage</span>
            </div>
            <div className="flex flex-col gap-2">
              {styleOptions.map((st) => (
                <button
                  key={st}
                  onClick={() => setStyle(st)}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                    style === st
                      ? 'bg-slate-800 border-akwaba-gold text-akwaba-gold shadow-sm'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results Container */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-bold text-akwaba-gold uppercase tracking-wider">Programme Généré</span>
              <h3 className="text-2xl font-black text-white mt-1">
                Circuit {duration} Jours - {vibe} ({style})
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyPlan}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-700 hover:border-akwaba-gold rounded-xl text-xs font-bold text-white transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-akwaba-gold" />}
                <span>{copied ? 'Itinéraire Copié !' : 'Copier le circuit'}</span>
              </button>

              <button
                onClick={() => onOpenBooking(`Circuit ${duration} Jours (${vibe})`)}
                className="flex items-center gap-2 px-5 py-2.5 bg-akwaba-gold text-slate-950 text-xs font-extrabold rounded-xl shadow-md hover:scale-105 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Réserver avec Chauffeur / Guide</span>
              </button>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-slate-800">
            {currentPlan.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-12 flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
              >
                {/* Step Circle */}
                <div className="absolute left-3 top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-akwaba-gold text-akwaba-gold flex items-center justify-center text-[10px] font-black group-hover:scale-125 transition-transform">
                  {idx + 1}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-akwaba-gold/15 text-akwaba-gold font-extrabold text-xs">
                      {step.day}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-akwaba-green" />
                      <span>{step.spot}</span>
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-2 group-hover:text-akwaba-gold transition-colors">
                    {step.title}
                  </h4>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                    {step.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-akwaba-green font-bold">›</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
