"use client"

import Link from "next/link"
import { ArrowRight, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/SiteHeader"
import Image from "next/image"

export default function GlassRecyclingClient() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <h1 className="flex flex-wrap items-center justify-center gap-4 text-center font-serif text-5xl font-black uppercase leading-none md:text-7xl">
            <span>Recycle Glass</span>
            <Recycle
              className="inline-block shrink-0 text-blue-500"
              style={{ width: "1em", height: "1em", animation: "spin 3s linear infinite" }}
              aria-hidden="true"
            />
            <span className="text-blue-500">Rescue Dogs</span>
          </h1>
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-muted-foreground">
            We recycle 100% of the smashable items. A percentage of sales goes towards the Oregon Dog Rescue and Puplandia for food, blankets, and supplies.
          </p>
        </div>
      </section>

      {/* Glass Hound Infographic */}
      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/glass.hound-W47p2pdkbFCPHAKwM1PMiPv5eRsCUM.png"
            alt="Glass Hound — Recycle Glass. Rescue Dogs. Three-step process: Bars sign up, we drop off totes, weekly pickup. $1,000 sign-up bonus towards your team building event at Rage Room Portland or Celtic Axe."
            width={1040}
            height={520}
            className="w-full rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* Oregon Dog Rescue + CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ore.dog.logo-2wcT0sQWw2v7EnhOjxa7r5dXKvcTS7.png"
            alt="Oregon Dog Rescue"
            width={200}
            height={200}
            className="mx-auto mb-8 size-40"
          />
          <h2 className="text-balance font-serif text-3xl font-black uppercase md:text-5xl">
            Proud partner of<br /><span className="text-blue-500">Oregon Dog Rescue</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            A percentage of every booking supports food, shelter, toys, and medical care for rescue dogs in Oregon.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button asChild size="lg" className="text-base font-black uppercase tracking-wider px-10">
              <Link href="/book">Book Now <ArrowRight data-icon="inline-end" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-black uppercase tracking-wider px-10">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Sign Up <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
