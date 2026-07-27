import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeToggle/ThemeProvider";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabricio Pereira | Front-End Software Engineer",
  description:
    "Portfólio de Fabricio Pereira, Front-End Software Engineer especializado em React, Next.js e TypeScript.",
  keywords: [
    "Front-End",
    "React",
    "Next.js",
    "TypeScript",
    "Desenvolvedor",
    "Fabricio Pereira",
  ],
  authors: [{ name: "Fabricio Pereira" }],
  openGraph: {
    title: "Fabricio Pereira | Front-End Software Engineer",
    description:
      "Portfólio de Fabricio Pereira, Front-End Software Engineer especializado em React, Next.js e TypeScript.",
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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
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
