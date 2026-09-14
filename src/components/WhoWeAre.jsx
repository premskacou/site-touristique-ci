import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function WhoWeAre({ onNavigateAbout }) {
  const smoothEase = [0.16, 1, 0.3, 1];

  const headlineWords = "Née d'une passion authentique, notre mission est de révéler toute la splendeur de la Terre d'Éburnie. Aujourd'hui, nous sommes la référence des voyages et expéditions d'exception en Côte d'Ivoire".split(" ");

  return (
    <section className="bg-[#FFFFFF] text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Top Pill: — Qui Sommes-Nous */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-xs font-medium text-slate-600 mb-8"
        >
          <span>—</span>
          <span>Qui Sommes-Nous</span>
        </motion.div>

        {/* Main Headline with Animated Read-Along Wave */}
        <h2 className="max-w-4xl mx-auto text-center font-bold text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] leading-[1.3] tracking-tight mb-8 px-2 flex flex-wrap justify-center">
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ color: "#CBD5E1" }}
              whileInView={{ color: "#0F172A" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.75,
                delay: 0.25 + index * 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.28em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Action Button: En Savoir Plus ↗ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
          className="mb-14"
        >
          <motion.button
            onClick={() => onNavigateAbout && onNavigateAbout()}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 pl-6 pr-2.5 py-2 rounded-full bg-[#1D71F2] hover:bg-[#1560D6] text-white font-medium text-sm shadow-[0_8px_20px_rgba(29,113,242,0.28)] transition-all duration-300 group cursor-pointer"
          >
            <span>En Savoir Plus</span>
            <span className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#1D71F2] flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.button>
        </motion.div>

        {/* Triptych Grid of 3 Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Left (Number on top, Image on bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: smoothEase }}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="bg-[#EDF2F7] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-xs group cursor-pointer border border-slate-100 min-h-[380px] md:min-h-[440px]"
          >
            {/* Top Text Info */}
            <div className="mb-6">
              <div className="text-4xl sm:text-[46px] font-bold tracking-tight text-slate-900 leading-none mb-2">
                5000<span className="text-[#1D71F2] font-semibold">+</span>
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base">
                Voyageurs Émerveillés
              </div>
            </div>

            {/* Bottom Image */}
            <div className="w-full rounded-[22px] overflow-hidden aspect-[16/10] relative shadow-sm">
              <img
                src="/images/campers_sunset.jpg"
                alt="Voyageurs Émerveillés en Côte d'Ivoire"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Card 2: Center (Large Prominent Vertical Image) */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: smoothEase }}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="rounded-[32px] overflow-hidden shadow-lg group cursor-pointer relative min-h-[380px] md:min-h-[440px]"
          >
            <img
              src="/images/hikers_trail.jpg"
              alt="Expéditions Nature en Terre d'Éburnie"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Soft inner vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
          </motion.div>

          {/* Card 3: Right (Image on top, Number on bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.85, delay: 0.3, ease: smoothEase }}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="bg-[#EDF2F7] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-xs group cursor-pointer border border-slate-100 min-h-[380px] md:min-h-[440px]"
          >
            {/* Top Image */}
            <div className="w-full rounded-[22px] overflow-hidden aspect-[16/10] relative shadow-sm mb-6">
              <img
                src="/images/smiling_hikers.jpg"
                alt="Satisfaction de nos Aventuriers"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Bottom Text Info */}
            <div>
              <div className="text-4xl sm:text-[46px] font-bold tracking-tight text-slate-900 leading-none mb-2">
                100<span className="text-[#1D71F2] font-semibold">%</span>
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base">
                Satisfaction Garantie
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
