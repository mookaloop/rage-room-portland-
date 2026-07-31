"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, MapPin, Play, X } from "lucide-react"
import SiteHeader from "@/components/SiteHeader"
import { BookingOfferCards } from "@/components/BookingOfferCards"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { locations, type LocationSlug } from "@/lib/locations"

const SNEAK_PEEK_SRC = "/videos/rage-room-hero.mp4"

function SneakPeekVideo() {
  const [open, setOpen] = useState(false)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (open && modalVideoRef.current) {
      modalVideoRef.current.play()
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      {/* Inline muted loop — click to open with audio */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative mx-auto mt-8 block w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Watch a sneak peek of the rage room experience"
      >
        <video
          src={SNEAK_PEEK_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full rounded-2xl object-cover"
          tabIndex={-1}
          aria-hidden="true"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/40 transition-colors group-hover:bg-background/20">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary shadow-[0_0_24px_4px_hsl(322_100%_55%_/_0.6)] transition-transform group-hover:scale-110">
            <Play className="size-7 fill-white text-white translate-x-0.5" aria-hidden="true" />
          </div>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-white drop-shadow">Watch the experience</p>
        </div>
      </button>

      {/* Lightbox modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Rage room sneak peek video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white"
              aria-label="Close video"
            >
              <X className="size-4" aria-hidden="true" /> Close
            </button>
            <video
              ref={modalVideoRef}
              src={SNEAK_PEEK_SRC}
              controls
              loop
              playsInline
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default function BookPageClient({ initialLocation }: { initialLocation: LocationSlug }) {
  const [location, setLocation] = useState<LocationSlug>(initialLocation)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-card py-14 md:py-20">
        <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} className="pointer-events-none absolute inset-0 size-full object-cover motion-reduce:hidden">
          <source src="/videos/rage-room-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-sm font-bold uppercase tracking-widest text-secondary">Book your rage room</p>
          <h1 className="mt-3 text-balance font-serif text-5xl font-black uppercase md:text-7xl">
            Choose your location.{" "}
            <span className="text-primary">Start with the smash.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Reserve a private rage room in St. Johns or Tualatin. Axe throwing is available as an optional add-on or combo experience.
          </p>
        </div>
        </section>

      {/* Booking tabs */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <Tabs
            value={location}
            onValueChange={(value) => setLocation(value as LocationSlug)}
          >
            <TabsList className="grid h-auto w-full grid-cols-2 gap-3 rounded-2xl bg-transparent p-0">
              <TabsTrigger
                value="st-johns"
                className="group flex flex-col items-center gap-1 rounded-2xl border-2 border-primary/40 bg-card px-6 py-5 text-base font-black uppercase tracking-wide shadow-none transition-all duration-200 data-[state=active]:border-primary data-[state=active]:bg-card data-[state=active]:shadow-[0_0_24px_4px_hsl(322_100%_55%_/_0.45)] data-[state=inactive]:opacity-60 data-[state=inactive]:hover:opacity-90"
              >
                <MapPin className="size-6 text-primary" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">North Portland</span>
                <span className="font-serif text-2xl font-black text-primary">Book St. Johns</span>
              </TabsTrigger>
              <TabsTrigger
                value="tualatin"
                className="group flex flex-col items-center gap-1 rounded-2xl border-2 border-secondary/40 bg-card px-6 py-5 text-base font-black uppercase tracking-wide shadow-none transition-all duration-200 data-[state=active]:border-secondary data-[state=active]:bg-card data-[state=active]:shadow-[0_0_24px_4px_hsl(184_100%_48%_/_0.45)] data-[state=inactive]:opacity-60 data-[state=inactive]:hover:opacity-90"
              >
                <MapPin className="size-6 text-secondary" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">SE Portland Metro</span>
                <span className="font-serif text-2xl font-black text-secondary">Book Tualatin</span>
              </TabsTrigger>
            </TabsList>

            {(["st-johns", "tualatin"] as const).map((slug) => (
              <TabsContent key={slug} value={slug} className="mt-10">
                {/* Location label */}
                <div className="mb-8">
                  <h2 className="font-serif text-3xl font-black uppercase">Book {locations[slug].shortName}</h2>
                  <p className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <MapPin className="size-4" aria-hidden="true" />
                    {locations[slug].address}
                  </p>
                </div>

                {/* Offer cards */}
                <div className="mb-10 text-center">
                  <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-secondary">Pick your favorite way to play</p>
                  <h2 className="mt-3 text-balance font-serif text-4xl font-black uppercase text-primary md:text-6xl">Choose your destruction</h2>
                  <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">Ready to unleash the beast? Choose the rage room, throw some axes, or save $10 with the ultimate combo.</p>
                  <SneakPeekVideo />
                </div>
                <BookingOfferCards offers={locations[slug].bookingLinks} />

                {/* Waiver + location links */}
                <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
                  <Button asChild variant="outline">
                    <a href={locations[slug].waiverUrl} target="_blank" rel="noreferrer">
                      Sign {locations[slug].shortName} waiver
                      <ArrowUpRight data-icon="inline-end" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href={`/locations/${slug}`}>View location details</Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

  
    </main>
  )
}
