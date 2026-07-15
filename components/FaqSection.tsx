"use client"

import { Hammer } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What can I smash in the rage room?",
    a: "We recycle a variety of electronics, including TVs, printers, fax machines, old video game systems, and glass. We do not smash ceramics or furniture because we recycle 100% of our destruction.",
  },
  {
    q: "How much does a rage room session cost?",
    a: "Rage room sessions start at $35. Axe throwing starts at $25. The combo (rage room + axe throwing) is $45 — save $10! We offer packages for groups, extended sessions, and gift cards.",
  },
  {
    q: "What safety equipment is provided?",
    a: "We provide all necessary safety equipment including a hard hat, face shield, coveralls, and gloves. Our staff will fully gear you up before you enter the rage room or step onto the axe throwing lanes.",
  },
  {
    q: "Is it safe for beginners?",
    a: "Absolutely. Our experienced staff delivers a full safety briefing before every session. No prior experience is necessary for the rage room or axe throwing — our coaches guide you through everything.",
  },
  {
    q: "Do I need to make a reservation?",
    a: "Reservations are strongly recommended as spots fill up fast, especially on weekends. Walk-ins are welcome when space is available. Book online to guarantee your time slot.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Yes. Please contact us at least 24 hours before your session to cancel or reschedule at no charge. Late cancellations or no-shows may be subject to a fee.",
  },
  {
    q: "What is the minimum age? Any other requirements?",
    a: "Participants must be 10 years old or older. A parent or guardian can sign the waiver online before the appointment. At least one parent or guardian must be present during the session, though they do not have to participate.",
  },
  {
    q: "Are there food and drinks available?",
    a: "Yes! Both locations are inside brewpubs — StormBreaker Brewing in St. Johns and Tualatin Brewing in Tualatin. Enjoy craft beer, food, and cocktails before or after your experience.",
  },
]

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-border bg-background py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-[hsl(322_100%_55%_/_0.15)] ring-2 ring-[hsl(322_100%_55%_/_0.4)]">
              <Hammer className="size-7 text-primary" aria-hidden="true" />
            </div>
          </div>
          <p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-secondary">
            Got questions?
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-4xl font-black uppercase leading-tight tracking-wide text-foreground md:text-5xl"
          >
            Rage Room Portland{" "}
            <span className="text-primary">FAQ</span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border-2 border-border bg-card px-6 transition-colors duration-200 data-[state=open]:border-primary/60 data-[state=open]:shadow-[0_0_18px_2px_hsl(322_100%_55%_/_0.18)]"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold uppercase tracking-wide text-foreground hover:no-underline md:text-lg [&[data-state=open]]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
