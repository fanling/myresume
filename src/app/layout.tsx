import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";

const prose = Crimson_Pro({
  variable: "--font-prose",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Resume",
  description: "Professional resume showcasing skills and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={prose.variable}>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
