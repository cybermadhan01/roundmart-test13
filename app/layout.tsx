import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://roundmart.com'),
  title: {
    default: "ROUNDMART - Premium Goods for the Discerning",
    template: "%s | ROUNDMART"
  },
  description: "Discover our latest collection of premium goods, crafted with precision and passion. Shop watches, clothing, home decor, and more.",
  keywords: ["premium goods", "luxury watches", "designer clothing", "home decor", "roundmart", "ecommerce"],
  authors: [{ name: "ROUNDMART Team" }],
  creator: "ROUNDMART",
  publisher: "ROUNDMART",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roundmart.com",
    title: "ROUNDMART - Premium Goods",
    description: "Designed for Life. Premium goods for the modern lifestyle.",
    siteName: "ROUNDMART",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ROUNDMART Premium Goods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROUNDMART - Premium Goods",
    description: "Designed for Life. Premium goods for the modern lifestyle.",
    images: ["/og-image.jpg"],
    creator: "@roundmart",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${manrope.variable} font-display antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark flex flex-col min-h-screen transition-colors duration-300`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
