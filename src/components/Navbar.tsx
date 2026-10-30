"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/negozi", label: "Negozi" },
  { href: "/eventi", label: "Eventi" },
  { href: "/marchi", label: "Marchi" },
  { href: "/promozioni", label: "Promozioni" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Principale"
      className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-7 md:px-14 text-white"
    >
      <Link href="/" className="dp text-4xl">
        Sportway
      </Link>
      <ul className="hidden gap-9 text-[15px] md:flex">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={cn(
                "transition-opacity duration-200",
                pathname === l.href
                  ? "opacity-100 [box-shadow:0_2px_0_#8E9BB0] pb-1.5"
                  : "opacity-80 hover:opacity-100",
              )}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button href="#" color="#4b5a72">
        Shop TeamLine
      </Button>
    </nav>
  );
}
