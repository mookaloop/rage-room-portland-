import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Portland Rage Room | #1 Axe Throwing & Stress Relief Experience",
  description:
    "Portland's top-rated rage room & axe throwing! Smash stress in soundproof rooms, throw axes like a Viking. Perfect for dates, teams & parties. Book now!",
}

export default function Home() {
  return <HomePageClient />
}
