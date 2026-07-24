"use client";

import { IconWhatsapp, IconMail } from "@/public/assets/icons";
import { CONTACT_INFO } from "@/lib/contact";

export function CardContato() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;
  const emailUrl = `mailto:${CONTACT_INFO.email}`;

  return (
    <div className="flex flex-col items-start rounded-lg bg-card border border-card-border p-6 shadow-sm w-full">
      <div className="text-sm font-semibold text-foreground mb-4">
        Contatos Rápidos
      </div>
      <div className="flex flex-col gap-3 w-full">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2.5 rounded-md border border-card-border hover:border-[#25D366] dark:hover:border-[#25D366]/60 hover:bg-[#25D366]/5 transition-all text-xs font-semibold hover:cursor-pointer text-foreground group"
        >
          <IconWhatsapp width={18} height={18} className="text-[#25D366] group-hover:scale-110 transition-transform" />
          <span>WhatsApp</span>
        </a>
        <a
          href={emailUrl}
          className="flex items-center gap-3 px-4 py-2.5 rounded-md border border-card-border hover:border-link dark:hover:border-link/60 hover:bg-link/5 transition-all text-xs font-semibold hover:cursor-pointer text-foreground group"
        >
          <IconMail width={18} height={18} className="text-link group-hover:scale-110 transition-transform" />
          <span>E-mail</span>
        </a>
      </div>
    </div>
  );
}
