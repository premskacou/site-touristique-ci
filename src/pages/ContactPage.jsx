import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  ArrowUpRight, 
  Calendar, 
  Users, 
  Compass, 
  ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DESTINATIONS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage({ onNavigateToDestinations }) {
  const smoothEase = [0.16, 1, 0.3, 1];
  const { t } = useLanguage();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: 'Assinie-Mafia',
    travelType: 'Couple',
    travelDate: '',
    guestsCount: '2',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Bonjour Akwaba Tours !\nJe souhaite organiser un voyage en Côte d'Ivoire :\n- Nom : ${formData.fullName || 'Voyageur'}\n- Destination : ${formData.destination}\n- Voyageurs : ${formData.guestsCount} (${formData.travelType})\n- Date prévue : ${formData.travelDate || 'À définir'}\n- Message : ${formData.message || 'Demande de renseignements généraux'}`
    );
    window.open(`https://wa.me/2250700000000?text=${message}`, '_blank');
  };

  const agencyHubs = [
    {
      city: "Abidjan (Siège Central)",
      district: "Cocody Ambassades & Plateau",
      address: "Boulevard Hassan II, Résidence Akwaba",
      role: t('contact.hub_abidjan_role'),
      phone: "+225 27 20 00 00 00"
    },
    {
      city: "Assinie-Mafia",
      district: "Presqu'île & Lagune Aby",
      address: "Km 12, Route de Mafia",
      role: t('contact.hub_assinie_role'),
      phone: "+225 07 10 00 00 00"
    },
    {
      city: "Grand-Bassam",
      district: "Quartier France UNESCO",
      address: "Rue Bouët, face Ancien Phare",
      role: t('contact.hub_bassam_role'),
      phone: "+225 07 20 00 00 00"
    },
    {
      city: "Yamoussoukro",
      district: "Quartier Administratif",
      address: "Allée des Fondations",
      role: t('contact.hub_yakro_role'),
      phone: "+225 07 30 00 00 00"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 pt-20 sm:pt-28 pb-16 sm:pb-24 px-3.5 sm:px-6 lg:px-12 select-none relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#1D71F2]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* --- 1. HERO HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold text-amber-400 mb-4 sm:mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('contact.tag')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: smoothEase }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] mb-4 sm:mb-6 break-words"
          >
            {t('contact.hero_title_p1')} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              {t('contact.hero_title_p2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: smoothEase }}
            className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto px-2"
          >
            {t('contact.hero_sub')}
          </motion.p>
        </div>

        {/* --- 2. SPLIT LAYOUT: INFO CARDS (LEFT) + FORM (RIGHT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 md:gap-12 items-start mb-16 sm:mb-24 md:mb-32">
          
          {/* LEFT COLUMN: COORDINATES, WHATSAPP & REASSURANCE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            {/* WhatsApp VIP Card (Highlight Card) */}
            <div className="p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#132219] to-[#0E1713] border border-[#25D366]/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-[50px] pointer-events-none" />

              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping inline-block" />
                  {t('contact.online_status')}
                </span>
                <span className="text-xs text-slate-400 font-mono">24/7</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {t('contact.whatsapp_title')}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {t('contact.whatsapp_sub')}
              </p>

              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3.5 px-4 sm:px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
                <span className="truncate sm:whitespace-normal">{t('contact.whatsapp_btn')}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-[#111722] border border-white/10 shadow-xl space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                {t('contact.direct_title')}
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {t('contact.phone_label')}
                  </span>
                  <a
                    href="tel:+2252720000000"
                    className="text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors"
                  >
                    +225 27 20 00 00 00
                  </a>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{t('contact.phone_sub')}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {t('contact.email_label')}
                  </span>
                  <a
                    href="mailto:contact@akwabatours.ci"
                    className="text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors break-all"
                  >
                    contact@akwabatours.ci
                  </a>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{t('contact.email_sub')}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {t('contact.location_label')}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white block leading-snug">
                    Boulevard Hassan II, Cocody Ambassades
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: HIGH-END INQUIRY FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
            className="lg:col-span-7"
          >
            <div className="p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[36px] bg-[#111722] border border-white/10 shadow-2xl relative overflow-hidden">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                      {t('contact.form_tag')}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {t('contact.form_title')}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                      {t('contact.form_sub')}
                    </p>
                  </div>

                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {t('contact.name_field')}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Ex: Kouamé Konan ou Claire Dubois"
                        className="w-full bg-[#171E27] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/70 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {t('contact.phone_field')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+225 07... ou +33 6..."
                        className="w-full bg-[#171E27] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/70 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Travel Date Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {t('contact.email_field')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.com"
                        className="w-full bg-[#171E27] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/70 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {t('contact.date_field')}
                      </label>
                      <input
                        type="text"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        placeholder="Ex: Novembre 2026 (1 semaine)"
                        className="w-full bg-[#171E27] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/70 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Destination & Travelers Type Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {t('contact.dest_field')}
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full bg-[#171E27] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400/70 transition-colors cursor-pointer"
                      >
                        {DESTINATIONS.map((d) => (
                          <option key={d.id} value={d.name} className="bg-[#111722] text-white">
                            {d.name} ({d.category})
                          </option>
                        ))}
                        <option value="Circuit Multi-Destinations" className="bg-[#111722] text-white">
                          {t('contact.opt_multi')}
                        </option>
                        <option value="Sur-Mesure Total" className="bg-[#111722] text-white">
                          {t('contact.opt_custom')}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        {t('contact.type_field')}
                      </label>
                      <select
                        name="travelType"
                        value={formData.travelType}
                        onChange={handleChange}
                        className="w-full bg-[#171E27] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400/70 transition-colors cursor-pointer"
                      >
                        <option value="Solo" className="bg-[#111722] text-white">{t('contact.type_solo')}</option>
                        <option value="Couple" className="bg-[#111722] text-white">{t('contact.type_couple')}</option>
                        <option value="Famille" className="bg-[#111722] text-white">{t('contact.type_family')}</option>
                        <option value="Groupe d'amis" className="bg-[#111722] text-white">{t('contact.type_friends')}</option>
                        <option value="Affaires VIP" className="bg-[#111722] text-white">{t('contact.type_vip')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      {t('contact.message_field')}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.message_placeholder')}
                      className="w-full bg-[#171E27] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/70 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 px-5 sm:px-8 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer min-h-[48px]"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>{t('contact.submit_btn')}</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    {t('contact.guarantee')}
                  </p>
                </form>
              ) : (
                /* SUCCESS STATE */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 sm:py-12 px-2 sm:px-4 text-center space-y-4 sm:space-y-6"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>

                  <div>
                    <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider inline-block mb-2.5 sm:mb-3">
                      {t('contact.success_tag')}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                      {t('contact.success_title')}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-md mx-auto font-light leading-relaxed">
                      {t('contact.success_sub')}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>{t('contact.success_whatsapp_btn')}</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/15 cursor-pointer min-h-[44px]"
                    >
                      {t('contact.success_new_btn')}
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </motion.div>

        </div>

        {/* --- 3. NOS ANTENNES & POINTS DE RELAIS EN CÔTE D'IVOIRE --- */}
        <section className="mb-14 sm:mb-20 md:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase block mb-1.5">
              {t('contact.hubs_tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              {t('contact.hubs_title')}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-light px-2">
              {t('contact.hubs_sub')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {agencyHubs.map((hub, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="p-4.5 sm:p-6 rounded-[20px] sm:rounded-[28px] bg-[#111722] border border-white/10 hover:border-amber-400/30 shadow-xl flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-400 mb-2.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">{hub.city}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                    {hub.district}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mb-2.5">
                    {hub.address}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                    {hub.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>{hub.phone}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}
