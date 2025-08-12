import type { Metadata } from "next"
import PartiesEventsClient from "./PartiesEventsClient"
import EventSchema from "@/components/schema/EventSchema"

export const metadata: Metadata = {
  title: "Rage Room Portland Team Building | Corporate Events & Parties",
  description:
    "Rage Room Portland team building events! Corporate parties, birthday celebrations & group events. Portland's most unique team building experience. Book now!",
}

export default function PartiesEvents() {
  return (
    <>
      <EventSchema />
      <PartiesEventsClient />
    </>
  )
}
