export default function ServiceSchema() {
  const serviceSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Rage Room and Axe Throwing Portland",
    description:
      "Professional rage room and axe throwing services in Portland, Oregon. Stress relief, team building, and entertainment for individuals and groups.",
    provider: {
      "@type": "LocalBusiness",
      name: "Rage Room Portland",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8409 N Lombard St",
        addressLocality: "Portland",
        addressRegion: "OR",
        postalCode: "97203",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "State",
      name: "Oregon",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rage Room Portland Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Individual Rage Room Session",
            description: "Personal stress relief session in soundproof rage room",
          },
          price: "35",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Portland Team Building Events",
            description: "Corporate team building with rage room and axe throwing",
          },
          price: "45",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Axe Throwing Portland",
            description: "Professional axe throwing instruction and lanes",
          },
          price: "25",
          priceCurrency: "USD",
        },
      ],
    },
    serviceType: "Entertainment and Recreation",
    category: "Stress Relief and Team Building",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaData) }} />
}
