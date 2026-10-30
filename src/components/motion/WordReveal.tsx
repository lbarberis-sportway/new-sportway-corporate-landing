"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

// Reveal parola per parola come nel mockup: ogni parola scorre la propria
// finestra (larghezza 55% del progresso, stagger 2%) da opacity .14 a 1
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.1"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={`${word}-${i}`}
          progress={scrollYProgress}
          index={i}
          last={i === words.length - 1}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({
  progress,
  index,
  last,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  last: boolean;
  children: string;
}) {
  const reduced = useReducedMotion();
  const opacity = useTransform(progress, [index * 0.02, 0.55 + index * 0.02], [0.14, 1]);
  return (
    <motion.span style={reduced ? undefined : { opacity }}>
      {children}
      {last ? "" : " "}
    </motion.span>
  );
}
