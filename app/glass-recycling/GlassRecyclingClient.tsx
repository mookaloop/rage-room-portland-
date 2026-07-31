"use client"

import Link from "next/link"
import { ArrowRight, PawPrint } from "lucide-react"
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
          <p className="mb-4 text-center font-mono text-sm font-bold uppercase tracking-widest text-secondary">
            Glass &amp; Recycling
          </p>
          <h1 className="text-balance text-center font-serif text-5xl font-black uppercase leading-none md:text-7xl">
            Every smash <span className="text-blue-500">saves a pup</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-muted-foreground">
            We recycle 100% of the smashable items. A percentage of sales goes towards the Oregon Dog Rescue.
          </p>
        </div>
      </section>

      {/* Glass Hound Infographic */}
      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">

          {/* Circular diagram matching the Glass Hound PDF */}
          <div className="relative mx-auto flex max-w-2xl items-center justify-center">
            <svg viewBox="0 0 480 480" className="w-full h-auto" aria-label="Glass Hound recycling process diagram">
              {/* Outer ring */}
              <circle cx="240" cy="240" r="220" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="8 6" opacity="0.25" />

              {/* Center label */}
              <text x="240" y="228" textAnchor="middle" fontFamily="serif" fontSize="22" fontWeight="900" fill="currentColor" className="uppercase">GLASS</text>
              <text x="240" y="256" textAnchor="middle" fontFamily="serif" fontSize="22" fontWeight="900" fill="#0284c7" className="uppercase">HOUND</text>

              {/* Connecting arcs between steps */}
              <path d="M 130 155 Q 240 80 350 155" fill="none" stroke="#0284c7" strokeWidth="1.5" opacity="0.3" />
              <path d="M 350 155 Q 400 300 270 390" fill="none" stroke="#0284c7" strokeWidth="1.5" opacity="0.3" />
              <path d="M 210 390 Q 80 300 130 155" fill="none" stroke="#0284c7" strokeWidth="1.5" opacity="0.3" />

              {/* Step 1 — top left */}
              <circle cx="120" cy="140" r="52" fill="none" stroke="#0284c7" strokeWidth="2" opacity="0.4" />
              <text x="120" y="132" textAnchor="middle" fontFamily="serif" fontSize="36" fontWeight="900" fill="#0284c7">1</text>
              <text x="120" y="154" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#0284c7" opacity="0.8">WE DROP OFF</text>
              <text x="120" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#0284c7" opacity="0.8">TOTES</text>

              {/* Step 1 description */}
              <foreignObject x="0" y="205" width="180" height="80">
                <p xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: "11px", textAlign: "center", color: "var(--color-muted-foreground)", lineHeight: "1.5", margin: 0 }}>
                  We deliver Glass Hound collection totes to your location. Fill them with your recycled glass.
                </p>
              </foreignObject>

              {/* Step 2 — top right */}
              <circle cx="360" cy="140" r="52" fill="none" stroke="#0284c7" strokeWidth="2" opacity="0.4" />
              <text x="360" y="132" textAnchor="middle" fontFamily="serif" fontSize="36" fontWeight="900" fill="#0284c7">2</text>
              <text x="360" y="154" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#0284c7" opacity="0.8">WEEKLY</text>
              <text x="360" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#0284c7" opacity="0.8">PICKUP</text>

              {/* Step 2 description */}
              <foreignObject x="300" y="205" width="180" height="80">
                <p xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: "11px", textAlign: "center", color: "var(--color-muted-foreground)", lineHeight: "1.5", margin: 0 }}>
                  We pick up your totes weekly and replace them with fresh ones.
                </p>
              </foreignObject>

              {/* Step 3 — bottom center */}
              <circle cx="240" cy="390" r="52" fill="none" stroke="#0284c7" strokeWidth="2" opacity="0.4" />
              <text x="240" y="382" textAnchor="middle" fontFamily="serif" fontSize="36" fontWeight="900" fill="#0284c7">3</text>
              <text x="240" y="404" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#0284c7" opacity="0.8">RESCUE DOGS</text>
              <text x="240" y="420" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#0284c7" opacity="0.8">BENEFIT</text>
            </svg>

            {/* Scattered paw prints */}
            <PawPrint className="absolute top-4 right-4 size-6 text-blue-500/20 rotate-12" aria-hidden="true" />
            <PawPrint className="absolute bottom-8 left-0 size-5 text-blue-500/15 -rotate-20" aria-hidden="true" />
            <PawPrint className="absolute top-1/3 left-2 size-4 text-blue-500/20 rotate-6" aria-hidden="true" />
            <PawPrint className="absolute top-1/3 right-2 size-4 text-blue-500/20 -rotate-10" aria-hidden="true" />
          </div>

          {/* Caption */}
          <p className="mx-auto mt-8 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
            Bars recycled glass helps support our dog rescue partners with food, shelter, toys, meds, and more.
          </p>
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
