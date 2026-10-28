"use client";

import Image from "next/image";
import { PROJECTS, img } from "@/lib/content";
import { StaggerGroup, staggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";
import { motion } from "motion/react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function GardensGrid() {
  return (
    <section id="gardens" className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading
          title="Six rooms from the last decade"
          intro="Every garden is different by design, never by accident. A selection from recent commissions across Gloucestershire, Oxfordshire and Wiltshire."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.name}
              variants={staggerItem}
              className="group border-t border-ink/15 pt-6"
            >
              <a href="#visit" className="block">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={{ rest: { y: 0 }, hover: { y: -6 } }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                  className="border border-ink/20 bg-paper p-1.5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
                    <Image
                      src={img(project.image, 1400)}
                      alt={`${project.summary} at ${project.name}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute top-3 left-3 border border-paper/40 bg-cover/90 px-2.5 py-1 font-label text-[10px] font-semibold tracking-[0.14em] text-ink-on-cover uppercase">
                      No. {project.no}
                    </span>
                    <motion.span
                      aria-hidden
                      variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                      transition={{ duration: 0.4, ease: EASE_OUT }}
                      className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-accent"
                    />
                  </div>
                </motion.div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-body text-sm text-ink-soft">
                      {project.place}
                    </p>
                  </div>
                  <span className="font-label text-xs font-semibold text-ink-soft">
                    {project.year}
                  </span>
                </div>

                <p className="mt-3 font-body text-base text-ink">{project.summary}</p>
                <p className="mt-2 max-w-md font-body text-sm text-ink-soft">
                  {project.detail}
                </p>
              </a>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}