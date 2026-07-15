import type { LocationData } from "@/lib/locations"
import { businessContact } from "@/lib/locations"

const siteUrl = "https://rageroomportland.co"
const safeJson = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c")

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(data) }} />
}

export function OrganizationSchema() {
  return <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Rage Room Portland", url: siteUrl, telephone: businessContact.phone, email: businessContact.email, sameAs: ["https://www.facebook.com/rageroomportland/", "https://www.instagram.com/rageroompdx/"] }} />
}

export function LocationSchema({ location }: { location: LocationData }) {
  const url = `${siteUrl}/locations/${location.slug}`
  const localBusiness = {
    "@context": "https://schema.org", "@type": "LocalBusiness", "@id": `${url}#business`, name: `Rage Room Portland — ${location.shortName}`,
    url, telephone: businessContact.phone, email: businessContact.email, priceRange: "$25–$95",
    address: { "@type": "PostalAddress", streetAddress: location.streetAddress, addressLocality: location.city, addressRegion: "OR", postalCode: location.postalCode, addressCountry: "US" },
    openingHoursSpecification: location.hours.filter((item) => item.opens).map((item) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: item.day, opens: item.opens, closes: item.closes })),
    hasOfferCatalog: { "@type": "OfferCatalog", name: `${location.shortName} Experiences`, itemListElement: location.bookingLinks.map((item) => ({ "@type": "Offer", priceCurrency: "USD", itemOffered: { "@type": "Service", name: item.name, description: item.description, url: item.url } })) },
    parentOrganization: { "@id": `${siteUrl}/#organization` },
  }
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Locations", item: `${siteUrl}/#locations` }, { "@type": "ListItem", position: 3, name: location.shortName, item: url }] }
  return <><JsonLd data={localBusiness} /><JsonLd data={breadcrumbs} /></>
}
