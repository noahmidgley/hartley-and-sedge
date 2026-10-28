import { BRAND } from "@/lib/content";
import { Reveal } from "./reveal";
import { EnquiryForm } from "./enquiry-form";

export function VisitSection() {
  return (
    <section id="visit" className="scroll-mt-16 bg-cover py-20 text-ink-on-cover md:scroll-mt-20 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal trigger="mount">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-[2.75rem]">
            Begin with a conversation about your own ground.
          </h2>
          <p className="mt-5 max-w-md font-body text-lg text-ink-on-cover-soft">
            Every commission starts the same way — not with a proposal, but
            with a walk around the garden as it is now. There&apos;s no charge for
            that first conversation.
          </p>

          <dl className="mt-10 flex flex-col gap-6 border-t border-cover-line pt-8 font-body text-base">
            <div>
              <dt className="font-label text-[10px] font-semibold tracking-[0.12em] text-ink-on-cover-soft uppercase">
                Studio
              </dt>
              <dd className="mt-1">
                {BRAND.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
              <div>
                <dt className="font-label text-[10px] font-semibold tracking-[0.12em] text-ink-on-cover-soft uppercase">
                  Telephone
                </dt>
                <dd className="mt-1">
                  <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                    {BRAND.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-label text-[10px] font-semibold tracking-[0.12em] text-ink-on-cover-soft uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${BRAND.email}`} className="hover:text-accent">
                    {BRAND.email}
                  </a>
                </dd>
              </div>
            </div>
            <p className="max-w-sm text-ink-on-cover-soft italic">
              By appointment — consultations begin with a visit to your
              garden, not the studio.
            </p>
          </dl>
        </Reveal>

        <Reveal delay={0.1} trigger="mount">
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
