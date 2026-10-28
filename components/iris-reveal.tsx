"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

/**
 * The site's one signature transition: the next "room" irises open,
 * echoing the rubber-hose-cel raise in the direction contract.
 * Used once, at the hero -> plan-strip boundary, never scattered.
 */
export function IrisReveal({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ clipPath: "circle(0vmax at 50% 0%)" }}
      whileInView={{ clipPath: "circle(150vmax at 50% 0%)" }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 1.1, ease: EASE_IN_OUT }}
    >
      {children}
    </motion.div>
  );
}
