export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border/80 py-8 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-text">
        <div className="flex items-center gap-2">
          <span>© {year} Fabricio Pereira</span>
          <span>•</span>
          <span className="font-mono">Software Engineer & AI</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#sobre"
            className="hover:text-foreground transition-colors"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
