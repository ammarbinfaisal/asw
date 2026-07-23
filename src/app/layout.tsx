import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const bebas = localFont({
  src: "./BebasNeue.ttf",
  display: "swap",
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Abdul Samad Wani | Google Ads & PPC Growth Strategy",
  description:
    "Google Ads specialist based in India, working worldwide. PPC strategy, analytics, tracking, and measurable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bebas.variable}>
      <body>
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
