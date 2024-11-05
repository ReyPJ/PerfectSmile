import type { Metadata } from "next";
import { Exo_2 } from "next/font/google"
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Perfect Smile Experts",
  description: "Perfect Smile Experts protfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={exo2.className}>
      <body>{children}</body>
    </html>
  );
}
