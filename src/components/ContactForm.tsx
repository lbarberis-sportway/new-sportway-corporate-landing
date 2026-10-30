"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

type Campi = {
  nome: string;
  email: string;
  messaggio: string;
};

const vuoto: Campi = { nome: "", email: "", messaggio: "" };

// Form contatti come nel mockup: nessun backend, la spunta privacy
// compone una mailto:assistenza@sportway.net precompilata coi campi
export function ContactForm({ className }: { className?: string }) {
  const [campi, setCampi] = useState<Campi>(vuoto);
  const [privacy, setPrivacy] = useState(false);
  const [errore, setErrore] = useState<string | null>(null);

  const modulo = (ev: FormEvent) => {
    ev.preventDefault();
    if (!campi.nome.trim() || !campi.email.trim() || !campi.messaggio.trim()) {
      setErrore("Compila tutti i campi.");
      return;
    }
    if (!privacy) {
      setErrore("Serve il consenso privacy.");
      return;
    }
    setErrore(null);
    const testo = `Nome e cognome: ${campi.nome}\n\nEmail: ${campi.email}\n\nMessaggio:\n${campi.messaggio}`;
    window.location.href = `mailto:assistenza@sportway.net?subject=${encodeURIComponent(
      `Richiesta da sportway.net — ${campi.nome}`,
    )}&body=${encodeURIComponent(testo)}`;
  };

  const inputCls =
    "w-full rounded-[14px] bg-transparent py-4 text-[19px] outline-none placeholder:text-steel shadow-[inset_0_-1.5px_0_#4B5A72] focus:shadow-[inset_0_-2.5px_0_#ED1C24] transition-shadow";

  return (
    <form
      onSubmit={modulo}
      className={cn("bg-ice p-7 md:p-12", className)}
      noValidate
    >
      <div>
        <div className="mb-9">
          <label className="mb-2 block text-[15px] font-semibold text-steel" htmlFor="cf-nome">
            Nome e cognome
          </label>
          <input
            id="cf-nome"
            type="text"
            autoComplete="name"
            placeholder="Mario Rossi"
            required
            value={campi.nome}
            onChange={(e) => setCampi({ ...campi, nome: e.target.value })}
            className={inputCls}
          />
        </div>

        <div className="mb-9">
          <label className="mb-2 block text-[15px] font-semibold text-steel" htmlFor="cf-email">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="nome@esempio.it"
            required
            value={campi.email}
            onChange={(e) => setCampi({ ...campi, email: e.target.value })}
            className={inputCls}
          />
        </div>

        <div className="mb-9">
          <label className="mb-2 block text-[15px] font-semibold text-steel" htmlFor="cf-msg">
            Messaggio
          </label>
          <textarea
            id="cf-msg"
            rows={5}
            placeholder="Scrivici come possiamo aiutarti"
            required
            value={campi.messaggio}
            onChange={(e) => setCampi({ ...campi, messaggio: e.target.value })}
            className={cn(inputCls, "resize-y")}
          />
        </div>

        <label className="mb-9 flex cursor-pointer items-start gap-3 text-[15px] leading-[1.4]">
          <input
            type="checkbox"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            className="mt-1 h-5 w-5 cursor-pointer accent-[#ED1C24]"
            required
          />
          <span>
            Autorizzo il trattamento dei miei dati ai sensi della normativa sulla privacy.
          </span>
        </label>

        {errore && <p className="mb-5 text-[15px] font-semibold text-accent">{errore}</p>}

        <button
          type="submit"
          className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-lake px-7 text-base font-semibold text-white transition-[filter] hover:brightness-110 md:w-auto"
        >
          Invia
        </button>
      </div>
    </form>
  );
}
