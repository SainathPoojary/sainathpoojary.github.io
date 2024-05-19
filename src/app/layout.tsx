import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeChanger from "@/components/themeChanger";

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
    <html className="" lang="en">
      <body className={`${inter.className}`}>
        {children}
        <ThemeChanger />
      </body>
    </html>
  );
}
