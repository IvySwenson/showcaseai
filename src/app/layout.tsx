// web/src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShowCaseAI",
  description: "AI Project Analyst — summarize READMEs, detect tech stack, and generate highlights.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
