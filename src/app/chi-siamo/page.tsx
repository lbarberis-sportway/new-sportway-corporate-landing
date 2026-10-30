import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/CtaSection";
import { StagePinned, type StageSlide } from "@/components/motion/StagePinned";
import { WordReveal } from "@/components/motion/WordReveal";
import { SlideIn } from "@/components/motion/SlideIn";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Sportway: professionisti per passione. Una rete di negozi di sport tra Novara e Verbania.",
};

const paroleChiave: StageSlide[] = [
  {
    title: "Qualità",
    text: "Solo articoli di qualità, di marchi di alto livello nella moda, nello sportwear e nell’articolo sportivo. Una scelta ampia di brand storici e di tendenza.",
    bg: "#2F3A4B", fg: "#ffffff",
  },
  {
    title: "Professionalità",
    text: "Studio e formazione continui: il personale è sempre aggiornato sulle novità dei marchi, per consigliarti al meglio il prodotto giusto.",
    bg: "#ED1C24", fg: "#ffffff",
  },
  {
    title: "Emozionalità",
    text: "Spazi divisi in aree molto diverse tra loro, per un’esperienza d’acquisto che va oltre il prodotto.",
    bg: "#D5DBE4", fg: "#1E2735",
  },
];

const strada = [
  {
    tag: "Il primo",
    title: "Novara Pernate",
    text: "Il nostro primo punto vendita. Oggi è partner di sci club, circoli di tennis, palestre, piscine, società sportive e centri riabilitativi.",
  },
  {
    tag: "Il più grande",
    title: "Gravellona Toce",
    text: "Oltre 3.600 mq di vendita dedicati a sportwear e articoli sportivi, divisi per mondi.",
  },
  {
    tag: "Agosto 2011",
    title: "Sportway Kids",
    text: "Il megastore per i più piccoli apre nel Parco Commerciale Laghi di Gravellona Toce.",
  },
  {
    tag: "Moda città",
    title: "Sportway Urban",
    text: "Interamente dedicato alla moda città, con i migliori marchi di abbigliamento.",
  },
  {
    tag: "Lounge bar",
    title: "210 Sportway Lounge",
    text: "Colazioni, pause pranzo e aperitivi nel Parco Commerciale dei Laghi, anche per cene aziendali e feste.",
  },
  {
    tag: "Il nuovo",
    title: "Doccio, Valsesia",
    text: "Un megastore di 1.500 mq, con attenzione particolare alla montagna.",
  },
];

export default function ChiSiamoPage() {
  return (
    <main>
      <Hero
        title={["Chi siamo."]}
        description="Sportway: professionisti per passione. Una rete di negozi di sport tra Novara e Verbania."
      />

      {/* Tre parole chiave — stage pinned a 3 slide */}
      <StagePinned
        slides={paroleChiave}
        label="Tre parole chiave"
        height="h-[280vh]"
      />

      {/* Frase + numeri */}
      <section className="px-5 pt-44 pb-32 md:px-14">
        <WordReveal
          text="Qualità del servizio, professionalità del personale ed emozionalità dell’ambiente: i tre punti di forza di Sportway, sempre al servizio del cliente."
          className="max-w-[1120px] text-[clamp(40px,5.4vw,76px)] font-semibold leading-[1.08] [letter-spacing:-0.025em]"
        />
        <div className="mt-28 grid gap-10 border-t-[1.5px] border-lake pt-9 md:grid-cols-3">
          <div><b className="dp block text-[150px] leading-[0.85]">1997</b><span className="text-lg text-steel">Sul territorio piemontese, azienda 100% piemontese</span></div>
          <div><b className="dp block text-[150px] leading-[0.85]">3</b><span className="text-lg text-steel">Megastore a Gravellona Toce e Novara</span></div>
          <div><b className="dp block text-[150px] leading-[0.85]">8.000</b><span className="text-lg text-steel">Più di 8.000 metri quadrati di articoli sportivi</span></div>
        </div>
      </section>

      {/* La nostra strada — timeline */}
      <section className="px-5 pb-32 md:px-14">
        <h2 className="dp mb-14 text-[clamp(80px,11vw,160px)]">La nostra<br />strada</h2>
        <div>
          {strada.map((s, i) => (
            <SlideIn
              key={s.title}
              direction="left"
              className={`grid items-baseline gap-8 border-t-2 border-lake py-7 md:grid-cols-[240px_1fr_1fr] ${i === strada.length - 1 ? "border-b-2" : ""}`}
            >
              <span className="dp text-[clamp(28px,3vw,44px)] text-accent">{s.tag}</span>
              <h3 className="dp text-[clamp(40px,4.2vw,60px)]">{s.title}</h3>
              <p className="text-[19px] leading-[1.45]">{s.text}</p>
            </SlideIn>
          ))}
        </div>
      </section>

      <CtaSection
        title="Vieni a conoscerci."
        actions={
          <>
            <Button href="/negozi">Vedi i negozi</Button>
            <Button href="mailto:assistenza@sportway.net?subject=Lavora con noi" variant="ghost">
              Lavora con noi
            </Button>
          </>
        }
      >
        Passa in uno dei nostri negozi o scrivi all’assistenza: assistenza@sportway.net.
      </CtaSection>
    </main>
  );
}
