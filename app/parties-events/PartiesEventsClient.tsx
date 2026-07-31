"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Star, Calendar, MapPin, Phone } from "lucide-react"
import SiteHeader from "@/components/SiteHeader"

const BOOKING_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSey2owIHFQMOlXLbaYRHyT6Jp87x_BCTtZLzrqJCuEIxcAWVA/viewform"

export default function PartiesEventsClient() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-secondary">
                Large Groups · Corporate · Celebrations
              </p>
              <h1 className="text-balance font-serif text-5xl font-black uppercase leading-none md:text-7xl">
                Team Building That Actually Works
              </h1>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                Forget the ropes course. Smash stuff together, throw axes, and walk away closer than when you showed up.
                Portland&apos;s most memorable team event — guaranteed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="font-black uppercase tracking-wider">
                  <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                    Book Your Event
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-black uppercase tracking-wider">
                  <a href="sms:5032129031">
                    Text Us
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MapPin className="size-4 text-secondary" />Portland, Oregon</span>
                <a href="tel:5032129031" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="size-4 text-secondary" />(503) 212-9031
                </a>
              </div>
            </div>

            {/* Real photo */}
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1663-9IwXNjvFgSff6LblyijfLEr6E2HoAd.jpeg"
                alt="Group of people in blue jumpsuits having a blast in the Celtic Axe / Rage Room Portland smash room"
                width={800}
                height={640}
                className="w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real photo — full-width banner */}
      <section className="border-b border-border">
        <div className="relative h-72 w-full overflow-hidden md:h-96">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20%286%29-rG1iCMtvxhJOGGfXTmTTUEZl1PY1nT.jpeg"
            alt="Group of seven people posing with axes and a Celtic Axe clan banner in front of the Stickmen Brewing Company Celtic Axe mural"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/50" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="font-mono text-sm font-bold uppercase tracking-widest text-secondary mb-3">Real Teams. Real Fun.</p>
            <h2 className="text-balance font-serif text-4xl font-black uppercase leading-none text-foreground md:text-6xl">
              Your crew next?
            </h2>
          </div>
        </div>
      </section>

      {/* What works for */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-secondary">Every occasion</p>
            <h2 className="text-balance font-serif text-4xl font-black uppercase md:text-5xl">Works for any group</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Users, title: "Corporate & Team Building", desc: "Quarterly retreats, department bonding, company outings. 10–50+ people." },
              { icon: Star, title: "Birthday Parties", desc: "Ages 10+ welcome. The most memorable birthday in Portland — full stop." },
              { icon: Calendar, title: "Bachelor & Bachelorette", desc: "Celebrate the last night of freedom the right way. Private sessions available." },
              { icon: Users, title: "Date Nights", desc: "Skip dinner and a movie. Nothing bonds you like smashing stuff side by side." },
              { icon: Calendar, title: "Holiday Parties", desc: "Office parties people will actually want to come to. Group discounts available." },
              { icon: Star, title: "Fundraising Events", desc: "Draw crowds, raise funds, and give people something to talk about." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-secondary/10">
                  <Icon className="size-5 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-black uppercase">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-balance font-serif text-4xl font-black uppercase md:text-5xl">Quick answers</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "How many people can participate?", a: "Groups from 6 to 50+ people. We have multiple rage rooms and axe throwing lanes so everyone is active the whole time." },
              { q: "How far in advance should we book?", a: "2–3 weeks ahead is ideal, especially for weekends. Corporate and large groups should book as early as possible." },
              { q: "What's included in a group package?", a: "Private facility access, all safety gear, professional instruction, a variety of smashable items, axe throwing, and dedicated event coordination." },
              { q: "Can we customize the experience?", a: "Yes — combine rage room and axe throwing, add premium smash items, extend your time, or add catering. Just ask." },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-serif text-lg font-black uppercase">{q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-balance font-serif text-4xl font-black uppercase md:text-5xl">Ready to book?</h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Fill out the form and we&apos;ll get back to you fast to build the right package for your group.
          </p>
          <Button asChild size="lg" className="mt-8 font-black uppercase tracking-wider px-12">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              Request a Quote
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
