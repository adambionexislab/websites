"use client";

import { useEffect, useState } from "react";
import { useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
      style={{ height: "64px" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        <a
          href="#"
          className="text-[var(--color-fg)] font-semibold tracking-[0.12em] text-sm uppercase"
        >
          ELLE
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#prenota"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-[0.98] transition-all duration-200 rounded-full"
        >
          Prenota ora
        </a>

        <button
          className="md:hidden p-2 text-[var(--color-fg)]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#prenota"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] rounded-full transition-colors"
          >
            Prenota ora
          </a>
        </div>
      )}
    </header>
  );
}
