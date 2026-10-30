import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/CtaSection";
import { StoreCards } from "@/components/StoreCards";
import { negozi } from "@/content/negozi";

export const metadata: Metadata = {
  title: "Negozi",
  description:
    "Sei punti vendita tra Piemonte e Lombardia — Sportway. Megastore e negozi specializzati.",
};

export default function NegoziPage() {
  return (
    <main>
      <Hero
        title={["Trova il tuo", "Sportway."]}
        description="Sei punti vendita tra Piemonte e Novarese. Scegli quello più vicino a te."
      />

      <section className="px-5 py-[110px] pb-30 md:px-14">
        <StoreCards negozi={negozi} layout="full" />
      </section>

      <CtaSection title="Non riesci a passare?" actions={<Button href="/contatti">Scrivi all’assistenza</Button>}>
        Ordina dal sito e ricevi a casa. Per consigli sull’attrezzatura
        scrivi all’assistenza: assistenza@sportway.net.
      </CtaSection>
    </main>
  );
}
