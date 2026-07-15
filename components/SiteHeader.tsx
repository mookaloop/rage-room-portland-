"use client"

import Link from "next/link"
import { ChevronDown, FileText, MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { locations } from "@/lib/locations"

const links = [
  { href: "/locations/st-johns", label: "St. Johns" },
  { href: "/locations/tualatin", label: "Tualatin" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/parties-events", label: "Parties" },
  { href: "/contact", label: "Contact" },
]

const waivers = [
  { label: "St. Johns Waiver", url: locations["st-johns"].waiverUrl },
  { label: "Tualatin Waiver", url: locations["tualatin"].waiverUrl },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-serif text-xl font-black uppercase tracking-wider text-foreground transition-all duration-300 hover:[text-shadow:0_0_12px_hsl(322_100%_55%_/_0.8)] sm:text-2xl">
          Rage Room <span className="text-primary">Portland</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}

          {/* Waiver dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-bold text-secondary transition-colors hover:text-secondary/80">
                <FileText className="size-4" aria-hidden="true" />
                Sign Waiver
                <ChevronDown className="size-3.5" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 border-secondary/30 bg-card">
              {waivers.map((w) => (
                <DropdownMenuItem key={w.url} asChild>
                  <a href={w.url} target="_blank" rel="noreferrer" className="cursor-pointer font-semibold">
                    {w.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild>
            <Link href="/book"><MapPin data-icon="inline-start" />Choose &amp; Book</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background text-foreground">
            <SheetTitle className="font-serif text-primary">Rage Room Portland</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link href={link.href} className="border-b border-border py-4 text-lg font-bold">{link.label}</Link>
                </SheetClose>
              ))}

              {/* Waiver links in mobile */}
              <p className="pt-4 text-xs font-black uppercase tracking-widest text-secondary">Sign Waiver</p>
              {waivers.map((w) => (
                <a
                  key={w.url}
                  href={w.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-border py-4 text-lg font-bold text-secondary"
                >
                  {w.label}
                </a>
              ))}

              <SheetClose asChild>
                <Button asChild className="mt-4">
                  <Link href="/book">Choose a location &amp; book</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
