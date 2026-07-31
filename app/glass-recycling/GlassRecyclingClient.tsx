"use client"

import Link from "next/link"
import { ArrowRight, Heart, Recycle, Truck, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/SiteHeader"
import Image from "next/image"

const PawPrints = ({ className = "" }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <PawPrint className="size-6 text-secondary/30 absolute" style={{ transform: "rotate(-25deg)" }} aria-hidden="true" />
    <PawPrint className="size-4 text-secondary/20 absolute ml-8" style={{ transform: "rotate(15deg)" }} aria-hidden="true" />
    <PawPrint className="size-5 text-secondary/25 absolute ml-16" style={{ transform: "rotate(-10deg)" }} aria-hidden="true" />
  </div>
)

export default function GlassRecyclingClient() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-blue-500/5" aria-hidden="true" />
        <PawPrints className="top-10 right-10" />
        <PawPrints className="bottom-20 left-10" />
        <div className="relative container mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-balance text-center font-serif text-5xl font-black uppercase md:text-7xl mb-12">
            Every smash <span className="text-blue-500">saves</span> a pup
          </h1>
          
          <div className="grid gap-12 md:grid-cols-2 md:items-center mb-12">
            <div className="flex flex-col justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ore.dog.logo-2wcT0sQWw2v7EnhOjxa7r5dXKvcTS7.png"
                alt="Oregon Dog Rescue"
                width={200}
                height={200}
                className="mb-6 mx-auto md:mx-0 size-32"
              />
              <p className="text-lg leading-relaxed text-muted-foreground">
                We recycle 100% of the smashable items from your rage room session. A percentage of every booking goes directly to the Oregon Dog Rescue to support food, shelter, toys, and medical care for rescue dogs in need.
              </p>
            </div>
            
            <div className="rounded-2xl border-2 border-blue-500/30 bg-card/80 p-8">
              <svg viewBox="0 0 400 400" className="w-full h-auto" aria-hidden="true">
                <defs>
                  <style>{`
                    .glass-hound-text { font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; fill: #0284c7; }
                    .glass-hound-number { font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; fill: #0284c7; }
                    .glass-hound-small { font-family: Arial, sans-serif; font-size: 14px; fill: #0284c7; text-anchor: middle; }
                  `}</style>
                </defs>
                
                <circle cx="200" cy="200" r="180" fill="none" stroke="#0284c7" strokeWidth="3" opacity="0.3"/>
                
                <text x="200" y="60" className="glass-hound-text" textAnchor="middle">GLASS HOUND</text>
                
                <g>
                  <circle cx="80" cy="150" r="40" fill="none" stroke="#0284c7" strokeWidth="2" opacity="0.5"/>
                  <text x="80" y="155" className="glass-hound-number" textAnchor="middle">1</text>
                  <text x="80" y="210" className="glass-hound-small">WE DROP OFF</text>
                  <text x="80" y="230" className="glass-hound-small">TOTES</text>
                </g>
                
                <g>
                  <circle cx="200" cy="280" r="40" fill="none" stroke="#0284c7" strokeWidth="2" opacity="0.5"/>
                  <text x="200" y="285" className="glass-hound-number" textAnchor="middle">2</text>
                  <text x="200" y="340" className="glass-hound-small">WEEKLY PICKUP</text>
                </g>
                
                <g>
                  <circle cx="320" cy="150" r="40" fill="none" stroke="#0284c7" strokeWidth="2" opacity="0.5"/>
                  <text x="320" y="155" className="glass-hound-number" textAnchor="middle">3</text>
                  <text x="320" y="210" className="glass-hound-small">RESCUE DOGS</text>
                  <text x="320" y="230" className="glass-hound-small">BENEFIT</text>
                </g>
              </svg>
              <p className="text-center text-sm text-muted-foreground mt-6">Recycled glass helps support our dog rescue partners with food, shelter, toys, meds & more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 font-serif text-4xl font-black uppercase md:text-5xl">
                <span className="text-secondary">100%</span> Recycled
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                Every bottle, can, and piece of glass you smash gets collected, sorted, and sent to our recycling partners. Nothing goes to waste.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Your rage room session is more than just stress relief—it's part of a circular economy that keeps materials out of landfills and supports our community.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-2xl border-2 border-secondary/30 bg-card/50 p-8">
              <Recycle className="size-32 text-secondary opacity-30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative border-y border-border bg-card py-16 md:py-24 overflow-hidden">
        <PawPrints className="top-12 left-12" />
        <PawPrints className="bottom-12 right-12" />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <h2 className="mb-12 text-center font-serif text-3xl font-black uppercase md:text-4xl">
            Partners in <span className="text-blue-500">Purpose</span>
          </h2>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Rage Room Portland Logo */}
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-lg border-2 border-secondary/30 bg-background p-12">
                <div className="text-center">
                  <p className="font-serif text-3xl font-black uppercase text-foreground">Rage Room Portland</p>
                  <p className="mt-2 text-sm text-muted-foreground">St. Johns & Tualatin</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground">Your stress relief destination, now with purpose.</p>
            </div>

            {/* Oregon Dog Rescue Logo - FEATURED */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative flex items-center justify-center rounded-2xl border-4 border-blue-500/40 bg-background p-12 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl" aria-hidden="true" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ore.dog.logo-2wcT0sQWw2v7EnhOjxa7r5dXKvcTS7.png"
                  alt="Oregon Dog Rescue logo"
                  width={250}
                  height={250}
                  className="max-w-sm relative z-10"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-black uppercase text-blue-500">Oregon Dog Rescue</h3>
                <p className="mt-2 text-muted-foreground">Supporting rescue dogs with food, shelter, toys, medical care, and love.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Glass Gets Recycled & Dogs Benefit */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <PawPrints className="top-20 right-12" />
        <PawPrints className="bottom-12 left-12" />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <h2 className="mb-4 text-center font-serif text-4xl font-black uppercase md:text-5xl">
            From Smash <span className="text-blue-500">to Rescue</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
            Every session you book helps rescue dogs get food, shelter, toys, and medical care. Here&apos;s how your smashing saves pups.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border-2 border-blue-500/30 bg-card p-8 text-center hover:border-blue-500/50 transition">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-blue-500/10">
                  <Recycle className="size-8 text-blue-500" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-black uppercase">You Smash</h3>
              <p className="text-muted-foreground">
                Every bottle, can, and piece of glass is collected after your rage room session.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border-2 border-blue-500/30 bg-card p-8 text-center hover:border-blue-500/50 transition">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-blue-500/10">
                  <Truck className="size-8 text-blue-500" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-black uppercase">We Recycle</h3>
              <p className="text-muted-foreground">
                Glass Hound partners pick up our recycling totes weekly and ensure 100% responsible recycling.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-transparent p-8 text-center shadow-md">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-blue-500/20">
                  <Heart className="size-8 text-blue-500" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-black uppercase text-blue-500">Rescue Dogs Thrive</h3>
              <p className="text-muted-foreground">
                A percentage of your booking goes directly to Oregon Dog Rescue for food, shelter, toys, and medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative border-y border-border bg-card py-16 md:py-24 overflow-hidden">
        <PawPrints className="top-12 right-12 opacity-50" />
        <PawPrints className="bottom-12 left-12 opacity-50" />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-secondary/30 bg-background/50 p-8">
              <p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-secondary">Recycling Impact</p>
              <h3 className="text-balance font-serif text-3xl font-black uppercase">100% Zero Waste</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every item you smash gets a second life. Glass, metal, and electronics are all responsibly recycled through our Glass Hound partnership—nothing goes to waste.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent p-8">
              <p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-blue-500">Community Support</p>
              <h3 className="text-balance font-serif text-3xl font-black uppercase text-blue-500">Rescue Dogs Win</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every booking helps rescue dogs get food, shelter, toys, medical care, and the second chance they deserve through Oregon Dog Rescue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-secondary/5" aria-hidden="true" />
        <PawPrints className="top-10 left-12" />
        <PawPrints className="bottom-10 right-12" />
        <div className="relative container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance font-serif text-4xl font-black uppercase md:text-5xl">
            Ready to save <span className="text-blue-500">rescue pups?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Book your rage room session, smash with purpose, and know that your stress relief is helping rescue dogs get the care and love they deserve.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button asChild size="lg" className="text-base font-black uppercase tracking-wider px-10">
              <Link href="/book">Book Now <ArrowRight data-icon="inline-end" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-black uppercase tracking-wider px-10">
              <a href="#" onClick={(e) => { e.preventDefault(); alert("Signup link coming soon!"); }}>
                Learn More <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Glass Hound Partnership:</span> We partner with Glass Hound to ensure 100% of collected glass is responsibly recycled. Our collection totes are picked up weekly and transported to local recycling facilities.
          </p>
        </div>
      </section>
    </main>
  )
}
