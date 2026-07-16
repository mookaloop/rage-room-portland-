"use client"

import Link from "next/link"
import { ArrowRight, Axe, Clock, CreditCard, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/SiteHeader"
import { locationList } from "@/lib/locations"

const howItWorksSteps = [
  {
    number: "01",
    icon: MapPin,
    title: "Choose Your Location",
    accentColor: "text-primary",
    borderColor: "border-primary",
    glowColor: "shadow-[0_0_24px_4px_hsl(322_100%_55%_/_0.35)]",
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(322_100%_62%),hsl(322_100%_35%))]",
    description: "Pick between our North Portland location in St. Johns or our SE Portland Metro spot in Tualatin. Both are inside brewpubs — so grab a beer before or after you smash.",
    details: ["St. Johns — North Portland", "Tualatin — SE Portland Metro"],
  },
  {
    number: "02",
    icon: Axe,
    title: "Choose Your Destruction",
    accentColor: "text-secondary",
    borderColor: "border-secondary",
    glowColor: "shadow-[0_0_24px_4px_hsl(184_100%_48%_/_0.35)]",
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(184_100%_28%))]",
    description: "Go full rage room, hurl some axes, or do both with the combo deal. All safety gear is included — hard hat, coveralls, face shield, and gloves. No experience needed.",
    details: ["Rage Room — from $35, 45 min", "Axe Throwing — from $25, 1 hr", "Combo — from $45, save $10"],
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pay Deposit & Show Up",
    accentColor: "text-foreground",
    borderColor: "border-foreground/30",
    glowColor: "shadow-[0_0_24px_4px_hsl(322_100%_55%_/_0.2),0_0_24px_4px_hsl(184_100%_48%_/_0.2)]",
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(280_100%_55%))]",
    description: "A small deposit holds your spot. Pay the balance when you arrive. Wear closed-toed shoes and show up 15 minutes early so you have maximum time to rage and throw.",
    details: ["Deposit holds your time slot", "Pay balance day-of at the venue", "Arrive 15 min early, closed-toed shoes"],
  },
]

export default function ClientPage() {
  return <main className="min-h-screen bg-background text-foreground">
    <SiteHeader />
    <section className="relative overflow-hidden border-b border-border bg-card py-16 md:py-24 lg:py-28">
      <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} className="pointer-events-none absolute inset-0 size-full object-cover motion-reduce:hidden">
        <source src="/videos/rage-room-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div className="relative container mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div><p className="mb-4 font-mono text-base font-bold uppercase tracking-widest text-secondary">Portland&apos;s Rage Rooms Inside Brewpubs</p><h1 className="text-balance font-serif text-5xl font-black uppercase leading-none md:text-7xl lg:text-8xl">Smash stress. Break stuff. <span className="text-primary">Choose your rage room.</span></h1><p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground">Book a private rage room and let it all out in a safe, controlled space. Want more? Add axe throwing or make it a combo.</p></div>
        <div id="locations" className="grid gap-4" aria-label="Choose a location">{locationList.map((location, index) => <Card key={location.slug} className="neon-border-hover group bg-background/90 shadow-xl backdrop-blur-sm"><CardHeader className="flex-row items-start justify-between gap-4"><div><p className="font-mono text-xs font-bold uppercase tracking-widest text-secondary">{index === 0 ? "North Portland Location" : "SE Portland Metro Location"}</p><CardTitle className="mt-2 font-serif text-3xl uppercase">{location.slug === "st-johns" ? "St. Johns: Stormbreaker Brewery" : location.shortName}</CardTitle><CardDescription className="mt-2">{location.intro}</CardDescription></div><MapPin className="text-primary" aria-hidden="true" /></CardHeader><CardContent><p className="text-sm text-muted-foreground">{location.address}</p><p className="mt-2 flex items-center gap-2 text-sm"><Clock aria-hidden="true" />{location.slug === "st-johns" ? "Open Tue–Sun" : "Open Wed–Sun"}</p></CardContent><CardFooter><Button asChild className="w-full"><Link href={`/locations/${location.slug}`}>View {location.shortName} & book<ArrowRight data-icon="inline-end" /></Link></Button></CardFooter></Card>)}</div>
      </div>
    </section>
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-base font-bold uppercase tracking-widest text-secondary">Simple 3-step process</p>
          <h2 className="text-balance font-serif text-4xl font-black uppercase md:text-6xl">How It <span className="text-primary">Works</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">Everything you need to know before you show up and start smashing.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {howItWorksSteps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className={`neon-border-hover relative flex flex-col rounded-[2rem] border-2 bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 ${step.borderColor} ${step.glowColor}`}>
                <p className={`mb-4 font-mono text-xs font-black uppercase tracking-widest ${step.accentColor}`}>Step {step.number}</p>
                <div className={`mx-auto mb-6 flex size-24 items-center justify-center rounded-full ${step.iconBg}`}>
                  <Icon className="size-10 text-white drop-shadow-lg" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className={`mb-5 font-serif text-2xl font-black uppercase leading-tight tracking-wide ${step.accentColor}`}>{step.title}</h3>
                <div className="mb-6 flex flex-1 flex-col justify-center rounded-3xl border border-border bg-background/70 p-5 shadow-inner">
                  <p className="text-pretty text-base leading-relaxed text-foreground">{step.description}</p>
                </div>
                <ul className="space-y-2 text-left">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`mt-0.5 text-base leading-none ${step.accentColor}`}>›</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="text-base font-black uppercase tracking-wider px-10">
            <Link href="/book">Book Now <ArrowRight data-icon="inline-end" /></Link>
          </Button>
        </div>
      </div>
    </section>
    <section className="border-y border-border bg-card py-16"><div className="container mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2"><div><h2 className="font-serif text-3xl font-black uppercase">Built for groups</h2><p className="mt-4 leading-relaxed text-muted-foreground">Birthday parties, team outings, date nights, bachelor and bachelorette groups—bring your people and we&apos;ll help you build the right session.</p><Button asChild variant="outline" className="mt-6"><Link href="/parties-events">Plan a group visit</Link></Button></div><div><h2 className="font-serif text-3xl font-black uppercase">First time?</h2><p className="mt-4 leading-relaxed text-muted-foreground">Learn what to wear, when to arrive, what you can smash, and how our safety briefing works before you book.</p><Button asChild variant="outline" className="mt-6"><Link href="/how-it-works">See how it works</Link></Button></div></div></section>

    {/* Bottom Book Now CTA */}
    <section className="relative overflow-hidden py-20 md:py-28">
      <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} className="pointer-events-none absolute inset-0 size-full object-cover motion-reduce:hidden">
        <source src="/videos/rage-room-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
      <div className="relative container mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="mb-4 font-mono text-base font-bold uppercase tracking-widest text-secondary">Two locations. Zero excuses.</p>
        <h2 className="text-balance font-serif text-5xl font-black uppercase leading-none md:text-7xl">
          Ready to <span className="text-primary">smash?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Pick your location, choose your experience, and pay a deposit to hold your spot. St. Johns or Tualatin — both inside brewpubs.
        </p>
        <Button asChild size="lg" className="mt-10 px-14 py-6 text-xl font-black uppercase tracking-wider shadow-[0_0_32px_6px_hsl(322_100%_55%_/_0.5)]">
          <Link href="/book">Book Now <ArrowRight data-icon="inline-end" /></Link>
        </Button>
        <p className="mt-5 text-sm text-muted-foreground">Deposit required to reserve. Pay balance day-of.</p>
      </div>
    </section>
  </main>
}
