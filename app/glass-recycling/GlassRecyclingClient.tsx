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

      {/* Glass Hound Infographic + Bar Owner CTA */}
      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScf_AUgo1urUwTtbUGQmhlmx1w17OcqDNqLGHCFPEgy04-AZw/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
            className="group block"
            aria-label="Sign up for Glass Hound — opens the sign-up form"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/glass.hound-W47p2pdkbFCPHAKwM1PMiPv5eRsCUM.png"
              alt="Glass Hound — Recycle Glass. Rescue Dogs. Three-step process: Bars sign up, we drop off totes, weekly pickup. $1,000 sign-up bonus towards your team building event at Rage Room Portland or Celtic Axe."
              width={1040}
              height={520}
              className="w-full rounded-2xl transition-opacity group-hover:opacity-90"
              priority
            />
          </a>

          {/* Bar owner sign-up */}
          <div className="mt-12 rounded-2xl border-2 border-blue-500/30 bg-background p-10 text-center">
            <p className="font-mono text-sm font-bold uppercase tracking-widest text-blue-500">For Bar &amp; Restaurant Owners</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-black uppercase md:text-4xl">
              Own a bar? Join the program.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Sign up to get Glass Hound totes dropped off at your location — your recycled glass helps rescue dogs get food, blankets, and supplies. Know a bar or restaurant that should be doing this? Share the link with them.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base font-black uppercase tracking-wider px-10">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScf_AUgo1urUwTtbUGQmhlmx1w17OcqDNqLGHCFPEgy04-AZw/viewform?usp=header" target="_blank" rel="noreferrer">
                  Sign Up Here <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base font-black uppercase tracking-wider px-10">
                <Link href="/book">
                  Book a Session <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </div>
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
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScf_AUgo1urUwTtbUGQmhlmx1w17OcqDNqLGHCFPEgy04-AZw/viewform?usp=header" target="_blank" rel="noreferrer">
                Sign Up <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
