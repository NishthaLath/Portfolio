import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Sora({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nishtha Lath — AI Systems & Full-Stack Engineering",
  description:
    "Nishtha Lath is a Computer Science & Engineering student at Kyungpook National University building LLM applications, RAG systems, and full-stack web products. Experience includes React/TypeScript frontend leadership, FastAPI backends, and published research in conversational AI.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nishtha Lath — AI Systems & Full-Stack Engineering",
    description:
      "LLM applications, RAG systems, full-stack engineering, and conversational AI research.",
    type: "website",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
