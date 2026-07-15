import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import { businessContact, locationList } from "@/lib/locations"

export default function Footer() {
  return <footer className="border-t border-border bg-background py-12 text-foreground"><div className="container mx-auto max-w-7xl px-4 sm:px-6">
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><Link href="/" className="font-serif text-2xl font-black uppercase">Rage Room <span className="text-primary">Portland</span></Link><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">Rage rooms, axe throwing, and combo experiences at two Portland-area locations.</p><a href={businessContact.phoneHref} className="mt-4 flex items-center gap-2 font-bold text-secondary"><Phone aria-hidden="true" />{businessContact.phone}</a></div>
    {locationList.map((location) => <div key={location.slug}><h2 className="font-serif text-xl font-black uppercase text-primary">{location.shortName}</h2><p className="mt-3 flex gap-2 text-sm leading-relaxed text-muted-foreground"><MapPin className="shrink-0" aria-hidden="true" />{location.address}</p><div className="mt-4 flex flex-col gap-2"><Link href={`/locations/${location.slug}`} className="font-bold hover:text-secondary">Location details</Link><Link href={`/book?location=${location.slug}`} className="font-bold hover:text-secondary">Book {location.shortName}</Link><a href={location.waiverUrl} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">Sign {location.shortName} waiver</a></div></div>)}
    <div><h2 className="font-serif text-xl font-black uppercase">Explore</h2><nav className="mt-4 flex flex-col gap-3 text-sm" aria-label="Footer navigation"><Link href="/how-it-works">How It Works</Link><Link href="/parties-events">Parties & Team Building</Link><Link href="/gift-cards">Gift Cards</Link><Link href="/contact">Contact</Link></nav></div></div>
    <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground"><p>© {new Date().getFullYear()} Rage Room Portland. All rights reserved.</p></div>
  </div></footer>
}
