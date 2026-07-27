"use client";

import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email,
          subject:
            formData.subject.trim() ||
            `Contato via Portfólio: ${formData.name}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          result.message ||
            "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Não foi possível conectar ao serviço de e-mail. Verifique sua conexão e tente novamente.",
      );
    }
  };

  return (
    <div className="lg:col-span-2 rounded-2xl bg-card border border-card-border p-6 md:p-8 shadow-sm relative overflow-hidden">
      <div
        className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-40"
        style={{ background: "var(--accent-glow)" }}
      />

      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Envie uma mensagem
        </h3>
        <p className="text-xs md:text-sm text-muted-text leading-relaxed">
          Preencha o formulário abaixo para me enviar um e-mail diretamente.
          Responderei o mais rápido possível!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-foreground mb-1.5"
            >
              Seu Nome <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Ex: Maria Silva"
              className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-card-border text-foreground text-sm placeholder:text-muted-text/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold text-foreground mb-1.5"
            >
              Seu E-mail <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="exemplo@email.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-card-border text-foreground text-sm placeholder:text-muted-text/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            Assunto
          </label>
          <input
            id="contact-subject"
            type="text"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            placeholder="Ex: Proposta de projeto ou oportunidade"
            className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-card-border text-foreground text-sm placeholder:text-muted-text/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold text-foreground mb-1.5"
          >
            Mensagem <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Escreva sua mensagem detalhadamente..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-card-border text-foreground text-sm placeholder:text-muted-text/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
          />
        </div>

        {status === "success" && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2.5 animate-fadeIn">
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Mensagem enviada com sucesso! Responderei o mais breve possível.
            </span>
          </div>
        )}

        {status === "error" && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-medium flex items-center gap-2.5 animate-fadeIn">
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-btn text-btn-text font-semibold text-xs md:text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Enviar Mensagem</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
