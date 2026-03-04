import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lena's Cat Blog - Tales from a Feline Friend",
  description:
    "Welcome to my cozy corner of the internet dedicated to all things cats. Join me for heartwarming stories, practical tips, and the daily adventures of life with my three rescue cats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="font-nunito bg-cream text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
