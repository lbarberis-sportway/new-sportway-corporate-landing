import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { Bands } from "@/components/motion/Bands";
import { Entry } from "@/components/motion/Entry";

export const metadata = {
  title: "Promozioni",
  description: "Sconti sui marchi che vendiamo, in negozio e online. Finché dura la promozione.",
};

const chips = ["Tutte", "Montagna", "Ciclismo", "Tennis", "Running", "Urban"];

const promos = [
  { brand: "[Marchio]", pct: "-30%", bg: "#1E2735", fg: "#ffffff", big: true },
  { brand: "[Marchio]", pct: "-XX%", bg: "#ED1C24", fg: "#ffffff" },
  { brand: "[Marchio]", pct: "-XX%", bg: "#D5DBE4", fg: "#1E2735" },
  { brand: "[Marchio]", pct: "-XX%", bg: "#ffffff", fg: "#1E2735" },
];

export default function PromozioniPage() {
  return (
    <main>
      <Hero
        title={["Promozioni."]}
        description="Sconti sui marchi che vendiamo, in negozio e online. Finché dura la promozione."
      />

      {/* Bande scorrevoli guidate dallo scroll */}
      <Bands
        text1="Sconti Occasioni Novità Sconti Occasioni"
        text2="Novità Occasioni Sconti Novità Occasioni"
      />

      {/* In corso */}
      <section className="px-5 py-[110px] pb-30 md:px-14">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <h2 className="dp text-[clamp(80px,11vw,160px)]">In corso</h2>
          <div className="flex flex-wrap gap-2.5">
            {chips.map((c, i) => (
              <a key={c} href="#" className={`rounded-full px-5 py-2 text-[15px] font-medium ${i === 0 ? "bg-lake text-white" : "bg-white text-lake shadow-[inset_0_0_0_1.5px_#1E2735]"}`}>
                {c}
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {promos.map((p, i) => (
            <Entry
              key={i}
              style={{ backgroundColor: p.bg, color: p.fg }}
              className={p.big ? "md:col-span-2 md:row-span-2 flex min-h-[420px] flex-col justify-between p-10" : "flex min-h-[240px] flex-col justify-between p-10"}
            >
              <span className="text-lg">{p.brand}</span>
              <div>
                <div className="dp text-[clamp(60px,7vw,110px)]">{p.pct}</div>
                <h3 className="mt-5 mb-2 text-2xl font-semibold leading-[1.15]">[Titolo promozione]</h3>
                <p className="text-base">[Valida fino al]</p>
                <a href="#" className="mt-4 inline-block font-semibold underline underline-offset-4">Scopri l’offerta</a>
              </div>
            </Entry>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grid items-end gap-14 bg-lake px-5 py-30 text-white md:grid-cols-2 md:px-14">
        <h2 className="dp text-[clamp(70px,9vw,130px)]">Non perdere le offerte.</h2>
        <div>
          <p className="mb-7 text-[21px] leading-[1.4] text-pass">
            Iscriviti alla newsletter e ricevi promozioni ed eventi prima degli altri.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/">Iscriviti alla newsletter</Button>
            <Button href="/negozi" variant="ghost">Vedi i negozi</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
