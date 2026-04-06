import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naz's Renos | Premium Home Renovations",
  description:
    "Transform your space with luxury home renovations. Kitchens, bathrooms, basements, and full home remodels crafted with precision and premium materials.",
  keywords: [
    "home renovation",
    "luxury remodel",
    "kitchen renovation",
    "bathroom renovation",
    "basement finishing",
    "premium contractor",
  ],
  openGraph: {
    title: "Naz's Renos | Premium Home Renovations",
    description:
      "Transform your space with luxury home renovations crafted with precision and premium materials.",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
