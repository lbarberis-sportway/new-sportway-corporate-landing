import Link from "next/link";
import { Container } from "./ui/Container";

const menu = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/negozi", label: "Negozi" },
  { href: "/eventi", label: "Eventi" },
  { href: "/marchi", label: "Marchi" },
  { href: "/promozioni", label: "Promozioni" },
] as const;

export function Footer() {
  return (
    <footer className="bg-accent px-5 pt-24 pb-9 text-white md:px-14">
      <Container pad={false}>
        <div
          aria-hidden
          className="dp mb-10 text-[clamp(110px,26vw,380px)] text-transparent"
          style={{ WebkitTextStroke: "1.5px #7D8BA0" }}
        >
          Sportway
        </div>
        <nav aria-label="Footer" className="mb-8 flex flex-wrap gap-x-7 gap-y-3 text-[15px] text-white">
          {menu.map((l) => (
            <Link key={l.href} href={l.href} className="opacity-85 transition-opacity hover:opacity-100">
              {l.label}
            </Link>
          ))}
          <Link href="/contatti" className="font-semibold text-white transition-opacity hover:opacity-80">
            Contatti
          </Link>
        </nav>
        <div className="flex flex-wrap justify-between gap-4 text-[15px] text-pass">
          <a href="mailto:assistenza@sportway.net">assistenza@sportway.net</a>
          <span>Spediamo in tutta Italia con GLS</span>
          <span>© Sportway Srl</span>
        </div>
      </Container>
    </footer>
  );
}
