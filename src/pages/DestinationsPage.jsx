import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, Calendar, Clock, ArrowRight, X, Compass, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function DestinationsPage({ onOpenBooking, onSelectDestination }) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryKey, setSelectedCategoryKey] = useState('all');
  const [activeModalDestination, setActiveModalDestination] = useState(null);

  const categories = [
    { key: 'all', label: t('destinations_page.cat_all', 'Tout'), filter: 'Tout' },
    { key: 'beaches', label: t('destinations_page.cat_beaches', 'Plages & Écotourisme'), filter: 'Plages & Écotourisme' },
    { key: 'culture', label: t('destinations_page.cat_culture', 'Culture'), filter: 'Culture' },
    { key: 'gastronomy', label: t('destinations_page.cat_gastronomy', 'Gastronomie'), filter: 'Gastronomie' },
    { key: 'business', label: t('destinations_page.cat_business', 'Business'), filter: 'Business' }
  ];

  const filteredDestinations = DESTINATIONS.filter((item) => {
    const activeCategoryObj = categories.find((c) => c.key === selectedCategoryKey);
    const matchesCategory = selectedCategoryKey === 'all' || item.category === activeCategoryObj?.filter;
    const matchesSearch =
      !searchTerm ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-12 select-none relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#1D71F2]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        
        {/* --- 1. Page Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold text-amber-400 mb-4 sm:mb-6 shadow-xs"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{t('destinations_page.tag', 'Catalogue Officiel des Destinations')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] mb-4 sm:mb-6"
          >
            {t('destinations_page.title_p1', 'Explorez les Joyaux de la')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-amber-200">
              {t('destinations_page.title_p2', 'Terre d’Éburnie')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: smoothEase }}
            className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal px-2"
          >
            {t('destinations_page.sub', 'Des lagunes scintillantes d’Assinie aux sommets majestueux de Man, planifiez votre prochaine escapade en Côte d’Ivoire avec nos experts locaux certifiés.')}
          </motion.p>
        </div>

        {/* --- 2. Search & Category Filters Bar (Horizontal Scrollable Pills on Mobile) --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: smoothEase }}
          className="mb-8 sm:mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-2xl sm:rounded-full bg-[#141B26]/90 border border-white/10 backdrop-blur-xl shadow-xl"
        >
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={t('destinations_page.search_placeholder', 'Rechercher une ville, une plage, une montagne...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent pl-11 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 px-1 md:px-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategoryKey === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategoryKey(cat.key)}
                  className={`relative px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                    isActive ? 'text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDestTab"
                      className="absolute inset-0 bg-amber-400 rounded-full shadow-md"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 sm:mb-8 px-2">
          <span>
            {t('destinations_page.showing_prefix', 'Affichage de')}{' '}
            <strong className="text-white font-semibold">{filteredDestinations.length}</strong>{' '}
            {t('destinations_page.showing_suffix', 'destination(s)')}
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-amber-400 hover:underline cursor-pointer"
            >
              {t('destinations_page.clear_search', 'Effacer la recherche')}
            </button>
          )}
        </div>

        {/* --- 3. Destinations Cards Grid (1 col Mobile, 2 cols Tablet, 3 cols Desktop) --- */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: -35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: smoothEase }}
                className="group rounded-[28px] overflow-hidden bg-[#111722] border border-white/10 hover:border-amber-400/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo with badges */}
                  <div
                    onClick={() => onSelectDestination ? onSelectDestination(item.id) : setActiveModalDestination(item)}
                    className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-[#111722]/30 to-transparent" />

                    {/* Region badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/70 border border-white/15 backdrop-blur-md text-[11px] font-semibold text-white">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{item.region}</span>
                    </div>

                    {/* Rating badge */}
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/70 border border-white/15 backdrop-blur-md text-[11px] font-bold text-white">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-slate-400 text-[10px]">({item.reviewsCount})</span>
                    </div>

                    {/* Category pill */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3
                      onClick={() => onSelectDestination ? onSelectDestination(item.id) : setActiveModalDestination(item)}
                      className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2 cursor-pointer"
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium mb-4">
                      {item.tagline}
                    </p>
                    <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Highlights Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.highlights.slice(0, 3).map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] text-slate-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Details & Booking Actions */}
                <div className="p-6 pt-0 border-t border-white/5 mt-auto">
                  <div className="flex items-center justify-between text-xs text-slate-400 py-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.bestSeason}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1D71F2]" />
                      <span>{item.durationRecommended}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => onSelectDestination ? onSelectDestination(item.id) : setActiveModalDestination(item)}
                      className="flex-1 py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors text-center cursor-pointer"
                    >
                      {t('destinations_page.discover', 'Découvrir')}
                    </button>
                    <button
                      onClick={() => onOpenBooking && onOpenBooking(item.name)}
                      className="flex-1 py-2.5 px-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all hover:scale-102 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>{t('destinations_page.book', 'Réserver')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredDestinations.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-[#111722]/60 rounded-3xl border border-white/10 p-8 my-8"
          >
            <Compass className="w-12 h-12 text-amber-400 mx-auto mb-4 opacity-70" />
            <h3 className="text-xl font-bold text-white mb-2">{t('destinations_page.empty_title', 'Aucune destination trouvée')}</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
              {t('destinations_page.empty_desc', 'Aucun résultat ne correspond à votre recherche. Essayez un autre mot-clé ou réinitialisez les filtres.')}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategoryKey('all');
              }}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
            >
              {t('destinations_page.reset_filters', 'Réinitialiser les filtres')}
            </button>
          </motion.div>
        )}

      </div>

      {/* --- 4. In-Depth Destination Modal --- */}
      <AnimatePresence>
        {activeModalDestination && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalDestination(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              className="relative w-full max-w-3xl max-h-[92dvh] overflow-y-auto bg-[#111722] border border-white/15 rounded-[26px] sm:rounded-[32px] p-5 sm:p-8 shadow-2xl z-10 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalDestination(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-950 border border-white/15 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Header */}
              <div className="relative h-56 sm:h-80 -mx-5 sm:-mx-8 -mt-5 sm:-mt-8 mb-5 sm:mb-6 overflow-hidden">
                <img
                  src={activeModalDestination.image}
                  alt={activeModalDestination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-[#111722]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:left-8 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold">
                      {activeModalDestination.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 text-white text-xs font-semibold border border-white/20">
                      {t('destinations_page.region_prefix', 'Région')} {activeModalDestination.region}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                    {activeModalDestination.name}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {activeModalDestination.description}
              </p>

              {/* Practical Info Box */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/5 mb-8 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">{t('destinations_page.modal_best_season', 'Meilleure période')}</span>
                  <span className="text-white font-semibold">{activeModalDestination.bestSeason}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">{t('destinations_page.modal_duration', 'Durée recommandée')}</span>
                  <span className="text-white font-semibold">{activeModalDestination.durationRecommended}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block mb-0.5">{t('destinations_page.modal_score', 'Score voyageurs')}</span>
                  <span className="text-amber-400 font-semibold">{activeModalDestination.rating} / 5</span>
                </div>
              </div>

              {/* Attractions Incontournables */}
              <div className="mb-8">
                <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{t('destinations_page.modal_attractions', 'Attractions & Expériences Incontournables')}</span>
                </h4>
                <div className="space-y-3">
                  {activeModalDestination.topAttractions.map((att, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#1D71F2] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-white">{att.name}</h5>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{att.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Modal CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <p className="text-xs text-slate-400">
                  {t('destinations_page.modal_guide_needed', "Besoin d'un guide certifié pour cette région ?")}
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalDestination(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold cursor-pointer"
                  >
                    {t('destinations_page.modal_close', 'Fermer')}
                  </button>
                  <button
                    onClick={() => {
                      const name = activeModalDestination.name;
                      setActiveModalDestination(null);
                      onOpenBooking && onOpenBooking(name);
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>{t('destinations_page.modal_book', 'Réserver')} {activeModalDestination.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
