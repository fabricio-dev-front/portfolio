import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabricio Pereira | Software Engineer & AI",
  description:
    "Portfólio de Fabricio Pereira, Engenheiro de Software especializado em aplicações modernas com React, Next.js, TypeScript e soluções em Inteligência Artificial.",
  keywords: [
    "Software Engineer",
    "Engenheiro de Software",
    "Inteligência Artificial",
    "AI",
    "Next.js",
    "React",
    "TypeScript",
    "Fabricio Pereira",
  ],
  authors: [{ name: "Fabricio Pereira" }],
  openGraph: {
    title: "Fabricio Pereira | Software Engineer & AI",
    description:
      "Portfólio de Fabricio Pereira, Engenheiro de Software especializado em aplicações modernas com React, Next.js, TypeScript e Inteligência Artificial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
