import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";

const font = Lato({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Abdul Samad Wani - Google Ads Specialist",
  description: "Google Ads Specialist based in India, working worldwide. I help businesses grow with Google Ads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-white min-h-screen ${font.className}`}
      >
        {children}
      </body>
    </html>
  );
}
