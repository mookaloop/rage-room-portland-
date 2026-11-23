import Link from "next/link"
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react"
import type { LocationData } from "@/lib/locations"
import { businessContact, locationList } from "@/lib/locations"
import { Button } from "@/components/ui/button"
import { BookingOfferCards } from "@/components/BookingOfferCards"
import SiteHeader from "@/components/SiteHeader"
import { LocationSchema } from "@/components/schema/JsonLd"

const LARGE_PARTY_FORM_URL = "https://forms.gle/SL7avwtBFHuBFESY6"

export default function LocationPage({ location, heroVideo, heroYouTubeId }: { location: LocationData; heroVideo?: string; heroYouTubeId?: string }) {
  const others = locationList.filter((item) => item.slug !== location.slug)
  return <main className="min-h-screen bg-background text-foreground">
    <LocationSchema location={location} />
    <SiteHeader />
    <section className="relative overflow-hidden border-b border-border bg-card py-16 md:py-24">
      {heroYouTubeId ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${heroYouTubeId}?autoplay=1&mute=1&loop=1&playlist=${heroYouTubeId}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3`}
            title={`${location.shortName} rage room background video`}
            tabIndex={-1}
            allow="autoplay; encrypted-media; picture-in-picture"
            className="absolute left-1/2 top-1/2 aspect-video min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
            style={{ width: "max(100%, 177.78vh)", height: "max(100%, 56.25vw)" }}
          />
        </div>
      ) : (
        <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} className="pointer-events-none absolute inset-0 size-full object-cover motion-reduce:hidden">
          <source src={heroVideo ?? "/videos/rage-room-hero.mp4"} type="video/mp4" />
        </video>
      )}
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
            <a href={LARGE_PARTY_FORM_URL} target="_blank" rel="noreferrer">
              Large parties 15+ / outside normal hours
            </a>
          </Button>
        </div>
      </div>
    </section>
    <section className="py-14 md:py-20"><div className="container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-8 flex items-end justify-between gap-4"><div><p className="font-mono text-sm uppercase tracking-widest text-secondary">{location.slug === "st-johns" ? "Small Parties · Deposits are refundable with at least 24 hours' notice." : "Small Parties · Deposits are refundable with at least 24 hours' notice."}</p><h2 className="mt-2 text-balance font-serif text-3xl font-black uppercase md:text-5xl">Rage Room / Axe Throwing OR Combo</h2></div></div>
      <BookingOfferCards offers={location.bookingLinks} />
    </div></section>
    <section className="border-y border-border bg-card py-14"><div className="container mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
      <div>
        <MapPin className="mb-4 text-primary" aria-hidden="true" />
        <h2 className="font-serif text-3xl font-black uppercase">Find Us in {location.shortName}</h2>
        <address className="mt-4 not-italic leading-relaxed text-muted-foreground">{location.address}</address>
        {/* Google Maps embed */}
        <div className="mt-6 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-[0_0_20px_2px_hsl(142_71%_45%_/_0.15)]">
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
      <div><Clock className="mb-4 text-secondary" aria-hidden="true" /><h2 className="font-serif text-3xl font-black uppercase">Weekly hours</h2><dl className="mt-4 flex max-w-md flex-col gap-2">{location.hours.map((item) => <div key={item.day} className="flex justify-between gap-4 border-b border-border pb-2"><dt>{item.day}</dt><dd className="font-bold">{item.label}</dd></div>)}</dl>
        <div className="mt-8 flex max-w-md flex-col gap-3 rounded-2xl border-2 border-primary/30 bg-background p-6">
          <h3 className="text-balance font-serif text-2xl font-black uppercase">Want to book outside normal hours?</h3>
          <p className="text-pretty leading-relaxed text-muted-foreground">Fill out our large party booking form and we&apos;ll work with you to find a time that fits your group.</p>
          <Button asChild className="self-start font-bold">
            <a href={LARGE_PARTY_FORM_URL} target="_blank" rel="noreferrer">
              Fill out the form<ArrowRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>
    </div></section>
    <section className="py-14"><div className="container mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6"><p className="font-mono text-sm uppercase tracking-widest text-secondary">More locations, one seriously good time</p><h2 className="text-balance font-serif text-3xl font-black uppercase">Also explore {others.map((item) => item.shortName).join(" & ")}</h2><p className="text-muted-foreground">Compare the setting, hours, and booking options at our other locations.</p><div className="flex flex-col gap-3 sm:flex-row">{others.map((item) => <Button key={item.slug} asChild variant="outline"><Link href={`/locations/${item.slug}`}>View {item.shortName}<ArrowRight data-icon="inline-end" /></Link></Button>)}</div></div></section>
  </main>
}
