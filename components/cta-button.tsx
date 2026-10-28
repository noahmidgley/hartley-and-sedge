import type { ComponentPropsWithoutRef } from "react";

type Variant = "solid" | "outline-light" | "outline-dark";

export function CtaButton({
  variant = "solid",
  className = "",
  children,
  ...rest
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant }) {
  const base =
    "inline-flex items-center gap-2.5 rounded-none px-6 py-3.5 font-label text-[11px] font-semibold uppercase tracking-[0.14em] transition-[transform,background-color,color,border-color] duration-[160ms] ease-out active:scale-[0.97]";

  const variants: Record<Variant, string> = {
    solid: "bg-accent text-ink-on-cover hover:bg-accent-deep",
    "outline-light":
      "border border-ink-on-cover/40 text-ink-on-cover hover:border-ink-on-cover hover:bg-ink-on-cover/10",
    "outline-dark": "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
