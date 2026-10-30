import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import type { Negozio } from "@/content/negozi";

type Layout = "full" | "card";

// Schede punto vendita: "full" a tutta larghezza (pagina negozi),
// "card" con titolo minore e angoli arrotondati (pagina contatti)
export function StoreCards({
  negozi,
  layout = "full",
  className,
}: {
  negozi: Negozio[];
  layout?: Layout;
  className?: string;
}) {
  return (
    <div className={className}>
      {negozi.map((n) => (
        <article
          key={n.id}
          id={n.id}
          className={cn(n.bg, layout === "card" && "mb-10 rounded-[28px]", "flex min-h-[420px] flex-col justify-between p-7 md:p-13")}
        >
          <span className="text-[19px]">{n.label}</span>
          <div>
            <h2 className="dp mb-11 mt-6 text-[clamp(70px,8vw,112px)]">{n.name}</h2>
            <div className="grid gap-7 text-[17px] leading-[1.45] md:grid-cols-3">
              <div>
                <b className="mb-2 block">Indirizzo</b>
                {n.indirizzo.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </div>
              <div>
                <b className="mb-2 block">Orari</b>
                {n.orari.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </div>
              <div>
                <b className="mb-2 block">{n.telefono ? "Telefono" : "Contatti"}</b>
                {n.telefono ?? "[Telefono]"}
              </div>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              {n.maps && (
                <Button href={`https://www.google.com/maps/search/?api=1&query=${n.maps}`} variant="ghost">
                  Indicazioni
                </Button>
              )}
              {n.telefono && (
                <Button href={`tel:${n.telefono.replace(/\s/g, "")}`} variant="ghost">
                  Chiama
                </Button>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
