import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://your-username.github.io"; // TODO: update to your real deployed URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | Software Engineer`,
  description: profile.tagline,
  keywords: ["Software Engineer", "Full Stack Developer", "Laravel", "React", "PHP", "Fintech", "Myanmar"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Software Engineer`,
    description: profile.tagline,
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Software Engineer`,
    description: profile.tagline,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
