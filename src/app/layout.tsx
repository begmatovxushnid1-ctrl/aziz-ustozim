import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koreys Tili Darslari | Aziz Ustoz (한국어)",
  description: "Koreys tilini noldan TOPIK va EPS-TOPIK darajalarigacha professional tarzda o'rganing. Onlayn ro'yxatdan o'tish.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
