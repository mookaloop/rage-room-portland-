import type { Metadata } from "next"
import LocationPage from "@/components/LocationPage"
import { locations } from "@/lib/locations"

export const metadata: Metadata = {
  title: "St. Johns Rage Room & Axe Throwing | Portland, OR",
  description: "Book rage room, axe throwing, and combo sessions at Rage Room Portland in St. Johns, inside StormBreaker Brewing on N Lombard Street.",
  alternates: { canonical: "/locations/st-johns" },
  openGraph: { title: "St. Johns Rage Room & Axe Throwing", description: "Smash and throw at our original North Portland location.", url: "/locations/st-johns" },
}

export default function StJohnsPage() { return <LocationPage location={locations["st-johns"]} /> }
