import type { Metadata } from "next"
import LocationPage from "@/components/LocationPage"
import { locations } from "@/lib/locations"

export const metadata: Metadata = {
  title: "St. Johns Rage Room | Inside StormBreaker Brewing, Portland",
  description: "Book a private rage room in Portland's St. Johns neighborhood inside StormBreaker Brewing. Axe throwing and combo sessions are also available.",
  alternates: { canonical: "/locations/stormbreaker" },
  openGraph: { title: "St. Johns Rage Room | StormBreaker Brewing", description: "Smash bottles, electronics, and stress at our St. Johns rage room inside StormBreaker Brewing.", url: "/locations/stormbreaker" },
}

export default function StormBreakerPage() { return <LocationPage location={locations.stormbreaker} heroYouTubeId="pXlY8s5zHSc" /> }
