import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/CtaSection";
import { Bands } from "@/components/motion/Bands";
import { BrandsExplorer } from "@/components/BrandsExplorer";
import { categorieMarchi } from "@/content/brands";

export const metadata: Metadata = {
  title: "Marchi",
  description:
    "I migliori marchi di sportwear e articoli sportivi per uomo, donna e bambino: 19 reparti, oltre 380 nomi. Sportway.",
};

const totMarchi = categorieMarchi.reduce((n, c) => n + c.brands.length, 0);

export default function MarchiPage() {
  return (
    <main>
      <Hero
        title={["Marchi."]}
        description={`I migliori marchi di sportwear e articoli sportivi per uomo, donna e bambino. Più di ${totMarchi} nomi, ${categorieMarchi.length} reparti.`}
      />

      {/* Bande scorrevoli guidate dallo scroll, popolate dai brand */}
      <Bands
        text1="Puma Adidas Salomon Asics Head Ortovox"
        text2="Patagonia Napapijri Colmar Dynafit Wilson Montura"
        sectionBg="bg-lake"
        bottomStroke="#9AA6B8"
      />

      <section className="px-5 py-24 md:px-14">
        <BrandsExplorer />
      </section>

      <CtaSection
        title="Non trovi il tuo marchio?"
        actions={<Button href="/contatti">Scrivi all’assistenza</Button>}
      >
        Scrivi all’assistenza: ti diciamo se è disponibile nei nostri negozi. assistenza@sportway.net.
      </CtaSection>
    </main>
  );
}
