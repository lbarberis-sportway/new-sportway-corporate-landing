"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { TopoLines } from "./TopoLines";
import type { ReactNode } from "react";

type HeroProps = {
  title: string[];
  description?: string;
  actions?: ReactNode;
};

export function Hero({ title, description, actions }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  // scroll(root) come nel mockup: valori in px rispetto allo scroll della pagina
  const { scrollY } = useScroll();

  const contentOpacity = useTransform(scrollY, [0, 640], [1, 0]);
  const contentY = useTransform(scrollY, [0, 640], [0, -80]);
  const contentScale = useTransform(scrollY, [0, 640], [1, 0.94]);
  const topoY = useTransform(scrollY, [0, 1100], [0, 140]);
  const topoScale = useTransform(scrollY, [0, 1100], [1, 1.1]);

  const contentStyle = reduced
    ? undefined
    : { opacity: contentOpacity, y: contentY, scale: contentScale };
  const topoStyle = reduced ? undefined : { y: topoY, scale: topoScale };

  return (
    <header
      ref={ref}
      className="relative h-[560px] overflow-hidden bg-accent text-white md:h-[840px]"
    >
      <motion.div style={topoStyle} className="absolute -top-[5%] left-[-5%] h-[110%] w-[110%]">
        <TopoLines className="h-full w-full [&_path]:stroke-[#3A4659] [&_path]:fill-none [&_path]:stroke-[1.3px]" />
      </motion.div>
      <motion.div
        style={contentStyle}
        className="absolute inset-x-5 bottom-16 flex flex-wrap items-end justify-between gap-10 md:inset-x-14"
      >
        <h1 className="dp text-[clamp(110px,19vw,270px)]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        {(description || actions) && (
          <div className="max-w-[380px] pb-2.5">
            {description && (
              <p className="mb-7 max-w-[360px] text-[21px] leading-[1.4] text-pass">
                {description}
              </p>
            )}
            {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
          </div>
        )}
      </motion.div>
    </header>
  );
}
