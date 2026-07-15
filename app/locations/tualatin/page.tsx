import type { Metadata } from "next"
import LocationPage from "@/components/LocationPage"
import { locations } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Tualatin Rage Room & Axe Throwing | Rage Suite",
  description: "Book Stickmen rage room, axe throwing, and combo sessions at our Tualatin Rage Suite, serving Tigard, Sherwood, Lake Oswego, and south metro Portland.",
  alternates: { canonical: "/locations/tualatin" },
  openGraph: { title: "Tualatin Rage Room & Axe Throwing", description: "Rage rooms and axe throwing in Tualatin, Oregon.", url: "/locations/tualatin" },
}

export default function TualatinPage() { return <LocationPage location={locations.tualatin} /> }
