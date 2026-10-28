import { NavRail } from "@/components/nav-rail";
import { Hero } from "@/components/hero";
import { PlanStrip } from "@/components/plan-strip";
import { GardensGrid } from "@/components/gardens-grid";
import { ProcessTrail } from "@/components/process-trail";
import { FounderSection } from "@/components/founder-section";
import { InPrint } from "@/components/in-print";
import { VisitSection } from "@/components/visit-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <NavRail />
      <main id="top">
        <Hero />
        <PlanStrip />
        <GardensGrid />
        <ProcessTrail />
        <FounderSection />
        <InPrint />
        <VisitSection />
      </main>
      <SiteFooter />
    </>
  );
}
