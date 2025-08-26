import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rage Room Portland | Axe Throwing & Brewpub",
  description:
    "Book Portland's top Rage Room & Axe Throwing combo—smash, throw, and chill with craft beer at StormBreaker Brewing.",
  keywords:
    "rage room Portland, Portland rage room, axe throwing Portland, things to do Portland, team building Portland, smash room Portland",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Rage Room Portland | Axe Throwing & Brewpub",
    description:
      "Book Portland's top Rage Room & Axe Throwing combo—smash, throw, and chill with craft beer at StormBreaker Brewing.",
    url: "https://rageroomportland.co",
    siteName: "Rage Room Portland",
    images: [
      {
        url: "/favicon.png",
        width: 250,
        height: 250,
        alt: "Rage Room Portland Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rage Room Portland | Axe Throwing & Brewpub",
    description:
      "Book Portland's top Rage Room & Axe Throwing combo—smash, throw, and chill with craft beer at StormBreaker Brewing.",
    images: ["/favicon.png"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EDZXB6G79N" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EDZXB6G79N');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2BJKP3');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2BJKP3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LocalBusinessSchema />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
