import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  display: "swap",
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

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
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${mono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MQMGJP2G');
          `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
