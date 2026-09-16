import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onSearchDestination, onOpenBooking }) {
  const { t } = useLanguage();
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const targetOffsetRef = useRef(0);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const snapTimeoutRef = useRef(null);

  const cards = [
    {
      id: 0,
      title: 'Soirées Maquis & Garba',
      image: '/images/gastronomie/gastro-plat.jpg',
      alt: 'Soirées Maquis & Garba',
      tag: 'Garba',
    },
    {
      id: 1,
      title: 'Lagune Ébrié & Skyline',
      image: '/images/abidjan/abidjan-main.jpg',
      alt: 'Lagune Ébrié & Skyline Abidjan',
      tag: 'Abidjan',
    },
    {
      id: 2,
      title: 'Basilique Majestueuse',
      image: '/images/yamoussoukro/yamoussoukro-main.jpg',
      alt: 'Basilique Notre-Dame de la Paix',
      tag: 'Yamoussoukro',
    },
    {
      id: 3,
      title: 'Plages d’Assinie-Mafia',
      image: '/images/assinie/assinie-beach.jpg',
      alt: 'Plages d’Assinie',
      tag: 'Assinie',
    },
    {
      id: 4,
      title: 'Cascades & Mont Tonkpi',
      image: '/images/man/man-cascade.jpg',
      alt: 'Cascades et Montagnes de Man',
      tag: 'Man',
    },
    {
      id: 5,
      title: 'Ponts de Lianes Sacrés',
      image: '/images/man/man-liasse.jpg',
      alt: 'Ponts de Lianes Sacrés',
      tag: 'Cascades',
    },
    {
      id: 6,
      title: 'Baie de Monogaga',
      image: '/images/san-pedro/sp-monogaga.jpg',
      alt: 'Baie de Monogaga & San-Pédro',
      tag: 'San-Pédro',
    },
    {
      id: 7,
      title: 'Grand-Bassam Historique',
      image: '/images/grand-bassam/gb-main.jpg',
      alt: 'Grand-Bassam UNESCO Quartier France',
      tag: 'Grand-Bassam',
    },
  ];

  const totalCards = cards.length;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ultra smooth physics loop (Lerp interpolation with magnetic snapping)
  useEffect(() => {
    let animationFrameId;
    const updatePhysics = () => {
      setOffset((current) => {
        const diff = targetOffsetRef.current - current;
        if (Math.abs(diff) < 0.0005) {
          return targetOffsetRef.current;
        }
        return current + diff * 0.16;
      });
      animationFrameId = requestAnimationFrame(updatePhysics);
    };
    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    startOffsetRef.current = targetOffsetRef.current;
    if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startXRef.current;
    targetOffsetRef.current = startOffsetRef.current + dx / 340;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    targetOffsetRef.current = Math.round(targetOffsetRef.current);
  };

  // Touch handlers for mobile/tablets
  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    startXRef.current = touch.clientX;
    startOffsetRef.current = targetOffsetRef.current;
    if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startXRef.current;
    targetOffsetRef.current = startOffsetRef.current + dx / 340;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    targetOffsetRef.current = Math.round(targetOffsetRef.current);
  };

  // Trackpad / Wheel scroll support
  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 1.5) {
      const clampedDelta = Math.sign(delta) * Math.min(Math.abs(delta) * 0.0012, 0.28);
      targetOffsetRef.current -= clampedDelta;

      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
      snapTimeoutRef.current = setTimeout(() => {
        targetOffsetRef.current = Math.round(targetOffsetRef.current);
      }, 150);
    }
  };

  // Center clicked card smoothly
  const handleCardClick = (p, tag) => {
    if (Math.abs(p) > 3.2) return;
    targetOffsetRef.current = Math.round(targetOffsetRef.current - p);
    if (onSearchDestination) onSearchDestination(tag);
  };

  // Compute 3D transform strictly within the visible arc
  const getCardTransform = (p) => {
    const absP = Math.abs(p);
    const sign = p >= 0 ? 1 : -1;

    if (absP > 3.3) {
      return {
        visible: false,
        x: sign * 800,
        z: -100,
        rotY: -sign * 60,
        scale: 0.7,
        opacity: 0,
        zIndex: 0,
      };
    }

    let x = 0;
    if (isMobile) {
      const step1 = 164;
      const step2 = 170;
      const step3 = 176;
      if (absP <= 1) {
        x = absP * step1;
      } else if (absP <= 2) {
        x = step1 + (absP - 1) * step2;
      } else {
        x = step1 + step2 + (absP - 2) * step3;
      }
      x *= sign;
    } else {
      // Exact original desktop math
      if (absP <= 1) {
        x = absP * 172;
      } else if (absP <= 2) {
        x = 172 + (absP - 1) * 178;
      } else {
        x = 350 + (absP - 2) * 186;
      }
      x *= sign;
    }

    const z = isMobile
      ? (-55 + Math.pow(absP, 1.7) * 22)
      : (-50 + Math.pow(absP, 1.8) * 18);
    const rotY = isMobile
      ? (-sign * Math.min(absP * 18, 45))
      : (-sign * Math.min(absP * 15.5, 52));
    const scale = isMobile
      ? (0.90 + Math.pow(absP, 1.4) * 0.05)
      : (0.88 + Math.pow(absP, 1.4) * 0.07);

    let opacity = 1;
    if (isMobile) {
      if (absP > 1.6) {
        opacity = Math.max(0, (2.5 - absP) / 0.9);
      }
    } else {
      if (absP > 2.8) {
        opacity = Math.max(0, (3.3 - absP) / 0.5);
      }
    }

    const zIndex = Math.round(absP * 15 + 10);

    return { visible: true, x, z, rotY, scale, opacity, zIndex };
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[660px] sm:min-h-[620px] h-[100dvh] w-full flex flex-col items-center justify-center sm:justify-between pt-20 sm:pt-24 pb-4 sm:pb-5 px-3 sm:px-6 overflow-hidden bg-[#070B12] select-none"
    >

      {/* Background with Dark Moody Misty Forest */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/man/man-top.jpg"
          alt="Forêt tropicale et montagnes de Côte d'Ivoire"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B12]/85 via-black/35 to-[#070B12]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(7,11,18,0.85)_100%)]" />
      </div>

      {/* Hero Header Content with Côte d'Ivoire text */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center pt-2 sm:pt-4 pointer-events-auto">

        {/* Main Title: L'Aventure Vous Attend en Terre d'Éburnie */}
        <h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]"
          style={{ textShadow: '0 4px 24px rgba(0,0,0,0.9)' }}
        >
          {t('hero.title_p1')} <br />
          <span className="text-white">{t('hero.title_p2')}</span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-300/85 max-w-2xl font-normal leading-relaxed text-center px-4 line-clamp-3 sm:line-clamp-none">
          {t('hero.subtitle')}
        </p>

        {/* Action Link for Desktop: "○ Commencer l'Aventure" (Exact original design) */}
        <a
          href="#destinations"
          className="hidden sm:inline-flex mt-3 sm:mt-4 items-center gap-2 group cursor-pointer"
        >
          <span className="relative flex items-center justify-center rounded-full transition-all duration-300 w-3.5 h-3.5 border border-amber-400 group-hover:w-8 group-hover:h-8 sm:group-hover:w-9 sm:group-hover:h-9 group-hover:bg-amber-500 group-hover:border-amber-500">
            <span className="absolute w-1.5 h-1.5 rounded-full bg-amber-400 transition-all duration-300 group-hover:opacity-0 group-hover:scale-0" />
            <svg
              className="absolute w-4 h-4 sm:w-5 sm:h-5 text-black opacity-0 transition-all duration-300 scale-50 group-hover:opacity-100 group-hover:scale-100"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="text-xs sm:text-sm font-medium text-white border-b border-amber-400/80 pb-0.5 transition-all duration-300 group-hover:text-white group-hover:border-transparent">
            {t('hero.cta')}
          </span>
        </a>

      </div>

      {/* 3D Cylindrical Controlled Carousel */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onWheel={handleWheel}
        className={`relative z-20 w-full max-w-[1400px] mx-auto mb-1 sm:mb-2 flex flex-col items-center cursor-grab active:cursor-grabbing ${isDragging ? 'cursor-grabbing' : ''
          }`}
      >
        {/* 3D Perspective Stage */}
        <div
          className="w-full flex items-center justify-center py-2 overflow-visible relative h-[250px] sm:h-[285px] md:h-[305px] lg:h-[320px]"
          style={{
            perspective: '1200px',
            perspectiveOrigin: 'center 50%',
          }}
        >
          <div
            className="w-full h-full relative flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {cards.map((card, idx) => {
              let p = (idx - 3 + offset) % totalCards;
              if (p > totalCards / 2) p -= totalCards;
              if (p < -totalCards / 2) p += totalCards;

              const { visible, x, z, rotY, scale, opacity, zIndex } = getCardTransform(p);
              const absP = Math.abs(p);
              const isCenterFront = absP < 0.4;
              const isHovered = hoveredCard === card.id;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(p, card.tag)}
                  style={{
                    position: 'absolute',
                    transform: `
                      translateX(${x}px) 
                      translateZ(${z}px) 
                      rotateY(${rotY}deg) 
                      scale(${isHovered ? scale * 1.05 : scale})
                    `,
                    transformStyle: 'preserve-3d',
                    opacity: opacity,
                    zIndex: isHovered ? 70 : zIndex,
                    visibility: visible && opacity > 0.02 ? 'visible' : 'hidden',
                    pointerEvents: visible && opacity > 0.2 ? 'auto' : 'none',
                    transition: isDragging
                      ? 'none'
                      : 'box-shadow 0.3s ease',
                  }}
                  className={`shrink-0 w-[136px] sm:w-[155px] md:w-[168px] lg:w-[180px] h-[210px] sm:h-[235px] md:h-[258px] lg:h-[275px] rounded-2xl sm:rounded-3xl overflow-hidden border shadow-2xl transition-shadow group ${isCenterFront
                      ? 'border-amber-400/60 shadow-amber-500/25 shadow-2xl'
                      : 'border-white/20 hover:border-white/40 shadow-black/90'
                    }`}
                >
                  {/* Firefly / Golden Sparkle on Center Front Card */}
                  {isCenterFront && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none">
                      <span className="w-3.5 h-3.5 rounded-full bg-amber-400/90 blur-[2px] animate-pulse" />
                      <span className="absolute w-1.5 h-1.5 rounded-full bg-yellow-100" />
                    </div>
                  )}

                  {/* Card Image */}
                  <img
                    src={card.image}
                    alt={card.alt}
                    draggable={false}
                    loading={isCenterFront ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={isCenterFront ? 'high' : 'auto'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />

                  {/* Shading Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent pointer-events-none" />

                  {/* Glossy inner border ring */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/10 pointer-events-none" />

                  {/* Card Title at Bottom */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 pointer-events-none">
                    <h3 className={`text-white font-bold tracking-tight drop-shadow-lg leading-tight transition-colors ${scale > 1.05
                        ? 'text-xs sm:text-sm md:text-base'
                        : 'text-[11px] sm:text-xs'
                      } group-hover:text-amber-300`}>
                      {card.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center gap-2 mt-2 text-[11px] text-amber-300/80 font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <span>{t('hero.swipe_hint')}</span>
        </div>

        {/* Action Button for Mobile only (under cards and hint) */}
        <a
          href="#destinations"
          className="flex sm:hidden mt-3.5 items-center gap-2.5 px-7 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-[0_4px_24px_rgba(247,147,30,0.35)] transition-all active:scale-95 group cursor-pointer z-30 pointer-events-auto"
        >
          <span>{t('hero.cta')}</span>
          <svg
            className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

      </div>

    </section>
  );
}
