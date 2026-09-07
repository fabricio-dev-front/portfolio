"use client";

import { IconMoon, IconSun } from "@/public/assets/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-card border border-card-border animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="p-2 rounded-lg text-muted-text hover:text-foreground hover:bg-card-border/30 transition-all duration-200 hover:cursor-pointer"
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}
