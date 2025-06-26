import type { Metadata } from "next"
import BookPageClient from "./BookPageClient"

export const metadata: Metadata = {
  title: "Book Rage Room Portland | Axe Throwing Sessions | Instant Booking",
  description:
    "Book your Portland rage room & axe throwing session now! Choose from rage room, axe throwing, or combo packages. Instant online booking available.",
}

export default function BookPage() {
  return <BookPageClient />
}
