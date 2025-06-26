import type { Metadata } from "next"
import HowItWorksClient from "./HowItWorksClient"

export const metadata: Metadata = {
  title: "How It Works | Portland Rage Room Booking Process | Easy 3 Steps",
  description:
    "Learn how to book your Portland rage room experience in 3 easy steps. Choose your adventure, add extras, and book your spot. Simple and fast!",
}

export default function HowItWorks() {
  return <HowItWorksClient />
}
