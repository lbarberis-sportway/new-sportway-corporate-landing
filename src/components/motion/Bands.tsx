"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// Bande scorrevoli del mockup: la prima da 30% a -45% della propria larghezza,
// la seconda (outline, colore stroke parametro) in direzione opposta
export function Bands({
  text1,
  text2,
  sectionBg = "bg-accent",
  bottomStroke = "#9AA6B8",
  className,
}: {
  text1: string;
  text2: string;
  sectionBg?: string;
  bottomStroke?: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["30%", "-45%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-45%", "30%"]);

  return (
    <section ref={ref} aria-hidden className={`overflow-hidden py-16 md:py-18 ${sectionBg} ${className ?? ""}`}>
      <motion.span
        style={reduced ? undefined : { x: x1 }}
        className="dp block w-max text-[clamp(100px,15vw,210px)] leading-[0.95] text-white whitespace-nowrap md:ml-14"
      >
        {text1}
      </motion.span>
      <motion.span
        style={
          reduced
            ? undefined
            : {
                x: x2,
                color: "transparent",
                WebkitTextStroke: `1.5px ${bottomStroke}`,
              }
        }
        className="dp block w-max text-[clamp(100px,15vw,210px)] leading-[0.95] whitespace-nowrap md:ml-14"
      >
        {text2}
      </motion.span>
    </section>
  );
}
