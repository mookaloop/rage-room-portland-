import type { Metadata } from "next"
import LocationPage from "@/components/LocationPage"
import { locations } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Tualatin Rage Room | Private Smash Sessions",
  description: "Book a private rage room in Tualatin, serving Tigard, Sherwood, Lake Oswego, and south metro Portland. Axe throwing and combo sessions are also available.",
  alternates: { canonical: "/locations/tualatin" },
  openGraph: { title: "Tualatin Rage Room", description: "Private rage room sessions in Tualatin, Oregon, with optional axe throwing and combo experiences.", url: "/locations/tualatin" },
}

export default function TualatinPage() {
  return (
    <LocationPage
      location={locations.tualatin}
      heroVideo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2816%29-8AdiVIZllJ69yVJgMZsQTImkMQbMvH.mp4"
    />
  )
}
