"use client";

export function DownloadResume() {
  return (
    <a
      href="/assets/cv/pt.pdf"
      download="fabricio-pereira-cv.pdf"
      className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-card-border bg-card text-foreground font-medium text-sm transition-all duration-200 hover:bg-card-border/25 active:scale-[0.98] shadow-2xs cursor-pointer"
    >
      <svg
        className="w-4 h-4 text-muted-text transition-transform duration-200 group-hover:-translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span>Baixar Currículo</span>
    </a>
  );
}
