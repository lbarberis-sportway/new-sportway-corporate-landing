"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { useState } from "react";
import { categorieMarchi } from "@/content/brands";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.012 } },
};
const item: Variants = {
  hidden: { opacity: 0.14, y: -14, x: -6 },
  show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] } },
};

// Indice sticky + categorie accordion, come nel mockup Marchi:
// i link laterali aprono e scrollano alla categoria con il plus/minus animato
export function BrandsExplorer() {
  const [open, setOpen] = useState<string | null>(null);
  const reduced = useReducedMotion();

  const go = (slug: string) => {
    setOpen(slug);
    requestAnimationFrame(() => {
      document.getElementById(`cat-${slug}`)?.scrollIntoView({ block: "start" });
    });
  };

  return (
    <div className="grid items-start gap-14 md:grid-cols-[360px_minmax(0,1fr)]">
      <nav aria-label="Reparti" className="hidden md:block">
        <ul className="sticky top-12 list-none p-0">
          {categorieMarchi.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                onClick={() => go(c.slug)}
                className={cn(
                  "flex w-full cursor-pointer items-baseline justify-between gap-4 border-b-[1.5px] border-lake py-2 text-left text-[16px] transition-colors hover:text-accent",
                  open === c.slug && "text-accent",
                )}
              >
                <span>{c.name}</span>
                <span className="text-[14px] text-steel">{c.brands.length}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-lake">
        {categorieMarchi.map((c) => {
          const isOpen = open === c.slug;
          return (
            <details
              key={c.slug}
              id={`cat-${c.slug}`}
              open={isOpen}
              onToggle={(e) => {
                setOpen((e.currentTarget as HTMLDetailsElement).open ? c.slug : null);
              }}
              className="group scroll-mt-36 border-t-2 border-lake last:border-b-2"
            >
              <summary className="flex cursor-pointer list-none flex-wrap items-center gap-5 py-6 transition-colors group-open:text-accent hover:text-accent [&::-webkit-details-marker]:hidden">
                <h2 className="dp text-[clamp(44px,5vw,72px)]">{c.name}</h2>
                <span className="text-[16px] text-steel">{c.brands.length} marchi</span>
                <b
                  aria-hidden
                  className="relative ml-auto h-12 w-12 flex-none rounded-full shadow-[inset_0_0_0_2px_currentColor]"
                >
                  <span className="absolute inset-x-[14px] top-1/2 h-0.5 -translate-y-1/2 bg-current" />
                  <span
                    className={cn(
                      "absolute inset-x-[14px] top-1/2 h-0.5 -translate-y-1/2 bg-current transition-transform duration-300",
                      isOpen ? "rotate-0" : "rotate-90",
                    )}
                  />
                </b>
              </summary>

              <motion.div
                key={isOpen ? "open" : "closed"}
                initial={reduced ? undefined : "hidden"}
                animate="show"
                variants={container}
                className="pb-14 pt-1"
              >
                <motion.p
                  className="m-0 text-[clamp(30px,3.2vw,44px)] font-extrabold uppercase leading-[1.12] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.brands.map((b, i) => (
                    <motion.span
                      key={b}
                      variants={item}
                      className="cursor-default transition-colors hover:text-accent"
                    >
                      {b}
                      {i < c.brands.length - 1 && <i className="mx-[0.18em] not-italic font-medium text-accent">/</i>}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
