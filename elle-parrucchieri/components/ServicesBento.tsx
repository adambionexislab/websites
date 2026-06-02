"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const services = [
  {
    title: "Taglio & Piega",
    desc: "Un taglio pensato per te, modellato sulle tue fattezze.",
    img: "https://picsum.photos/seed/elle-taglio-piega-hair/700/500",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
    light: false,
  },
  {
    title: "Colore & Meche",
    desc: "Tecniche di colorazione che rispettano il capello.",
    img: "https://picsum.photos/seed/elle-hair-color-meche/400/600",
    span: "md:col-span-1",
    aspect: "aspect-[3/4]",
    light: false,
  },
  {
    title: "Trattamenti",
    desc: "Keratina, nutrizione e rinforzo per capelli sani.",
    img: null,
    span: "md:col-span-1",
    aspect: "aspect-square",
    light: true,
    bg: "bg-[var(--color-accent)]",
  },
  {
    title: "Acconciature da Sposa",
    desc: "Il tuo giorno piu bello merita il massimo della cura.",
    img: "https://picsum.photos/seed/elle-bridal-hair-updo-italy/800/500",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
    light: false,
  },
];

export default function ServicesBento() {
  const reduce = useReducedMotion();

  return (
    <section id="servizi" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)] mb-10">
        Servizi
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={`relative overflow-hidden rounded-2xl ${s.aspect} ${s.span} ${s.light ? s.bg : ""}`}
          >
            {s.img ? (
              <>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </>
            ) : null}

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3
                className={`text-xl font-medium leading-tight ${
                  s.img || s.light ? "text-white" : "text-[var(--color-fg)]"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-1.5 text-sm leading-relaxed ${
                  s.img ? "text-white/70" : s.light ? "text-white/80" : "text-[var(--color-muted)]"
                }`}
              >
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
