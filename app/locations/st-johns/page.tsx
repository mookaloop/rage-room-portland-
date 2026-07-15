import type { Metadata } from "next"
import LocationPage from "@/components/LocationPage"
import { locations } from "@/lib/locations"

export const metadata: Metadata = {
  title: "St. Johns Rage Room | Portland, Oregon",
  description: "Book a private rage room in Portland's St. Johns neighborhood inside StormBreaker Brewing. Axe throwing and combo sessions are also available.",
  alternates: { canonical: "/locations/st-johns" },
  openGraph: { title: "St. Johns Rage Room | Portland", description: "Smash bottles, electronics, and stress at our original North Portland rage room.", url: "/locations/st-johns" },
}

export default function StJohnsPage() { return <LocationPage location={locations["st-johns"]} /> }
