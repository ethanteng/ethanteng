import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const title = "Ethan Teng — Founder & Engineering Lead";

export const metadata: Metadata = {
  title: { template: "%s | Ethan Teng", default: title },
  description: SITE.description,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  metadataBase: new URL("https://ethanteng.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    title,
    description: SITE.description,
    images: [
      { url: "/Ethan.JPG", width: 960, height: 1280, alt: "Ethan Teng" },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description: SITE.description,
    images: ["/Ethan.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="min-h-[65vh]">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
