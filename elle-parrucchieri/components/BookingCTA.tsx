"use client";

import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

export default function BookingCTA() {
  const reduce = useReducedMotion();

  return (
    <section
      id="prenota"
      className="bg-[var(--color-accent)] py-28 lg:py-40 px-6 text-center"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.08] text-white">
          Prenota il tuo appuntamento
        </h2>
        <p className="mt-6 text-base text-white/70 leading-relaxed">
          Siamo aperti dal lunedi al sabato. Ti aspettiamo con piacere.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+390000000000"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium text-[var(--color-accent)] bg-white hover:bg-white/90 active:scale-[0.98] transition-all duration-200 rounded-full w-full sm:w-auto justify-center"
          >
            <Phone size={17} weight="bold" />
            Chiama ora
          </a>
          <a
            href="https://wa.me/390000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium text-white border border-white/40 hover:border-white/70 hover:bg-white/10 active:scale-[0.98] transition-all duration-200 rounded-full w-full sm:w-auto justify-center"
          >
            <WhatsappLogo size={17} weight="bold" />
            Scrivici su WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
