"use client"

import Link from "next/link"
import { MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const links = [
  { href: "/locations/st-johns", label: "St. Johns" },
  { href: "/locations/tualatin", label: "Tualatin" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/parties-events", label: "Parties" },
  { href: "/contact", label: "Contact" },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-serif text-lg font-black uppercase tracking-wider text-foreground transition-all duration-300 hover:[text-shadow:0_0_12px_hsl(322_100%_55%_/_0.8)]">
          Rage Room <span className="text-primary">Portland</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>)}
          <Button asChild><Link href="/book"><MapPin data-icon="inline-start" />Choose & Book</Link></Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild><Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu /></Button></SheetTrigger>
          <SheetContent className="bg-background text-foreground">
            <SheetTitle className="font-serif text-primary">Rage Room Portland</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation">
              {links.map((link) => <SheetClose asChild key={link.href}><Link href={link.href} className="border-b border-border py-4 text-lg font-bold">{link.label}</Link></SheetClose>)}
              <SheetClose asChild><Button asChild className="mt-4"><Link href="/book">Choose a location & book</Link></Button></SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
