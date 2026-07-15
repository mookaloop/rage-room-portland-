import type { Metadata } from "next"
import BookPageClient from "./BookPageClient"
import type { LocationSlug } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Book Rage Room & Axe Throwing | Portland & Tualatin",
  description: "Choose St. Johns or Tualatin and book a rage room, axe throwing, or combo session online with Rage Room Portland.",
  alternates: { canonical: "/book" },
}

export default async function BookPage({ searchParams }: { searchParams: Promise<{ location?: string }> }) {
  const query = await searchParams
  const initialLocation: LocationSlug = query.location === "tualatin" ? "tualatin" : "st-johns"
  return <BookPageClient initialLocation={initialLocation} />
}
