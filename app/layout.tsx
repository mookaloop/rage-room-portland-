import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema"

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
        url: "/favicon.png", // Using the logo as OG image too
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LocalBusinessSchema />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
