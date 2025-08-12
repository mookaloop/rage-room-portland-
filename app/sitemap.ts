import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rageroomportland.co"

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-01-06"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date("2025-01-06"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date("2025-01-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/parties-events`,
      lastModified: new Date("2025-01-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gift-cards`,
      lastModified: new Date("2025-01-06"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
