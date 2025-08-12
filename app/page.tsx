import type { Metadata } from "next"
import ClientPage from "./ClientPage"
import FAQSchema from "@/components/schema/FAQSchema"
import ServiceSchema from "@/components/schema/ServiceSchema"

export const metadata: Metadata = {
  title: "Rage Room Portland | #1 Stress Relief & Axe Throwing Experience",
  description:
    "Rage Room Portland - #1 rated stress relief destination! Smash TVs & electronics in soundproof rooms, throw axes, drink craft beer. Book your rage session now!",
}

export default function Home() {
  return (
    <>
      <FAQSchema />
      <ServiceSchema />
      <ClientPage />
    </>
  )
}
