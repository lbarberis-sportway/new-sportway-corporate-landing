"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";

export type StickyCard = {
  tag: string;
  title: string;
  sub: string;
  href: string;
  bg: string;
  fg: string;
  tagColor: string;
  subColor: string;
};

// Sticky deck come nel mockup: ogni card è sticky con offset crescente
// (40/68/96px) e entra con translateY(90px) scale(.93) → none
export function StickyCards({ cards, className }: { cards: StickyCard[]; className?: string }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={className}>
      {cards.map((c, i) => (
        <motion.a
          key={c.title}
          href={c.href}
          initial={reduced ? false : { y: 90, scale: 0.93 }}
          whileInView={{ y: 0, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="sticky mb-20 flex h-[540px] flex-col justify-between rounded-[28px] p-7 md:p-13"
          style={{
            top: 40 + i * 28,
            backgroundColor: c.bg,
            color: c.fg,
          }}
        >
          <span className="text-[19px]" style={{ color: c.tagColor }}>
            {c.tag}
          </span>
          <div>
            <h3 className="dp text-[clamp(70px,12vw,170px)]">{c.title}</h3>
            <p className="mt-6 text-lg" style={{ color: c.subColor }}>
              {c.sub}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
