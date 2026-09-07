"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  IconGithub,
  IconLinkedin,
  IconMenu,
  IconClose,
} from "@/public/assets/icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "#sobre", label: "Sobre", id: "sobre" },
  { href: "#projetos", label: "Projetos", id: "projetos" },
  { href: "#experiencias", label: "Experiências", id: "experiencias" },
  { href: "#contato", label: "Contato", id: "contato" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const sectionIds = ["sobre", "projetos", "experiencias", "contato"];

    const handleScroll = () => {
      const scrollY = window.scrollY + 80;

      let current = "sobre";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="glass fixed top-0 left-0 right-0 z-50 h-14">
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-base tracking-tight text-foreground select-none shrink-0"
            >
              fabricio<span className="text-accent">.dev</span>
            </Link>
            <span className="hidden sm:inline-flex items-center text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border border-card-border bg-card/60 text-muted-text">
              Software Engineer
            </span>
          </div>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-foreground text-background font-medium shadow-xs"
                      : "text-muted-text hover:text-foreground hover:bg-card-border/30"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              <a
                href="https://github.com/fabricio-dev-front"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-muted-text hover:text-foreground hover:bg-card-border/30 transition-all duration-200"
              >
                <IconGithub width={17} height={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/fabricio-dev-front/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-muted-text hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-200"
              >
                <IconLinkedin width={17} height={17} />
              </a>
              <div className="w-px h-4 bg-card-border mx-1" />
            </div>

            <ThemeToggle />

            <button
              className="md:hidden p-2 rounded-lg text-muted-text hover:text-foreground hover:bg-card-border/30 transition-all duration-200 hover:cursor-pointer"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <IconClose width={18} height={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <IconMenu width={18} height={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden"
              aria-hidden="true"
            />

            <motion.aside
              key="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 300,
              }}
              className="fixed top-0 bottom-0 right-0 z-50 w-70 sm:w-[320px] max-w-[85vw] bg-card border-l border-card-border p-6 flex flex-col justify-between md:hidden shadow-2xl"
              aria-label="Menu de navegação mobile"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-card-border/60">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="font-bold text-base tracking-tight text-foreground select-none"
                  >
                    fabricio<span className="text-accent">.dev</span>
                  </Link>

                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Fechar menu"
                    className="p-2 rounded-lg text-muted-text hover:text-foreground hover:bg-card-border/30 transition-colors"
                  >
                    <IconClose width={18} height={18} />
                  </button>
                </div>

                <nav
                  className="flex flex-col gap-1.5 py-6"
                  aria-label="Links mobile"
                >
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-foreground text-background font-semibold shadow-xs"
                            : "text-muted-text hover:text-foreground hover:bg-card-border/30"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="text-xs font-mono opacity-50">↗</span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-5 border-t border-card-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/fabricio-dev-front"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    aria-label="GitHub"
                    className="p-2 rounded-lg text-muted-text hover:text-foreground hover:bg-card-border/30 transition-colors"
                  >
                    <IconGithub width={18} height={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fabricio-dev-front/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg text-muted-text hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
                  >
                    <IconLinkedin width={18} height={18} />
                  </a>
                </div>

                <span className="text-[11px] font-mono text-muted-text">
                  v2.0
                </span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
