import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";

const hours = [
  { day: "Lunedi", time: "09:00 - 19:00" },
  { day: "Martedi", time: "09:00 - 19:00" },
  { day: "Mercoledi", time: "09:00 - 19:00" },
  { day: "Giovedi", time: "09:00 - 20:00" },
  { day: "Venerdi", time: "09:00 - 20:00" },
  { day: "Sabato", time: "08:30 - 18:00" },
  { day: "Domenica", time: "Chiuso" },
];

export default function Footer() {
  return (
    <footer
      id="contatti"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand + contact */}
        <div className="md:col-span-1">
          <p className="font-semibold tracking-[0.12em] text-sm uppercase text-[var(--color-fg)]">
            ELLE Parrucchieri
          </p>
          <address className="mt-4 not-italic text-sm text-[var(--color-muted)] leading-relaxed">
            Via dei Capelli 12<br />
            20100 Milano (MI)
          </address>
          <a
            href="tel:+390000000000"
            className="mt-3 block text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
          >
            +39 000 000 0000
          </a>
          <a
            href="mailto:info@elleparrucchieri.it"
            className="mt-1 block text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
          >
            info@elleparrucchieri.it
          </a>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram ELLE Parrucchieri"
              className="text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              <InstagramLogo size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook ELLE Parrucchieri"
              className="text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              <FacebookLogo size={20} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-muted)] mb-4">
            Navigazione
          </p>
          <ul className="flex flex-col gap-2.5">
            {["Servizi", "Chi Siamo", "Galleria", "Prenota"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-muted)] mb-4">
            Orari di apertura
          </p>
          <ul className="flex flex-col gap-2">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex justify-between text-sm text-[var(--color-muted)] gap-4"
              >
                <span>{h.day}</span>
                <span
                  className={
                    h.time === "Chiuso" ? "text-[var(--color-accent)]" : ""
                  }
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
        <p className="text-xs text-[var(--color-muted)]">
          &copy; {new Date().getFullYear()} ELLE Parrucchieri. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
