export default function FAQSchema() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What can I smash in the rage room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can smash a variety of items including bottles, plates, electronics, small furniture, and other breakable objects. We provide a safe selection of items specifically chosen for maximum satisfaction and safety.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a rage room session cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our rage room sessions start at $35 for a 15-minute session. We offer packages for groups, extended sessions, and combo deals with axe throwing.",
        },
      },
      {
        "@type": "Question",
        name: "What safety equipment is provided?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide all necessary safety equipment including safety glasses, closed-toe shoes (if needed), coveralls, and gloves. Our staff will ensure you're properly equipped before entering any rage room.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our experienced staff provides a full safety briefing before each session. All safety equipment is provided, and we maintain strict safety protocols to ensure everyone has a fun and safe experience.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum age? Any other requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Participants must be at least 13 years old. Minors (13-17) must have a parent or guardian present to sign a waiver. All participants must wear closed-toe shoes and sign our liability waiver before participating.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
}
