"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const FAQ_ITEMS = [
  {
    question: "Qui peut participer ?",
    answer:
      "Tout le monde peut participer ! Le concours est ouvert à tous, musulmans ou non, que tu sois au Sénégal ou dans la diaspora. Il suffit de télécharger MIRA Studio et de créer ton design.",
  },
  {
    question: "C'est quoi les 5 crédits IA ?",
    answer:
      "En créant ton compte sur MIRA Studio, tu reçois automatiquement 5 crédits IA gratuits. Chaque crédit te permet de générer un design de tenue unique grâce à notre intelligence artificielle. Tu as donc 5 essais pour créer la tenue de tes rêves !",
  },
  {
    question: "Comment sont choisis les gagnants ?",
    answer:
      "Il y a 3 façons de gagner : le Prix du Public (celui qui a le plus de likes sur son post), le Coup de coeur MIRA (sélectionné par notre équipe pour son originalité et sa créativité), et le Tirage au sort (un participant tiré au hasard parmi tous les participants valides).",
  },
  {
    question: "Quand reçoit-on la tenue ?",
    answer:
      "Les gagnants seront annoncés le 10 mars 2026. Les tenues seront cousues sur mesure par nos tailleurs partenaires et livrées avant l'Aïd el-Fitr, pour que tu puisses la porter lors des festivités !",
  },
  {
    question: "Sur quels réseaux sociaux dois-je poster ?",
    answer:
      "Tu peux poster ton design sur Instagram ou TikTok. N'oublie pas de taguer @mirastudio.match et d'utiliser le hashtag #MIRADesignChallenge pour que ta participation soit prise en compte.",
  },
  {
    question: "L'application est-elle disponible sur Android ?",
    answer:
      "MIRA Studio est disponible sur l'App Store et en version beta sur Android via le Google Play Store. Télécharge-la pour commencer à créer tes designs dès maintenant !",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-beige/60 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-[family-name:var(--font-display)] text-base sm:text-lg font-semibold pr-4 group-hover:text-gold transition-colors duration-200">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-8 h-8 rounded-full bg-beige/50 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 text-earth-light group-hover:text-gold transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 text-earth-light leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream-dark wax-pattern">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-gold tracking-widest uppercase">
            Questions fréquentes
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Tu as des questions ?
          </h2>
          <p className="text-earth-light text-base sm:text-lg">
            Tout ce que tu dois savoir sur le MIRA Design Challenge.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-beige/50">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
