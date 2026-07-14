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
          text: "We recycle a variety of electronics, including TVs, printers, fax machines, old video game systems, and glass. We do not smash ceramics or furniture because we recycle 100% of our destruction.",
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
          text: "Participants must be 10 years old or older. A parent or guardian can sign a waiver online before the appointment. At least one parent or guardian must be in attendance, but they do not have to participate.",
        },
      },
      {
        "@type": "Question",
        name: "Parking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Parking is limited, but there are always spots on the street. Please make sure to arrive 15 minutes early to find a spot and get to your appointment on time so you can have a full experience.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
}
