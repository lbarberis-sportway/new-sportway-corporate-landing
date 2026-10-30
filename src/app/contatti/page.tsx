import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CtaSection } from "@/components/CtaSection";
import { ContactForm } from "@/components/ContactForm";
import { StoreCards } from "@/components/StoreCards";
import { negozi } from "@/content/negozi";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Scrivici, passa in negozio o chiamaci: le vie di contatto del team Sportway, tra Piemonte e Lombardia.",
};

const recapiti = [
  { via: "Email", d: ["assistenza@sportway.net"] },
  { via: "Telefono", d: ["Gravellona Toce 0323 865206", "Novara Pernate 0321 636340", "Doccio 0163 028083"] },
  { via: "Sede legale", d: ["Sportway Srl", "28883 Gravellona Toce (VB)"] },
];

export default function ContattiPage() {
  return (
    <main>
      <Hero
        title={["Contatti."]}
        description="Scrivici, passa in negozio o chiamaci: siamo qui per aiutarti."
      />

      <section className="px-5 py-[110px] pb-32 md:px-14">
        <div className="grid items-start gap-14 md:grid-cols-[minmax(0,480px)_minmax(0,1fr)]">
          <div className="md:sticky md:top-10">
            <h2 className="dp mb-8 text-[clamp(60px,8vw,110px)]">Scrivici.</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="dp mb-10 text-[clamp(48px,6vw,96px)]">Passa in negozio</h2>
            <StoreCards negozi={negozi} layout="card" className="mb-24" />
            <div className="grid gap-10">
              {recapiti.map((r) => (
                <div key={r.via}>
                  <b className="dp mb-3 block text-[clamp(64px,8vw,120px)] leading-[0.85]">{r.via}</b>
                  {r.d.map((line) => (
                    <p key={line} className="m-0 text-[21px] leading-[1.45]">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ti aspettiamo."
        actions={<a href="mailto:assistenza@sportway.net" className="inline-flex min-h-12 items-center rounded-full bg-white px-7 text-base font-semibold text-lake transition-[filter] hover:brightness-100 hover:opacity-90">Scrivi all’assistenza</a>}
      >
        Rispondiamo al più presto — di solito entro un giorno lavorativo.
      </CtaSection>
    </main>
  );
}
