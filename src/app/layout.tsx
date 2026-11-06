import type { Metadata, Viewport } from "next";

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
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-rose-500 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
