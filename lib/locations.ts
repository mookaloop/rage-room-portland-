export type LocationSlug = "st-johns" | "tualatin"

export type LocationData = {
  slug: LocationSlug
  name: string
  shortName: string
  city: string
  address: string
  streetAddress: string
  postalCode: string
  intro: string
  context: string
  hours: { day: string; opens?: string; closes?: string; label: string }[]
  bookingLinks: { name: string; description: string; price: string; duration: string; url: string }[]
  waiverUrl: string
  directionsUrl: string
}

const contact = { phone: "(503) 212-9031", phoneHref: "tel:+15032129031", email: "info@rageroomportland.co" }

export const locations: Record<LocationSlug, LocationData> = {
  "st-johns": {
    slug: "st-johns",
    name: "St. Johns, Portland",
    shortName: "St. Johns",
    city: "Portland",
    address: "8409 N Lombard St, Portland, OR 97203",
    streetAddress: "8409 N Lombard St",
    postalCode: "97203",
    intro: "Smash, throw, and recharge in North Portland's St. Johns neighborhood.",
    context: "Our original location is inside StormBreaker Brewing, pairing rage room and axe throwing sessions with a distinctly Portland brewpub setting.",
    hours: [
      { day: "Monday", label: "Closed" }, { day: "Tuesday", opens: "16:00", closes: "21:00", label: "4–9 PM" },
      { day: "Wednesday", opens: "16:00", closes: "21:00", label: "4–9 PM" }, { day: "Thursday", opens: "16:00", closes: "21:00", label: "4–9 PM" },
      { day: "Friday", opens: "12:00", closes: "22:00", label: "12–10 PM" }, { day: "Saturday", opens: "11:00", closes: "22:00", label: "11 AM–10 PM" },
      { day: "Sunday", opens: "11:00", closes: "21:00", label: "11 AM–9 PM" },
    ],
    bookingLinks: [
      { name: "Rage Room", description: "A private destruction session with safety gear included.", price: "From $35", duration: "45 minutes", url: "https://Bookcelticaxe.as.me/?appointmentType=category:Stormbreaker%20Rage%20Room%20" },
      { name: "Axe Throwing", description: "Professional lanes and instruction for every skill level.", price: "From $25", duration: "1 hour", url: "https://Bookcelticaxe.as.me/?appointmentType=category:Stormbreaker%20Axe%20Throwing" },
      { name: "Rage + Axe Combo", description: "The full experience: throwing first, then smashing.", price: "From $45", duration: "About 90 minutes", url: "https://Bookcelticaxe.as.me/?appointmentType=category:Stormbreaker%20Rage%20%2F%20Axe%20Combo" },
    ],
    waiverUrl: "https://waiver.smartwaiver.com/w/tkfmatvzjuc5pg5n471dgf/web/",
    directionsUrl: "https://maps.google.com/?q=Rage+Room+Portland,+8409+N+Lombard+St,+Portland,+OR+97203",
  },
  tualatin: {
    slug: "tualatin",
    name: "Tualatin, Oregon",
    shortName: "Tualatin",
    city: "Tualatin",
    address: "19475 SW 118th Ave, Rage Suite, Tualatin, OR 97062",
    streetAddress: "19475 SW 118th Ave, Rage Suite",
    postalCode: "97062",
    intro: "Rage rooms and axe throwing for Tualatin and Portland's south metro.",
    context: "Our Tualatin Rage Suite brings the same smash-and-throw lineup closer to Tigard, Lake Oswego, Sherwood, and the south metro.",
    hours: [
      { day: "Monday", label: "Closed" }, { day: "Tuesday", label: "Closed" },
      { day: "Wednesday", opens: "16:00", closes: "21:00", label: "4–9 PM" }, { day: "Thursday", opens: "16:00", closes: "17:00", label: "4–5 PM" },
      { day: "Friday", opens: "15:00", closes: "17:00", label: "3–5 PM" }, { day: "Saturday", opens: "12:00", closes: "16:00", label: "12–4 PM" },
      { day: "Sunday", opens: "15:00", closes: "20:00", label: "3–8 PM" },
    ],
    bookingLinks: [
      { name: "Stickmen Rage Room", description: "Break bottles, electronics, and more in a private rage suite.", price: "From $35", duration: "45 minutes", url: "https://app.acuityscheduling.com/schedule.php?owner=21103841&appointmentType=category:Stickmen%20Rage%20Room" },
      { name: "Stickmen Axe Throwing", description: "A guided axe throwing session with equipment included.", price: "From $25", duration: "1 hour", url: "https://app.acuityscheduling.com/schedule.php?owner=21103841&appointmentType=category:Stickmen%20Axe%20Throwing" },
      { name: "Stickmen Rage / Axe Combo", description: "Combine both experiences in one high-energy visit.", price: "From $45", duration: "About 90 minutes", url: "https://app.acuityscheduling.com/schedule.php?owner=21103841&appointmentType=category:Stickmen%20Rage%20%2F%20Axe%20Combo" },
    ],
    waiverUrl: "https://waiver.smartwaiver.com/w/5dd30c54c7d71/web/",
    directionsUrl: "https://maps.google.com/?q=19475+SW+118th+Ave,+Tualatin,+OR+97062",
  },
}

export const businessContact = contact
export const locationList = Object.values(locations)
