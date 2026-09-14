import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Quote, ArrowUpRight } from 'lucide-react';

export default function CustomerReviews({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous les avis' },
    { id: 'lagoon', label: 'Plages & Lagunes' },
    { id: 'nature', label: 'Montagnes & Nature' },
    { id: 'culture', label: 'Culture & Patrimoine' },
  ];

  const reviews = [
    {
      id: 1,
      category: 'lagoon',
      name: 'Élodie & Thomas',
      location: 'Paris, France',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      rating: 5,
      date: 'Il y a 2 semaines',
      circuit: 'Escapade Assinie-Mafia & Lagune Aby',
      text: "Un séjour tout simplement magique ! La balade en pirogue à Assinie au coucher du soleil et l'accueil chaleureux des Ivoiriens nous ont profondément touchés. L'équipe d'Akwaba Tours s'est occupée de tout avec un niveau de soin et de professionnalisme irréprochable.",
    },
    {
      id: 2,
      category: 'nature',
      name: 'Marc Kouassi',
      location: 'Montréal, Canada',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
      rating: 5,
      date: 'Il y a 3 semaines',
      circuit: 'Trek Mont Tonkpi & Cascades de Man',
      text: "Revisiter la Terre d'Éburnie avec des guides locaux aussi passionnés a été une révélation. La traversée du pont de lianes sacré et le lever de soleil brumeux sur les collines de Man resteront gravés dans nos mémoires pour toujours. Organisation 10/10 !",
    },
    {
      id: 3,
      category: 'culture',
      name: 'Sophie & Lucas',
      location: 'Genève, Suisse',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80',
      rating: 5,
      date: 'Il y a 1 mois',
      circuit: 'Basilique & Splendeurs de Yamoussoukro',
      text: "La visite de la Basilique Notre-Dame de la Paix était grandiose, et que dire des soirées dégustation en maquis autour d'un authentique Garba et d'alloco frais ! Une immersion 100% authentique, sécurisée et chaleureuse. On reviendra sans hésiter.",
    },
    {
      id: 4,
      category: 'culture',
      name: 'Claire & Antoine',
      location: 'Bordeaux, France',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
      rating: 5,
      date: 'Il y a 3 semaines',
      circuit: 'Patrimoine & Quartier France à Grand-Bassam',
      text: "Le charme intemporel de Grand-Bassam nous a conquis. Visiter les bâtisses coloniales du Quartier France avec un guide local passionné et déjeuner face aux rouleaux de l'Atlantique était une expérience culturelle sublime.",
    },
  ];

  const filteredReviews = selectedCategory === 'all'
    ? reviews
    : reviews.filter((r) => r.category === selectedCategory);

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="bg-[#FFFFFF] text-slate-900 pt-20 pb-12 sm:pt-24 sm:pb-14 px-4 sm:px-6 lg:px-8 select-none overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Pill Badge: — Témoignages & Avis (Slide vers le bas) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-xs font-medium text-slate-600 mb-6"
        >
          <span>—</span>
          <span>Avis Voyageurs</span>
        </motion.div>

        {/* Section Header (Slide vers le bas) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: -45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-slate-900 leading-[1.2]">
              Ce que nos voyageurs disent <br className="hidden sm:block" />
              de leur aventure en Côte d'Ivoire
            </h2>
          </motion.div>

          {/* Rating Summary Box (Slide vers le bas) */}
          <motion.div
            initial={{ opacity: 0, y: -45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="flex items-center gap-4 bg-[#F8FAFC] border border-slate-100 p-4 rounded-2xl shadow-xs shrink-0"
          >
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">4.9<span className="text-base text-slate-400 font-semibold">/5</span></div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-[12px] font-medium text-slate-500 mt-0.5">
                +1 250 avis vérifiés de voyageurs
              </span>
            </div>
          </motion.div>
        </div>

        {/* Category Filters (Slide vers le bas) */}
        <motion.div
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: smoothEase }}
          className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-1"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer shrink-0 ${
                  isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 bg-[#F1F5F9]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeReviewCategory"
                    className="absolute inset-0 bg-[#1D71F2] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Reviews Cards Grid (Slide vers le bas en cascade) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: -55 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 35, scale: 0.95 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: smoothEase }}
                whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
                className="bg-[#F8FAFC] border border-slate-200/70 rounded-[28px] p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-shadow duration-300 relative group"
              >
                {/* Quote decorative watermark */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200/70 rotate-180 pointer-events-none" />

                <div>
                  {/* Top Author Info */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-slate-900 text-base leading-tight">
                          {review.name}
                        </h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D71F2] fill-[#1D71F2]/10" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium">{review.location}</p>
                    </div>
                  </div>

                  {/* Stars & Circuit Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">{review.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed font-normal mb-6">
                    "{review.text}"
                  </p>
                </div>

                {/* Circuit Badge at bottom */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800 bg-white border border-slate-200/90 px-3 py-1 rounded-full shadow-2xs">
                    {review.circuit}
                  </span>
                  <span className="text-xs font-medium text-[#1D71F2] group-hover:translate-x-1 transition-transform">
                    Expérience vérifiée
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to join (Slide vers le bas) */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, delay: 0.35, ease: smoothEase }}
          className="mt-10 text-center"
        >
          <motion.button
            onClick={() => onOpenBooking && onOpenBooking('Expérience Côte d\'Ivoire')}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 pl-6 pr-2.5 py-2 rounded-full bg-[#1D71F2] hover:bg-[#1560D6] text-white font-medium text-sm shadow-[0_8px_20px_rgba(29,113,242,0.28)] transition-all duration-300 group cursor-pointer"
          >
            <span>Réserver Votre Propre Aventure</span>
            <span className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#1D71F2] flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
