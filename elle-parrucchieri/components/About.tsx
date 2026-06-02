"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="chi-siamo" className="py-24 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.05] text-[var(--color-fg)]">
            Ogni capello, una storia da raccontare.
          </h2>
          <p className="mt-8 text-base text-[var(--color-muted)] leading-relaxed max-w-[55ch]">
            Da oltre venticinque anni il salone ELLE e il luogo dove la cura
            diventa arte. Ogni cliente porta con se un desiderio, una visione.
            Il nostro lavoro e trasformare quella visione in realta, con
            attenzione e competenza.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 relative w-full aspect-[16/7] overflow-hidden"
      >
        <Image
          src="https://picsum.photos/seed/elle-salon-interior-italy-beauty/1600/700"
          alt="Interno del salone ELLE Parrucchieri"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
