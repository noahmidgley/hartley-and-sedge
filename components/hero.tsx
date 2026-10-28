"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { BRAND, IMAGES, img } from "@/lib/content";
import { CtaButton } from "./cta-button";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section className="relative">
      <div
        ref={heroRef}
        className="relative h-[calc(100svh-4rem)] min-h-[620px] w-full overflow-hidden md:h-[calc(100svh-5rem)]"
      >
        <motion.div
          className="absolute inset-0 scale-110"
          style={{ y: reduceMotion ? undefined : parallaxY }}
        >
          <Image
            src={img(IMAGES.heroMist, 2400)}
            alt="Misty parkland at dawn, the mist lying low across the grass beneath a line of trees"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />

        <div className="absolute right-5 bottom-8 hidden flex-col items-end gap-2 text-right md:right-8 md:bottom-10 lg:flex">
          <span className="font-label text-[11px] font-semibold tracking-[0.14em] text-paper uppercase [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">
            Scroll the trail
          </span>
          <motion.span
            aria-hidden
            className="h-12 w-px origin-top bg-paper/70"
            style={{ boxShadow: "0 0 8px rgba(0,0,0,0.35)" }}
            animate={
              reduceMotion
                ? undefined
                : { scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }
            }
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="absolute inset-x-4 bottom-4 md:inset-x-8 md:bottom-8 lg:inset-x-12 lg:bottom-12">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            className="grain relative max-w-3xl border border-ink/15 bg-paper px-6 py-8 shadow-[0_18px_60px_-25px_rgba(0,0,0,0.5)] sm:px-9 sm:py-10 md:px-12 md:py-12"
          >
            <motion.div variants={lineVariants} className="mb-5 flex items-baseline gap-3">
              <span className="font-display text-2xl font-semibold text-accent">No. 1</span>
              <span className="font-label text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">
                Plate — The Gate
              </span>
            </motion.div>

            <motion.h1
              variants={lineVariants}
              className="font-display text-[2.5rem] leading-[0.98] font-semibold tracking-tight text-ink sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5rem]"
            >
              Gardens that read as though they&rsquo;ve always been there.
            </motion.h1>

            <motion.p
              variants={lineVariants}
              className="mt-6 max-w-lg font-body text-lg text-ink-soft italic"
            >
              A garden and landscape design studio for period houses across
              the Cotswolds — rooted in the land they sit on, never a
              signature look applied twice.
            </motion.p>

            <motion.div
              variants={lineVariants}
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <CtaButton href="#visit" variant="solid">
                Begin with a conversation
              </CtaButton>
              <span className="font-label text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                {BRAND.location} — est. {BRAND.founded}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
