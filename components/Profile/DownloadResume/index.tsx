"use client";

import { IconClose } from "@/public/assets/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DownloadResume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = (language: "pt" | "en") => {
    const pdfUrl =
      language === "en" ? "/assets/cv/en.pdf" : "/assets/cv/pt.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `fabricio-pereira-cv-${language}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="download-resume-button-shell">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="download-resume-button shadow-lg inline-flex w-full cursor-pointer items-center justify-center rounded-md bg-card py-2.5 text-sm font-medium"
        >
          Baixar currículo
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center bg-black/30 px-4"
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-lg border border-card-border bg-card p-5 shadow-xl relative"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 cursor-pointer rounded-full p-1"
              >
                <IconClose width={20} height={20} />
              </button>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Escolha a versão
                </h3>
                <p className="mt-1 text-sm text-muted-text">
                  Selecione o idioma do currículo para baixar.
                </p>
              </div>

              <div className="flex flex-col gap-3.5">
                <button
                  type="button"
                  onClick={() => handleDownload("pt")}
                  className="w-full flex items-center justify-center py-2 rounded-md bg-btn text-btn-text hover:opacity-90 border border-card-border transition text-xs font-semibold hover:cursor-pointer"
                >
                  Português
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload("en")}
                  className="w-full flex items-center justify-center py-2 rounded-md bg-btn text-btn-text hover:opacity-90 border border-card-border transition text-xs font-semibold hover:cursor-pointer"
                >
                  English
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @property --ticket-border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0turn;
        }

        .download-resume-button-shell {
          --ticket-border-angle: 0turn;
          position: relative;
          width: 100%;
          border-radius: 0.375rem;
          padding: 2px;
          background: conic-gradient(
            from var(--ticket-border-angle),
            rgba(9, 105, 218, 0) 0deg,
            rgba(9, 105, 218, 0) 208deg,
            rgba(9, 105, 218, 0.08) 222deg,
            rgba(9, 105, 218, 0.18) 232deg,
            rgba(9, 105, 218, 0.36) 240deg,
            rgba(9, 105, 218, 0.58) 247deg,
            rgba(9, 105, 218, 0.82) 253deg,
            rgba(9, 105, 218, 0.96) 258deg,
            rgba(9, 105, 218, 1) 269deg,
            rgba(9, 105, 218, 0.92) 274deg,
            rgba(9, 105, 218, 0) 276deg,
            rgba(9, 105, 218, 0) 360deg
          );
          box-shadow: 0 0 10px rgba(9, 105, 218, 0.12);
          animation: ticket-border-spin 6s linear infinite;
        }

        .download-resume-button-shell::before {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: calc(0.375rem - 2px);
          z-index: 0;
          background: var(--card-bg);
        }

        .download-resume-button {
          position: relative;
          z-index: 1;
          border: 0;
          border: 1px solid rgba(208, 215, 222, 0.2);
        }

        :global(.dark) .download-resume-button-shell {
          background: conic-gradient(
            from var(--ticket-border-angle),
            rgba(240, 240, 240, 0) 0deg,
            rgba(240, 240, 240, 0) 208deg,
            rgba(240, 240, 240, 0.08) 222deg,
            rgba(240, 240, 240, 0.18) 232deg,
            rgba(240, 240, 240, 0.36) 240deg,
            rgba(240, 240, 240, 0.58) 247deg,
            rgba(240, 240, 240, 0.82) 253deg,
            rgba(240, 240, 240, 0.96) 258deg,
            rgba(240, 240, 240, 1) 269deg,
            rgba(240, 240, 240, 0.92) 274deg,
            rgba(240, 240, 240, 0) 276deg,
            rgba(240, 240, 240, 0) 360deg
          );
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.36);
        }

        @keyframes ticket-border-spin {
          to {
            --ticket-border-angle: 1turn;
          }
        }
      `}</style>
    </>
  );
}
