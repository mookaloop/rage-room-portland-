import type { Metadata } from "next"
import BookPageClient from "./BookPageClient"

export const metadata: Metadata = {
  title: "Book Rage Room Portland | Instant Online Booking | Axe Throwing",
  description:
    "Book Rage Room Portland now! Choose rage room sessions, axe throwing, or combo packages. Instant online booking available. Portland's #1 stress relief experience!",
}

export default function BookPage() {
  return <BookPageClient />
}
