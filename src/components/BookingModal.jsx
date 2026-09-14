import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Calendar, Users, MapPin, Send, CheckCircle2, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GUIDES } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function BookingModal({ isOpen, onClose, initialDestination, initialGuide }) {
  const { t } = useLanguage();
  const [destination, setDestination] = useState(initialDestination || 'Abidjan & Environs');
  const [guide, setGuide] = useState(initialGuide || t('booking.opt_best_guide'));
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDestination) setDestination(initialDestination);
    if (initialGuide) setGuide(initialGuide);
  }, [initialDestination, initialGuide]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Bonjour Akwaba Guide !\nJe souhaite réserver une visite guidée en Côte d'Ivoire :\n- Nom : ${fullName}\n- Destination : ${destination}\n- Guide souhaité : ${guide}\n- Date : ${travelDate || 'À définir'}\n- Personnes : ${guests}`
    );
    window.open(`https://wa.me/2250700000000?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg max-h-[92dvh] overflow-y-auto bg-[#0A0E17] border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl z-10 glass-card"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 text-akwaba-gold font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{t('booking.tag')}</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                {t('booking.title')}
              </h3>
              <p className="text-xs text-slate-400 mt-1 mb-6">
                {t('booking.sub')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">{t('booking.name_label')}</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: Marc Dubois"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-akwaba-gold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">{t('booking.phone_label')}</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+33 6 12 34 56 78 ou +225 07..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-akwaba-gold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">{t('booking.dest_label')}</label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-akwaba-gold font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">{t('booking.guests_label')}</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-akwaba-gold"
                    >
                      <option value="1">{t('booking.opt_solo')}</option>
                      <option value="2">{t('booking.opt_duo')}</option>
                      <option value="4">{t('booking.opt_small')}</option>
                      <option value="8">{t('booking.opt_group')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">{t('booking.guide_label')}</label>
                  <select
                    value={guide}
                    onChange={(e) => setGuide(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-akwaba-gold"
                  >
                    <option value={t('booking.opt_best_guide')}>{t('booking.opt_best_guide')}</option>
                    {GUIDES.map((g) => (
                      <option key={g.id} value={g.name}>{g.name} ({g.specialty})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">{t('booking.date_label')}</label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-akwaba-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 bg-gradient-to-r from-akwaba-gold to-amber-500 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-akwaba-gold/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{t('booking.submit')}</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-akwaba-green/20 border border-akwaba-green text-akwaba-green flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white">{t('booking.success_title')}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {t('booking.success_sub')}
              </p>

              <div className="mt-6 space-y-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t('booking.whatsapp_chat_now')}</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2.5 bg-slate-900 border border-slate-800 text-slate-400 font-semibold rounded-xl text-xs cursor-pointer"
                >
                  {t('booking.close')}
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
