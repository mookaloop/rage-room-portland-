import type { Metadata } from "next"
import ClientPage from "./ClientPage"
import FAQSchema from "@/components/schema/FAQSchema"
import ServiceSchema from "@/components/schema/ServiceSchema"
import { OrganizationSchema } from "@/components/schema/JsonLd"

export const metadata: Metadata = {
  title: "Rage Room Portland | St. Johns & Tualatin Locations",
  description: "Book a private rage room in Portland at our St. Johns or Tualatin location. Smash bottles, electronics, and stress—then add axe throwing if you want more.",
  alternates: { canonical: "/" },
  openGraph: { title: "Rage Room Portland | St. Johns & Tualatin", description: "Choose St. Johns or Tualatin and book Portland's rage room experience. Axe throwing is available as an optional bonus.", url: "/" },
}

export default function Home() { return <><OrganizationSchema /><FAQSchema /><ServiceSchema /><ClientPage /></> }
