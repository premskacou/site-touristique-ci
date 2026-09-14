import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingSocials() {
  const socials = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Direct',
      href: 'https://wa.me/2250700000000',
      color: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      href: 'https://instagram.com',
      color: 'hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      href: 'https://tiktok.com',
      color: 'hover:bg-black hover:text-white hover:border-cyan-400',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
    },
    {
      id: 'facebook',
      name: 'Facebook',
      href: 'https://facebook.com',
      color: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      id: 'youtube',
      name: 'YouTube',
      href: 'https://youtube.com',
      color: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <div className="hidden sm:flex fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 select-none">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-2.5 p-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
      >
        {/* Subtle decorative top dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse my-1" />

        {socials.map((social) => (
          <div key={social.id} className="relative group flex items-center">
            {/* Tooltip on hover (slides out to the left) */}
            <div className="absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium tracking-wide whitespace-nowrap shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              {social.name}
              {/* Arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-slate-900/95" />
            </div>

            {/* Social Icon Button */}
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.18, x: -3 }}
              whileTap={{ scale: 0.92 }}
              aria-label={social.name}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-300 bg-white/5 border border-white/10 transition-all duration-300 shadow-sm cursor-pointer ${social.color}`}
            >
              {social.icon}
            </motion.a>
          </div>
        ))}

        {/* Subtle decorative bottom line */}
        <div className="w-4 h-0.5 rounded-full bg-white/20 mt-1" />
      </motion.div>
    </div>
  );
}
