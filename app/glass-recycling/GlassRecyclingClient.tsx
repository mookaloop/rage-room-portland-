"use client"

import Link from "next/link"
import { ArrowRight, Heart, Recycle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/SiteHeader"
import Image from "next/image"

export default function GlassRecyclingClient() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5" aria-hidden="true" />
        <div className="relative container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 flex items-center justify-center gap-4">
            <Recycle className="size-12 text-secondary animate-spin" style={{ animationDuration: "3s" }} aria-hidden="true" />
            <h1 className="text-balance font-serif text-5xl font-black uppercase md:text-7xl">
              Every smash <span className="text-secondary">matters</span>
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            We recycle 100% of the smashable items from your rage room session. A percentage of every booking goes directly to the Oregon Dog Rescue to support food, shelter, toys, and medical care for dogs in need.
          </p>
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

      {/* Logos Section */}
      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-12 text-center font-serif text-3xl font-black uppercase md:text-4xl">
            Partners in <span className="text-secondary">Purpose</span>
          </h2>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Rage Room Portland Logo */}
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-lg border-2 border-primary/20 bg-background p-8">
                <div className="text-center">
                  <p className="font-serif text-3xl font-black uppercase text-foreground">Rage Room Portland</p>
                  <p className="mt-2 text-sm text-muted-foreground">St. Johns & Tualatin</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground">Your stress relief destination, now with purpose.</p>
            </div>

            {/* Oregon Dog Rescue Logo */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center rounded-lg border-2 border-blue-500/20 bg-background p-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ore.dog.logo-2wcT0sQWw2v7EnhOjxa7r5dXKvcTS7.png"
                  alt="Oregon Dog Rescue logo"
                  width={200}
                  height={200}
                  className="max-w-xs"
                />
              </div>
              <p className="text-center text-muted-foreground">Supporting rescue dogs with food, shelter, toys, and medical care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Glass Gets Recycled */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-4 text-center font-serif text-4xl font-black uppercase md:text-5xl">
            Where Your Glass <span className="text-secondary">Goes</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
            Here&apos;s the journey from smash to sustainability.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border-2 border-secondary/30 bg-card p-8 text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-secondary/10">
                  <Recycle className="size-8 text-secondary" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-black uppercase">You Smash</h3>
              <p className="text-muted-foreground">
                Every bottle and item is carefully collected after your rage room session.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border-2 border-secondary/30 bg-card p-8 text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-secondary/10">
                  <Truck className="size-8 text-secondary" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-black uppercase">We Collect</h3>
              <p className="text-muted-foreground">
                Glass Hound partners pick up our recycling totes weekly and transport them responsibly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border-2 border-secondary/30 bg-card p-8 text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-secondary/10">
                  <Heart className="size-8 text-secondary" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-black uppercase">Rescue Dogs Benefit</h3>
              <p className="text-muted-foreground">
                A percentage of your booking supports Oregon Dog Rescue&apos;s mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-primary/20 bg-background/50 p-8">
              <p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-primary">Recycling Impact</p>
              <h3 className="text-balance font-serif text-3xl font-black uppercase">100% Zero Waste</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every item you smash gets a second life. Glass, metal, and electronics are all responsibly recycled through our Glass Hound partnership.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-secondary/20 bg-background/50 p-8">
              <p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-secondary">Community Support</p>
              <h3 className="text-balance font-serif text-3xl font-black uppercase">Every Booking Helps</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A percentage of sales goes directly to Oregon Dog Rescue to support food, shelter, toys, medicine, and more for rescue dogs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5" aria-hidden="true" />
        <div className="relative container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance font-serif text-4xl font-black uppercase md:text-5xl">
            Ready to make an <span className="text-secondary">impact?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Book your rage room session, smash with purpose, and know that your stress relief is helping rescue dogs in Oregon.
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
