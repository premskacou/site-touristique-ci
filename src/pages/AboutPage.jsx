import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShieldCheck, 
  Compass, 
  Leaf, 
  Users, 
  Award, 
  Star, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Globe 
} from 'lucide-react';
import { GUIDES } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage({ onOpenBooking, onNavigateToDestinations }) {
  const smoothEase = [0.16, 1, 0.3, 1];
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Heart,
      title: t('about.p1_title'),
      desc: t('about.p1_desc'),
      tag: t('about.p1_tag'),
    },
    {
      icon: Leaf,
      title: t('about.p2_title'),
      desc: t('about.p2_desc'),
      tag: t('about.p2_tag'),
    },
    {
      icon: Compass,
      title: t('about.p3_title'),
      desc: t('about.p3_desc'),
      tag: t('about.p3_tag'),
    },
    {
      icon: ShieldCheck,
      title: t('about.p4_title'),
      desc: t('about.p4_desc'),
      tag: t('about.p4_tag'),
    }
  ];

  const metrics = [
    { value: "5 000+", label: t('about.m1_label'), sub: t('about.m1_sub') },
    { value: "15+", label: t('about.m2_label'), sub: t('about.m2_sub') },
    { value: "99.4%", label: t('about.m3_label'), sub: t('about.m3_sub') },
    { value: "100%", label: t('about.m4_label'), sub: t('about.m4_sub') }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 pt-20 sm:pt-28 pb-16 sm:pb-24 px-3.5 sm:px-6 lg:px-12 select-none relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/4 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] bg-[#1D71F2]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* --- 1. HERO HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold text-amber-400 mb-4 sm:mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('about.tag')}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: smoothEase }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.14] mb-3 sm:mb-6"
          >
            {t('about.hero_title_p1')} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              {t('about.hero_title_p2')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: smoothEase }}
            className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto px-2"
          >
            {t('about.hero_sub')}
          </motion.p>
        </div>

        {/* --- 2. CINEMATIC HERO BANNER --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.22, ease: smoothEase }}
          className="relative max-w-[1240px] mx-auto rounded-[20px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] mb-14 sm:mb-20 md:mb-28 bg-[#111722]"
        >
          <div className="relative min-h-[300px] h-[320px] sm:h-[400px] md:h-[480px] w-full overflow-hidden">
            <img
              src="/images/abidjan/abidjan-main.jpg"
              alt="Voyageurs et guides Akwaba Tours en immersion"
              className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-black/50 to-black/30" />

            {/* Bottom floating legend dock */}
            <div className="absolute bottom-3.5 sm:bottom-8 left-3.5 sm:left-8 right-3.5 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 z-10">
              <div className="max-w-xl text-white">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-1.5 shadow-xs">
                  {t('about.manifesto')}
                </span>
                <p className="text-sm sm:text-xl md:text-2xl font-medium text-white tracking-tight leading-snug drop-shadow-md">
                  {t('about.manifesto_quote')}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-slate-300 bg-black/70 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/15 self-start sm:self-auto shrink-0">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('about.hubs_badge')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- 3. NOTRE HISTOIRE & NOTRE MISSION (EDITORIAL SPLIT) --- */}
        <section className="mb-14 sm:mb-20 md:mb-28 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-14 items-center">
            
            {/* Left text column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="lg:col-span-6 space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span>{t('about.story_tag')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-[1.2]">
                {t('about.story_title')}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                {t('about.story_p1')}
              </p>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                {t('about.story_p2')}
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span>{t('about.reassurance_1')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span>{t('about.reassurance_2')}</span>
                </div>
              </div>
            </motion.div>

            {/* Right side visual showcase (2 stacked artistic cards) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
              className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-6"
            >
              <div className="space-y-3 sm:space-y-6">
                <div className="rounded-[18px] sm:rounded-[28px] overflow-hidden border border-white/10 shadow-xl aspect-[4/5] bg-black/40">
                  <img
                    src="/images/assinie/assinie-beach.jpg"
                    alt="Coucher de soleil en Côte d'Ivoire"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5 sm:p-5 md:p-6 rounded-[18px] sm:rounded-[24px] bg-[#111722] border border-white/10 text-center">
                  <div className="text-xl sm:text-3xl font-extrabold text-amber-400 mb-0.5 sm:mb-1">{t('about.stat_years_title')}</div>
                  <div className="text-[10px] sm:text-xs text-slate-300">{t('about.stat_years_sub')}</div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-6 pt-5 sm:pt-10 md:pt-12">
                <div className="p-3.5 sm:p-5 md:p-6 rounded-[18px] sm:rounded-[24px] bg-[#111722] border border-white/10 text-center">
                  <div className="text-xl sm:text-3xl font-extrabold text-emerald-400 mb-0.5 sm:mb-1">{t('about.stat_ethics_title')}</div>
                  <div className="text-[10px] sm:text-xs text-slate-300">{t('about.stat_ethics_sub')}</div>
                </div>
                <div className="rounded-[18px] sm:rounded-[28px] overflow-hidden border border-white/10 shadow-xl aspect-[4/5] bg-black/40">
                  <img
                    src="/images/man/man-cascade.jpg"
                    alt="Montagnes et nature sauvage de Man"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* --- 4. NOS 4 PILIERS FONDAMENTAUX --- */}
        <section className="mb-14 sm:mb-20 md:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase block mb-2">
              {t('about.pillars_tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              {t('about.pillars_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: smoothEase }}
                  whileHover={{ y: -5 }}
                  className="rounded-[20px] sm:rounded-[28px] p-4.5 sm:p-7 bg-[#111722] border border-white/10 hover:border-amber-400/40 shadow-xl flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-3.5 sm:mb-6 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                      {p.tag}
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* --- 5. CHIFFRES CLÉS & IMPACT --- */}
        <section className="mb-14 sm:mb-20 md:mb-28 rounded-[20px] sm:rounded-[36px] bg-gradient-to-b from-[#141B26] to-[#0D121B] border border-white/10 p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-3xl mb-6 sm:mb-10 text-left">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-amber-400 uppercase block mb-1.5">
              {t('about.metrics_tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t('about.metrics_title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="border-l-2 border-amber-400/40 pl-3 sm:pl-5">
                <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1 whitespace-nowrap">
                  {m.value}
                </div>
                <div className="text-xs sm:text-base font-semibold text-slate-200 mb-0.5">
                  {m.label}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-normal">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 6. NOS GUIDES CERTIFIÉS --- */}
        <section className="mb-14 sm:mb-20 md:mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase block mb-1.5">
                {t('about.guides_tag')}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {t('about.guides_title')}
              </h2>
            </div>

            <button
              onClick={() => onOpenBooking && onOpenBooking('Choix d\'un guide')}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 self-start sm:self-auto cursor-pointer py-1"
            >
              <span>{t('about.guides_cta')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
            {GUIDES.map((guide) => (
              <motion.div
                key={guide.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="rounded-[20px] sm:rounded-[28px] p-4.5 sm:p-6 bg-[#111722] border border-white/10 hover:border-amber-400/40 shadow-xl flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-2xl sm:text-3xl shadow-inner">
                      {guide.avatar}
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{guide.rating}</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-slate-400">{guide.toursDone} circuits</span>
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-amber-300 text-[10px] sm:text-[11px] font-semibold mb-2">
                    {guide.specialty}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white mb-0.5">
                    {guide.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-2.5 font-medium">
                    {guide.title}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    « {guide.bio} »
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px] sm:text-xs">{guide.experience}</span>
                  <button
                    onClick={() => onOpenBooking && onOpenBooking('', guide.name)}
                    className="py-1 px-2.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer text-xs transition-colors"
                  >
                    {t('about.choose_guide')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 7. CALL TO ACTION FINAL --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="rounded-[20px] sm:rounded-[36px] p-5 sm:p-8 md:p-12 bg-gradient-to-r from-amber-500/15 via-[#1A2230] to-[#121824] border border-amber-400/30 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-3">
              {t('about.cta_tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-2.5 sm:mb-4">
              {t('about.cta_title')}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base font-light mb-6 sm:mb-8 max-w-lg mx-auto">
              {t('about.cta_sub')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                {t('about.cta_btn_custom')}
              </button>
              <button
                onClick={() => onNavigateToDestinations && onNavigateToDestinations()}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all hover:scale-105 active:scale-95 cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                {t('about.cta_btn_catalog')}
              </button>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
}

