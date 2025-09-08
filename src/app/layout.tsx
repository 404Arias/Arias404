import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arias404 - Full Stack Developer",
  description:
    "Portfolio profesional de un desarrollador full-stack especializado en React, Next.js y tecnologías modernas.",
  keywords: [
    "desarrollador",
    "full-stack",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Arias404" }],
  creator: "Arias404",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-192x192.png",
    apple: "/favicon-192x192.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tudominio.com",
    title: "Arias404 - Full Stack Developer",
    description:
      "Portfolio profesional de un desarrollador full-stack especializado en React, Next.js y tecnologías modernas.",
    siteName: "Arias404 Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arias404 - Full Stack Developer",
    description:
      "Portfolio profesional de un desarrollador full-stack especializado en React, Next.js y tecnologías modernas.",
    creator: "@tuusuario",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} cursor-none`}>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
