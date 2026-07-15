"use client"

import { useState } from "react"
import Script from "next/script"
import { ArrowUpRight } from "lucide-react"
import { BookingOfferCards } from "@/components/BookingOfferCards"
import { Button } from "@/components/ui/button"
import type { LocationData } from "@/lib/locations"

export default function LocationBooking({ location }: { location: LocationData }) {
  const [selected, setSelected] = useState<number | null>(null)
  const selectedOffer = selected !== null ? location.bookingLinks[selected] : null

  return (
    <>
      <BookingOfferCards offers={location.bookingLinks} onSelect={setSelected} />

      {selectedOffer && (
        <div id="scheduler" className="mt-10 scroll-mt-24">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-secondary">Secure Acuity scheduler</p>
              <h2 className="mt-2 font-serif text-3xl font-black uppercase">{selectedOffer.name}</h2>
            </div>
            <Button asChild variant="outline">
              <a href={selectedOffer.url} target="_blank" rel="noreferrer noopener">
                Open in new tab
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
          <div className="min-h-[800px] overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              key={selectedOffer.url}
              src={selectedOffer.url}
              width="100%"
              height="800"
              frameBorder="0"
              allow="payment"
              title={`Book ${selectedOffer.name} in ${location.shortName}`}
            />
          </div>
          <Script src="https://embed.acuityscheduling.com/js/embed.js" strategy="lazyOnload" />
        </div>
      )}
    </>
  )
}
