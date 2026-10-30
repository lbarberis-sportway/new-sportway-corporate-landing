import type { ReactNode } from "react";

// Blocco CTA scuro a due colonne, condiviso da tutte le pagine
export function CtaSection({
  title,
  children,
  actions,
}: {
  title: string;
  children: ReactNode;
  actions: ReactNode;
}) {
  return (
    <section className="grid items-end gap-14 bg-lake px-5 py-30 text-white md:grid-cols-2 md:px-14">
      <h2 className="dp text-[clamp(70px,9vw,130px)]">{title}</h2>
      <div>
        <p className="mb-7 text-[21px] leading-[1.4] text-pass">{children}</p>
        <div className="flex flex-wrap gap-3">{actions}</div>
      </div>
    </section>
  );
}
