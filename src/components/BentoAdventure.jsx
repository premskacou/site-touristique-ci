import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function BentoAdventure() {
  const cardTransition = (delay = 0) => ({
    duration: 0.9,
    delay: delay,
    ease: [0.16, 1, 0.3, 1], // Courbe Apple/Framer ultra-douce
  });

  return (
    <section 
      id="destinations" 
      className="bg-[#050505] py-24 px-4 md:px-8 text-white select-none overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
          >
            <span className="text-[#F1B914]">Aventure Éburnéenne:</span> Explorez <br className="hidden md:block"/>
            Nos Merveilles Naturelles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 max-w-4xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Embarquez pour une aventure sereine à travers des lacs cristallins, des lagunes cachées et des rivières pittoresques. Profitez des eaux calmes, des paysages époustouflants et de moments inoubliables en explorant la nature ivoirienne sous un angle unique.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-4">
          
          {/* Card 1: Blue Card (Eaux Tranquilles) */}
          <motion.div 
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={cardTransition(0.05)}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="col-span-1 md:row-span-2 bg-[#1A4B9F] rounded-3xl p-6 flex flex-col relative overflow-hidden group cursor-pointer shadow-lg shadow-blue-950/20"
          >
            {/* Top icon and Title */}
            <div className="relative z-10 flex flex-col mb-4">
               <MapPin className="text-white w-6 h-6 mb-2" strokeWidth={2.5} />
               <h3 className="text-2xl font-bold text-white">Eaux Tranquilles</h3>
            </div>
            
            {/* Cloud/Mountain illustration in the background */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-30 mix-blend-overlay pointer-events-none">
              <img src="/images/man_mountains.jpg" alt="Montagne" className="w-full h-full object-cover scale-150 grayscale" />
            </div>
            
            <div className="mt-auto relative z-10">
              <p className="text-white text-[13px] md:text-sm leading-relaxed font-medium">
                Explorez les Eaux Tranquilles, où les lacs sereins et les lagunes cachées offrent une évasion paisible et des vues imprenables. Glissez sur des eaux cristallines et plongez dans la beauté calme de la nature.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Duration */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={cardTransition(0.15)}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="col-span-1 md:row-span-1 bg-[#111111] border border-white/5 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
          >
             {/* Yellow glow */}
             <div className="absolute bottom-[-60%] w-[150%] h-full bg-[#F1B914]/20 blur-[60px] pointer-events-none rounded-full" />
             
             <h4 className="text-3xl font-bold text-white mb-2 z-10">Durée :</h4>
             <p className="text-[#F1B914] text-lg font-medium z-10 tracking-wide">
               1 Jours / 1 Nuits
             </p>
             {/* Small glowing dots under */}
             <div className="flex gap-4 mt-4 z-10">
               <span className="w-1.5 h-1.5 rounded-full bg-[#F1B914] shadow-[0_0_12px_3px_rgba(241,185,20,0.7)] animate-pulse" />
               <span className="w-1.5 h-1.5 rounded-full bg-[#F1B914] shadow-[0_0_12px_3px_rgba(241,185,20,0.7)] animate-pulse delay-75" />
               <span className="w-1.5 h-1.5 rounded-full bg-[#F1B914] shadow-[0_0_12px_3px_rgba(241,185,20,0.7)] animate-pulse delay-150" />
             </div>
          </motion.div>

          {/* Card 3: Small Image (Assinie Boat) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={cardTransition(0.25)}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <img src="/images/assinie_beach.jpg" alt="Lagune" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/95 leading-snug">
              Glissez sur les eaux tranquilles et imprégnez-vous de la beauté sereine d'un lac caché.
            </div>
          </motion.div>

          {/* Card 4: Testimonial (Yellow) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={cardTransition(0.15)}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="col-span-1 md:row-span-1 bg-[#F1B914] rounded-3xl flex flex-col items-center justify-center p-6 text-black relative group overflow-hidden cursor-pointer shadow-lg shadow-amber-500/15"
          >
             <h4 className="font-semibold text-lg md:text-xl mb-4">Voir les avis des participants</h4>
             <div className="flex -space-x-3 items-center">
               <img src="https://i.pravatar.cc/100?img=33" alt="User 1" className="w-10 h-10 rounded-full border-2 border-[#F1B914] z-30" />
               <img src="https://i.pravatar.cc/100?img=47" alt="User 2" className="w-10 h-10 rounded-full border-2 border-[#F1B914] z-20" />
               <img src="https://i.pravatar.cc/100?img=12" alt="User 3" className="w-10 h-10 rounded-full border-2 border-[#F1B914] z-10" />
               <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center z-40 border-2 border-[#F1B914] hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
               </button>
             </div>
          </motion.div>

          {/* Card 5: Price */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={cardTransition(0.25)}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="col-span-1 md:row-span-1 bg-[#111111] border border-white/5 rounded-3xl flex flex-row items-center p-5 gap-5 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute left-[-20%] top-1/2 -translate-y-1/2 w-[70%] h-[150%] bg-[#F1B914]/20 blur-[50px] pointer-events-none rounded-full" />
            <div className="z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-3 px-4 text-center shrink-0">
              <div className="text-3xl font-bold text-white mb-0.5">200<span className="text-lg">€</span></div>
              <div className="text-[10px] text-[#F1B914] font-semibold uppercase tracking-wider">Par Personne</div>
            </div>
            <p className="text-white/80 text-xs font-medium z-10 leading-snug">
              Rejoignez-nous pour une expérience épique à partir de seulement 200€.
            </p>
          </motion.div>

          {/* Card 6: Sunset Lagoon (Wide Image) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={cardTransition(0.08)}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="col-span-1 md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <img src="/images/hero_abidjan.jpg" alt="Coucher de soleil" className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-6 right-6 text-[15px] font-medium text-white/95 leading-snug">
              Découvrez les merveilles d'une lagune isolée, où les eaux cristallines révèlent un monde marin vibrant sous votre bateau.
            </div>
          </motion.div>

          {/* Card 7: Tour Essentials */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={cardTransition(0.18)}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="col-span-1 md:row-span-1 bg-[#0D0D0D] border border-white/5 rounded-3xl p-5 flex flex-col justify-between cursor-pointer"
          >
            <h4 className="text-white font-semibold text-lg mb-4">Aperçu des Essentiels</h4>
            <div className="flex gap-3 h-full">
              <div className="flex-1 bg-[#F1B914] rounded-2xl p-4 flex flex-col justify-between text-black shadow-inner">
                 <span className="text-[11px] font-semibold leading-tight opacity-80 uppercase">Personnes / Groupe</span>
                 <span className="text-4xl font-bold tracking-tighter">15</span>
              </div>
              <div className="flex-1 bg-[#1A1A1A] rounded-2xl p-4 flex flex-col justify-between text-white border border-white/5">
                 <span className="text-[11px] font-semibold leading-tight text-gray-400 uppercase">Heures d'Exploration</span>
                 <span className="text-4xl font-bold tracking-tighter">20+</span>
              </div>
            </div>
          </motion.div>

          {/* Card 8: Forest Circle (Discover without limits) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={cardTransition(0.08)}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <img src="/images/man_mountains.jpg" alt="Forêt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.6]" />
            
            {/* Spinning Text Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-32 h-32 flex items-center justify-center">
               <div className="absolute inset-0 border-[0.5px] border-white/30 rounded-full" />
               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible animate-[spin_12s_linear_infinite]">
                 <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                 <text className="text-[9.5px] fill-white uppercase tracking-[0.2em] font-semibold">
                   <textPath href="#circlePath" startOffset="0%">
                     Start Your Journey Now • Start Your Journey Now • 
                   </textPath>
                 </text>
               </svg>
            </div>

            <div className="absolute bottom-5 left-5 z-10">
              <h4 className="text-[#F1B914] font-bold text-lg leading-tight">Découvrez</h4>
              <h4 className="text-white font-bold text-2xl leading-tight">Sans Limites !</h4>
            </div>
          </motion.div>

          {/* Card 9: Wide crystal water image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={cardTransition(0.18)}
            whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
            className="col-span-1 md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <img src="/images/assinie_beach.jpg" alt="Eau cristalline" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-6 right-8 text-[15px] font-medium text-white/95 leading-snug">
              Terminez votre journée par une paisible balade en bateau au coucher du soleil, alors que le ciel se transforme en une palette de couleurs époustouflante.
            </div>
          </motion.div>

        </div>

        {/* Footer Text */}
        <div className="mt-20 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-[28px] font-bold text-white/95 leading-snug"
          >
            Réservez Votre Place Dès Maintenant et Embarquez Pour <br className="hidden md:block" />
            <span className="text-[#F1B914]">Une Aventure Palpitante</span> Qui Vous Attend
          </motion.h3>
        </div>

      </div>
    </section>
  );
}


