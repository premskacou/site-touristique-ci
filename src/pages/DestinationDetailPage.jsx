import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';

export default function DestinationDetailPage({ destinationId, onBack, onOpenBooking, onNavigateHome }) {
  const smoothEase = [0.16, 1, 0.3, 1];

  // Find destination by id, fallback to first if not found
  const destination = DESTINATIONS.find((d) => d.id === destinationId) || DESTINATIONS[0];

  const [currentImage, setCurrentImage] = useState(destination.image);

  useEffect(() => {
    setCurrentImage(destination.image);
  }, [destination.image]);

  const baseGallery = destination.gallery && destination.gallery.length > 0
    ? destination.gallery
    : [
        { url: destination.image, title: `${destination.name} — Vue Panoramique`, tag: 'Panorama' },
        { url: '/images/campers_sunset.jpg', title: 'Coucher de soleil & Crépuscule', tag: 'Coucher de Soleil' },
        { url: '/images/smiling_hikers.jpg', title: 'Voyageurs en excursion', tag: 'Voyageurs' },
        { url: '/images/ivory_gastronomy.jpg', title: 'Saveurs du terroir local', tag: 'Gastronomie' },
        { url: '/images/hikers_trail.jpg', title: 'Nature préservée & Randonnée', tag: 'Nature' },
      ];

  // 6 cards total (2 rows x 3 columns) like in the user's screenshot
  const galleryPhotos = baseGallery.length === 5
    ? [...baseGallery, { url: '/images/smiling_hikers.jpg', title: 'Immersion & Rencontres chaleureuses', tag: 'Atmosphère' }]
    : baseGallery;

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 px-3.5 sm:px-6 lg:px-12 select-none relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/3 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#1D71F2]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* --- 1. Top Navigation & Breadcrumbs --- */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-10 text-xs text-slate-400"
        >
          {/* Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all hover:-translate-x-1 cursor-pointer group self-start"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Retour aux destinations</span>
          </button>

          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-400">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              Accueil
            </button>
            <span>/</span>
            <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer">
              Destinations
            </button>
            <span>/</span>
            <span className="text-amber-400 font-semibold">{destination.name}</span>
          </div>
        </motion.div>

        {/* --- 2. Destination Title Centered (Awwwards Style) --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: smoothEase }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 flex flex-col items-center"
        >
          {/* Top Meta Line: Badges & Rating */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[11px] sm:text-xs font-bold shadow-xs">
              {destination.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[11px] sm:text-xs font-medium backdrop-blur-md">
              Région {destination.region}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{destination.rating}</span>
              <span className="text-slate-400 text-[10px]">({destination.reviewsCount} avis)</span>
            </div>
          </div>

          {/* Huge Centered Title with Break Words */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.1] mb-2.5 break-words">
            {destination.name}
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-xs sm:text-base md:text-lg text-amber-300/90 font-medium max-w-2xl mx-auto px-2">
            {destination.tagline}
          </p>
        </motion.div>

        {/* --- 3. ONE SINGLE MAIN IMAGE --- */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
          className="relative max-w-[1240px] mx-auto rounded-[20px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] mb-10 sm:mb-16 bg-[#111722]"
        >
          {/* Main Principal Image */}
          <div className="relative h-[260px] sm:h-[400px] md:h-[520px] lg:h-[620px] w-full overflow-hidden">
            <img
              key={currentImage}
              src={currentImage}
              alt={destination.name}
              className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.92] transition-all duration-500"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Floating Pill Action Dock at Bottom Center */}
          <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 flex justify-center px-2 sm:px-4 z-20 pointer-events-none">
            <div className="pointer-events-auto inline-flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-[#171E27]/95 border border-white/20 shadow-2xl backdrop-blur-xl text-[11px] sm:text-xs max-w-[95%]">
              <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-white/10 text-white font-medium">
                📍 {destination.name}
              </span>
              <span className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 font-medium">
                ⏱ {destination.durationRecommended}
              </span>
              <span className="hidden md:inline-flex px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 font-medium">
                ☀️ {destination.bestSeason}
              </span>
              <button
                onClick={() => onOpenBooking && onOpenBooking(destination.name)}
                className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs shrink-0"
              >
                <span>Réserver</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* --- 3bis. EDITORIAL PRESENTATION CENTRÉE --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: smoothEase }}
          className="text-center max-w-4xl mx-auto px-3 sm:px-4 mb-12 sm:mb-20 md:mb-28"
        >
          <p className="text-base sm:text-xl md:text-2xl lg:text-[28px] font-light text-slate-100 leading-relaxed sm:leading-snug md:leading-relaxed tracking-tight">
            {destination.description}
          </p>
        </motion.div>

        {/* --- 4. BOTTOM SECTION: AUTRES VUES DU LIEU (PERSPECTIVES) --- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="mt-12 sm:mt-20 max-w-[1340px] mx-auto"
        >
          {/* Eyebrow & Title */}
          <div className="mb-6 sm:mb-10 text-left">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase block mb-2">
              Perspectives
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Découvrez les temps forts <br />
              et ambiances de ce lieu.
            </h2>
          </div>

          {/* 3-Column Grid Responsive (1 col Mobile, 2 cols Tablet, 3 cols Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryPhotos.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={() => {
                  setCurrentImage(photo.url);
                  window.scrollTo({ top: 220, behavior: 'smooth' });
                }}
                className="group rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#111722] border border-white/10 hover:border-amber-400/50 shadow-xl cursor-pointer flex flex-col justify-between"
              >
                {/* Image Card */}
                <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] w-full overflow-hidden bg-black/40">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                  {/* Top-left pill badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold text-amber-300 shadow-md">
                      {photo.tag}
                    </span>
                  </div>

                  {/* Bottom title & label */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] text-slate-300/80 uppercase tracking-widest block font-semibold mb-0.5">
                      Vue 0{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- 5. TÉMOIGNAGES DES VOYAGEURS --- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="mt-16 sm:mt-24 md:mt-32 max-w-[1340px] mx-auto"
        >
          {/* Eyebrow & Title */}
          <div className="mb-8 sm:mb-12 text-left">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase block mb-2">
              Témoignages & Expériences
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Ce que nos voyageurs <br />
              ont vécu à {destination.name}.
            </h2>
          </div>

          {/* Testimonials Cards Grid (1 col Mobile, 2 cols Tablet & Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {((destination.testimonials && destination.testimonials.length > 0)
              ? destination.testimonials
              : [
                  {
                    author: 'Élodie & Marc T.',
                    origin: 'Paris, France',
                    date: 'Il y a 2 semaines',
                    rating: 5,
                    title: `Une immersion inoubliable à ${destination.name}`,
                    comment: `Découvrir ${destination.name} avec l'accompagnement de nos guides a été l'un des moments les plus marquants de notre séjour en Côte d'Ivoire. Accueil chaleureux, organisation irréprochable et souvenirs gravés à vie.`
                  },
                  {
                    author: 'Kouamé B.',
                    origin: 'Abidjan, Côte d\'Ivoire',
                    date: 'Il y a 1 mois',
                    rating: 5,
                    title: 'Un lieu d\'exception à vivre absolument',
                    comment: `La sérénité des paysages et la richesse humaine font de ${destination.name} une étape incontournable. Toute la famille en garde un souvenir magique.`
                  }
                ]
            ).map((review, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-[22px] sm:rounded-[32px] p-5 sm:p-7 md:p-9 bg-[#111722] border border-white/10 hover:border-amber-400/40 shadow-xl relative flex flex-col justify-between overflow-hidden group transition-colors"
              >
                {/* Decorative quote mark in background */}
                <span className="absolute top-4 right-6 text-5xl sm:text-7xl font-serif text-white/5 group-hover:text-amber-400/10 transition-colors pointer-events-none select-none">
                  “
                </span>

                <div>
                  {/* Top row: 5 Stars + Relative Date */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                      {review.date}
                    </span>
                  </div>

                  {/* Title of the testimonial */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {review.title}
                  </h3>

                  {/* Comment body */}
                  <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-6">
                    « {review.comment} »
                  </p>
                </div>

                {/* Footer: Author avatar, name, origin, verified badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 font-black flex items-center justify-center text-xs shadow-md shrink-0">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {review.origin}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-[11px] font-medium self-start sm:self-auto">
                    <span>✓</span>
                    <span>Visite vérifiée</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- 6. BOTTOM PILL TAGS: INCONTOURNABLES --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mt-14 sm:mt-20 md:mt-28 text-center max-w-4xl mx-auto px-2 pb-10 sm:pb-16"
        >
          {/* Eyebrow Label */}
          <p className="text-xs sm:text-sm text-slate-400 font-normal mb-5 tracking-wide">
            Ce lieu met à l'honneur...
          </p>

          {/* Centered Pill Tags Cloud */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {/* 2 Small Circle Swatches on the left */}
            <div className="flex items-center gap-1.5 mr-1">
              <span className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-amber-400 border border-amber-300/40 inline-block shadow-xs" />
              <span className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-emerald-500 border border-emerald-400/40 inline-block shadow-xs" />
            </div>

            {/* Incontournables Pills */}
            {Array.from(new Set([
              ...destination.highlights,
              ...(destination.topAttractions?.map((a) => a.name) || []),
              ...(destination.tags || [])
            ])).slice(0, 8).map((tag, i) => (
              <span
                key={i}
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white text-[11px] sm:text-xs md:text-sm font-medium transition-all shadow-xs cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

    </div>
  );
}

