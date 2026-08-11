import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Oswald } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FaqSection from "@/components/FaqSection"
import Footer from "@/components/Footer"
import RecyclingBanner from "@/components/RecyclingBanner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })

export const metadata: Metadata = {
  metadataBase: new URL("https://rageroomportland.co"),
  title: { default: "Rage Room Portland", template: "%s | Rage Room Portland" },
  description: "Rage rooms and axe throwing at two Portland-area locations: St. Johns and Tualatin.",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  manifest: "/site.webmanifest",
  openGraph: { siteName: "Rage Room Portland", type: "website", images: [{ url: "/favicon.png", width: 250, height: 250, alt: "Rage Room Portland" }] },
  twitter: { card: "summary_large_image", images: ["/favicon.png"] },
}

export const viewport: Viewport = { themeColor: "#080808", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EDZXB6G79N" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EDZXB6G79N');`}</Script>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N2BJKP3');`}</Script>
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2BJKP3" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <FaqSection />
          <Footer />
          <RecyclingBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
