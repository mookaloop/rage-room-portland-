import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rage Room Portland | Smash Stress with Axe Throwing & Beer",
  description:
    "Book your Portland rage room experience today! Smash stuff, throw axes, and grab a beer at Portland's wildest team-building activity.",
  keywords:
    "rage room Portland, axe throwing Portland, things to do Portland, team building Portland, smash room Portland",
  openGraph: {
    title: "Rage Room Portland",
    description: "Smash stuff. Throw axes. Drink beer. Repeat.",
    url: "https://rageroomportland.co",
    siteName: "Rage Room Portland",
    images: [
      {
        url: "/your-og-image.jpg", // replace with actual image path
        width: 1200,
        height: 630,
        alt: "Rage Room Portland Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rage Room Portland",
    description: "Smash. Throw. Drink. Portland's best rage room experience.",
    images: ["/your-og-image.jpg"],
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
