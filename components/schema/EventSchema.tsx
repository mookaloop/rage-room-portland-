export default function EventSchema() {
  const eventSchemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Portland Team Building at Rage Room",
    description:
      "Corporate team building events featuring rage room sessions and axe throwing. Perfect for Portland businesses looking to boost morale and team cohesion.",
    startDate: "2025-01-07T16:00:00-08:00",
    endDate: "2025-12-31T23:00:00-08:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
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
    organizer: {
      "@type": "Organization",
      name: "Rage Room Portland",
      url: "https://rageroomportland.co",
    },
    offers: {
      "@type": "Offer",
      price: "45",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://rageroomportland.co/parties-events",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemaData) }} />
}
