"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
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
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-bold text-base tracking-tight animated-gradient-text select-none shrink-0"
          >
            fabricio.dev
          </Link>

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
                  className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-(--accent-subtle) text-accent font-semibold"
                      : "text-muted-text hover:text-foreground hover:bg-card-border/20"
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
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ backgroundColor: "var(--background)" }}
          >
            <div className="h-14 shrink-0" />

            <nav
              className="flex-1 flex flex-col items-center justify-center gap-2 px-8"
              aria-label="Menu mobile"
            >
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`w-full text-center text-3xl font-bold py-4 rounded-2xl transition-colors duration-200 ${
                      isActive
                        ? "text-accent bg-[var(--accent-subtle)]"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.28 }}
              className="shrink-0 pb-10 flex items-center justify-center gap-6"
            >
              <a
                href="https://github.com/fabricio-dev-front"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-sm text-muted-text hover:text-foreground transition-colors"
              >
                <IconGithub width={18} height={18} />
                GitHub
              </a>
              <div className="w-px h-4 bg-card-border" />
              <a
                href="https://www.linkedin.com/in/fabricio-dev-front/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-sm text-muted-text hover:text-[#0A66C2] transition-colors"
              >
                <IconLinkedin width={18} height={18} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
