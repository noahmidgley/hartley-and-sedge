import { Reveal } from "./reveal";

export function SectionHeading({
  title,
  intro,
  light = false,
  trigger = "scroll",
}: {
  title: string;
  intro?: string;
  light?: boolean;
  trigger?: "scroll" | "mount";
}) {
  return (
    <Reveal className="max-w-2xl" trigger={trigger}>
      <h2
        className={`font-display text-3xl font-semibold tracking-tight md:text-[2.75rem] ${
          light ? "text-ink-on-cover" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 font-body text-lg ${
            light ? "text-ink-on-cover-soft" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
