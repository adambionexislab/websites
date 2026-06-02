"use client";

import { motion, useReducedMotion } from "motion/react";

const reviews = [
  {
    quote:
      "Non cambio parrucchiere da dieci anni. Qui mi sento capita e valorizzata ogni volta che entro.",
    name: "Giulia R.",
    city: "Milano",
  },
  {
    quote:
      "Il colore che ho scelto e rimasto perfetto per mesi. Professionalita e cura in ogni singolo dettaglio.",
    name: "Martina C.",
    city: "Roma",
  },
  {
    quote:
      "Per il mio matrimonio hanno curato ogni cosa con passione. Mi hanno fatto sentire straordinaria.",
    name: "Sofia B.",
    city: "Firenze",
  },
];

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Recensioni
        </p>
      </div>

      <div
        className="flex gap-6 px-6 lg:px-12 overflow-x-auto snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-none w-[min(85vw,420px)] snap-start border border-[var(--color-border)] rounded-2xl p-8 flex flex-col justify-between bg-[var(--color-bg)]"
          >
            <p className="text-[var(--color-fg)] text-base leading-relaxed font-light">
              &ldquo;{r.quote}&rdquo;
            </p>
            <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
              <p className="text-sm font-medium text-[var(--color-fg)]">{r.name}</p>
              <p className="text-xs text-[var(--color-muted)] mt-0.5">{r.city}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
