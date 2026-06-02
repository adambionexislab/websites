const items = [
  "TAGLIO",
  "COLORE",
  "PIEGA",
  "MECHE",
  "KERATINA",
  "TRATTAMENTI",
  "ACCONCIATURA",
  "EXTENSION",
];

export default function ServiceMarquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] py-5">
      <div className="marquee-track flex gap-10 w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-muted)] whitespace-nowrap select-none"
          >
            {item}
            <span className="mx-5 opacity-30">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
