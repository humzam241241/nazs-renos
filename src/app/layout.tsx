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
  title: "NAZ RENOVATIONS | No Jobs Too Big, No Issue Too Small",
  description:
    "NAZ RENOVATIONS - House renovations, kitchen, bathroom, plumbing, electrical, painting, drywall, and more. Serving the Greater Toronto Area. Call (416) 912-1661.",
  keywords: [
    "home renovation",
    "house renovations",
    "kitchen renovation",
    "bathroom renovation",
    "plumbing",
    "electrical",
    "painting",
    "drywall",
    "garage shelving",
    "fence building",
    "NAZ RENOVATIONS",
    "Toronto contractor",
  ],
  openGraph: {
    title: "NAZ RENOVATIONS | No Jobs Too Big, No Issue Too Small",
    description:
      "NAZ RENOVATIONS - House renovations, kitchen, bathroom, plumbing, electrical, painting, drywall, and more. Call (416) 912-1661.",
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
