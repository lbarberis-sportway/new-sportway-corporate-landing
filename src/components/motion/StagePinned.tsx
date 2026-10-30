"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

export type StageSlide = {
  title: string;
  text: string;
  bg: string;
  fg: string;
};

// Geometria automatica per N slide: passo d = 0.7w e finestra w = 0.98/(0.7N+0.3).
// L'hold di ogni slide (15%–85%) si sovrappone a sufficienza con le vicine
// per un crossfade sempre continuo, senza vuoti.
function computeGeometry(total: number) {
  const w = 0.98 / (0.7 * total + 0.3);
  const d = 0.7 * w;
  return { w, d };
}

function useSlideOpacity(
  p: MotionValue<number>,
  i: number,
  total: number,
  w: number,
) {
  const s = i * 0.7 * w;
  // Tutte le varianti calcolate sempre (nessun hook condizionale):
  const first = useTransform(p, [s + 0.85 * w, s + w], [1, 0]);
  const last = useTransform(p, [s, s + 0.15 * w], [0, 1]);
  const mid = useTransform(p, [s, s + 0.15 * w, s + 0.85 * w, s + w], [0, 1, 1, 0]);
  if (i === 0) return first;
  if (i === total - 1) return last;
  return mid;
}

function Slide({
  slide,
  i,
  total,
  w,
  p,
}: {
  slide: StageSlide;
  i: number;
  total: number;
  w: number;
  p: MotionValue<number>;
}) {
  const s = i * 0.7 * w;
  const e = s + w;
  const opacity = useSlideOpacity(p, i, total, w);
  const x = useTransform(p, [s, e], ["4%", "-4%"]);

  return (
    <motion.div
      style={{
        opacity,
        backgroundColor: slide.bg,
        color: slide.fg,
      }}
      className="absolute inset-0 flex flex-col justify-center overflow-hidden px-5 py-24 md:px-14"
    >
      <motion.h2 style={{ x }} className="dp text-[clamp(64px,11vw,160px)]">
        {slide.title}
      </motion.h2>
      <p className="mt-7 max-w-[520px] text-[clamp(19px,2vw,24px)] leading-[1.35]">{slide.text}</p>
    </motion.div>
  );
}

// Stage pinned generico: usato per i reparti (Home) e le parole chiave (Chi siamo)
export function StagePinned({
  slides,
  label,
  height = "h-[350vh]",
}: {
  slides: StageSlide[];
  label?: string;
  height?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const { w } = computeGeometry(slides.length);

  if (reduced || slides.length === 0) {
    return (
      <section aria-label={label ?? "Sezione"}>
        {slides.map((r) => (
          <div
            key={r.title}
            style={{ backgroundColor: r.bg, color: r.fg }}
            className="px-5 py-36 md:px-14"
          >
            <h2 className="dp text-[clamp(64px,11vw,160px)]">{r.title}</h2>
            <p className="mt-7 max-w-[520px] text-[clamp(19px,2vw,24px)] leading-[1.35]">{r.text}</p>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section ref={ref} aria-label={label ?? "Sezione"} className={`relative ${height}`}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {label && (
          <p className="absolute top-24 left-5 z-10 m-0 text-[17px] font-medium text-white mix-blend-difference md:left-14">
            {label}
          </p>
        )}
        {slides.map((r, i) => (
          <Slide key={r.title} slide={r} i={i} total={slides.length} w={w} p={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
