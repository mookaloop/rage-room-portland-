import type { Metadata } from "next"
import ClientPage from "./ClientPage"
import FAQSchema from "@/components/schema/FAQSchema"
import ServiceSchema from "@/components/schema/ServiceSchema"
import { OrganizationSchema } from "@/components/schema/JsonLd"

export const metadata: Metadata = {
  title: "Rage Room Portland | St. Johns & Tualatin Locations",
  description: "Book rage rooms, axe throwing, and combo experiences at Rage Room Portland in St. Johns or Tualatin, Oregon. Compare locations and reserve online.",
  alternates: { canonical: "/" },
  openGraph: { title: "Rage Room Portland | Two Locations", description: "Choose St. Johns or Tualatin for rage rooms, axe throwing, and combo sessions.", url: "/" },
}

export default function Home() { return <><OrganizationSchema /><FAQSchema /><ServiceSchema /><ClientPage /></> }
