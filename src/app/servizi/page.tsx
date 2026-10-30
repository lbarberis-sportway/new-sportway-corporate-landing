import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/CtaSection";
import { ServiceAccordion } from "@/components/ServiceAccordion";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Noleggio sci e snowboard, laboratorio, bootfitting, officina bike, incordatura tennis, Team Line: i servizi Sportway.",
};

export default function ServiziPage() {
  return (
    <main>
      <Hero
        title={["Servizi."]}
        description="Oltre ai prodotti, i servizi completi per lo sport in negozio e online. Scegli quello che fa per te."
      />

      <section className="px-5 py-[110px] pb-32 md:px-14">
        <h2 className="dp mb-10 text-[clamp(70px,9vw,130px)]">Scegli un servizio</h2>
        <ServiceAccordion />
      </section>

      <CtaSection
        title="Ti serve un servizio?"
        actions={<Button href="/contatti">Scrivi all’assistenza</Button>}
      >
        Scrivi all’assistenza e ti rispondiamo presto: assistenza@sportway.net.
      </CtaSection>
    </main>
  );
}
