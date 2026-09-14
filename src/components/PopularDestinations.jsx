import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PopularDestinations({ onOpenBooking, onNavigateToDestinations, onSelectDestination }) {
  const smoothEase = [0.16, 1, 0.3, 1];
  const { t } = useLanguage();

  const badgeToIdMap = {
    'Abidjan': 'abidjan',
    'Yamoussoukro': 'yamoussoukro',
    'Assinie-Mafia': 'assinie',
  };

  const destinations = [
    {
      id: 1,
      badge: t('popular.abidjan_badge'),
      slug: 'abidjan',
      title: t('popular.abidjan_title'),
      places: t('popular.abidjan_places'),
      image: '/images/hero_abidjan.jpg',
    },
    {
      id: 2,
      badge: t('popular.yamoussoukro_badge'),
      slug: 'yamoussoukro',
      title: t('popular.yamoussoukro_title'),
      places: t('popular.yamoussoukro_places'),
      image: '/images/yamoussoukro_basilica.jpg',
    },
    {
      id: 3,
      badge: t('popular.assinie_badge'),
      slug: 'assinie',
      title: t('popular.assinie_title'),
      places: t('popular.assinie_places'),
      image: '/images/assinie_beach.jpg',
    },
  ];

  return (
    <section id="destinations" className="bg-[#FFFFFF] text-slate-900 pb-16 sm:pb-28 pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Pill Badge: — Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-xs font-medium text-slate-600 mb-6"
        >
          <span>—</span>
          <span>{t('popular.tag')}</span>
        </motion.div>

        {/* Section Header: Title (Left) and Action Button (Right) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.05, ease: smoothEase }}
            className="text-2xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-slate-900"
          >
            {t('popular.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
          >
            <motion.button
              onClick={() => onNavigateToDestinations && onNavigateToDestinations()}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full border border-slate-200 bg-white hover:border-slate-300 text-slate-700 text-xs sm:text-sm font-medium shadow-[0_2px_6px_rgba(0,0,0,0.04)] transition-all duration-300 group cursor-pointer"
            >
              <span>{t('popular.view_all')}</span>
              <span className="w-8 h-8 rounded-full bg-[#1D71F2] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: 0.85,
                delay: 0.1 + index * 0.12,
                ease: smoothEase,
              }}
              whileHover={{ y: -8, transition: { duration: 0.35, ease: 'easeOut' } }}
              onClick={() => {
                if (onSelectDestination) {
                  onSelectDestination(dest.slug || badgeToIdMap[dest.badge] || dest.badge.toLowerCase());
                } else if (onOpenBooking) {
                  onOpenBooking(dest.badge);
                }
              }}
              className="rounded-[32px] overflow-hidden relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] shadow-[0_12px_32px_rgba(0,0,0,0.08)] group cursor-pointer"
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={dest.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

              {/* Top Left Pill Badge (e.g. Abidjan, Yamoussoukro, Assinie) */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-4 py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-wide shadow-xs">
                  {dest.badge}
                </span>
              </div>

              {/* Bottom Details (Title & Places visited) */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 text-white drop-shadow-md group-hover:text-amber-300 transition-colors">
                  {dest.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-200/90">
                  {dest.places}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
