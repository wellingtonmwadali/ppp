import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wellington Mwadali — Full Stack Developer",
  description:
    "Wellington Mwadali is a full stack developer building AI systems, SaaS platforms, blockchain solutions, and custom software. Available for new projects.",
  keywords: [
    "Full Stack Developer",
    "Wellington Mwadali",
    "Next.js",
    "React",
    "AI Developer",
    "Blockchain",
    "TypeScript",
    "Software Engineer",
  ],
  authors: [{ name: "Wellington Mwadali", url: "https://github.com/wellingtonmwadali" }],
  openGraph: {
    title: "Wellington Mwadali — Full Stack Developer",
    description:
      "Building AI systems, SaaS platforms, blockchain solutions, and custom software.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellington Mwadali — Full Stack Developer",
    description: "Building AI systems, SaaS platforms, blockchain solutions, and custom software.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
