"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const STEPS = [
  {
    number: "01",
    title: "Télécharge MIRA Studio",
    description: "Disponible sur App Store et bientôt sur Android",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Crée ton compte",
    description: "Et reçois 10 crédits IA offerts pour générer tes designs",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Génère ton design",
    description: "Crée ta tenue traditionnelle de rêve grâce à notre IA",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Poste & tague",
    description: "Partage ton design en taguant @mirastudio.match + #MIRADesignChallenge",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Cumule les likes",
    description: "Plus tu as de likes, plus tu as de chances de gagner !",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function HowToParticipate() {
  return (
    <section id="participer" className="py-20 sm:py-28 wax-diamond">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Comment participer
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            5 étapes pour gagner
          </h2>
          <p className="text-earth-light text-base sm:text-lg max-w-xl mx-auto">
            C&apos;est simple, rapide, et tu peux participer depuis n&apos;importe où dans le monde.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20" />

          <div className="space-y-8 md:space-y-12">
            {STEPS.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-beige/50 hover:shadow-md hover:border-gold/20 transition-all duration-300">
                      <div className={`flex items-center gap-4 mb-3 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                          {step.icon}
                        </div>
                        <span className="text-sm font-bold text-gold tracking-wider">
                          ÉTAPE {step.number}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-earth-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-gold text-white items-center justify-center font-[family-name:var(--font-display)] font-bold text-sm shrink-0 shadow-lg shadow-gold/20 z-10">
                    {step.number}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
