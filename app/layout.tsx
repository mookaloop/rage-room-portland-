import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Portland Rage Room | Axe Throwing & Stress Relief",
    template: "%s | Portland Rage Room",
  },
  description:
    "Portland's #1 rage room & axe throwing experience! Smash stress away in soundproof rooms. Perfect for team building, date nights & parties. Book today!",
  keywords:
    "rage room Portland, axe throwing Portland, things to do Portland, team building Portland, smash room Portland",
  openGraph: {
    title: "Portland Rage Room | Axe Throwing & Stress Relief",
    description: "Smash stuff. Throw axes. Drink beer. Portland's ultimate stress relief experience!",
    url: "https://rageroomportland.co",
    siteName: "Portland Rage Room",
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
    title: "Portland Rage Room | Axe Throwing & Stress Relief",
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
