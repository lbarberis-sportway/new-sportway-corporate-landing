import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { StagePinned, type StageSlide } from "@/components/motion/StagePinned";
import { WordReveal } from "@/components/motion/WordReveal";
import { StickyCards, type StickyCard } from "@/components/motion/StickyCards";
import { SlideIn } from "@/components/motion/SlideIn";

const reparti: StageSlide[] = [
  { title: "Montagna", text: "Sci, alpinismo e freeride. Attrezzatura tecnica e sicurezza, con Ortovox.", bg: "#2F3A4B", fg: "#ffffff" },
  { title: "Ciclismo", text: "Abbigliamento tecnico e accessori per strada, gravel e ogni uscita.", bg: "#ED1C24", fg: "#ffffff" },
  { title: "Tennis", text: "Racchette, corde e abbigliamento, con il circuito Head.", bg: "#D5DBE4", fg: "#1E2735" },
  { title: "Running", text: "Scarpe scelte sul tuo passo, non sul catalogo.", bg: "#4B5A72", fg: "#ffffff" },
  { title: "Urban", text: "Sportwear dei migliori marchi, per la cittÃ .", bg: "#F3F4F6", fg: "#1E2735" },
];

const stores: StickyCard[] = [
  {
    tag: "Megastore", title: "Gravellona Toce", sub: "[Indirizzo e orari]", href: "/negozi#gravellona",
    bg: "#1E2735", fg: "#ffffff", tagColor: "#D5DBE4", subColor: "#D5DBE4",
  },
  {
    tag: "Megastore", title: "Novara Pernate", sub: "[Indirizzo e orari]", href: "/negozi#novara",
    bg: "#ED1C24", fg: "#ffffff", tagColor: "#ffffff", subColor: "#ffffff",
  },
  {
    tag: "Megastore", title: "Doccio", sub: "[Indirizzo e orari]", href: "/negozi#doccio",
    bg: "#D5DBE4", fg: "#1E2735", tagColor: "#1E2735", subColor: "#1E2735",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero
        title={["Vivi", "lo Sport."]}
        description="Oltre 8.000 metri quadrati tra Piemonte e Novarese, dalla prima uscita alla gara."
        actions={
          <>
            <Button href="/negozi" color="#4b5a72">
              Trova il tuo negozio
            </Button>
            <Button href="#reparti" variant="ghost">
              Scegli lo sport
            </Button>
          </>
        }
      />

      {/* Reparti â€” sezione pinned con crossfade guidato dallo scroll */}
      <StagePinned slides={reparti} label="I reparti Sportway" />

      {/* Staff â€” reveal parola per parola */}
      <section className="px-5 pt-44 pb-36 md:px-14">
        <WordReveal
          text="Lo staff pratica gli sport che vende. Per questo sa consigliarti lâ€™attrezzatura giusta, dalla prima uscita alla centesima."
          className="max-w-[1120px] text-[clamp(40px,5.4vw,76px)] font-semibold leading-[1.08] [letter-spacing:-0.025em]"
        />
        <div className="mt-28 grid gap-10 border-t-[1.5px] border-lake pt-9 md:grid-cols-3">
          <div><b className="dp block text-9xl md:text-[150px]">3</b></div>
          <div><b className="dp block text-[150px] leading-[0.85]">8.000</b><span className="text-lg text-steel">Metri quadrati di articoli sportivi</span></div>
          <div><b className="dp block text-[150px] leading-[0.85]">6</b><span className="text-lg text-steel">Punti vendita, dal kids allâ€™urban e al 210 Lounge</span></div>
        </div>
      </section>

      {/* Negozi â€” sticky deck */}
      <section className="px-5 pt-8 pb-24 md:px-14">
        <h2 className="dp mb-16 text-[clamp(90px,13vw,190px)]">
          Vieni a<br />trovarci
        </h2>
        <StickyCards cards={stores} />
      </section>

      {/* Eventi â€” entrata laterale Â±12vw */}
      <section className="grid md:grid-cols-2">
        <SlideIn direction="left" className="bg-pass text-lake">
          <a href="/eventi" className="flex h-full flex-col justify-between p-10 md:h-[560px] md:p-14">
            <span className="text-[19px]">Evento con iscrizione</span>
            <div>
              <h3 className="dp text-[clamp(60px,8vw,112px)]">Ortovox<br />Worn to be<br />Alive</h3>
              <p className="mt-6 text-[19px]">Riserva il tuo posto al tour.</p>
            </div>
          </a>
        </SlideIn>
        <SlideIn direction="right" className="bg-accent text-white">
          <a href="/eventi" className="flex h-full flex-col justify-between p-10 md:h-[560px] md:p-14">
            <span className="text-[19px]">Circuito 2026</span>
            <div>
              <h3 className="dp text-[clamp(60px,8vw,112px)]">Head<br />Sportway<br />Tennis Tour</h3>
              <p className="mt-6 text-[19px]">Scopri date e regolamento.</p>
            </div>
          </a>
        </SlideIn>
      </section>

      {/* Newsletter */}
      <section className="grid items-end gap-16 px-5 py-32 md:grid-cols-2 md:px-14">
        <h2 className="dp text-[clamp(70px,9vw,128px)]">Promozioni ed eventi, prima degli altri.</h2>
        <div>
          <label htmlFor="em" className="mb-2.5 block font-semibold">Indirizzo email</label>
          <div className="flex flex-wrap gap-3">
            <input
              id="em"
              type="email"
              placeholder="nome@email.it"
              className="min-h-13 min-w-52 flex-1 rounded-xl border-[1.5px] border-lake bg-white px-4.5 text-base text-lake"
            />
            <Button>Iscriviti</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
