"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const photos = [
  {
    src: "https://picsum.photos/seed/elle-gallery-haircut-portrait/600/800",
    alt: "Taglio di capelli - ELLE Parrucchieri",
    tall: true,
  },
  {
    src: "https://picsum.photos/seed/elle-gallery-color-style/800/500",
    alt: "Colorazione capelli - ELLE Parrucchieri",
    tall: false,
  },
  {
    src: "https://picsum.photos/seed/elle-gallery-treatment-hair/800/500",
    alt: "Trattamento capelli - ELLE Parrucchieri",
    tall: false,
  },
  {
    src: "https://picsum.photos/seed/elle-gallery-bridal-hairstyle/600/800",
    alt: "Acconciatura da sposa - ELLE Parrucchieri",
    tall: true,
  },
];

export default function Gallery() {
  const reduce = useReducedMotion();

  return (
    <section id="galleria" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="grid grid-cols-2 gap-3">
        {photos.map((p, i) => (
          <motion.div
            key={p.src}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`relative overflow-hidden rounded-2xl ${
              p.tall ? "aspect-[3/4]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 50vw, 40vw"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
