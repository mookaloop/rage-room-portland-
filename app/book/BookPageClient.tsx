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
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(322_100%_62%),hsl(322_100%_35%))]",
    borderStyle: "border-[hsl(322_100%_55%)]",
    glowColor: "shadow-[0_0_28px_6px_hsl(322_100%_55%_/_0.55),inset_0_0_30px_0px_hsl(322_100%_55%_/_0.04)]",
    titleColor: "text-[hsl(322_100%_62%)]",
    description:
      "Smash bottles, electronics, TVs, printers, and fax machines in our soundproof destruction chamber while playing your own music turned up to eleven. We recycle 100% of the destruction you make. Safety gear provided — hard hat, coveralls, face shield, and gloves. No experience necessary!",
    btnEmoji: "🔥",
    btnLabel: "BOOK RAGE ROOM",
    btnClass:
      "bg-[hsl(322_100%_55%)] hover:bg-[hsl(322_100%_48%)] text-white border-0 shadow-[0_0_16px_4px_hsl(322_100%_55%_/_0.5)]",
    badge: null,
  },
  {
    icon: Zap,
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(280_100%_55%))]",
    borderStyle: "border-[hsl(184_100%_48%)]",
    glowColor: "shadow-[0_0_28px_6px_hsl(184_100%_48%_/_0.5),inset_0_0_30px_0px_hsl(184_100%_48%_/_0.04)]",
    titleColor: "text-[hsl(184_100%_52%)]",
    description:
      "Why choose? Get the full experience! Rage room destruction plus a full axe throwing session back to back in Portland. All gear included — destruction suit, face shield, throwing axes, and lane equipment. The ultimate Portland adventure.",
    btnEmoji: "💀",
    btnLabel: "BOOK ULTIMATE COMBO",
    btnClass:
      "bg-gradient-to-r from-[hsl(322_100%_55%)] to-[hsl(184_100%_48%)] hover:opacity-90 text-white border-0 shadow-[0_0_20px_4px_hsl(322_100%_55%_/_0.4),0_0_20px_4px_hsl(184_100%_48%_/_0.4)]",
    badge: "🔥 BEST VALUE 🔥",
  },
  {
    icon: Axe,
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(184_100%_28%))]",
    borderStyle: "border-[hsl(184_100%_48%)]",
    glowColor: "shadow-[0_0_28px_6px_hsl(184_100%_48%_/_0.55),inset_0_0_30px_0px_hsl(184_100%_48%_/_0.04)]",
    titleColor: "text-[hsl(184_100%_52%)]",
    description:
      "Channel your inner Viking! Professional lanes with expert instruction from our certified coaches. Throwing axes, safety barriers, and scoring all included. Join the best axe throwing Portland experience — open to all skill levels, groups welcome.",
    btnEmoji: "⚡",
    btnLabel: "BOOK AXE THROWING",
    btnClass:
      "bg-[hsl(184_100%_40%)] hover:bg-[hsl(184_100%_34%)] text-black border-0 shadow-[0_0_16px_4px_hsl(184_100%_48%_/_0.5)]",
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
  const priceMatch = offer.price.match(/^(From\s+)(\$.+)$/)
  const pricePrefix = priceMatch ? priceMatch[1].trim() : ""
  const priceAmount = priceMatch ? priceMatch[2] : offer.price

  return (
    <div
      className={cn(
        "neon-border-hover relative flex flex-col rounded-2xl border-2 bg-[#0a0a0f] p-7 text-center transition-all duration-300",
        cfg.borderStyle,
        cfg.glowColor,
      )}
    >
      {/* Best value badge */}
      {cfg.badge && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="rounded-full bg-gradient-to-r from-[hsl(322_100%_55%)] via-purple-500 to-[hsl(184_100%_48%)] px-5 py-2 text-xs font-black uppercase tracking-widest text-white shadow-[0_0_16px_4px_hsl(322_100%_55%_/_0.6)]">
            {cfg.badge}
          </span>
        </div>
      )}

      {/* Icon circle */}
      <div className={cn("mx-auto mb-6 mt-2 flex size-28 items-center justify-center rounded-full", cfg.iconBg)}>
        <Icon className="size-12 text-white drop-shadow-lg" strokeWidth={1.8} aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className={cn("mb-5 font-serif text-2xl font-black uppercase leading-tight tracking-wide md:text-3xl", cfg.titleColor)}>
        {offer.name.replace(/stickmen /i, "")}
      </h3>

      {/* Description — use config copy for richer gear detail */}
      <p className="mb-6 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
        {cfg.description}
      </p>

      {/* Pricing */}
      <div className="mb-2">
        <p className="font-black leading-none">
          <span className="text-2xl uppercase text-foreground">FROM </span>
          <span className={cn("text-5xl font-black", cfg.titleColor)}>{priceAmount}</span>
        </p>
        <p className="mt-2 font-mono text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground">
          {offer.duration}
        </p>
        {cfg.badge && (
          <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-[hsl(184_100%_52%)]">
            Save $10!
          </p>
        )}
      </div>

      {/* CTA button */}
      <div className="mt-5">
        {isTualatin ? (
          <button
            onClick={onSelect}
            className={cn(
              "w-full rounded-lg py-4 text-base font-black uppercase tracking-widest transition-opacity",
              cfg.btnClass,
            )}
          >
            {cfg.btnEmoji} {cfg.btnLabel} {cfg.btnEmoji}
          </button>
        ) : (
          <a
            href={offer.url}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "block w-full rounded-lg py-4 text-base font-black uppercase tracking-widest transition-opacity",
              cfg.btnClass,
            )}
          >
            {cfg.btnEmoji} {cfg.btnLabel} {cfg.btnEmoji}
          </a>
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
