"use client"

import Link from "next/link"
import { Calendar, CreditCard, Hammer } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/SiteHeader"

const steps = [
  {
    number: "01",
    icon: Hammer,
    title: "Choose Your Experience",
    accentColor: "text-primary",
    borderColor: "border-primary",
    glowColor: "shadow-[0_0_24px_4px_hsl(322_100%_55%_/_0.35)]",
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(322_100%_62%),hsl(322_100%_35%))]",
    description:
      "Pick the experience that fits your vibe — rage room, axe throwing, or the ultimate combo. Rage room sessions are 45 minutes of pure destruction: smash bottles, TVs, printers, and electronics in a soundproof chamber with your own music cranked up. Axe throwing lanes are 1 hour with expert coaching. Combo is 1.5 hours of both.",
    details: [
      "Rage Room — from $35, 45 min sessions",
      "Axe Throwing — from $25, 1 hr sessions",
      "Combo Deal — from $45, save $10",
    ],
  },
  {
    number: "02",
    icon: Calendar,
    title: "Pick Your Date & Time",
    accentColor: "text-secondary",
    borderColor: "border-secondary",
    glowColor: "shadow-[0_0_24px_4px_hsl(184_100%_48%_/_0.35)]",
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(184_100%_28%))]",
    description:
      "Select a time that works for your crew from our live availability calendar. We have morning, afternoon, and evening slots available seven days a week at both our North Portland (St. Johns) and SE Portland Metro (Tualatin) locations.",
    details: [
      "Open 7 days a week",
      "Morning, afternoon & evening slots",
      "Two Portland-area locations",
    ],
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Book & Pay",
    accentColor: "text-foreground",
    borderColor: "border-foreground/30",
    glowColor: "shadow-[0_0_24px_4px_hsl(322_100%_55%_/_0.2),0_0_24px_4px_hsl(184_100%_48%_/_0.2)]",
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(280_100%_55%))]",
    description:
      "Secure your spot with a small $20 deposit — no need to know your exact group size upfront. Pay the remaining balance when you arrive on the day. All safety gear is provided: hard hat, coveralls, face shield, and gloves. Just show up ready to destroy.",
    details: [
      "$20 deposit holds your time slot",
      "Pay balance day-of at the venue",
      "All safety gear included",
    ],
  },
]

export default function HowItWorksClient() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-4 font-mono text-base font-bold uppercase tracking-widest text-secondary">
            Simple 3-step process
          </p>
          <h1 className="text-balance font-serif text-5xl font-black uppercase leading-tight text-foreground md:text-7xl">
            How It <span className="text-primary">Works</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Book Portland&apos;s best rage room or axe throwing experience in minutes. It&apos;s fast, easy, and
            completely flexible.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className={`neon-border-hover relative flex flex-col rounded-[2rem] border-2 bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 ${step.borderColor} ${step.glowColor}`}
                >
                  {/* Step number */}
                  <p className={`mb-4 font-mono text-xs font-black uppercase tracking-widest ${step.accentColor}`}>
                    Step {step.number}
                  </p>

                  {/* Icon */}
                  <div
                    className={`mx-auto mb-6 flex size-24 items-center justify-center rounded-full ${step.iconBg}`}
                  >
                    <Icon className="size-10 text-white drop-shadow-lg" strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h2
                    className={`mb-5 font-serif text-2xl font-black uppercase leading-tight tracking-wide md:text-3xl ${step.accentColor}`}
                  >
                    {step.title}
                  </h2>

                  {/* Description box */}
                  <div className="mb-6 flex flex-1 flex-col justify-center rounded-3xl border border-border bg-background/70 p-5 shadow-inner">
                    <p className="text-pretty text-base leading-relaxed text-foreground">{step.description}</p>
                  </div>

                  {/* Detail bullets */}
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

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-lg text-muted-foreground">Ready to unleash? Grab your spot now.</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base font-black uppercase tracking-wider px-10">
                <Link href="/book">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base font-bold uppercase tracking-wider px-10">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
