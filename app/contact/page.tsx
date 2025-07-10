import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact | Rage Room Portland",
  description:
    "Need to get in touch with Rage Room Portland? Text us for the fastest response or reach out via email. Book large group events with our quick request form.",
}

export default function ContactPage() {
  return <ContactClient />
}
