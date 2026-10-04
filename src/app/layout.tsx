import type { Metadata } from "next";
import { Figtree, Source_Serif_4 } from "next/font/google";
import { Shell } from "@/components/proto/Shell";
import "./globals.css";
import "./prototype.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "ThisIsMyProperty.com — Your home’s health at your fingertips",
    template: "%s | ThisIsMyProperty.com",
  },
  description:
    "One place for your home’s records, a health score for every major system, and a heads-up before small jobs become expensive repairs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${sourceSerif.variable} font-sans`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
