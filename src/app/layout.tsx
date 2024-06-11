import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ThemeChanger from "@/components/themeChanger";
import BackButton from "@/components/backButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sainath Poojary - Portfolio",
  description: "Portfolio of Sainath Poojary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} dark`}>
        <ThemeChanger />
        {children}
      </body>
    </html>
  );
}
