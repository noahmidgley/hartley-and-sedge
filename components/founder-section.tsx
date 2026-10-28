"use client";

import Image from "next/image";
import { FOUNDER, IMAGES, img } from "@/lib/content";
import { Reveal } from "./reveal";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="grain relative scroll-mt-16 bg-cover py-20 text-ink-on-cover md:scroll-mt-20 md:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <Reveal className="order-2 md:order-1" trigger="mount">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={img(IMAGES.founder, 1200)}
              alt="Eleanor Hartley among tall grass at golden hour, a terracotta pot beside her"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal trigger="mount">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-[2.75rem]">
              {FOUNDER.name}
            </h2>
            <p className="mt-2 font-label text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
              {FOUNDER.role}
            </p>
          </Reveal>

          <div className="mt-6 flex flex-col gap-4 border-t border-cover-line pt-6">
            {FOUNDER.bio.map((para, idx) => (
              <Reveal key={idx} delay={idx * 0.08} trigger="mount">
                <p className="max-w-lg font-body text-lg text-ink-on-cover-soft">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
