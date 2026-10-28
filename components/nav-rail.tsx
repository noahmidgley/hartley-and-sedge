"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { STOPS } from "@/lib/content";

const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

export function NavRail() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const trail = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  useEffect(() => {
    const sections = STOPS.map((s) => document.getElementById(s.id));
    let raf = 0;

    const compute = () => {
      const line = window.innerHeight * 0.45;
      let idx = -1;
      for (let i = 0; i < sections.length; i++) {
        const el = sections[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= line) idx = i;
      }
      setActiveIndex(idx);
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 grain bg-cover text-ink-on-cover">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink-on-cover md:text-xl"
        >
          Hartley <span className="text-accent">&amp;</span> Sedge
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {STOPS.map((stop, idx) => (
            <NavLink key={stop.id} stop={stop} state={stopState(idx, activeIndex)} />
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-expanded={drawerOpen}
          aria-label="Open the plan"
          className="flex items-center gap-2 font-label text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-on-cover-soft md:hidden"
        >
          Plan
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 ${
              drawerOpen ? "scale-125" : "scale-100"
            }`}
          />
        </button>
      </div>

      {/* trail progress — the fading wake */}
      <div className="relative h-px w-full bg-cover-line">
        <motion.div
          className="absolute inset-y-0 left-0 origin-left bg-accent"
          style={{ scaleX: reduceMotion ? undefined : trail, width: "100%" }}
        />
      </div>

      {/* mobile fold-out plan */}
      <motion.nav
        initial={false}
        animate={{
          height: drawerOpen ? "auto" : 0,
          opacity: drawerOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: EASE_DRAWER }}
        className="overflow-hidden border-b border-cover-line md:hidden"
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {STOPS.map((stop, idx) => (
            <li key={stop.id}>
              <a
                href={`#${stop.id}`}
                onClick={() => setDrawerOpen(false)}
                className="flex items-baseline gap-3 py-2 font-body text-base"
              >
                <span className="font-label text-xs text-accent">{stop.no}</span>
                <span
                  className={
                    stopState(idx, activeIndex) === "active"
                      ? "text-ink-on-cover"
                      : "text-ink-on-cover-soft"
                  }
                >
                  {stop.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}

function stopState(idx: number, activeIndex: number): "ghost" | "visited" | "active" {
  if (activeIndex === -1) return "ghost";
  if (idx === activeIndex) return "active";
  if (idx < activeIndex) return "visited";
  return "ghost";
}

function NavLink({
  stop,
  state,
}: {
  stop: (typeof STOPS)[number];
  state: "ghost" | "visited" | "active";
}) {
  const opacity = state === "active" ? 1 : state === "visited" ? 0.72 : 0.4;

  return (
    <a
      href={`#${stop.id}`}
      className="group flex items-baseline gap-1.5 font-label text-[11px] font-semibold tracking-[0.14em] uppercase"
      style={{ opacity }}
    >
      <span className={state === "active" ? "text-accent" : "text-ink-on-cover-soft"}>
        {stop.no}
      </span>
      <span className="relative text-ink-on-cover">
        {stop.label}
        <span
          className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
            state === "active" ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </span>
    </a>
  );
}
