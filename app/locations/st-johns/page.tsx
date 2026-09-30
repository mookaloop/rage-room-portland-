import type { Metadata } from "next"
import LocationPage from "@/components/LocationPage"
import { locations } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Southeast Portland Rage Room | Portland, Oregon",
  description: "Book a private rage room in Portland's Southeast neighborhood inside Hopworks Brewery. Axe throwing and combo sessions are also available.",
  alternates: { canonical: "/locations/st-johns" },
  openGraph: { title: "Southeast Portland Rage Room | Portland", description: "Smash bottles, electronics, and stress at our original Southeast Portland rage room.", url: "/locations/st-johns" },
}

export default function StJohnsPage() { return <LocationPage location={locations["st-johns"]} /> }
