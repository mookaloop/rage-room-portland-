"use client"

import { useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { ArrowUpRight, Hammer, Axe, Zap, MapPin } from "lucide-react"
import SiteHeader from "@/components/SiteHeader"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { locations, type LocationSlug } from "@/lib/locations"

// Per-offer visual config — order matches bookingLinks: rage, combo, axe
const offerConfig = [
  {
    icon: Hammer,
    gradient: "from-primary to-pink-400",
    borderColor: "border-primary",
    glowColor: "shadow-[0_0_24px_4px_hsl(322_100%_55%_/_0.45)]",
    titleColor: "text-primary",
    btnLabel: (name: string) => `Book ${name.replace(/stickmen /i, "").replace(/rage room/i, "Rage Room")}`,
    badge: null,
  },
  {
    icon: Zap,
    gradient: "from-primary via-secondary to-teal-300",
    borderColor: "border-secondary",
    glowColor: "shadow-[0_0_24px_4px_hsl(184_100%_48%_/_0.35),0_0_48px_8px_hsl(322_100%_55%_/_0.2)]",
    titleColor: "text-foreground",
    btnLabel: () => "Book Ultimate Combo",
    badge: "BEST VALUE",
  },
  {
    icon: Axe,
    gradient: "from-secondary to-teal-200",
    borderColor: "border-secondary",
    glowColor: "shadow-[0_0_24px_4px_hsl(184_100%_48%_/_0.45)]",
    titleColor: "text-secondary",
    btnLabel: () => "Book Axe Throwing",
    badge: null,
  },
]

function OfferCard({
  offer,
  index,
  isTualatin,
  onSelect,
}: {
  offer: (typeof locations)["st-johns"]["bookingLinks"][0]
  index: number
  isTualatin: boolean
  onSelect: () => void
}) {
  const cfg = offerConfig[index] ?? offerConfig[0]
  const Icon = cfg.icon
  // Split "From $35" into prefix + price
  const priceMatch = offer.price.match(/^(From\s+)(\$.+)$/)
  const pricePrefix = priceMatch ? priceMatch[1] : ""
  const priceAmount = priceMatch ? priceMatch[2] : offer.price

  return (
    <div
      className={cn(
        "neon-border-hover relative flex flex-col rounded-xl border-2 bg-card p-6 text-center transition-all duration-300",
        cfg.borderColor,
        cfg.glowColor,
      )}
    >
      {/* Badge */}
      {cfg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-lg">
            {cfg.badge}
          </span>
        </div>
      )}

      {/* Icon circle */}
      <div className={cn("mx-auto mb-5 flex size-24 items-center justify-center rounded-full bg-gradient-to-br", cfg.gradient)}>
        <Icon className="size-10 text-white" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className={cn("mb-4 font-serif text-3xl font-black uppercase leading-tight", cfg.titleColor)}>
        {offer.name.replace(/stickmen /i, "")}
      </h3>

      {/* Description */}
      <p className="mb-6 flex-1 text-base leading-relaxed text-muted-foreground">
        {offer.description}
      </p>

      {/* Pricing */}
      <div className="mb-1">
        <p className="font-black leading-none">
          <span className="text-3xl uppercase text-foreground">{pricePrefix}</span>
          <span className={cn("text-5xl", cfg.titleColor)}>{priceAmount}</span>
        </p>
        <p className="mt-2 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {offer.duration}
        </p>
        {cfg.badge && (
          <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-secondary">
            Save $10!
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="mt-5">
        {isTualatin ? (
          <Button
            size="lg"
            className="w-full text-base font-black uppercase tracking-wider"
            onClick={onSelect}
          >
            {cfg.btnLabel(offer.name)}
          </Button>
        ) : (
          <Button asChild size="lg" className="w-full text-base font-black uppercase tracking-wider">
            <a href={offer.url} target="_blank" rel="noreferrer">
              {cfg.btnLabel(offer.name)}
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

export default function BookPageClient({ initialLocation }: { initialLocation: LocationSlug }) {
  const [location, setLocation] = useState<LocationSlug>(initialLocation)
  const [selectedTualatin, setSelectedTualatin] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border bg-card py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
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
            onValueChange={(value) => {
              setLocation(value as LocationSlug)
              setSelectedTualatin(null)
            }}
          >
            <TabsList className="grid h-auto w-full grid-cols-2">
              <TabsTrigger value="st-johns" className="py-4 text-base">St. Johns</TabsTrigger>
              <TabsTrigger value="tualatin" className="py-4 text-base">Tualatin</TabsTrigger>
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
                <div className="grid gap-8 pt-4 md:grid-cols-3">
                  {locations[slug].bookingLinks.map((offer, index) => (
                    <OfferCard
                      key={offer.name}
                      offer={offer}
                      index={index}
                      isTualatin={slug === "tualatin"}
                      onSelect={() => setSelectedTualatin(index)}
                    />
                  ))}
                </div>

                {/* Tualatin Acuity embed */}
                {slug === "tualatin" && selectedTualatin !== null && (
                  <div id="scheduler" className="mt-10 scroll-mt-24">
                    <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                      <div>
                        <p className="font-mono text-sm uppercase tracking-widest text-secondary">Secure Acuity scheduler</p>
                        <h2 className="mt-2 font-serif text-3xl font-black uppercase">
                          {locations.tualatin.bookingLinks[selectedTualatin].name}
                        </h2>
                      </div>
                      <Button asChild variant="outline">
                        <a href={locations.tualatin.bookingLinks[selectedTualatin].url} target="_blank" rel="noreferrer">
                          Open in new tab
                          <ArrowUpRight data-icon="inline-end" />
                        </a>
                      </Button>
                    </div>
                    <div className="min-h-[800px] overflow-hidden rounded-xl border border-border bg-card">
                      <iframe
                        key={locations.tualatin.bookingLinks[selectedTualatin].url}
                        src={locations.tualatin.bookingLinks[selectedTualatin].url}
                        width="100%"
                        height="800"
                        frameBorder="0"
                        allow="payment"
                        title={`Book ${locations.tualatin.bookingLinks[selectedTualatin].name} in Tualatin`}
                      />
                    </div>
                    <Script src="https://embed.acuityscheduling.com/js/embed.js" strategy="lazyOnload" />
                  </div>
                )}

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

      <Footer />
    </main>
  )
}
