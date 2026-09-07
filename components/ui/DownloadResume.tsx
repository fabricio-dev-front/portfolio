"use client";

export function DownloadResume() {
  return (
    <>
      <div className="download-resume-button-shell">
        <a
          href="/assets/cv/pt.pdf"
          download="fabricio-pereira-cv.pdf"
          className="download-resume-button shadow-lg inline-flex w-full cursor-pointer items-center justify-center rounded-md bg-card py-2.5 px-5 text-sm font-medium text-foreground gap-2"
        >
          Baixar currículo
        </a>
      </div>

      <style jsx>{`
        @property --ticket-border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0turn;
        }

        .download-resume-button-shell {
          --ticket-border-angle: 0turn;
          position: relative;
          width: fit-content;
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
