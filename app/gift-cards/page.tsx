import type { Metadata } from "next"
import GiftCardsClient from "./GiftCardsClient"

export const metadata: Metadata = {
  title: "Gift Cards | Rage Room Portland",
  description:
    "Give the gift of destruction with a Rage Room Portland gift card — perfect for birthdays, holidays, or stress relief.",
}

export default function GiftCards() {
  return <GiftCardsClient />
}
