import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const font = Montserrat({
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
