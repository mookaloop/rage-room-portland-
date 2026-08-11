"use client"

import Link from "next/link"
import { ArrowRight, HandHeart, PackageOpen, Recycle, Repeat, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/SiteHeader"
import Image from "next/image"

const SIGNUP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScf_AUgo1urUwTtbUGQmhlmx1w17OcqDNqLGHCFPEgy04-AZw/viewform?usp=header"

const steps = [
  {
    number: "01",
    icon: PackageOpen,
    title: "Bars Sign Up",
    accentColor: "text-primary",
    borderColor: "border-primary",
    glowColor: "shadow-[0_0_24px_4px_hsl(322_100%_55%_/_0.35)]",
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(322_100%_62%),hsl(322_100%_35%))]",
    description:
      "Bars, restaurants, and businesses join the Glass Hound program in minutes — no equipment to buy, no process to manage. We handle the logistics from day one.",
  },
  {
    number: "02",
    icon: Truck,
    title: "We Drop Off Totes",
    accentColor: "text-secondary",
    borderColor: "border-secondary",
    glowColor: "shadow-[0_0_24px_4px_hsl(184_100%_48%_/_0.35)]",
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(184_100%_28%))]",
    description:
      "We deliver Glass Hound collection totes to your location. Fill them with your recycled glass — bottles, jars, anything smashable — as part of your normal routine.",
  },
  {
    number: "03",
    icon: Recycle,
    title: "Weekly Pickup",
    accentColor: "text-foreground",
    borderColor: "border-foreground/30",
    glowColor: "shadow-[0_0_24px_4px_hsl(322_100%_55%_/_0.2),0_0_24px_4px_hsl(184_100%_48%_/_0.2)]",
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(280_100%_55%))]",
    description:
      "We pick up your totes every week and swap them for fresh ones on the spot. Your glass gets recycled, and a share of the proceeds goes straight to local dog rescue.",
  },
]

export default function GlassRecyclingClient() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <p className="mb-4 text-center font-mono text-sm font-bold uppercase tracking-widest text-secondary">
            The Glass Hound Program
          </p>
          <h1 className="flex flex-wrap items-center justify-center gap-4 text-center font-serif text-5xl font-black uppercase leading-none md:text-7xl">
            <span>Recycle Glass</span>
            <Recycle
              className="inline-block shrink-0 text-primary"
              style={{ width: "1em", height: "1em", animation: "spin 3s linear infinite" }}
              aria-hidden="true"
            />
            <span className="text-primary">Rescue Dogs</span>
          </h1>
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-muted-foreground">
            Every bottle we smash gets a second life. We recycle 100% of the glass and materials from our
            destruction experiences — and a percentage of proceeds is donated every month to support local dog
            rescue.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-base font-black uppercase tracking-wider px-10">
              <a href={SIGNUP_URL} target="_blank" rel="noreferrer">
                Bars Sign Up <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-black uppercase tracking-wider px-10">
              <a href={SIGNUP_URL} target="_blank" rel="noreferrer">
                Join the Program
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-card py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-secondary">
              Simple 3-step process
            </p>
            <h2 className="text-balance font-serif text-4xl font-black uppercase leading-tight md:text-5xl">
              How Glass Hound <span className="text-primary">Works</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className={`neon-border-hover relative flex flex-col rounded-[2rem] border-2 bg-background p-8 text-center transition-all duration-300 hover:-translate-y-2 ${step.borderColor} ${step.glowColor}`}
                >
                  <p className={`mb-4 font-mono text-xs font-black uppercase tracking-widest ${step.accentColor}`}>
                    Step {step.number}
                  </p>
                  <div className={`mx-auto mb-6 flex size-24 items-center justify-center rounded-full ${step.iconBg}`}>
                    <Icon className="size-10 text-white drop-shadow-lg" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className={`mb-5 font-serif text-2xl font-black uppercase leading-tight tracking-wide ${step.accentColor}`}>
                    {step.title}
                  </h3>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              )
            })}
          </div>

          {/* Infographic */}
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-14 block"
            aria-label="Sign up for Glass Hound — opens the sign-up form"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/glass.hound-W47p2pdkbFCPHAKwM1PMiPv5eRsCUM.png"
              alt="Glass Hound — Recycle Glass. Rescue Dogs. Three-step process: Bars sign up, we drop off totes, weekly pickup."
              width={1040}
              height={520}
              className="w-full rounded-2xl border border-border transition-opacity group-hover:opacity-90"
            />
          </a>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-secondary">
              Why it matters
            </p>
            <h2 className="text-balance font-serif text-4xl font-black uppercase leading-tight md:text-5xl">
              Real recycling. <span className="text-primary">Real impact.</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <Repeat className="size-9 text-secondary" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl font-black uppercase">Environmental Impact</h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Every session at Rage Room Portland produces broken glass, and none of it goes to a landfill. 100%
                of the glass and materials from our destruction experiences is collected, sorted, and recycled
                through Glass Hound — turning smashed bottles into raw material instead of waste.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <HandHeart className="size-9 text-primary" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl font-black uppercase">Community Give-Back</h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                This isn&apos;t a one-time donation drive. A percentage of proceeds is donated every single month,
                on an ongoing basis, to support local dog rescue efforts — funding food, shelter, toys, and
                medical care for dogs waiting on their forever homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="border-y border-border bg-card py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ore.dog.logo-2wcT0sQWw2v7EnhOjxa7r5dXKvcTS7.png"
            alt="Oregon Dog Rescue"
            width={200}
            height={200}
            className="mx-auto mb-8 size-40"
          />
          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-secondary">
            Get involved
          </p>
          <h2 className="text-balance font-serif text-4xl font-black uppercase leading-tight md:text-5xl">
            Proud partner of{" "}
            <a
              href="https://www.oregondogrescue.org/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline decoration-2 underline-offset-4 hover:text-primary/80"
            >
              Oregon Dog Rescue
            </a>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Every glass drop-off and every booking helps turn recycled glass into local impact. Want to do more?
            Support{" "}
            <a
              href="https://www.oregondogrescue.org/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary underline decoration-2 underline-offset-4 hover:text-primary/80"
            >
              Oregon Dog Rescue
            </a>{" "}
            or{" "}
            <a
              href="https://www.puplandiadogrescue.org/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary underline decoration-2 underline-offset-4 hover:text-primary/80"
            >
              Puplandia Dog Rescue
            </a>{" "}
            directly — donate, volunteer, or foster. Fostering is incredibly rewarding, and it&apos;s one of the
            biggest ways you can help a rescue dog find their way home.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-base font-black uppercase tracking-wider px-10">
              <a href="https://www.oregondogrescue.org/" target="_blank" rel="noreferrer">
                Support Oregon Dog Rescue <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-black uppercase tracking-wider px-10">
              <a href="https://www.puplandiadogrescue.org/" target="_blank" rel="noreferrer">
                Support Puplandia as a Foster <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Business signup */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border-2 border-primary/30 bg-card p-10 text-center">
            <p className="font-mono text-sm font-bold uppercase tracking-widest text-primary">
              For Bar &amp; Restaurant Owners
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-black uppercase md:text-4xl">
              Own a bar? Join the program.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Sign up to get Glass Hound totes dropped off at your location — your recycled glass helps rescue
              dogs get food, blankets, and supplies. Know a bar or restaurant that should be doing this? Share
              the link with them.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base font-black uppercase tracking-wider px-10">
                <a href={SIGNUP_URL} target="_blank" rel="noreferrer">
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
    </main>
  )
}
