"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const PRIZES = [
  {
    title: "Prix du Public",
    subtitle: "Le + de likes",
    prize: "Tenue complète sur mesure",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    accent: "from-gold to-gold-dark",
    badge: "1er Prix",
    featured: true,
  },
  {
    title: "Coup de coeur MIRA",
    subtitle: "Sélection de l'équipe",
    prize: "Tenue complète sur mesure",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    accent: "from-sage to-sage-light",
    badge: "Coup de coeur",
    featured: false,
  },
  {
    title: "Tirage au sort",
    subtitle: "Tout le monde a sa chance",
    prize: "Tenue complète sur mesure",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    accent: "from-terracotta to-terracotta-light",
    badge: "Bonus",
    featured: false,
  },
];

export default function Prizes() {
  return (
    <section id="prix" className="py-20 sm:py-28 bg-earth text-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Les récompenses
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            3 tenues à gagner
          </h2>
          <p className="text-stone-light text-base sm:text-lg max-w-xl mx-auto">
            Chaque gagnant reçoit une tenue complète cousue sur mesure à partir de son design IA.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRIZES.map((prize, index) => (
            <AnimatedSection key={prize.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 h-full ${
                  prize.featured
                    ? "bg-gradient-to-b from-gold/15 to-gold/5 border-gold/30 shadow-xl shadow-gold/10"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6 bg-gradient-to-r ${prize.accent} text-white`}
                >
                  {prize.badge}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    prize.featured
                      ? "bg-gold/20 text-gold"
                      : "bg-white/10 text-stone-light"
                  }`}
                >
                  {prize.icon}
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold mb-2">
                  {prize.title}
                </h3>
                <p className="text-sm text-stone-light mb-4">{prize.subtitle}</p>

                <div className="pt-4 border-t border-white/10">
                  <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-gold">
                    {prize.prize}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Delivery note */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18M7.5 14.25v-6a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25v6M7.5 14.25H5.625m0 0H3.375m2.25 0V11.25m0 3h.008v.008H5.625v-.008z" />
              </svg>
              <span className="font-semibold text-gold text-sm sm:text-base">
                Livrée chez toi avant l&apos;Aïd !
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
