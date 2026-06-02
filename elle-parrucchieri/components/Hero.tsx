"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-[7fr_5fr] max-w-[1400px] mx-auto">
      {/* Left: text col */}
      <div className="flex flex-col justify-center px-6 lg:px-12 pt-28 pb-16 lg:pt-0 lg:pb-0">
        <motion.h1
          {...fade(0)}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-[var(--color-fg)]"
        >
          Capelli che raccontano la tua storia.
        </motion.h1>

        <motion.p
          {...fade(0.15)}
          className="mt-6 text-base text-[var(--color-muted)] leading-relaxed max-w-[44ch]"
        >
          Tagli d&apos;autore e trattamenti su misura nel cuore dell&apos;Italia.
        </motion.p>

        <motion.div {...fade(0.28)} className="mt-10 flex items-center gap-4">
          <a
            href="#prenota"
            className="inline-flex items-center px-7 py-3 text-sm font-medium text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-[0.98] transition-all duration-200 rounded-full"
          >
            Prenota ora
          </a>
          <a
            href="#servizi"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors duration-200 underline underline-offset-4"
          >
            Scopri i servizi
          </a>
        </motion.div>
      </div>

      {/* Right: image col */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative lg:min-h-[100dvh] min-h-[60vw] overflow-hidden"
      >
        <Image
          src="https://picsum.photos/seed/elle-salon-beauty-hair-woman/800/1100"
          alt="Donna con capelli curati dal salone ELLE"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/20 to-transparent lg:hidden" />
      </motion.div>
    </section>
  );
}
