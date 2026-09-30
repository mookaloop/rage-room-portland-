"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, Mail, Users, MapPin, Clock } from "lucide-react"

export default function ContactClient() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full bg-black py-6 px-6 border-b border-[#22C55E]/30">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-[#22C55E] transition-colors">
            <ArrowLeft className="h-6 w-6" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <div className="text-3xl md:text-5xl font-black italic transform -skew-x-12 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            <span className="text-[#22C55E]">CONTACT</span>
            <span className="text-[#F97316]"> US</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-[#22C55E]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-flame text-4xl md:text-6xl mb-6 text-white leading-tight">
              CONTACT <span className="text-[#22C55E]">RAGE ROOM PORTLAND</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#22C55E] to-[#F97316] mx-auto mb-8"></div>
            <h2 className="font-flame text-2xl md:text-3xl mb-8 text-[#F97316]">WE'D LOVE TO HEAR FROM YOU</h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Got questions about booking, smashing stuff, or planning a party? We're here to help. Text us for the
              fastest response — or shoot us an email if you prefer!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="font-flame text-3xl md:text-4xl mb-8 text-white">
                    GET IN <span className="text-[#22C55E]">TOUCH</span>
                  </h3>
                </div>

                {/* Text Us */}
                <div className="bg-gradient-to-r from-[#22C55E]/20 to-black border-2 border-[#22C55E] p-6 md:p-8 rounded-lg hover:border-[#22C55E]/80 transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#22C55E] flex items-center justify-center">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#22C55E]">📱 Text Us (Fastest Response)</h4>
                      <p className="text-white/80">Get answers in minutes</p>
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <a
                      href="sms:5032129031"
                      className="inline-block bg-[#22C55E] hover:bg-[#22C55E]/80 text-black font-black text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <span className="font-black text-2xl">503-212-9031</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-r from-[#F97316]/20 to-black border-2 border-[#F97316] p-6 md:p-8 rounded-lg hover:border-[#F97316]/80 transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#F97316]">📧 Email Us</h4>
                      <p className="text-white/80">For detailed inquiries</p>
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <a
                      href="mailto:dave@celticaxethrowers.com"
                      className="inline-block bg-[#F97316] hover:bg-[#F97316]/80 text-black font-black text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <span className="font-black">dave@celticaxethrowers.com</span>
                    </a>
                  </div>
                </div>

                {/* Large Group CTA */}
                <div className="bg-gradient-to-r from-white/20 to-black border-2 border-white p-6 md:p-8 rounded-lg hover:border-white/80 transition-colors">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Users className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white">Large Groups & Corporate Events</h4>
                      <p className="text-white/80">Team building, parties, special events</p>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-white hover:bg-white/90 text-black font-black text-lg py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSey2owIHFQMOlXLbaYRHyT6Jp87x_BCTtZLzrqJCuEIxcAWVA/viewform?pli=1",
                        "_blank",
                      )
                    }
                  >
                    🎯 Large Party / Corporate Event
                  </Button>
                </div>

                {/* Other Locations */}
                <div className="bg-gradient-to-r from-[#22C55E]/10 to-[#F97316]/10 border-2 border-white/30 p-6 md:p-8 rounded-lg hover:border-white/50 transition-colors">
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-white mb-4">🏹 MORE AXE THROWING LOCATIONS</h4>
                    <p className="text-white/80 mb-6">
                      Love axe throwing? Check out our other locations across the region for more Viking-style fun!
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-[#22C55E] to-[#F97316] hover:from-[#22C55E]/80 hover:to-[#F97316]/80 text-black font-black text-lg py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider"
                      onClick={() => window.open("https://celticaxethrowers.com/", "_blank")}
                    >
                      🎯 VISIT CELTIC AXE THROWERS
                    </Button>
                  </div>
                </div>
              </div>

              {/* Location & Hours */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="font-flame text-3xl md:text-4xl mb-8 text-white">
                    VISIT <span className="text-[#F97316]">US</span>
                  </h3>
                </div>

                {/* Location */}
                <div className="bg-black/60 border border-[#22C55E]/30 p-6 md:p-8 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-[#22C55E]" />
                    </div>
                    <h4 className="font-bold text-xl text-[#22C55E]">Location</h4>
                  </div>
                  <div className="text-white/90 text-lg leading-relaxed">
                    <p className="font-bold mb-2">Inside Hopworks Brewery</p>
                    <p>2944 SE Powell Blvd</p>
                    <p>Portland, OR 97202</p>
                    <p className="mt-4 text-white/70">Southeast Portland neighborhood</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-black/60 border border-[#F97316]/30 p-6 md:p-8 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-[#F97316]" />
                    </div>
                    <h4 className="font-bold text-xl text-[#F97316]">Hours</h4>
                  </div>
                  <div className="text-white/90 text-lg leading-relaxed space-y-2">
                    <div className="flex justify-between">
                      <span>Monday:</span>
                      <span className="font-bold">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday:</span>
                      <span className="font-bold">4pm - 9pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday:</span>
                      <span className="font-bold">4pm - 9pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thursday:</span>
                      <span className="font-bold">4pm - 9pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday:</span>
                      <span className="font-bold">12pm - 10pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-bold">11am - 10pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-bold">11am - 9pm</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-black/60 border border-white/30 p-6 md:p-8 rounded-lg">
                  <h4 className="font-bold text-xl text-white mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <Link href="/book">
                      <Button className="w-full bg-[#22C55E] hover:bg-[#22C55E]/80 text-black font-bold py-3">
                        📅 Book Now
                      </Button>
                    </Link>
                    <Link href="/how-it-works">
                      <Button
                        variant="outline"
                        className="w-full border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 font-bold py-3 bg-transparent"
                      >
                        ❓ How It Works
                      </Button>
                    </Link>
                    <Link href="/parties-events">
                      <Button
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white/10 font-bold py-3 bg-transparent"
                      >
                        🎉 Team Building
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-16 bg-black">
        <div className="absolute inset-0 skew-y-1 bg-gradient-to-r from-[#22C55E] to-[#F97316]"></div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-[#22C55E]/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-flame text-3xl md:text-4xl mb-8 text-white">
              COMMON <span className="text-[#22C55E]">QUESTIONS</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/60 border border-[#22C55E]/30 p-6 rounded-lg text-left">
                <h4 className="font-bold text-[#22C55E] mb-3">How do I book?</h4>
                <p className="text-white/80">
                  Book online anytime or text us for same-day availability. Walk-ins welcome but reservations
                  recommended!
                </p>
              </div>
              <div className="bg-black/60 border border-[#F97316]/30 p-6 rounded-lg text-left">
                <h4 className="font-bold text-[#F97316] mb-3">What should I wear?</h4>
                <p className="text-white/80">
                  Closed-toe shoes required. We provide all safety equipment including coveralls, gloves, and eye
                  protection.
                </p>
              </div>
              <div className="bg-black/60 border border-white/30 p-6 rounded-lg text-left">
                <h4 className="font-bold text-white mb-3">Can I bring my own items?</h4>
                <p className="text-white/80">
                  For safety reasons, we only allow our pre-approved items. We have plenty of satisfying stuff to smash!
                </p>
              </div>
              <div className="bg-black/60 border border-[#22C55E]/30 p-6 rounded-lg text-left">
                <h4 className="font-bold text-[#22C55E] mb-3">Do you serve food/drinks?</h4>
                <p className="text-white/80">
                  Yes! We're inside Hopworks Brewery. Enjoy craft beer and food before or after your session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black border-t border-[#22C55E]/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-flame text-3xl md:text-4xl mb-6 text-white">
            READY TO <span className="text-[#22C55E]">UNLEASH YOUR RAGE</span>?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't wait - book your Portland stress-busting experience today! Text us now for the fastest response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="sms:5032129031">
              <Button className="bg-[#22C55E] hover:bg-[#22C55E]/80 text-black font-black text-lg px-8 py-6 rounded-xl transform transition-all duration-300 hover:scale-105">
                📱 TEXT US NOW
              </Button>
            </a>
            <Link href="/book">
              <Button
                variant="outline"
                className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 font-bold text-lg px-8 py-6 rounded-xl bg-transparent"
              >
                📅 BOOK ONLINE
              </Button>
            </Link>
          </div>
        </div>
      </section>

  
    </main>
  )
}
