import type { Metadata } from "next"
import HowItWorksClient from "./HowItWorksClient"

export const metadata: Metadata = {
  title: "How Rage Room Portland",
  description:
    "Learn how Rage Room Portland works in 3 easy steps! Choose your experience, add extras, book your spot. Portland's premier rage room & axe throwing guide.",
}

export default function HowItWorks() {
  return <HowItWorksClient />
}
