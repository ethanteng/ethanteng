import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ethan Teng Consulting",
    default: "Ethan Teng Consulting — PLG Growth & Self-Serve Revenue",
  },
  description:
    "Turn traction into self-serve revenue. Onboarding, activation, lifecycle, and growth systems that scale.",
  keywords: [
    "PLG",
    "product-led growth",
    "self-serve revenue",
    "SaaS growth",
    "onboarding",
    "activation",
    "growth consultant",
  ],
  authors: [{ name: "Ethan Teng" }],
  creator: "Ethan Teng",
  metadataBase: new URL("https://ethanteng.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethanteng.com",
    siteName: "Ethan Teng Consulting",
    title: "Ethan Teng Consulting — PLG Growth & Self-Serve Revenue",
    description:
      "Turn traction into self-serve revenue. Onboarding, activation, lifecycle, and growth systems that scale.",
    images: [
      {
        url: "/Ethan Teng Consulting logo.png",
        width: 1200,
        height: 630,
        alt: "Ethan Teng Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Teng Consulting — PLG Growth & Self-Serve Revenue",
    description:
      "Turn traction into self-serve revenue. Onboarding, activation, lifecycle, and growth systems that scale.",
    images: ["/Ethan Teng Consulting logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
