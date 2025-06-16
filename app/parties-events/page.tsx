"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Calendar, Trophy, Hammer, Axe, Star, Clock, MapPin, Phone } from "lucide-react"

export default function PartiesEvents() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "How many people can participate in Portland team building events?",
      answer:
        "Our Portland rage room and axe throwing facility can accommodate groups from 6 to 50+ people. We have multiple rage rooms and axe throwing lanes to ensure everyone gets maximum participation time during your team building event.",
    },
    {
      question: "What makes rage room Portland perfect for corporate events?",
      answer:
        "Rage room Portland offers a unique stress-relief experience that builds team camaraderie. Breaking items together creates shared experiences and laughter, while axe throwing Portland activities promote friendly competition and team bonding.",
    },
    {
      question: "How far in advance should we book Portland team building activities?",
      answer:
        "For Portland team building events, we recommend booking 2-3 weeks in advance, especially for weekends. Our axe throwing Portland and rage room experiences are popular for corporate groups, so early booking ensures your preferred date and time.",
    },
    {
      question: "What safety measures are in place for large groups?",
      answer:
        "Safety is our top priority for all Portland rage room and axe throwing activities. We provide comprehensive safety briefings, all protective equipment, and have trained staff supervising every session to ensure a safe and fun experience.",
    },
    {
      question: "Can we customize our Portland team building experience?",
      answer:
        "We offer customizable packages combining rage room Portland sessions with axe throwing Portland activities. Add premium items to smash, extended time slots, and catering options to create the perfect team building event.",
    },
    {
      question: "What's included in Portland corporate event packages?",
      answer:
        "Our Portland team building packages include private facility access, safety equipment, professional instruction, a variety of items to smash, axe throwing sessions, and dedicated event coordination to ensure your corporate event runs smoothly.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full bg-black py-6 px-6 border-b border-[#ff00ff]/30">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-[#ff00ff] transition-colors">
            <ArrowLeft className="h-6 w-6" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-black italic transform -skew-x-12 drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]">
            <span className="text-[#00ffff]">PARTIES &</span>
            <span className="text-[#ff00ff]"> EVENTS</span>
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-[#ff00ff]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-flame text-4xl md:text-6xl mb-6 text-white leading-tight">
              PORTLAND TEAM BUILDING & <span className="text-[#ff00ff]">CORPORATE EVENTS</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Looking for unique things to do in Portland? Our rage room Portland and axe throwing Portland experiences
              offer the ultimate team building activities that your group will never forget!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-black font-bold text-lg px-8 py-6"
                onClick={() =>
                  window.open(
                    "https://Bookcelticaxe.as.me/?location=8409%20N%20Lombard%20St%2C%20Portland%2C%20OR%2097203",
                    "_blank",
                  )
                }
              >
                BOOK TEAM BUILDING EVENT
              </Button>
              <Button
                variant="outline"
                className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 font-bold text-lg px-8 py-6"
              >
                GET CUSTOM QUOTE
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#ff00ff]" />
                <span>Portland, Oregon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#00ffff]" />
                <span>Text Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-flame text-4xl md:text-5xl mb-6 text-white">
              WHY CHOOSE <span className="text-[#ff00ff]">PORTLAND RAGE ROOM</span> FOR TEAM BUILDING?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              When searching for things to do Portland for corporate events, nothing beats the unique combination of
              stress relief and team bonding we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#ff00ff]/70 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-flame text-xl mb-4 text-[#ff00ff]">TEAM BONDING</h3>
              <p className="text-white/80">
                Portland team building activities that create lasting memories and stronger workplace relationships
                through shared experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00ffff] to-[#00ffff]/70 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-flame text-xl mb-4 text-[#00ffff]">STRESS RELIEF</h3>
              <p className="text-white/80">
                Our rage room Portland sessions provide the perfect outlet for workplace stress while promoting mental
                wellness and team morale.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-white to-white/70 flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-flame text-xl mb-4 text-white">UNIQUE EXPERIENCE</h3>
              <p className="text-white/80">
                Stand out from typical Portland corporate events with axe throwing Portland and rage room activities
                your team has never tried.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-flame text-xl mb-4 text-[#ff00ff]">FLEXIBLE TIMING</h3>
              <p className="text-white/80">
                Convenient scheduling for Portland team building events with options for lunch breaks, after-work
                sessions, or weekend retreats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-16 bg-black">
        <div className="absolute inset-0 skew-y-1 bg-gradient-to-r from-[#ff00ff] to-[#00ffff]"></div>
      </div>

      {/* Event Types Section */}
      <section className="py-16 bg-gradient-to-b from-[#ff00ff]/10 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-flame text-4xl md:text-5xl mb-6 text-white">
              PERFECT FOR ALL <span className="text-[#ff00ff]">PORTLAND EVENTS</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From corporate team building to birthday celebrations, our Portland rage room and axe throwing experiences
              are ideal for any group event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Team Building */}
            <div className="bg-black border border-[#ff00ff]/30 p-8 rounded-lg hover:border-[#ff00ff] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#ff00ff]/20 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-[#ff00ff]" />
              </div>
              <h3 className="font-flame text-2xl mb-4 text-[#ff00ff]">CORPORATE TEAM BUILDING</h3>
              <p className="text-white/80 mb-4">
                Boost morale and strengthen team dynamics with our Portland team building activities. Perfect for
                quarterly meetings, company retreats, and department bonding.
              </p>
              <ul className="text-white/70 space-y-2">
                <li>• 10-50+ employees</li>
                <li>• Private facility access</li>
                <li>• Professional facilitation</li>
                <li>• Catering options available</li>
              </ul>
            </div>

            {/* Birthday Parties */}
            <div className="bg-black border border-[#00ffff]/30 p-8 rounded-lg hover:border-[#00ffff] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#00ffff]/20 flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-[#00ffff]" />
              </div>
              <h3 className="font-flame text-2xl mb-4 text-[#00ffff]">BIRTHDAY PARTIES</h3>
              <p className="text-white/80 mb-4">
                Make birthdays unforgettable with rage room Portland and axe throwing Portland experiences. The most
                unique birthday celebration in the city!
              </p>
              <ul className="text-white/70 space-y-2">
                <li>• Ages 13+ welcome</li>
                <li>• Party packages available</li>
                <li>• Decorations included</li>
                <li>• Group photos provided</li>
              </ul>
            </div>

            {/* Bachelor/Bachelorette */}
            <div className="bg-black border border-white/30 p-8 rounded-lg hover:border-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-flame text-2xl mb-4 text-white">BACHELOR/BACHELORETTE</h3>
              <p className="text-white/80 mb-4">
                Celebrate your last night of freedom with the wildest things to do Portland! Our rage room and axe
                throwing combo is perfect for pre-wedding fun.
              </p>
              <ul className="text-white/70 space-y-2">
                <li>• Private group sessions</li>
                <li>• Custom celebration packages</li>
                <li>• Photo opportunities</li>
                <li>• Memorable keepsakes</li>
              </ul>
            </div>

            {/* Date Nights */}
            <div className="bg-black border border-[#ff00ff]/30 p-8 rounded-lg hover:border-[#ff00ff] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#ff00ff]/20 flex items-center justify-center mb-6">
                <Hammer className="h-6 w-6 text-[#ff00ff]" />
              </div>
              <h3 className="font-flame text-2xl mb-4 text-[#ff00ff]">DATE NIGHTS</h3>
              <p className="text-white/80 mb-4">
                Skip the typical dinner and movie! Our Portland rage room and axe throwing experiences offer the most
                exciting date night activities in the city.
              </p>
              <ul className="text-white/70 space-y-2">
                <li>• Couples packages</li>
                <li>• Romantic competition</li>
                <li>• Shared experiences</li>
                <li>• Unforgettable memories</li>
              </ul>
            </div>

            {/* Holiday Parties */}
            <div className="bg-black border border-[#00ffff]/30 p-8 rounded-lg hover:border-[#00ffff] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#00ffff]/20 flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-[#00ffff]" />
              </div>
              <h3 className="font-flame text-2xl mb-4 text-[#00ffff]">HOLIDAY PARTIES</h3>
              <p className="text-white/80 mb-4">
                Make your holiday celebrations legendary with Portland's most unique party venue. Perfect for office
                parties, friend groups, and family gatherings.
              </p>
              <ul className="text-white/70 space-y-2">
                <li>• Seasonal decorations</li>
                <li>• Holiday-themed items</li>
                <li>• Group discounts</li>
                <li>• Festive atmosphere</li>
              </ul>
            </div>

            {/* Fundraising Events */}
            <div className="bg-black border border-white/30 p-8 rounded-lg hover:border-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Axe className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-flame text-2xl mb-4 text-white">FUNDRAISING EVENTS</h3>
              <p className="text-white/80 mb-4">
                Host memorable fundraising events that people actually want to attend! Our axe throwing Portland and
                rage room activities draw crowds and raise funds.
              </p>
              <ul className="text-white/70 space-y-2">
                <li>• Revenue sharing options</li>
                <li>• Large group capacity</li>
                <li>• Promotional support</li>
                <li>• Community engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-flame text-4xl md:text-5xl mb-6 text-white">
              PORTLAND TEAM BUILDING <span className="text-[#ff00ff]">PACKAGES</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose from our specially designed packages for Portland corporate events and team building activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <div className="bg-gradient-to-b from-[#ff00ff]/20 to-black border-2 border-[#ff00ff] p-8 rounded-lg text-center">
              <h3 className="font-flame text-2xl mb-4 text-[#ff00ff]">STARTER TEAM BUILDING</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $45<span className="text-lg text-white/70">/person</span>
              </div>
              <ul className="text-left text-white/80 space-y-3 mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-[#ff00ff] mt-1">•</span>
                  <span>30-minute rage room Portland session</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#ff00ff] mt-1">•</span>
                  <span>Basic safety equipment included</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#ff00ff] mt-1">•</span>
                  <span>Variety of items to smash</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#ff00ff] mt-1">•</span>
                  <span>Professional supervision</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#ff00ff] mt-1">•</span>
                  <span>Group photos</span>
                </li>
              </ul>
              <p className="text-white/60 text-sm mb-6">Perfect for 6-15 people</p>
              <Button className="w-full bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-black font-bold">
                BOOK STARTER PACKAGE
              </Button>
            </div>

            {/* Premium Package */}
            <div className="bg-gradient-to-b from-[#00ffff]/20 to-black border-2 border-[#00ffff] p-8 rounded-lg text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00ffff] text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="font-flame text-2xl mb-4 text-[#00ffff]">PREMIUM COMBO</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $75<span className="text-lg text-white/70">/person</span>
              </div>
              <ul className="text-left text-white/80 space-y-3 mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>45-minute rage room Portland session</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>30-minute axe throwing Portland</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Premium items (TVs, electronics)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>All safety equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Team building facilitation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00ffff] mt-1">•</span>
                  <span>Professional photos & video</span>
                </li>
              </ul>
              <p className="text-white/60 text-sm mb-6">Perfect for 8-25 people</p>
              <Button className="w-full bg-[#00ffff] hover:bg-[#00ffff]/80 text-black font-bold">
                BOOK PREMIUM PACKAGE
              </Button>
            </div>

            {/* Corporate Package */}
            <div className="bg-gradient-to-b from-white/20 to-black border-2 border-white p-8 rounded-lg text-center">
              <h3 className="font-flame text-2xl mb-4 text-white">CORPORATE ELITE</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $95<span className="text-lg text-white/70">/person</span>
              </div>
              <ul className="text-left text-white/80 space-y-3 mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-1">•</span>
                  <span>60-minute rage room Portland session</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-1">•</span>
                  <span>45-minute axe throwing Portland</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-1">•</span>
                  <span>VIP premium items selection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-1">•</span>
                  <span>Private facility access</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-1">•</span>
                  <span>Catering coordination</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-1">•</span>
                  <span>Custom team building activities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-white mt-1">•</span>
                  <span>Dedicated event coordinator</span>
                </li>
              </ul>
              <p className="text-white/60 text-sm mb-6">Perfect for 15-50+ people</p>
              <Button className="w-full bg-white hover:bg-white/80 text-black font-bold">BOOK CORPORATE PACKAGE</Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-white/80 mb-6">
              All packages include safety equipment, professional instruction, and cleanup. Custom packages available
              for larger groups.
            </p>
            <Button
              variant="outline"
              className="border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff]/10 font-bold text-lg px-8 py-4"
            >
              REQUEST CUSTOM QUOTE
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-[#ff00ff]/10 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-flame text-4xl md:text-5xl mb-6 text-white">
              PORTLAND TEAM BUILDING <span className="text-[#ff00ff]">FAQ</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Common questions about our Portland rage room and axe throwing team building experiences.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-2 border-[#ff00ff] bg-black p-6 rounded-lg">
                <button className="w-full flex justify-between items-center text-left" onClick={() => toggleFaq(index)}>
                  <span className="font-bold text-white text-lg pr-4">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-[#ff00ff] flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-xl">{openFaq === index ? "−" : "+"}</span>
                  </div>
                </button>
                {openFaq === index && <div className="mt-4 text-white/80 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black border-t border-[#ff00ff]/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-flame text-4xl md:text-5xl mb-6 text-white">
            READY TO PLAN YOUR <span className="text-[#ff00ff]">PORTLAND EVENT</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Don't settle for boring Portland team building activities. Book the most exciting corporate event experience
            in the city and watch your team bond like never before!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-black font-bold text-xl px-10 py-6"
              onClick={() =>
                window.open(
                  "https://Bookcelticaxe.as.me/?location=8409%20N%20Lombard%20St%2C%20Portland%2C%20OR%2097203",
                  "_blank",
                )
              }
            >
              BOOK YOUR TEAM BUILDING EVENT
            </Button>
            <Button
              variant="outline"
              className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 font-bold text-xl px-10 py-6"
            >
              CALL (503) 555-RAGE
            </Button>
          </div>
          <div className="text-white/70">
            <p className="mb-2">Portland Rage Room - The Ultimate Team Building Experience</p>
            <p>Serving Portland, Beaverton, Lake Oswego, Tigard, and surrounding areas</p>
          </div>
        </div>
      </section>
    </main>
  )
}
