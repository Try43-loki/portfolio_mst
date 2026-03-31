import type { Metadata } from "next";
import { Playfair_Display, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "MEY Soytry - Portfolio",
  description:
    "Portfolio of MEY Soytry — Frontend Developer & Data Analyst from Phnom Penh, Cambodia. Building fast, elegant web apps with Next.js, React, TypeScript, and modern tooling.",
  keywords: [
    "MEY Soytry", "Mey Soytry", "Frontend Developer", "Data Analyst",
    "Next.js", "React", "TypeScript", "Cambodia", "Phnom Penh",
  ],
  authors: [{ name: "MEY Soytry" }],
  metadataBase: new URL("https://portfolio-mst-six.vercel.app"),
  openGraph: {
    title: "MEY Soytry - Portfolio",
    description:
      "Portfolio of MEY Soytry — Frontend Developer & Data Analyst from Phnom Penh, Cambodia.",
    type: "website",
    url: "https://portfolio-mst-six.vercel.app",
    siteName: "MEY Soytry Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEY Soytry - Portfolio",
    description:
      "Portfolio of MEY Soytry — Frontend Developer & Data Analyst from Phnom Penh, Cambodia.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmMono.variable} ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
