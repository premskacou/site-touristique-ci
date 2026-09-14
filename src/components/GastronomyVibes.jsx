import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Music, Volume2, VolumeX, Play, Pause, Disc, Flame, Sparkles } from 'lucide-react';
import { GASTRONOMY_DISHES, AMBIENCE_TRACKS } from '../data/mockData';

export default function GastronomyVibes() {
  const [activeTrack, setActiveTrack] = useState(AMBIENCE_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = (track) => {
    if (activeTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <section id="gastronomie" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-akwaba-coral text-xs font-bold uppercase tracking-wider mb-4">
              <Utensils className="w-4 h-4" />
              <span>Gastronomie & Maquis</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Saveurs & <span className="text-gradient-gold">Ambiance Ivoirienne</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-base">
              Du Garba croustillant d'Abidjan au son envoûtant du Zouglou et du Coupé-Décalé, la joie de vivre ivoirienne est contagieuse !
            </p>
          </div>

          {/* Mini Player Widget */}
          <div className="glass-card-gold p-4 rounded-2xl border border-akwaba-gold/30 flex items-center gap-4 shadow-xl">
            <div className={`w-12 h-12 rounded-xl bg-akwaba-gold text-slate-950 flex items-center justify-center shrink-0 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }}>
              <Disc className="w-6 h-6" />
            </div>
            <div className="min-w-[140px]">
              <div className="text-[10px] uppercase tracking-wider text-akwaba-gold font-bold flex items-center gap-1">
                {isPlaying ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>En Lecture</span>
                  </>
                ) : (
                  <span>Lecteur Ambiance</span>
                )}
              </div>
              <div className="text-xs font-extrabold text-white truncate">{activeTrack.title}</div>
              <div className="text-[10px] text-slate-400">{activeTrack.artist}</div>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-akwaba-gold text-slate-950 hover:scale-105 transition-all shadow-md"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950 ml-0.5" />}
            </button>
          </div>
        </div>

        {/* Gastronomy Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {GASTRONOMY_DISHES.map((dish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-akwaba-gold/40 transition-all flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-akwaba-gold border border-slate-700">
                  {dish.vibe}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-akwaba-gold transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {dish.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-akwaba-green">
                  <span>{dish.category}</span>
                  <Flame className="w-3.5 h-3.5 text-akwaba-coral animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Music & Ambience Selector Box */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-akwaba-gold font-bold text-xs uppercase tracking-wider mb-2">
                <Music className="w-4 h-4" />
                <span>Radios & Ambiance Locale</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Plongez dans le rythme d'Abidjan
              </h3>
            </div>

            {/* Audio Wave Visualizer Animation */}
            {isPlaying && (
              <div className="flex items-center gap-1.5 h-8">
                {[40, 70, 30, 90, 50, 80, 40, 100, 60, 30].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ['20%', `${h}%`, '20%'] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
                    className="w-1.5 bg-gradient-to-t from-akwaba-gold to-akwaba-green rounded-full"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Tracks List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AMBIENCE_TRACKS.map((track) => {
              const isSelected = activeTrack.id === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => togglePlay(track)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-br from-slate-900 to-slate-900/90 border-akwaba-gold shadow-lg shadow-akwaba-gold/10'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[10px] font-bold text-akwaba-gold">
                        {track.genre}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{track.bpm}</span>
                    </div>
                    <h4 className="text-base font-bold text-white">{track.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{track.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300">{track.artist}</span>
                    <button className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 ${
                      isSelected && isPlaying ? 'bg-akwaba-gold text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {isSelected && isPlaying ? <Pause className="w-3.5 h-3.5 fill-slate-950" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
