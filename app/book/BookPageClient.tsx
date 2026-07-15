"use client"

import { useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { ArrowUpRight, MapPin } from "lucide-react"
import SiteHeader from "@/components/SiteHeader"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { locations, type LocationSlug } from "@/lib/locations"

export default function BookPageClient({ initialLocation }: { initialLocation: LocationSlug }) {
  const [location, setLocation] = useState<LocationSlug>(initialLocation)
  const [selectedTualatin, setSelectedTualatin] = useState<number | null>(null)
  const current = locations[location]
  return <main className="min-h-screen bg-background text-foreground"><SiteHeader />
    <section className="border-b border-border bg-card py-14 md:py-20"><div className="container mx-auto max-w-6xl px-4 sm:px-6"><p className="font-mono text-sm font-bold uppercase tracking-widest text-secondary">Book your rage room</p><h1 className="mt-3 text-balance font-serif text-5xl font-black uppercase md:text-7xl">Choose your location. <span className="text-primary">Start with the smash.</span></h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Reserve a private rage room in St. Johns or Tualatin. Axe throwing is available as an optional add-on or combo experience.</p></div></section>
    <section className="py-12"><div className="container mx-auto max-w-6xl px-4 sm:px-6"><Tabs value={location} onValueChange={(value) => { setLocation(value as LocationSlug); setSelectedTualatin(null) }}><TabsList className="grid h-auto w-full grid-cols-2"><TabsTrigger value="st-johns" className="py-4 text-base">St. Johns</TabsTrigger><TabsTrigger value="tualatin" className="py-4 text-base">Tualatin</TabsTrigger></TabsList>
      {(["st-johns", "tualatin"] as const).map((slug) => <TabsContent key={slug} value={slug} className="mt-8"><div className="mb-8"><h2 className="font-serif text-3xl font-black uppercase">Book {locations[slug].shortName}</h2><p className="mt-2 flex items-center gap-2 text-muted-foreground"><MapPin aria-hidden="true" />{locations[slug].address}</p></div><div className="grid gap-5 md:grid-cols-3">{locations[slug].bookingLinks.map((offer, index) => <Card key={offer.name} className="neon-border-hover flex flex-col bg-card"><CardHeader><CardTitle className="font-serif text-2xl uppercase">{offer.name}</CardTitle><CardDescription>{offer.description}</CardDescription></CardHeader><CardContent className="flex-1"><p className="text-2xl font-black text-secondary">{offer.price}</p><p className="text-sm text-muted-foreground">{offer.duration}</p></CardContent><CardFooter>{slug === "tualatin" ? <Button size="lg" className="w-full text-base font-bold tracking-wide" onClick={() => setSelectedTualatin(index)}>Show available times</Button> : <Button asChild size="lg" className="w-full text-base font-bold tracking-wide"><a href={offer.url} target="_blank" rel="noreferrer">Book on Acuity<ArrowUpRight data-icon="inline-end" /></a></Button>}</CardFooter></Card>)}</div>
      {slug === "tualatin" && selectedTualatin !== null && <div id="scheduler" className="mt-10 scroll-mt-24"><div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="font-mono text-sm uppercase tracking-widest text-secondary">Secure Acuity scheduler</p><h2 className="mt-2 font-serif text-3xl font-black uppercase">{locations.tualatin.bookingLinks[selectedTualatin].name}</h2></div><Button asChild variant="outline"><a href={locations.tualatin.bookingLinks[selectedTualatin].url} target="_blank" rel="noreferrer">Open in new tab<ArrowUpRight data-icon="inline-end" /></a></Button></div><div className="min-h-[800px] overflow-hidden rounded-lg border border-border bg-card"><iframe key={locations.tualatin.bookingLinks[selectedTualatin].url} src={locations.tualatin.bookingLinks[selectedTualatin].url} width="100%" height="800" frameBorder="0" allow="payment" title={`Book ${locations.tualatin.bookingLinks[selectedTualatin].name} in Tualatin`} /></div><Script src="https://embed.acuityscheduling.com/js/embed.js" strategy="lazyOnload" /></div>}
      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row"><Button asChild variant="outline"><a href={locations[slug].waiverUrl} target="_blank" rel="noreferrer">Sign {locations[slug].shortName} waiver<ArrowUpRight data-icon="inline-end" /></a></Button><Button asChild variant="ghost"><Link href={`/locations/${slug}`}>View location details</Link></Button></div></TabsContent>)}
    </Tabs></div></section><Footer /></main>
}
