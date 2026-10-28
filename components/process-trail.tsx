"use client";

import { PROCESS_STEPS } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./reveal";
import { motion } from "motion/react";
import {
  ConsultationIcon,
  MasterplanIcon,
  PlantingIcon,
  BuildIcon,
  AftercareIcon,
} from "./process-icons";

const ICONS = [ConsultationIcon, MasterplanIcon, PlantingIcon, BuildIcon, AftercareIcon];

export function ProcessTrail() {
  return (
    <section id="trail" className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading
          title="Five stages, one conversation at a time"
          intro="Every commission follows the same route, whether it takes three months or three years. Nothing is skipped, and nothing is rushed to fit a launch date."
        />

        <StaggerGroup className="mt-20 flex flex-col gap-y-16 md:flex-row md:gap-x-6 md:gap-y-0">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = ICONS[idx];
            return (
              <motion.div key={step.no} variants={staggerItem} className="relative flex-1">
                {idx > 0 && (
                  <svg
                    aria-hidden
                    viewBox="0 0 12 10"
                    className="absolute top-8 left-0 hidden h-2.5 w-3 -translate-x-1/2 text-ink/30 md:block"
                  >
                    <path d="M0 0L12 5L0 10Z" fill="currentColor" />
                  </svg>
                )}

                {/* the part: a drawn plate, like a specimen laid out on the page */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-ink/25 bg-paper-deep text-ink md:mx-0">
                  <span className="h-7 w-7">
                    <Icon />
                  </span>
                </div>

                {/* the leader line: a call-out, not a decoration */}
                <svg
                  aria-hidden
                  viewBox="0 0 2 28"
                  className="mx-auto h-7 w-2 text-ink/35 md:mx-0"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="22"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <path d="M1 28L-1.5 22.5H3.5Z" fill="currentColor" />
                </svg>

                <div className="text-center md:text-left">
                  <span className="font-display text-2xl font-semibold text-accent/90">
                    {step.no}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs font-body text-sm text-ink-soft md:mx-0">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
