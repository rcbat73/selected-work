import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Selected Work | Rudys Calderin",
    template: "%s | Selected Work",
  },
  description:
    "Professional frontend portfolio for Rudys Calderin, focused on AI automation interfaces, conversion-ready web products, and interactive experiences.",
  metadataBase: new URL("https://portfolio.rb-autoai.tech"),
  openGraph: {
    title: "Selected Work | Rudys Calderin",
    description:
      "Frontend Engineer focused on AI automation, conversion-ready interfaces, and interactive web experiences.",
    type: "website",
    url: "https://portfolio.rb-autoai.tech",
    siteName: "Selected Work",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${sora.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-100">
        <a
          href="#main-content"
          className="sr-only left-3 top-3 z-50 rounded-md bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-950 focus:not-sr-only focus:fixed"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(80% 50% at 10% 0%, rgba(14, 165, 233, 0.2), rgba(12, 12, 13, 0) 65%), radial-gradient(75% 45% at 90% 15%, rgba(59, 130, 246, 0.17), rgba(12, 12, 13, 0) 68%), linear-gradient(180deg, #090a0d 0%, #0d0f14 40%, #0b0b0d 100%)",
            }}
          />
          <Header />
          <div id="main-content" className="flex flex-1 flex-col">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
