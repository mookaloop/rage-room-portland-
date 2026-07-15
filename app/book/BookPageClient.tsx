"use client"

import { useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { ArrowUpRight, MapPin } from "lucide-react"
import SiteHeader from "@/components/SiteHeader"
import { BookingOfferCards } from "@/components/BookingOfferCards"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { locations, type LocationSlug } from "@/lib/locations"

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
                <div className="mb-10 text-center">
                  <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-secondary">Pick your favorite way to play</p>
                  <h2 className="mt-3 text-balance font-serif text-4xl font-black uppercase text-primary md:text-6xl">Choose your destruction</h2>
                  <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">Ready to unleash the beast? Choose the rage room, throw some axes, or save $10 with the ultimate combo.</p>
                </div>
                <BookingOfferCards
                  offers={locations[slug].bookingLinks}
                  hrefForOffer={slug === "st-johns" ? (index) => locations[slug].bookingLinks[index].url : undefined}
                  onSelect={slug === "tualatin" ? setSelectedTualatin : undefined}
                />

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

  
    </main>
  )
}
