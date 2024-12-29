import type { Metadata } from "next";
import "./globals.css";


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
        className={`text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
