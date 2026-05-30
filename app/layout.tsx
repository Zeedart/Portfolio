import type { Metadata } from "next";
import { ThemeContextProvider } from "@/context/Theme";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Yazeed Alkalmi",
  description: "Yazeed Alkalmi's Portfolio Website",
  icons: {
    icon: "/favicon",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <ThemeContextProvider>
        <body className="min-h-full bg-green-100 flex flex-col">{children}</body>
      </ThemeContextProvider>
    </html>
  );
}
