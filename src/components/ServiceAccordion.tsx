"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { gruppi, servizi } from "@/content/servizi";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

// Accordion servizi come nel mockup: lista a sinistra raggruppata per tema,
// card dettaglio sticky a destra animata (dpin), colori che ruotano nella palette
const PALETTE = [
  { bg: "#1E2735", fg: "#ffffff" },
  { bg: "#ED1C24", fg: "#ffffff" },
  { bg: "#D5DBE4", fg: "#1E2735" },
  { bg: "#2F3A4B", fg: "#ffffff" },
  { bg: "#4B5A72", fg: "#ffffff" },
  { bg: "#ffffff", fg: "#1E2735" },
];

export function ServiceAccordion() {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();

  const idx = (s: (typeof servizi)[number]) => servizi.indexOf(s);
  return (
    <div className="grid text-lake md:grid-cols-[minmax(0,1fr)_600px] md:gap-14">
      <div>
        {gruppi.map((gruppo) => (
          <div key={gruppo.titolo}>
            <p className="mt-10 mb-1 text-[15px] font-semibold text-steel first:mt-0">{gruppo.titolo}</p>
            {gruppo.servizi.map((s) => {
              const i = idx(s);
              const active = i === selected;
              return (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-expanded={active}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 border-b-[1.5px] border-lake py-3.5 text-left transition-[color,padding] duration-200 hover:text-accent hover:pl-3.5 dp text-[clamp(28px,4.2vw,60px)] leading-[0.95]",
                    active && "text-accent pl-5",
                  )}
                >
                  {s.label}
                  <span
                    className={cn(
                      "font-sans font-medium text-[30px] transition-[opacity,transform] duration-300",
                      active
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2.5 opacity-0",
                    )}
                    aria-hidden
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div
        className={cn(
          "mt-10 md:sticky md:top-10 md:order-last md:mt-0 md:h-[640px]",
        )}
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          {(() => {
            const i = selected;
            const s = servizi[i];
            const color = PALETTE[i % PALETTE.length];
            return (
              <motion.div
                key={i}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                className={cn(
                  "flex flex-col justify-between gap-7 md:h-[640px] rounded-[28px] p-7 md:p-12",
                  color.bg === "#ffffff" && "shadow-[inset_0_0_0_1.5px_#1E2735]",
                )}
                style={{ backgroundColor: color.bg, color: color.fg }}
              >
                <div>
                  <span className="text-[18px]">{s.tag}</span>
                  <h3 className="dp my-5 mb-6 text-[clamp(70px,7vw,104px)]">{s.title}</h3>
                  <p className="max-w-[520px] text-[19px] leading-[1.45]">{s.desc}</p>
                </div>
                <div>
                  <div className="mb-7 grid gap-6 text-base leading-[1.45] md:grid-cols-2">
                    <div><b className="mb-1.5 block">Dove</b>{s.dove}</div>
                    <div><b className="mb-1.5 block">{s.infoLabel}</b>{s.info}</div>
                  </div>
                  <Button href="/contatti" variant="ghost">
                    Chiedi in negozio
                  </Button>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
}
