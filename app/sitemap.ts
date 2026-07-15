import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rageroomportland.co"
  const updated = new Date("2026-07-15")
  const routes = [
    { path: "", frequency: "weekly" as const, priority: 1 },
    { path: "/locations/st-johns", frequency: "weekly" as const, priority: 0.95 },
    { path: "/locations/tualatin", frequency: "weekly" as const, priority: 0.95 },
    { path: "/book", frequency: "weekly" as const, priority: 0.9 },
    { path: "/how-it-works", frequency: "monthly" as const, priority: 0.8 },
    { path: "/parties-events", frequency: "monthly" as const, priority: 0.8 },
    { path: "/gift-cards", frequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", frequency: "monthly" as const, priority: 0.7 },
  ]
  return routes.map((route) => ({ url: `${base}${route.path}`, lastModified: updated, changeFrequency: route.frequency, priority: route.priority }))
}
