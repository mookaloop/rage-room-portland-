"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Hammer, Axe, Calendar, CreditCard, Tv, Star, Zap } from "lucide-react"

export default function HowItWorksClient() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full bg-black py-6 px-6 border-b border-[#ff00ff]/30">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-[#ff00ff] transition-colors">
            <ArrowLeft className="h-6 w-6" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-black italic transform -skew-x-12 drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]">
            <span className="text-[#00ffff]">HOW IT</span>
            <span className="text-[#ff00ff]"> WORKS</span>
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-[#ff00ff]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-flame text-3xl md:text-5xl mb-8 text-white">
            BOOKING YOUR <span className="text-[#ff00ff]">RAGE</span> IS EASY!
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white/80 mb-12">
            Follow these simple steps to book your ultimate stress-relief experience. It's fast, fun, and flexible!
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {/* Step Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(step)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                      activeStep === step
                        ? "bg-[#ff00ff] text-black scale-110"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {step}
                  </button>
                  {step < 3 && <div className="w-16 h-1 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] mx-4"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Choose Experience */}
          {activeStep === 1 && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#ff00ff]/70 mb-6">
                  <Zap className="h-10 w-10 text-black" />
                </div>
                <h3 className="font-flame text-4xl mb-4 text-[#ff00ff]">STEP 1: CHOOSE YOUR EXPERIENCE</h3>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Pick your poison! Whether you want to smash, throw, or do both - we've got you covered.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Rage Room */}
                <div className="bg-gradient-to-b from-[#ff00ff]/20 to-black border-2 border-[#ff00ff] p-8 rounded-lg text-center transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-[#ff00ff] flex items-center justify-center mx-auto mb-6">
                    <Hammer className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="font-flame text-2xl mb-4 text-[#ff00ff]">RAGE ROOM</h4>
                  <p className="text-white/80 mb-6">
                    Smash bottles, electronics, and furniture in our soundproof rooms. Perfect for stress relief!
                  </p>
                  <div className="text-2xl font-bold text-white">Starting at $35</div>
                </div>

                {/* Axe Throwing */}
                <div className="bg-gradient-to-b from-[#00ffff]/20 to-black border-2 border-[#00ffff] p-8 rounded-lg text-center transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-[#00ffff] flex items-center justify-center mx-auto mb-6">
                    <Axe className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="font-flame text-2xl mb-4 text-[#00ffff]">AXE THROWING</h4>
                  <p className="text-white/80 mb-6">
                    Test your aim and channel your inner lumberjack with professional axe throwing lanes.
                  </p>
                  <div className="text-2xl font-bold text-white">Starting at $25</div>
                </div>

                {/* Combo */}
                <div className="bg-gradient-to-b from-white/20 to-black border-2 border-white p-8 rounded-lg text-center transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
                    <div className="flex items-center space-x-1">
                      <Hammer className="h-6 w-6 text-black" />
                      <Axe className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <h4 className="font-flame text-2xl mb-4 text-white">COMBO DEAL</h4>
                  <p className="text-white/80 mb-6">
                    Why choose? Get the full experience with both rage room and axe throwing!
                  </p>
                  <div className="text-2xl font-bold text-white">Starting at $50</div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Add-ons */}
          {activeStep === 2 && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#00ffff] to-[#00ffff]/70 mb-6">
                  <Star className="h-10 w-10 text-black" />
                </div>
                <h3 className="font-flame text-4xl mb-4 text-[#00ffff]">STEP 2: ADD COOL EXTRAS</h3>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Level up your experience with premium add-ons that'll make your session unforgettable!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* TV Smashing */}
                <div className="bg-black border border-[#ff00ff]/50 p-6 rounded-lg text-center hover:border-[#ff00ff] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#ff00ff]/20 flex items-center justify-center mx-auto mb-4">
                    <Tv className="h-6 w-6 text-[#ff00ff]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">TV SMASHING</h4>
                  <p className="text-white/70 text-sm mb-3">Old TVs and monitors for maximum satisfaction</p>
                  <div className="text-[#ff00ff] font-bold">+$20</div>
                </div>

                {/* Throwing Stars */}
                <div className="bg-black border border-[#00ffff]/50 p-6 rounded-lg text-center hover:border-[#00ffff] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#00ffff]/20 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-[#00ffff]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">THROWING STARS & SHOVELS</h4>
                  <p className="text-white/70 text-sm mb-3">
                    Ninja stars for precision throwing and heavy-duty shovels for maximum smashing power
                  </p>
                  <div className="text-[#00ffff] font-bold">+$10</div>
                </div>

                {/* Electronics Package */}
                <div className="bg-black border border-[#ff00ff]/50 p-6 rounded-lg text-center hover:border-[#ff00ff] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#ff00ff]/20 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-[#ff00ff]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">ELECTRONICS PACK</h4>
                  <p className="text-white/70 text-sm mb-3">Keyboards, phones, and small electronics</p>
                  <div className="text-[#ff00ff] font-bold">+$15</div>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-white/80 mb-6">
                  Mix and match add-ons to create your perfect rage experience!
                </p>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 px-6 py-3 rounded-lg border border-white/30">
                  <Zap className="h-5 w-5 text-[#ff00ff]" />
                  <span className="text-white font-bold">Pro Tip: Combo packages get 15% off add-ons!</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Book & Pay */}
          {activeStep === 3 && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-white to-white/70 mb-6">
                  <Calendar className="h-10 w-10 text-black" />
                </div>
                <h3 className="font-flame text-4xl mb-4 text-white">STEP 3: BOOK YOUR SPOT</h3>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Pick your perfect time from our live calendar and secure your spot with just a small deposit!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Calendar Preview */}
                <div className="bg-gradient-to-b from-white/10 to-black border border-white/30 p-8 rounded-lg">
                  <h4 className="font-flame text-2xl mb-6 text-center text-white">LIVE AVAILABILITY</h4>
                  <div className="bg-black/50 p-6 rounded-lg">
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                        <div key={day} className="text-center text-white/70 font-bold py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }, (_, i) => (
                        <div
                          key={i}
                          className={`aspect-square flex items-center justify-center text-sm rounded ${
                            i % 7 === 0 || i % 7 === 6
                              ? "text-white/40"
                              : i === 15 || i === 22 || i === 28
                                ? "bg-[#ff00ff] text-black font-bold cursor-pointer hover:bg-[#ff00ff]/80"
                                : i === 8 || i === 12 || i === 19
                                  ? "bg-[#00ffff]/30 text-white cursor-pointer hover:bg-[#00ffff]/50"
                                  : "text-white/70 hover:bg-white/10 cursor-pointer"
                          }`}
                        >
                          {i > 6 && i < 32 ? i - 6 : ""}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-[#ff00ff] rounded"></div>
                        <span className="text-white/80">Prime Time</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-[#00ffff]/30 rounded"></div>
                        <span className="text-white/80">Available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 p-8 rounded-lg border border-white/30">
                    <div className="flex items-center space-x-4 mb-6">
                      <CreditCard className="h-8 w-8 text-[#ff00ff]" />
                      <h4 className="font-flame text-2xl text-white">FLEXIBLE PAYMENT</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-white/20">
                        <span className="text-white/80">Deposit to Book</span>
                        <span className="text-[#ff00ff] font-bold text-xl">$20</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/20">
                        <span className="text-white/80">Pay Balance</span>
                        <span className="text-[#00ffff] font-bold">Day of Event</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-white/80">Group Size</span>
                        <span className="text-white font-bold">Finalize Later</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black border border-[#00ffff]/50 p-6 rounded-lg">
                    <h5 className="font-bold text-[#00ffff] mb-4">Why Book This Way?</h5>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start space-x-2">
                        <span className="text-[#ff00ff] mt-1">•</span>
                        <span>No need to know exact group size upfront</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#ff00ff] mt-1">•</span>
                        <span>Small deposit holds your preferred time</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#ff00ff] mt-1">•</span>
                        <span>Pay the rest when you arrive</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#ff00ff] mt-1">•</span>
                        <span>Easy to modify or cancel (24hr notice)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button
                  className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] hover:from-[#ff00ff]/80 hover:to-[#00ffff]/80 text-black font-bold text-xl px-12 py-6"
                  onClick={() =>
                    window.open(
                      "https://Bookcelticaxe.as.me/?location=8409%20N%20Lombard%20St%2C%20Portland%2C%20OR%2097203",
                      "_blank",
                    )
                  }
                >
                  BOOK YOUR RAGE SESSION NOW
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-16 bg-black">
        <div className="absolute inset-0 skew-y-1 bg-gradient-to-r from-[#ff00ff] to-[#00ffff]"></div>
      </div>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-b from-[#ff00ff]/10 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-flame text-4xl md:text-5xl mb-6 text-white">
              SEE IT IN <span className="text-[#ff00ff]">ACTION</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Watch real customers unleash their rage and have the time of their lives!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-lg overflow-hidden border-2 border-[#ff00ff]/50">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#ff00ff]/20 to-[#00ffff]/20">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                    <svg className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-lg">Click to watch our rage room experience</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-black/50 p-6 rounded-lg border border-white/20 text-center">
                <h4 className="font-bold text-[#ff00ff] mb-2">RAGE ROOM HIGHLIGHTS</h4>
                <p className="text-white/70 text-sm">See customers smashing TVs, bottles, and electronics</p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg border border-white/20 text-center">
                <h4 className="font-bold text-[#00ffff] mb-2">AXE THROWING ACTION</h4>
                <p className="text-white/70 text-sm">Watch precision throws and bullseye celebrations</p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg border border-white/20 text-center">
                <h4 className="font-bold text-white mb-2">SAFETY FIRST</h4>
                <p className="text-white/70 text-sm">Our professional staff ensures everyone stays safe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black border-t border-[#ff00ff]/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-flame text-3xl md:text-4xl mb-6 text-white">
            READY TO <span className="text-[#ff00ff]">RAGE</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't wait - book your stress-busting experience today and join the thousands who've found their perfect
            outlet!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-black font-bold text-lg px-8 py-6"
              onClick={() =>
                window.open(
                  "https://Bookcelticaxe.as.me/?location=8409%20N%20Lombard%20St%2C%20Portland%2C%20OR%2097203",
                  "_blank",
                )
              }
            >
              BOOK NOW
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 font-bold text-lg px-8 py-6"
              >
                BACK TO HOME
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
