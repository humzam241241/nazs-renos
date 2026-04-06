import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#080810",
};

export const metadata: Metadata = {
  title: "NAZ SOLUTIONS | No Jobs Too Big, No Issue Too Small",
  description:
    "NAZ SOLUTIONS - House solutions, kitchen, bathroom, plumbing, electrical, painting, drywall, and more. Serving the Greater Toronto Area. Call (416) 912-1661.",
  keywords: [
    "home renovation",
    "house solutions",
    "kitchen renovation",
    "bathroom renovation",
    "plumbing",
    "electrical",
    "painting",
    "drywall",
    "garage shelving",
    "fence building",
    "NAZ SOLUTIONS",
    "Toronto contractor",
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "NAZ SOLUTIONS",
  },
  openGraph: {
    title: "NAZ SOLUTIONS | No Jobs Too Big, No Issue Too Small",
    description:
      "NAZ SOLUTIONS - House solutions, kitchen, bathroom, plumbing, electrical, painting, drywall, and more. Call (416) 912-1661.",
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
