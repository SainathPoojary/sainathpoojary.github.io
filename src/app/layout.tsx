import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import ThemeChanger from "@/components/themeChanger";

export const metadata: Metadata = {
  title: "Sainath Poojary - Portfolio",
  description:
    "I'm web and mobile app developer based in Mumbai, India. I enjoy building stuffs that works.",
  openGraph: {
    type: "website",
    url: "https://sainath.vercel.app/og-image.png",
    title: "Sainath Poojary - Portfolio",
    description:
      "I'm a web and mobile app developer based in Mumbai, India. I enjoy building things that work.",
    images: [
      {
        url: "https://sainath.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "Sainath Poojary - Portfolio Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sainath Poojary - Portfolio",
    description:
      "I'm a web and mobile app developer based in Mumbai, India. I enjoy building things that work.",
    images: [
      {
        url: "https://sainath.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "Sainath Poojary - Portfolio Image",
      },
    ],
  },
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
