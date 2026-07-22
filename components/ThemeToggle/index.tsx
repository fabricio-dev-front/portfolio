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
      <div className="w-10 h-10 rounded-full bg-tag border border-card-border animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="border p-4 shadow-sm rounded-lg bg-card border-card-border hover:cursor-pointer"
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}
