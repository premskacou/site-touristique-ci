import React, { useState, useEffect } from 'react';
import { Footprints, Menu, X, ArrowUpRight, MessageCircle, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenBooking, currentPage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [abidjanTime, setAbidjanTime] = useState('');
  const { lang, toggleLang, t } = useLanguage();

  // Live Abidjan GMT time for mobile menu
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setAbidjanTime(now.toLocaleTimeString('fr-FR', { timeZone: 'Africa/Abidjan', hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { num: '01', name: t('nav.home'), page: 'home', desc: t('nav.home_desc') },
    { num: '02', name: t('nav.destinations'), page: 'destinations', desc: t('nav.destinations_desc') },
    { num: '03', name: t('nav.about'), page: 'about', desc: t('nav.about_desc') },
    { num: '04', name: t('nav.contact'), page: 'contact', desc: t('nav.contact_desc') },
  ];

  const handleLinkClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      {/* Floating Centered Pill Navbar */}
      <nav className="pointer-events-auto rounded-full transition-all duration-300 flex items-center gap-3 sm:gap-6 px-3.5 py-1.5 bg-[#171E27]/90 border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-xl">
        
        {/* Logo Badge (Yellow Circle with Hiker Silhouette) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center text-slate-950 font-black shadow-md group-hover:scale-105 transition-transform shrink-0">
            <Footprints className="w-4 h-4 text-slate-950 fill-slate-950" />
          </div>
          <div className="flex flex-col text-left leading-tight pr-1">
            <span className="text-[13px] font-bold text-white tracking-tight">Akwaba Tours</span>
            <span className="text-[10px] text-amber-400 font-semibold -mt-0.5">Côte d'Ivoire</span>
          </div>
        </button>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-2 px-1">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page || (link.page === 'destinations' && currentPage === 'destination-detail');
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page)}
                className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {link.name}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* Language Switcher (Desktop) */}
        <button
          onClick={toggleLang}
          aria-label="Changer de langue / Change language"
          className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-bold transition-all cursor-pointer"
        >
          <Globe className="w-3.5 h-3.5 text-slate-300" />
          <span className={lang === 'fr' ? 'text-amber-400 font-extrabold' : 'text-slate-400'}>FR</span>
          <span className="text-white/25">/</span>
          <span className={lang === 'en' ? 'text-amber-400 font-extrabold' : 'text-slate-400'}>EN</span>
        </button>

        {/* Mobile Controls: Language & Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            aria-label="Changer de langue / Change language"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold"
          >
            <Globe className="w-3 h-3 text-slate-300" />
            <span className={lang === 'fr' ? 'text-amber-400' : 'text-slate-400'}>FR</span>
            <span className="text-white/25">/</span>
            <span className={lang === 'en' ? 'text-amber-400' : 'text-slate-400'}>EN</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu de navigation"
            className="p-1.5 text-slate-300 hover:text-white cursor-pointer rounded-full hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Ultra-Luxury Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto fixed inset-0 z-50 bg-[#070B12]/98 backdrop-blur-3xl flex flex-col justify-between p-6 overflow-y-auto md:hidden"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#1D71F2]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Top Bar inside Menu */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F5A623] flex items-center justify-center text-slate-950 font-black shadow-lg">
                  <Footprints className="w-5 h-5 text-slate-950 fill-slate-950" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-base font-bold text-white tracking-tight">Akwaba Tours</span>
                  <span className="text-xs text-amber-400 font-semibold">{t('nav.vip_concierge')}</span>
                </div>
              </div>

              {/* Close & Lang Group */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLang}
                  className="px-3 py-2 rounded-2xl bg-white/10 border border-white/15 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <span className={lang === 'fr' ? 'text-amber-400' : 'text-slate-400'}>FR</span>
                  <span className="text-white/20">/</span>
                  <span className={lang === 'en' ? 'text-amber-400' : 'text-slate-400'}>EN</span>
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fermer le menu"
                  className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Middle Nav Links with editorial numbers and descriptions */}
            <div className="relative z-10 py-6 flex flex-col gap-3 my-auto">
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-1 px-1">
                {t('nav.main_nav')}
              </div>

              {navLinks.map((link, idx) => {
                const isActive = currentPage === link.page || (link.page === 'destinations' && currentPage === 'destination-detail');
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    onClick={() => handleLinkClick(link.page)}
                    className={`group w-full p-4 sm:p-5 rounded-2xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-amber-400/15 border-amber-400/50 shadow-lg shadow-amber-500/10'
                        : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? 'text-amber-400' : 'text-slate-400'}`}>
                          {link.num}
                        </span>
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                          {link.name}
                        </span>
                        {isActive && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/30">
                            {t('nav.current')}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 font-normal pl-6">
                        {link.desc}
                      </p>
                    </div>

                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all group-hover:translate-x-1 ${
                      isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-white/10 text-white'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Bottom Concierge & Fast Actions */}
            <div className="relative z-10 pt-5 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://wa.me/2250700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>{t('nav.chat_whatsapp')}</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-1">
                <span>{t('nav.time_prefix')} <strong className="text-white font-mono">{abidjanTime || '12:00'}</strong></span>
                <span className="text-amber-400 font-medium">{t('nav.season_open')}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

