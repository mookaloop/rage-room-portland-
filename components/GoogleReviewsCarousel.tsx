"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { googleReviews } from "@/lib/reviews"

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="size-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.33-4.5 2.11-7.45 2.11-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.68 28.19A13.9 13.9 0 0 1 10.94 24c0-1.45.25-2.87.74-4.19v-5.7H4.34A21.93 21.93 0 0 0 2 24c0 3.55.85 6.91 2.34 9.89l7.34-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.11l7.34 5.7c1.74-5.2 6.59-9.06 12.32-9.06z"
      />
    </svg>
  )
}

export default function GoogleReviewsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  return (
    <section className="border-b border-border bg-card py-16 md:py-20" aria-label="Customer reviews">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5">
            <GoogleLogo />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Google Reviews
            </span>
          </div>
          <h2 className="text-balance font-serif text-4xl font-black uppercase md:text-5xl">
            Don&apos;t just take <span className="text-primary">our word for it</span>
          </h2>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-[hsl(24_95%_53%)] text-[hsl(24_95%_53%)]" />
            ))}
          </div>
          <p className="max-w-xl text-pretty text-muted-foreground">
            Real reviews from real people who came in stressed and left grinning.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="mx-auto w-full max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)]"
        >
          <CarouselContent>
            {googleReviews.map((review) => (
              <CarouselItem key={review.name} className="sm:basis-1/2 lg:basis-1/3">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background/80 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={`Photo of ${review.name}`}
                      width={48}
                      height={48}
                      className="size-12 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-bold text-foreground">{review.name}</p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span>{review.timeAgo}</span>
                        <span aria-hidden="true">·</span>
                        <GoogleLogo />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-[hsl(24_95%_53%)] text-[hsl(24_95%_53%)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                    {review.text}
                  </p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
