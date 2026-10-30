"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export type FeaturedEvent = {
  label: string;
  title: string[];
  cta: string;
  bg: string;
  fg: string;
};

// Sezione pinned come nel mockup: 1800px di pista sticky, la track di card
// scorre in orizzontale tra il 31% e il 69% del progresso, con barra che si riempie
export function EventsPinned({ events }: { events: FeaturedEvent[] }) {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Il mockup scorre la track fino a calc(-100% + 100vw): serve la larghezza
  // della track in px, ricalcolata al resize
  const [overflow, setOverflow] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setOverflow(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const delta = useTransform(scrollYProgress, [0.31, 0.69], [0, 1]);
  const trackX = useTransform(delta, (v) => -overflow * v);
  const barScale = delta;

  if (reduced) {
    return (
      <section aria-label="Eventi in evidenza" className="bg-ice px-5 py-16 md:px-14">
        <div className="flex gap-7 overflow-x-auto">
          {events.map((ev) => (
            <EventCard key={ev.label} event={ev} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} aria-label="Eventi in evidenza" className="relative h-[1800px] bg-ice">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x: trackX }}
          className="flex w-max gap-7 px-5 md:px-14"
        >
          {events.map((ev) => (
            <EventCard key={ev.label} event={ev} />
          ))}
        </motion.div>
        <div
          className="absolute right-5 bottom-10 left-5 h-[3px] rounded-sm bg-pass md:right-14 md:left-14"
          aria-hidden
        >
          <motion.i
            style={{ scaleX: barScale, transformOrigin: "left" }}
            className="block h-full rounded-sm bg-accent"
          />
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: FeaturedEvent }) {
  return (
    <article
      style={{ backgroundColor: event.bg, color: event.fg }}
      className="flex h-[600px] w-[min(880px,86vw)] flex-none flex-col justify-between rounded-[28px] p-7 md:p-13"
    >
      <span className="text-[19px]">{event.label}</span>
      <div>
        <h2 className="dp mb-10 text-[clamp(60px,8vw,112px)]">
          {event.title.map((t) => (
            <span key={t} className="block">
              {t}
            </span>
          ))}
        </h2>
        <div className="grid gap-6 text-[17px] leading-[1.4] md:grid-cols-3">
          <div><b className="mb-2 block">Data</b><span>[Data]</span></div>
          <div><b className="mb-2 block">Luogo</b><span>[Luogo]</span></div>
          <div><b className="mb-2 block">Posti</b><span>[Posti]</span></div>
        </div>
      </div>
    </article>
  );
}
