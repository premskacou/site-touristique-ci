import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Award, MessageSquare, Check, Sparkles, UserCheck } from 'lucide-react';
import { GUIDES } from '../data/mockData';

export default function GuidesSection({ onOpenBooking }) {
  return (
    <section id="guides" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0A0E17]/95">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-green mb-4 text-xs font-bold text-akwaba-green uppercase tracking-wider">
            <UserCheck className="w-4 h-4" />
            <span>Accompagnement Sur-Mesure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Guides Locaux <span className="text-gradient-green">Certifiés & Passionnés</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Explorez le pays en toute confiance avec nos experts accrédités par le Ministère du Tourisme de Côte d'Ivoire.
          </p>
        </div>

        {/* Guides Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDES.map((guide, idx) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-akwaba-green/50 transition-all flex flex-col justify-between group shadow-2xl relative"
            >
              {/* Top badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-akwaba-gold/20 to-akwaba-green/20 border border-slate-700 flex items-center justify-center text-3xl shadow-inner">
                  {guide.avatar}
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-xs font-black text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{guide.rating}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-0.5">{guide.toursDone} visites guidées</span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-akwaba-green">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{guide.specialty}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-akwaba-green transition-colors">
                  {guide.name}
                </h3>
                <p className="text-xs text-akwaba-gold font-semibold">{guide.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  "{guide.bio}"
                </p>

                {/* Languages */}
                <div className="pt-2">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Langues :</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {guide.languages.map((lang) => (
                      <span key={lang} className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[10px] font-medium text-slate-300">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenBooking(null, guide.name)}
                  className="w-full py-3 bg-gradient-to-r from-akwaba-green to-emerald-600 hover:from-emerald-500 hover:to-akwaba-green text-slate-950 font-extrabold rounded-xl shadow-lg shadow-akwaba-green/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Réserver avec {guide.name.split(' ')[0]}</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
