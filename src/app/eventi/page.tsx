import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { EventsPinned, type FeaturedEvent } from "@/components/motion/EventsPinned";

export const metadata: Metadata = {
  title: "Eventi",
  description: "Tour e giornate con i marchi e con lo staff Sportway. Riserva il tuo posto.",
};

const eventiInEvidenza: FeaturedEvent[] = [
  {
    label: "Evento con iscrizione",
    title: ["Ortovox", "Worn to be Alive"],
    cta: "Iscriviti al tour",
    bg: "#1E2735", fg: "#ffffff",
  },
  {
    label: "Circuito 2026",
    title: ["Head Sportway", "Tennis Tour"],
    cta: "Scopri date e regolamento",
    bg: "#ED1C24", fg: "#ffffff",
  },
  {
    label: "Prossimo appuntamento",
    title: ["[Nome evento]"],
    cta: "Iscriviti",
    bg: "#D5DBE4", fg: "#1E2735",
  },
];

const calendario = [
  { data: "[Data]", title: "Ortovox Worn to be Alive", luogo: "[Luogo]" },
  { data: "[Data]", title: "Head Sportway Tennis Tour", luogo: "[Luogo]" },
  { data: "[Data]", title: "[Nome evento]", luogo: "[Luogo]" },
  { data: "[Data]", title: "[Nome evento]", luogo: "[Luogo]" },
];

export default function EventiPage() {
  return (
    <main>
      <Hero
        title={["In", "programma."]}
        description="Tour e giornate con i marchi e con lo staff Sportway. Riserva il tuo posto."
      />

      {/* Eventi in evidenza — pinned orizzontale con barra di avanzamento */}
      <EventsPinned events={eventiInEvidenza} />

      {/* Calendario */}
      <section className="px-5 py-[110px] pb-30 md:px-14">
        <h2 className="dp mb-14 text-[clamp(80px,11vw,160px)]">Calendario</h2>
        <div className="border-t-[1.5px] border-lake">
          {calendario.map((e, i) => (
            <a key={`${e.title}-${i}`} href="#" className="group grid items-baseline justify-between gap-4 border-b-[1.5px] border-lake py-6 md:grid-cols-[120px_1fr_auto]">
              <span>{e.data}</span>
              <span className="dp text-[clamp(30px,4vw,56px)] transition-colors duration-200 group-hover:text-accent">{e.title}</span>
              <span className="text-steel">{e.luogo}</span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grid items-end gap-14 bg-lake px-5 py-30 text-white md:grid-cols-2 md:px-14">
        <h2 className="dp text-[clamp(70px,9vw,130px)]">Resta aggiornato.</h2>
        <div>
          <p className="mb-7 text-[21px] leading-[1.4] text-pass">
            Promozioni ed eventi, prima degli altri. Per informazioni sugli eventi
            scrivi a assistenza@sportway.net.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/promozioni">Iscriviti alla newsletter</Button>
            <Button href="/negozi" variant="ghost">Vedi i negozi</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
