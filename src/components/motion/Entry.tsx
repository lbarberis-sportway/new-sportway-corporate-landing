"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

// Entrata come nel mockup: opacity .2, y 70, scale .95 → none durante lo scroll
export function Entry({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0.2, y: 70, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
