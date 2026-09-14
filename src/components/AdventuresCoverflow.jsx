import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AdventuresCoverflow({ onOpenBooking }) {
  const { t } = useLanguage();

  const adventures = [
    {
      id: 0,
      title: t('adventures.item_0_title'),
      subtitle: t('adventures.item_0_sub'),
      image: '/images/man_mountains.jpg',
      tag: 'Man',
    },
    {
      id: 1,
      title: t('adventures.item_1_title'),
      subtitle: t('adventures.item_1_sub'),
      image: '/images/campers_sunset.jpg',
      tag: 'Bivouac',
    },
    {
      id: 2,
      title: t('adventures.item_2_title'),
      subtitle: t('adventures.item_2_sub'),
      image: '/images/assinie_beach.jpg',
      tag: 'Assinie',
    },
    {
      id: 3,
      title: t('adventures.item_3_title'),
      subtitle: t('adventures.item_3_sub'),
      image: '/images/hero_abidjan.jpg',
      tag: 'Abidjan',
    },
    {
      id: 4,
      title: t('adventures.item_4_title'),
      subtitle: t('adventures.item_4_sub'),
      image: '/images/hikers_trail.jpg',
      tag: 'Safari',
    },
    {
      id: 5,
      title: t('adventures.item_5_title'),
      subtitle: t('adventures.item_5_sub'),
      image: '/images/smiling_hikers.jpg',
      tag: 'Bassam',
    },
  ];

  const total = adventures.length;
  const [activeIndex, setActiveIndex] = useState(2); // Center on "Balade en Pirogue"
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => prev + 1);
  };

  // Normalized index for dots
  const normalizedActiveIndex = ((activeIndex % total) + total) % total;

  return (
    <section className="bg-[#050505] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 select-none overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center max-w-3xl mx-auto mb-10 sm:mb-16 leading-tight"
        >
          {t('adventures.coverflow_title')}
        </motion.h2>

        {/* 3D Coverflow Stage with Infinite Drag/Swipe */}
        <motion.div 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x < -45 || velocity.x < -250) {
              handleNext();
            } else if (offset.x > 45 || velocity.x > 250) {
              handlePrev();
            }
          }}
          className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: '1200px' }}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {adventures.map((item, index) => {
              // Circular modulo shortest distance
              let p = (index - (activeIndex % total)) % total;
              if (p > total / 2) p -= total;
              if (p < -total / 2) p += total;

              const absP = Math.abs(p);
              const isCenter = absP < 0.1;
              const isOffscreen = absP > 2.35;

              // Smooth spacing & perspective calculations
              const spacing = isMobile ? 120 : 210;
              const translateX = p * spacing;
              const rotateY = p === 0 ? 0 : p > 0 ? -32 : 32;
              const translateZ = isCenter ? 80 : -absP * 85;
              const scale = isCenter ? 1.05 : Math.max(0.76, 1 - absP * 0.12);
              const opacity = isOffscreen ? 0 : Math.max(0.35, 1 - absP * 0.28);
              const zIndex = isCenter ? 35 : Math.round(20 - absP * 5);

              return (
                <motion.div
                  key={item.id}
                  onClick={() => {
                    if (isCenter) {
                      onOpenBooking && onOpenBooking(item.tag);
                    } else {
                      setActiveIndex((prev) => prev + Math.round(p));
                    }
                  }}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={
                    isOffscreen
                      ? { duration: 0 }
                      : { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
                  }
                  style={{
                    position: 'absolute',
                    transformStyle: 'preserve-3d',
                    zIndex: zIndex,
                    cursor: 'pointer',
                    pointerEvents: isOffscreen ? 'none' : 'auto',
                  }}
                  className={`shrink-0 w-[220px] sm:w-[280px] md:w-[320px] h-[340px] sm:h-[410px] md:h-[460px] rounded-[26px] sm:rounded-[30px] overflow-hidden border group ${
                    isCenter
                      ? 'border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.15)] ring-1 ring-white/20'
                      : 'border-white/10 shadow-black/80 hover:border-white/25'
                  }`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className={`w-full h-full object-cover select-none pointer-events-none ${
                      isCenter ? 'brightness-100' : 'brightness-60'
                    }`}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Right Arrow Badge ↗ */}
                  <div className="absolute top-4 right-4 z-20 pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Navigation Arrows on Center Card */}
                  {isCenter && (
                    <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between z-30 pointer-events-auto">
                      <button
                        onClick={handlePrev}
                        aria-label="Aventure précédente"
                        className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        aria-label="Aventure suivante"
                        className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 pointer-events-none">
                    <h3 className={`font-bold tracking-tight text-white leading-tight mb-1 drop-shadow-md transition-colors ${
                      isCenter ? 'text-lg sm:text-xl md:text-2xl text-white group-hover:text-amber-300' : 'text-base sm:text-lg text-slate-300'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300/80 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pagination Dots Indicator */}
        <div className="flex items-center gap-2 mt-8 z-20">
          {adventures.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                // Navigate to nearest index matching idx
                const currentNorm = normalizedActiveIndex;
                let diff = idx - currentNorm;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;
                setActiveIndex((prev) => prev + diff);
              }}
              aria-label={`Aller à l'aventure ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                normalizedActiveIndex === idx
                  ? 'w-7 bg-amber-400'
                  : 'w-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
