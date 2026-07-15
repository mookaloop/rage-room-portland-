import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Oswald } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
  return <html lang="en" className="bg-background"><head><Script src="https://www.googletagmanager.com/gtag/js?id=G-EDZXB6G79N" strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EDZXB6G79N');`}</Script></head><body className={`${inter.variable} ${oswald.variable} font-sans`}><ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>{children}</ThemeProvider></body></html>
}
