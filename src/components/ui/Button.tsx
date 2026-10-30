import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  color?: string;
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "solid",
  color,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center min-h-12 px-7 rounded-full font-semibold text-base text-white transition-[filter,opacity] hover:brightness-110",
    variant === "ghost" &&
      "bg-transparent text-current shadow-[inset_0_0_0_1.5px_currentColor] hover:brightness-100 hover:opacity-70",
    className,
  );

  const style = color
    ? variant === "solid"
      ? { backgroundColor: color }
      : undefined
    : undefined;

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} style={style}>
      {children}
    </button>
  );
}
