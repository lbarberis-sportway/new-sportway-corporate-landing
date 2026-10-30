"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

// Entrata laterale come nel mockup: ±12vw → 0 quando la card entra in vista
export function SlideIn({
  children,
  direction = "left",
  className,
  style,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
  style?: CSSProperties;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { x: direction === "left" ? "-12vw" : "12vw" }}
      whileInView={{ x: 0 }}
      viewport={{ amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
