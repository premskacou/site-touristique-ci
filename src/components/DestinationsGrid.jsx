import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Calendar, Clock, ArrowRight, X, Compass, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';

export default function DestinationsGrid({ filterSearch, onOpenBooking, currency }) {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [selectedDestination, setSelectedDestination] = useState(null);

  const categories = ['Tout', 'Plages & Écotourisme', 'Culture', 'Gastronomie', 'Business'];

  const filteredDestinations = DESTINATIONS.filter((item) => {
    const matchesCategory = activeCategory === 'Tout' || item.category === activeCategory;
    const matchesSearch = !filterSearch || 
      item.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(filterSearch.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(filterSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getPriceEstimate = (id) => {
    if (currency === 'EUR') return id === 'abidjan' ? '85 € / jour' : '65 € / jour';
    if (currency === 'USD') return id === 'abidjan' ? '$95 / day' : '$72 / day';
    return id === 'abidjan' ? '55 000 FCFA / jour' : '40 000 FCFA / jour';
  };

  return (
    <section id="destinations" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-akwaba-gold text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-4 h-4 text-akwaba-gold" />
              <span>Incontournables</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Les Trésors de la <span className="text-gradient-gold">Côte d'Ivoire</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-base">
              Explorez nos régions phares sélectionnées pour leur beauté, leur culture vivante et leur authenticité.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-akwaba-gold text-slate-950 shadow-md shadow-akwaba-gold/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-3xl border border-slate-800">
            <Compass className="w-12 h-12 text-slate-600 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white">Aucune destination trouvée</h3>
            <p className="text-slate-400 mt-2 text-sm">Essayez de réinitialiser vos critères de recherche.</p>
            <button
              onClick={() => setActiveCategory('Tout')}
              className="mt-6 px-6 py-2.5 bg-akwaba-gold text-slate-950 font-bold rounded-xl text-sm"
            >
              Voir toutes les destinations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-akwaba-gold/50 transition-all duration-300 flex flex-col group shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-black/30" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-akwaba-gold">
                    {dest.category}
                  </span>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{dest.rating}</span>
                    <span className="text-slate-400">({dest.reviewsCount})</span>
                  </div>

                  {/* Location & Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1 text-xs text-akwaba-gold font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.region}, Côte d'Ivoire</span>
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-akwaba-gold transition-colors">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-300 text-sm font-medium line-clamp-2">
                      {dest.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {dest.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-400">Est. à partir de</span>
                      <span className="text-sm font-extrabold text-akwaba-gold">
                        {getPriceEstimate(dest.id)}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedDestination(dest)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-akwaba-gold text-xs font-bold text-white hover:text-akwaba-gold transition-all group/btn"
                    >
                      <span>Découvrir</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Destination Detail Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDestination(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0E17] border border-slate-800 rounded-3xl shadow-2xl z-10 glass-card p-0 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-72 sm:h-96">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-akwaba-gold text-slate-950 text-xs font-black uppercase tracking-wider mb-2 inline-block">
                    {selectedDestination.category}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-black text-white">
                    {selectedDestination.name}
                  </h3>
                  <p className="text-akwaba-gold font-semibold text-sm sm:text-base mt-1">
                    {selectedDestination.tagline}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Info Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-akwaba-gold shrink-0" />
                    <div>
                      <div className="text-[11px] text-slate-400">Meilleure période</div>
                      <div className="text-xs font-bold text-white">{selectedDestination.bestSeason}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-akwaba-green shrink-0" />
                    <div>
                      <div className="text-[11px] text-slate-400">Durée conseillée</div>
                      <div className="text-xs font-bold text-white">{selectedDestination.durationRecommended}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                    <Star className="w-5 h-5 text-amber-400 shrink-0 fill-amber-400" />
                    <div>
                      <div className="text-[11px] text-slate-400">Note voyageurs</div>
                      <div className="text-xs font-bold text-white">{selectedDestination.rating} / 5 ({selectedDestination.reviewsCount} avis)</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">À propos de la destination</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedDestination.description}
                  </p>
                </div>

                {/* Top Attractions */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Incontournables à visiter</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedDestination.topAttractions.map((attr, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-akwaba-green shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-sm font-bold text-white">{attr.name}</h5>
                          <p className="text-xs text-slate-400 mt-0.5">{attr.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400">Estimation tarifaire :</span>
                    <div className="text-xl font-extrabold text-akwaba-gold">
                      {getPriceEstimate(selectedDestination.id)}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const dest = selectedDestination.name;
                      setSelectedDestination(null);
                      onOpenBooking(dest);
                    }}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-akwaba-gold to-amber-500 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-akwaba-gold/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Réserver une visite guidée</span>
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
