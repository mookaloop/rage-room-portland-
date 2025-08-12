export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rageroomportland.co/#business",
    name: "Rage Room Portland",
    alternateName: ["Portland Rage Room", "Rage Room PDX"],
    description:
      "Portland's premier rage room and axe throwing experience. Smash stress away in soundproof rooms, throw axes like a Viking, and enjoy craft beer. Perfect for team building, parties, and stress relief.",
    url: "https://rageroomportland.co",
    telephone: "(503) 212-9031",
    email: "info@rageroomportland.co",
    priceRange: "$25-$95",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8409 N Lombard St",
      addressLocality: "Portland",
      addressRegion: "OR",
      postalCode: "97203",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.5848",
      longitude: "-122.7574",
    },
    openingHours: ["Mo-Th 16:00-23:00", "Fr 14:00-01:00", "Sa 12:00-01:00", "Su 12:00-22:00"],
    image: [
      "https://rageroomportland.co/images/rage-room-logo.png",
      "https://rageroomportland.co/images/rage-room-interior.jpg",
      "https://rageroomportland.co/images/axe-throwing-lanes.jpg",
    ],
    logo: "https://rageroomportland.co/images/rage-room-logo.png",
    sameAs: ["https://www.facebook.com/rageroomportland/", "https://www.instagram.com/rageroompdx/"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah M.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Amazing stress relief experience! The rage room was exactly what I needed after a tough week. Staff was professional and safety-focused. Highly recommend for Portland team building!",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rage Room Portland Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rage Room Session",
            description: "Smash bottles, electronics, and furniture in soundproof destruction chambers",
          },
          price: "35",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Axe Throwing Portland",
            description: "Professional axe throwing lanes with expert instruction",
          },
          price: "25",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Combo Experience",
            description: "Rage room and axe throwing combination package",
          },
          price: "50",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking Available",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wheelchair Accessible",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Safety Equipment Provided",
        value: true,
      },
    ],
    knowsAbout: [
      "Rage Room",
      "Axe Throwing",
      "Stress Relief",
      "Team Building Portland",
      "Corporate Events",
      "Birthday Parties",
      "Bachelor Parties",
      "Things to do Portland",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Portland",
        sameAs: "https://en.wikipedia.org/wiki/Portland,_Oregon",
      },
      {
        "@type": "City",
        name: "Beaverton",
      },
      {
        "@type": "City",
        name: "Lake Oswego",
      },
      {
        "@type": "City",
        name: "Tigard",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
