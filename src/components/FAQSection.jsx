import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0); // Premier élément ouvert par défaut
  const { t } = useLanguage();

  const faqs = [
    {
      id: 1,
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      id: 2,
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      id: 3,
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      id: 4,
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
    {
      id: 5,
      question: t('faq.q5'),
      answer: t('faq.a5'),
    },
    {
      id: 6,
      question: t('faq.q6'),
      answer: t('faq.a6'),
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="bg-[#FFFFFF] text-slate-900 pt-4 sm:pt-8 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 border-t border-slate-100 select-none overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Disposition 2 Colonnes fidèle à l'image de référence (Statique, stable, sans saut d'ascenseur) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Colonne Gauche : Titre + Description + WhatsApp (Non-sticky pour éviter tout saut) */}
          <div className="lg:col-span-5">
            {/* Tag pilule d'en-tête (Slide vers le bas) */}
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: smoothEase }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-slate-50 text-xs font-medium text-slate-600 mb-6"
            >
              <span>—</span>
              <span>{t('faq.tag')}</span>
            </motion.div>

            {/* Grand Titre (Slide vers le bas) */}
            <motion.h2
              initial={{ opacity: 0, y: -35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-slate-900 leading-[1.12] mb-6"
            >
              {t('faq.title_1')} <br />
              {t('faq.title_2')}
            </motion.h2>

            {/* Sous-titre / Description (Slide vers le bas) */}
            <motion.p
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.18, ease: smoothEase }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-10 max-w-md"
            >
              {t('faq.subtitle')}
            </motion.p>

            {/* Bloc d'aide WhatsApp / Contact direct */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <p className="text-xs text-slate-500 font-medium">{t('faq.help_title')}</p>
                <p className="text-sm font-semibold text-slate-800">{t('faq.help_sub')}</p>
              </div>

              <a
                href="https://wa.me/2250700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs transition-transform hover:scale-105 shrink-0 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span>{t('faq.whatsapp_btn')}</span>
              </a>
            </motion.div>
          </div>

          {/* Colonne Droite : Liste Accordéon Épurée avec Séparateurs & Plus/Minus (Comme l'image de référence) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: -35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-25px" }}
                    transition={{ duration: 0.6, delay: index * 0.07, ease: smoothEase }}
                    className="py-6 sm:py-7 transition-colors"
                  >
                    {/* Bouton de la Question avec Plus / Minus */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-start justify-between gap-6 text-left group cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-base sm:text-lg lg:text-[19px] font-semibold leading-snug transition-colors ${
                        isOpen ? 'text-[#1D71F2]' : 'text-slate-900 group-hover:text-slate-700'
                      }`}>
                        {faq.question}
                      </span>

                      <div className="mt-0.5 shrink-0 text-slate-800 group-hover:text-slate-950 transition-colors">
                        {isOpen ? (
                          <motion.div
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Minus className="w-5 h-5 stroke-[2.2]" />
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plus className="w-5 h-5 stroke-[2.2]" />
                          </motion.div>
                        )}
                      </div>
                    </button>

                    {/* Contenu Dépliant de la Réponse */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: smoothEase }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 pr-6 sm:pr-10 text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Lien devis en bas de liste */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: smoothEase }}
              className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <p className="text-xs sm:text-sm text-slate-500">
                {t('faq.custom_prompt')}
              </p>
              <button
                type="button"
                onClick={() => onOpenBooking && onOpenBooking('Projet Sur-Mesure')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1D71F2] hover:text-[#1560D6] group cursor-pointer shrink-0"
              >
                <span>{t('faq.custom_cta')}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
