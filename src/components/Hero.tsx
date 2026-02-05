"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";

const APPSTORE_URL = "https://apps.apple.com/us/app/mira-studio/id6754275249";
const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=com.mirastudio.app";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden wax-pattern"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-dark/50 to-cream" />

      {/* Gold decorative circles */}
      <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 left-[-100px] w-[400px] h-[400px] rounded-full bg-sage/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-28 sm:py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-gold-dark">
            Concours du 9 fév. au 10 mars 2026
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Imagine ta tenue
          <br />
          <span className="text-gradient-gold">de rêve...</span>
          <br />
          <span className="text-earth-light">et gagne-la pour de vrai</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-earth-light max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Utilise l&apos;IA de MIRA Studio pour designer ta tenue traditionnelle
          idéale. Les meilleurs designs seront{" "}
          <strong className="text-earth">cousus sur mesure</strong> et livrés
          chez toi avant l&apos;Aïd !
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12"
        >
          <a
            href={APPSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-earth text-cream px-6 py-3.5 rounded-full text-base font-semibold hover:bg-earth-light transition-all duration-300 hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
            <svg
              className="w-4 h-4 opacity-50 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href={PLAYSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-white text-earth border-2 border-earth/10 px-6 py-3.5 rounded-full text-base font-semibold hover:border-gold hover:text-gold-dark transition-all duration-300 hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.18 23.49c.25.44.68.72 1.15.72.18 0 .37-.04.54-.12L12 20.47l7.13 3.62c.17.08.36.12.54.12.47 0 .9-.28 1.15-.72.37-.65.15-1.47-.49-1.84L13 17.81V6.19l7.33-3.84c.64-.37.86-1.19.49-1.84-.37-.65-1.19-.86-1.84-.49L12 3.53 4.98.02C4.33-.35 3.51-.14 3.14.51c-.37.65-.15 1.47.49 1.84L11 6.19v11.62l-7.33 3.84c-.64.37-.86 1.19-.49 1.84z" />
            </svg>
            Android (Beta)
            <svg
              className="w-4 h-4 opacity-50 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Countdown />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-earth/20 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
