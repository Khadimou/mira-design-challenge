"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const DESIGNS = [
  {
    title: "Boubou Moderne",
    style: "Boubou",
    image: "/boubou.JPG",
  },
  {
    title: "Kaftan Élégant",
    style: "Kaftan",
    image: "/kaftan.JPG",
  },
  {
    title: "Robe Basin",
    style: "Basin",
    image: "/robe.JPG",
  },
  {
    title: "Bogolan Chic",
    style: "Bogolan",
    image: "/bogolan.JPG",
  },
  {
    title: "Ensemble Wax",
    style: "Wax",
    image: "/wax.JPG",
  },
  {
    title: "Tenue de Fête",
    style: "Festif",
    image: "/festif.JPG",
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
                    {/* Design image */}
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={design.image}
                        alt={design.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 280px, 300px"
                      />
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
