import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, ArrowUpRight, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenBooking, onNavigate }) {
  const footerRef = useRef(null);
  const [abidjanTime, setAbidjanTime] = useState('');
  const { t } = useLanguage();

  // Live Abidjan GMT time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Africa/Abidjan', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setAbidjanTime(new Intl.DateTimeFormat('fr-FR', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion scroll-linked parallax for the big typographic watermark
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [-30, 0]);

  const smoothEase = [0.16, 1, 0.3, 1];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#141414] text-zinc-400 border-t border-white/[0.08] flex flex-col justify-between relative z-10 overflow-hidden select-none px-4 sm:px-8 lg:px-16 pt-14 sm:pt-20 pb-8"
    >
      {/* --- 1. Top Section: Headline & Direct Booking Trigger --- */}
      <motion.div
        style={{ y: contentY }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className="w-full max-w-[1360px] mx-auto pb-14 border-b border-white/[0.08]"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 shadow-2xs">
                <Compass className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-base font-bold tracking-widest text-white uppercase">
                Akwaba Tours
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs text-zinc-400 font-medium">{t('footer.subtitle')}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              {t('footer.headline_1')} <br />
              <span className="text-zinc-400 font-normal">{t('footer.headline_2')}</span>
            </h2>
          </div>

          {/* Quick Action & Live Time Box */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">{t('footer.time_header')}</p>
              <p className="text-base font-mono font-semibold text-white mt-0.5">{abidjanTime || '12:00:00'}</p>
            </div>

            <button
              onClick={() => onOpenBooking && onOpenBooking('Voyage Sur-Mesure')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-[#141414] font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer group"
            >
              <span>{t('footer.start_btn')}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* --- 2. Middle Section: Minimalist Navigation Grid (Mobbin Style) --- */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
        className="w-full max-w-[1360px] mx-auto py-10 sm:py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
          
          {/* Col 1: Destinations */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              {t('footer.col1_title')}
            </span>
            <ul className="space-y-3 text-xs sm:text-[13.5px]">
              <li>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Abidjan')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Abidjan (Plateau & Cocody)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Assinie')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Assinie-Mafia & Lagune
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Yamoussoukro')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Yamoussoukro & Basilique
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Man')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Montagnes & Cascades de Man
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Grand-Bassam')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Grand-Bassam (UNESCO)
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => onNavigate && onNavigate('destinations')}
                  className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{t('footer.view_catalog')}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Services & Circuits */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              {t('footer.col2_title')}
            </span>
            <ul className="space-y-3 text-xs sm:text-[13.5px]">
              <li>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Circuits Sur-Mesure')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t('footer.srv_custom')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Véhicules avec Chauffeur')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t('footer.srv_cars')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Guides Locaux')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t('footer.srv_guides')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Hébergements')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t('footer.srv_lodges')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('about')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer text-amber-400 font-medium"
                >
                  {t('footer.srv_about')}
                </button>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors text-left inline-block"
                >
                  {t('footer.srv_faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Conciergerie */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              {t('footer.col3_title')}
            </span>
            <ul className="space-y-3 text-xs sm:text-[13.5px]">
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer text-amber-400 font-medium"
                >
                  {t('footer.form_quote')}
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/2250700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer text-[#25D366]"
                >
                  <span>WhatsApp 24/7</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@akwabatours.ci"
                  className="hover:text-white transition-colors"
                >
                  contact@akwabatours.ci
                </a>
              </li>
              <li>
                <span className="text-zinc-400">
                  +225 07 00 00 00 00
                </span>
              </li>
              <li>
                <span className="text-zinc-400">
                  Cocody Ambassades, Abidjan
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Réseaux & Disponibilité */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              {t('footer.col4_title')}
            </span>
            <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-400">
              {t('footer.col4_desc')}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>{t('footer.season_open')}</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* --- 3. Bottom Row: Copyright, Legal Links & Smooth Scroll To Top --- */}
      <div className="w-full max-w-[1360px] mx-auto pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-center sm:text-left">
          <span>© {new Date().getFullYear()} Akwaba Tours. {t('footer.copyright')}</span>
          <span className="hover:text-zinc-300 transition-colors cursor-pointer">{t('footer.privacy')}</span>
          <span className="hover:text-zinc-300 transition-colors cursor-pointer">{t('footer.terms')}</span>
          <span className="hover:text-zinc-300 transition-colors cursor-pointer">{t('footer.legal')}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>{t('footer.country')}</span>
            <span className="text-white font-medium">🇨🇮</span>
          </div>

          {/* Smooth Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 hover:text-white transition-all text-xs cursor-pointer group"
            title="Remonter en haut de page"
          >
            <span>{t('footer.top')}</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
