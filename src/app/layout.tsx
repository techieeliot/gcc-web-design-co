import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "components/Header.client";
import Footer from "components/Footer";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'devSouth Consulting',
  description: 'React ecosystem web development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 mt-16 md:mt-20">
            <main className="container mx-auto px-4 py-8">
              <Suspense fallback={<div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg"></div>}>
                {children}
              </Suspense>
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
