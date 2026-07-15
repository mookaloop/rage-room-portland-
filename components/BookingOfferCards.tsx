"use client"

import type { ComponentType } from "react"
import Link from "next/link"
import { Axe, Hammer, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import type { LocationData } from "@/lib/locations"

type Offer = LocationData["bookingLinks"][number]

type OfferStyle = {
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>
  iconBg: string
  borderStyle: string
  glowColor: string
  titleColor: string
  displayTitle: string
  description: string
  buttonEmoji: string
  buttonLabel: string
  buttonClass: string
  badge: string | null
}

const offerStyles: OfferStyle[] = [
  {
    icon: Hammer,
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(322_100%_62%),hsl(322_100%_35%))]",
    borderStyle: "border-[hsl(322_100%_55%)]",
    glowColor: "shadow-[0_0_28px_6px_hsl(322_100%_55%_/_0.55),inset_0_0_30px_hsl(322_100%_55%_/_0.04)]",
    titleColor: "text-[hsl(322_100%_62%)]",
    displayTitle: "Rage Room",
    description: "Smash bottles, electronics, and stress in your own destruction space. Safety gear included—just bring the energy.",
    buttonEmoji: "🔥",
    buttonLabel: "BOOK RAGE ROOM",
    buttonClass: "bg-[hsl(322_100%_55%)] text-white shadow-[0_0_16px_4px_hsl(322_100%_55%_/_0.5)] hover:bg-[hsl(322_100%_48%)]",
    badge: null,
  },
  {
    icon: Zap,
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(280_100%_55%))]",
    borderStyle: "border-[hsl(184_100%_48%)]",
    glowColor: "shadow-[0_0_28px_6px_hsl(184_100%_48%_/_0.5),inset_0_0_30px_hsl(184_100%_48%_/_0.04)]",
    titleColor: "text-foreground",
    displayTitle: "Rage Room + Axe Throwing Combo",
    description: "Smash first, throw axes next, and get the full high-energy experience in one unforgettable visit.",
    buttonEmoji: "💀",
    buttonLabel: "BOOK ULTIMATE COMBO",
    buttonClass: "bg-gradient-to-r from-[hsl(322_100%_55%)] to-[hsl(184_100%_48%)] text-white shadow-[0_0_20px_4px_hsl(322_100%_55%_/_0.4)] hover:opacity-90",
    badge: "BEST VALUE",
  },
  {
    icon: Axe,
    iconBg: "bg-[radial-gradient(circle_at_40%_40%,hsl(184_100%_55%),hsl(184_100%_28%))]",
    borderStyle: "border-[hsl(184_100%_48%)]",
    glowColor: "shadow-[0_0_28px_6px_hsl(184_100%_48%_/_0.55),inset_0_0_30px_hsl(184_100%_48%_/_0.04)]",
    titleColor: "text-[hsl(184_100%_52%)]",
    displayTitle: "Axe Throwing",
    description: "Channel your inner Viking on professional lanes with friendly instruction and all throwing gear included.",
    buttonEmoji: "⚡",
    buttonLabel: "BOOK AXE THROWING",
    buttonClass: "bg-[hsl(184_100%_40%)] text-black shadow-[0_0_16px_4px_hsl(184_100%_48%_/_0.5)] hover:bg-[hsl(184_100%_34%)]",
    badge: null,
  },
]

function renderCta({ href, onSelect, className, label }: { href?: string; onSelect?: () => void; className: string; label: string }) {
  // Tualatin flow: select a tab instead of navigating.
  if (onSelect) {
    return <button type="button" onClick={onSelect} className={className}>{label}</button>
  }
  // External booking destinations (Acuity) must open in a new tab so they
  // are not swallowed by client-side routing or the preview iframe.
  const isExternal = Boolean(href && /^https?:\/\//i.test(href))
  if (isExternal) {
    return <a href={href} target="_blank" rel="noreferrer noopener" className={className}>{label}</a>
  }
  // Internal navigation (e.g. /book?location=) stays same-tab.
  return <Link href={href ?? "/book"} className={className}>{label}</Link>
}

function BookingOfferCard({ offer, index, href, onSelect }: { offer: Offer; index: number; href?: string; onSelect?: () => void }) {
  const style = offerStyles[index] ?? offerStyles[0]
  const Icon = style.icon
  const price = offer.price.replace(/^From\s+/i, "")
  const buttonClasses = cn("block w-full rounded-xl border-0 py-4 text-center text-base font-black uppercase tracking-wider transition-all hover:scale-[1.02]", style.buttonClass)

  return (
    <article className={cn("neon-border-hover relative flex min-h-full flex-col rounded-[2rem] border-2 bg-card p-6 text-center transition-transform duration-300 hover:-translate-y-2 md:p-8", style.borderStyle, style.glowColor)}>
      {style.badge && <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg">🔥 {style.badge} 🔥</div>}
      <div className={cn("mx-auto mb-6 mt-2 flex size-28 items-center justify-center rounded-full", style.iconBg)}><Icon className="size-12 text-white drop-shadow-lg" strokeWidth={1.8} aria-hidden={true} /></div>
      <h3 className={cn("mb-5 text-balance font-serif text-2xl font-black uppercase leading-tight tracking-wide md:text-3xl", style.titleColor)}>{style.displayTitle}</h3>
      <div className="mb-7 flex flex-1 items-center rounded-3xl border border-border bg-background/70 p-5 shadow-inner"><p className="text-pretty text-lg font-semibold leading-relaxed text-white">{style.description}</p></div>
      <div className="mb-2"><p className="font-black leading-none"><span className="text-2xl uppercase text-white">FROM </span><span className={cn("text-5xl", style.titleColor)}>{price}</span></p><p className="mt-2 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">{offer.duration}</p>{style.badge && <p className="mt-2 font-mono text-sm font-black uppercase tracking-widest text-secondary">Save $10!</p>}</div>
      <div className="mt-5">{renderCta({ href: href ?? offer.url, onSelect, className: buttonClasses, label: `${style.buttonEmoji} ${style.buttonLabel} ${style.buttonEmoji}` })}</div>
    </article>
  )
}

export function BookingOfferCards({ offers, bookingHref, hrefForOffer, onSelect }: { offers: Offer[]; bookingHref?: string; hrefForOffer?: (index: number) => string; onSelect?: (index: number) => void }) {
  return <div className="grid items-stretch gap-8 pt-4 md:grid-cols-3">{[0, 2, 1].map((index) => <BookingOfferCard key={offers[index].name} offer={offers[index]} index={index} href={bookingHref ?? hrefForOffer?.(index)} onSelect={onSelect ? () => onSelect(index) : undefined} />)}</div>
}
