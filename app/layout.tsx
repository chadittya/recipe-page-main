import type { Metadata } from "next";
import { Young_Serif, Outfit } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Simple Omelette Recipe",
  description: "A quick and easy recipe for a delicious omelette",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased bg-stone-100`}>
        {children}
      </body>
    </html>
  );
}
