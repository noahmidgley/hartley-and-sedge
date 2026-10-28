import Image from "next/image";
import { BRAND, IMAGES, STOPS, img } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-paper">
      <div className="relative h-40 w-full overflow-hidden sm:h-56 md:h-64">
        <Image
          src={img(IMAGES.cotswoldRow, 1800)}
          alt="A row of honey-stone Cotswold cottages with blue doors, seen from the lane"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
      </div>

      <div className="border-t border-ink/15 bg-cover text-ink-on-cover">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4 md:px-8 md:py-20">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#top" className="font-display text-xl font-semibold tracking-tight">
              Hartley <span className="text-accent">&amp;</span> Sedge
            </a>
            <p className="mt-4 max-w-xs font-body text-sm text-ink-on-cover-soft">
              Garden &amp; landscape design for period houses across the
              Cotswolds, est. {BRAND.founded}.
            </p>
          </div>

          <div>
            <h3 className="font-label text-[10px] font-semibold tracking-[0.14em] text-ink-on-cover-soft uppercase">
              The Trail
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {STOPS.map((stop) => (
                <li key={stop.id}>
                  <a href={`#${stop.id}`} className="font-body text-sm hover:text-accent">
                    {stop.no} — {stop.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-label text-[10px] font-semibold tracking-[0.14em] text-ink-on-cover-soft uppercase">
              Studio
            </h3>
            <address className="mt-4 flex flex-col gap-1 font-body text-sm not-italic text-ink-on-cover-soft">
              {BRAND.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>

          <div>
            <h3 className="font-label text-[10px] font-semibold tracking-[0.14em] text-ink-on-cover-soft uppercase">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 font-body text-sm">
              <li>
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-accent">
                  {BRAND.email}
                </a>
              </li>
              <li className="text-ink-on-cover-soft">{BRAND.instagram}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cover-line">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 font-label text-[10px] tracking-[0.1em] text-ink-on-cover-soft uppercase sm:flex-row sm:items-center sm:justify-between md:px-8">
            <span>
              © {new Date().getFullYear()} Hartley &amp; Sedge Garden Design
              Ltd. A demonstration studio site.
            </span>
            <a href="#top" className="hover:text-accent">
              Back to the gate ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
