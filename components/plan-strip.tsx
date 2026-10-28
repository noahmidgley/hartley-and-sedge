import { STOPS } from "@/lib/content";
import { IrisReveal } from "./iris-reveal";

const TEASERS: Record<string, string> = {
  gardens: "Six gardens, walked and worked over a decade.",
  trail: "Consultation to aftercare, in five stages.",
  founder: "Eleanor Hartley, and how the studio began.",
  "in-print": "Press, awards, and the people we've designed for.",
  visit: "Begin with a conversation about your own ground.",
};

export function PlanStrip() {
  return (
    <IrisReveal>
      <section className="grain relative bg-cover py-16 text-ink-on-cover md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="mb-10 flex flex-col gap-6 border-b border-cover-line pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                A plan of the ground ahead
              </h2>
            </div>
            <p className="max-w-sm font-body text-ink-on-cover-soft">
              Five stops, in order — or skip ahead. The trail is yours to
              walk at whatever pace you like.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {STOPS.map((stop, idx) => (
              <li key={stop.id} className="relative">
                <a href={`#${stop.id}`} className="group block">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xl font-semibold text-accent">
                      {stop.no}
                    </span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-cover-line transition-colors duration-300 group-hover:bg-accent"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                    {stop.label}
                  </h3>
                  <p className="mt-2 font-body text-sm text-ink-on-cover-soft">
                    {TEASERS[stop.id]}
                  </p>
                </a>
                {idx < STOPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-2.5 -right-3 hidden h-px w-6 bg-cover-line lg:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </IrisReveal>
  );
}
