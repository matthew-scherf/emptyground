import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import { SiteNav } from "@/components/SiteNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Empty-Ground Monism",
    template: "%s · EGM",
  },
  description:
    "A complete metaphysics on a formal foundation. One ground: empty of own-being, impersonal, and not a who.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-text-primary)]">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--color-border)] py-8 mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-xs text-[var(--color-text-faint)] flex flex-wrap gap-4 justify-between items-center">
            <span>Empty-Ground Monism</span>
            <span className="font-mono">
              (D) demonstrated · (I) interpreted · posit = declared axiom
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
