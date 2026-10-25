import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { SearchBox } from "@/components/search-box";
import { buildSearchIndex } from "@/lib/search-index";

const searchIndex = buildSearchIndex();

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Inverleigh Wildlife", template: "%s · Inverleigh Wildlife" },
  description: "Photos, calls and notes on the wildlife of Inverleigh, Victoria — starting with its birds.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <header className="sticky top-0 z-20 border-b border-stone-200/70 bg-[#f6f3ec]/85 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-3 sm:py-4">
            <Link href="/" className="font-serif text-xl font-semibold text-emerald-900">Inverleigh Wildlife</Link>
            <div className="order-3 w-full sm:order-2 sm:ml-auto sm:w-auto">
              <SearchBox items={searchIndex} />
            </div>
            <div className="order-2 flex gap-4 text-sm text-stone-600 sm:order-3 sm:gap-5">
              <Link href="/#birds" className="hover:text-emerald-800">Birds</Link>
              <Link href="/mammals" className="hover:text-emerald-800">Mammals</Link>
              <Link href="/reptiles" className="hover:text-emerald-800">Reptiles</Link>
              <Link href="/credits" className="hover:text-emerald-800">Credits</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-200 py-8 text-center text-xs text-stone-500">
          Photos, recordings and videos belong to their creators — see <Link href="/credits" className="underline">credits</Link>. Species list from the Atlas of Living Australia.
        </footer>
      </body>
    </html>
  );
}
