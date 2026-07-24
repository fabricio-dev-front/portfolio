"use client";

import { IconWhatsapp, IconMail } from "@/public/assets/icons";
import { CONTACT_INFO } from "@/lib/contact";

export function Contact() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage,
  )}`;
  const emailUrl = `mailto:${CONTACT_INFO.email}`;

  return (
    <div className="w-full flex flex-col gap-4 mt-2">
      <div className="rounded-lg bg-card border border-card-border shadow-sm py-4 px-6">
        <span className="font-semibold text-foreground">Contato</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-start rounded-lg bg-card border border-card-border p-6 shadow-sm hover:border-[#25D366] dark:hover:border-[#25D366]/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-110" />

          <div className="p-3 rounded-full bg-[#25D366]/10 text-[#25D366] mb-4 group-hover:scale-110 transition-transform duration-300">
            <IconWhatsapp width={28} height={28} />
          </div>

          <h3 className="text-[18px] font-semibold text-foreground mb-1">
            WhatsApp
          </h3>
          <p className="text-sm text-muted-text mb-4 leading-relaxed">
            Envie uma mensagem instantânea para conversar de forma ágil e
            direta.
          </p>

          <span className="mt-auto text-xs font-semibold text-[#25D366] flex items-center gap-1 group-hover:underline">
            Conversar no WhatsApp →
          </span>
        </a>

        <a
          href={emailUrl}
          className="group relative flex flex-col items-start rounded-lg bg-card border border-card-border p-6 shadow-sm hover:border-link dark:hover:border-link/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-link/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-110" />

          <div className="p-3 rounded-full bg-link/10 text-link mb-4 group-hover:scale-110 transition-transform duration-300">
            <IconMail width={28} height={28} />
          </div>

          <h3 className="text-[18px] font-semibold text-foreground mb-1">
            E-mail
          </h3>
          <p className="text-sm text-muted-text mb-4 leading-relaxed">
            Entre em contato para propostas formais, projetos ou feedbacks
            detalhados.
          </p>

          <span className="mt-auto text-sm font-semibold text-link flex items-center gap-1 group-hover:underline">
            Enviar um E-mail →
          </span>
        </a>
      </div>
    </div>
  );
}
