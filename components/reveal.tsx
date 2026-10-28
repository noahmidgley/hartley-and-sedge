"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  once = true,
  trigger = "scroll",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /** "scroll": animate in as it enters the viewport (portfolio/process rhythm).
   *  "mount": animate in immediately and guarantee the content is never gated
   *  behind viewport detection — use for content-critical, high-stakes
   *  sections (the enquiry form, about copy) where a missed IntersectionObserver
   *  firing must never leave real content invisible. */
  trigger?: "scroll" | "mount";
}) {
  const reduceMotion = useReducedMotion();
  const initial = { opacity: 0, y: reduceMotion ? 0 : y };
  const target = { opacity: 1, y: 0 };

  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={target}
        transition={{ duration: 0.6, delay, ease: EASE_OUT }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={target}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export function StaggerGroup({
  children,
  className,
  once = true,
  trigger = "scroll",
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
  /** See Reveal's `trigger` prop — "mount" guarantees visibility without
   *  depending on viewport-intersection timing. */
  trigger?: "scroll" | "mount";
}) {
  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}
