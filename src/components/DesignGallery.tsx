"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const DESIGNS = [
  {
    title: "Boubou Moderne",
    style: "Boubou",
    gradient: "from-gold/20 via-gold/10 to-terracotta/20",
  },
  {
    title: "Kaftan Élégant",
    style: "Kaftan",
    gradient: "from-sage/20 via-sage/10 to-gold/20",
  },
  {
    title: "Robe Basin",
    style: "Basin",
    gradient: "from-terracotta/20 via-terracotta/10 to-sage/20",
  },
  {
    title: "Bogolan Chic",
    style: "Bogolan",
    gradient: "from-earth-light/20 via-earth-light/10 to-gold/20",
  },
  {
    title: "Ensemble Wax",
    style: "Wax",
    gradient: "from-gold/20 via-sage/10 to-terracotta/20",
  },
  {
    title: "Tenue de Fête",
    style: "Festif",
    gradient: "from-sage/20 via-gold/10 to-sage/20",
  },
];

export default function DesignGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="galerie" className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Inspirations
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Exemples de designs IA
          </h2>
          <p className="text-earth-light text-base sm:text-lg max-w-xl mx-auto">
            Découvre la diversité des créations possibles avec MIRA Studio. Boubou, kaftan, bogolan, basin...
            ton imagination est la seule limite.
          </p>
        </AnimatedSection>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-earth hover:text-gold hover:shadow-xl transition-all duration-200"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-earth hover:text-gold hover:shadow-xl transition-all duration-200"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {DESIGNS.map((design, index) => (
              <AnimatedSection key={design.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="snap-center shrink-0 w-[280px] sm:w-[300px]"
                >
                  <div className="rounded-2xl overflow-hidden border border-beige/50 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                    {/* Placeholder for design image */}
                    <div
                      className={`aspect-[3/4] bg-gradient-to-br ${design.gradient} relative flex items-center justify-center`}
                    >
                      {/* Decorative pattern */}
                      <div className="absolute inset-0 opacity-10 wax-pattern" />
                      <div className="text-center relative z-10">
                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-earth/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                          </svg>
                        </div>
                        <p className="text-sm text-earth/50 font-medium">
                          Image à venir
                        </p>
                      </div>
                    </div>

                    {/* Card info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-[family-name:var(--font-display)] font-bold text-lg">
                            {design.title}
                          </h3>
                          <p className="text-sm text-earth-light">
                            Style {design.style}
                          </p>
                        </div>
                        <span className="text-xs font-semibold bg-gold/10 text-gold-dark px-3 py-1 rounded-full">
                          IA
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Scroll hint on mobile */}
        <p className="text-center text-xs text-earth-light/60 mt-4 sm:hidden">
          Glisse pour voir plus &rarr;
        </p>
      </div>
    </section>
  );
}
