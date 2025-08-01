import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fandoms - The Electric Arena for Memecoins",
  description: "Transform your community into an economy. Create memecoins, offer exclusive access and generate new revenue in the ultimate sports fan crypto arena.",
  keywords: "memecoins, chiliz, sports tokens, fan tokens, crypto, blockchain, stadium, community",
  openGraph: {
    title: "Fandoms - The Electric Arena for Memecoins",
    description: "Transform your community into an economy with electric stadium energy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
