"use client";

import { PRESS, TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./reveal";
import { motion } from "motion/react";

const SIZES = [
  "text-3xl sm:text-4xl md:text-5xl",
  "text-2xl sm:text-3xl md:text-4xl",
  "text-xl sm:text-2xl md:text-3xl",
  "text-lg sm:text-xl md:text-2xl",
  "text-base sm:text-lg md:text-xl",
];

export function InPrint() {
  return (
    <section id="in-print" className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading
          title="Written about, occasionally awarded"
          intro="We don't chase press, but a good garden tends to get noticed — ranked here exactly as it was, largest mention first."
          trigger="mount"
        />

        <StaggerGroup className="mt-14 border-t border-ink/15" trigger="mount">
          {PRESS.map((mention, idx) => (
            <motion.div
              key={mention.name}
              variants={staggerItem}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink/15 py-4 md:py-5"
            >
              <span
                className={`font-display font-semibold tracking-tight text-ink ${SIZES[idx] ?? SIZES[SIZES.length - 1]}`}
              >
                {mention.name}
              </span>
              <span className="font-label text-[11px] font-semibold tracking-[0.12em] text-ink-soft uppercase">
                {mention.note}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>

        <StaggerGroup
          className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
          trigger="mount"
        >
          {TESTIMONIALS.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={staggerItem}
              className="border-t border-ink/15 pt-6"
            >
              <p className="font-body text-lg text-ink italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-5 font-label text-[11px] font-semibold tracking-[0.12em] text-ink-soft uppercase">
                {t.name} — {t.place}
              </footer>
            </motion.blockquote>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}