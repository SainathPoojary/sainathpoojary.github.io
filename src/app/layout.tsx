import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={`${inter.className} dark`}>
        <ThemeChanger />
        {children}
      </body>
    </html>
  );
}
