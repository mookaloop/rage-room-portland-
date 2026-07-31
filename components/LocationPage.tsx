import Link from "next/link"
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react"
import type { LocationData } from "@/lib/locations"
import { businessContact, locations } from "@/lib/locations"
import { Button } from "@/components/ui/button"
import { BookingOfferCards } from "@/components/BookingOfferCards"
import SiteHeader from "@/components/SiteHeader"
import { LocationSchema } from "@/components/schema/JsonLd"

export default function LocationPage({ location, heroVideo }: { location: LocationData; heroVideo?: string }) {
  const other = location.slug === "st-johns" ? locations.tualatin : locations["st-johns"]
  return <main className="min-h-screen bg-background text-foreground">
    <LocationSchema location={location} />
    <SiteHeader />
    <section className="relative overflow-hidden border-b border-border bg-card py-16 md:py-24">
      <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} className="pointer-events-none absolute inset-0 size-full object-cover motion-reduce:hidden">
        <source src={heroVideo ?? "/videos/rage-room-hero.mp4"} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div className="container relative mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground"><Link href="/">Home</Link><span>/</span><Link href="/book" className="transition-colors hover:text-foreground">Locations</Link><span>/</span><span className="text-foreground">{location.shortName}</span></nav>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-4xl">
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-secondary">Now open · Book online</p>
            <h1 className="text-balance font-serif text-5xl font-black uppercase leading-none md:text-7xl">{location.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{location.intro} {location.context}</p>
          </div>
          <Button asChild className="h-auto px-6 py-4 text-lg font-bold whitespace-nowrap">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSey2owIHFQMOlXLbaYRHyT6Jp87x_BCTtZLzrqJCuEIxcAWVA/viewform" target="_blank" rel="noreferrer">
              Large Party Booking
            </a>
          </Button>
        </div>
      </div>
    </section>
    <section className="py-14 md:py-20"><div className="container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-8 flex items-end justify-between gap-4"><div><p className="font-mono text-sm uppercase tracking-widest text-secondary">{location.slug === "st-johns" ? "Deposits are refundable with at least 24 hours' notice." : "Book at Stickmen now"}</p><h2 className="mt-2 text-balance font-serif text-3xl font-black uppercase md:text-5xl">Rage Room / Axe Throwing OR Combo</h2></div></div>
      <BookingOfferCards offers={location.bookingLinks} />
    </div></section>
    <section className="border-y border-border bg-card py-14"><div className="container mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
      <div>
        <MapPin className="mb-4 text-primary" aria-hidden="true" />
        <h2 className="font-serif text-3xl font-black uppercase">Find Us in {location.shortName}</h2>
        <address className="mt-4 not-italic leading-relaxed text-muted-foreground">{location.address}</address>
        {/* Google Maps embed */}
        <div className="mt-6 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-[0_0_20px_2px_hsl(322_100%_55%_/_0.15)]">
          <iframe
            title={`Map of ${location.name}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`}
            width="100%"
            height="260"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
            aria-label={`Google Map showing ${location.name}`}
          />
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <Button asChild variant="outline"><a href={location.directionsUrl} target="_blank" rel="noreferrer">Open in maps</a></Button>
          <a className="flex items-center gap-2 font-bold text-secondary" href={businessContact.phoneHref}><Phone aria-hidden="true" />{businessContact.phone}</a>
        </div>
      </div>
      <div><Clock className="mb-4 text-secondary" aria-hidden="true" /><h2 className="font-serif text-3xl font-black uppercase">Weekly hours</h2><dl className="mt-4 flex max-w-md flex-col gap-2">{location.hours.map((item) => <div key={item.day} className="flex justify-between gap-4 border-b border-border pb-2"><dt>{item.day}</dt><dd className="font-bold">{item.label}</dd></div>)}</dl></div>
    </div></section>
    <section className="py-14"><div className="container mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6"><p className="font-mono text-sm uppercase tracking-widest text-secondary">Two locations, one seriously good time</p><h2 className="text-balance font-serif text-3xl font-black uppercase">Also explore {other.shortName}</h2><p className="text-muted-foreground">Compare the setting, hours, and booking options at our {other.name} location.</p><Button asChild variant="outline"><Link href={`/locations/${other.slug}`}>View {other.shortName}<ArrowRight data-icon="inline-end" /></Link></Button></div></section>
  </main>
}
