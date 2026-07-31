import type { Metadata } from "next"
import GlassRecyclingClient from "./GlassRecyclingClient"

export const metadata: Metadata = {
  title: "Glass Recycling & Oregon Dog Rescue | Rage Room Portland",
  description: "We recycle 100% of smashable items and donate a percentage of sales to the Oregon Dog Rescue. Learn how your visit makes a difference.",
  alternates: { canonical: "/glass-recycling" },
}

export default function GlassRecyclingPage() {
  return <GlassRecyclingClient />
}
