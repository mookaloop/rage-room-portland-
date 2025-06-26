import type { Metadata } from "next"
import PartiesEventsClient from "./PartiesEventsClient"

export const metadata: Metadata = {
  title: "Portland Team Building | Corporate Events | Rage Room Parties",
  description:
    "Portland's best team building activities! Rage room & axe throwing corporate events. Perfect for parties, team building & group events. Book now!",
}

export default function PartiesEvents() {
  return <PartiesEventsClient />
}
