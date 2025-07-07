"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Axe, Hammer, Zap } from "lucide-react"
import Footer from "@/components/Footer"

export default function BookPageClient() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff00ff]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00ffff]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#ff00ff]/3 to-[#00ffff]/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="w-full bg-black/90 backdrop-blur-sm py-4 px-6 border-b border-[#ff00ff]/30 relative z-10 sticky top-0">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 text-white hover:text-[#ff00ff] transition-all duration-300 group"
          >
            <ArrowLeft className="h-6 w-6 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-lg">Back to Home</span>
          </Link>
          <div className="text-center">
            <div
              className="text-2xl md:text-4xl font-black italic transform -skew-x-12 drop-shadow-[0_0_20px_rgba(255,0,255,0.8)]"
              style={{ fontFamily: "Staatliches, sans-serif" }}
            >
              <span className="text-[#ff00ff] text-shadow-[0_0_25px_rgba(255,0,255,1)]">BOOK</span>
              <span className="text-white text-shadow-[0_0_20px_rgba(255,255,255,0.8)]"> YOUR </span>
              <span className="text-[#00ffff] text-shadow-[0_0_25px_rgba(0,255,255,1)]">RAGE</span>
            </div>
          </div>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Page Title */}
          <div className="text-center mb-8 md:mb-16">
            <h1 className="font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight leading-none">
              <span className="block text-shadow-[0_0_30px_rgba(255,255,255,0.8)]">BOOK RAGE ROOM PORTLAND:</span>
              <span className="block text-[#ff00ff] text-shadow-[0_0_40px_rgba(255,0,255,1)] transform -skew-x-6">
                CHOOSE YOUR DESTRUCTION
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff00ff] via-white to-[#00ffff] mx-auto mb-6 shadow-[0_0_20px_rgba(255,0,255,0.5)]"></div>
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Ready to unleash the beast? Pick your weapon of choice and let the chaos begin at Portland's premier rage
              room!
            </p>
          </div>

          {/* Booking Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Rage Room Card */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff00ff] to-[#ff0080] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-black border-2 border-[#ff00ff]/50 rounded-2xl p-6 md:p-8 transform transition-all duration-300 hover:scale-105 hover:border-[#ff00ff] hover:shadow-[0_0_50px_rgba(255,0,255,0.4)]">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#ff00ff] to-[#ff0080] flex items-center justify-center shadow-[0_0_30px_rgba(255,0,255,0.6)] group-hover:shadow-[0_0_50px_rgba(255,0,255,0.8)] transition-all duration-300">
                    <Hammer className="h-10 w-10 md:h-12 md:w-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h2 className="font-black text-2xl md:text-3xl mb-4 text-[#ff00ff] text-shadow-[0_0_20px_rgba(255,0,255,0.8)] uppercase tracking-wider">
                    RAGE ROOM PORTLAND
                  </h2>
                  <p className="text-white/80 text-base md:text-lg mb-6 leading-relaxed">
                    Smash bottles, electronics, and furniture in our soundproof destruction chambers. Pure therapeutic
                    chaos in Portland's #1 rage room!
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="text-3xl md:text-4xl font-black text-white mb-2">
                      FROM <span className="text-[#ff00ff]">$35</span>
                    </div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">15-30 min sessions</div>
                  </div>

                  {/* Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-[#ff00ff] to-[#ff0080] hover:from-[#ff0080] hover:to-[#ff00ff] text-white font-black text-lg py-4 rounded-xl border-2 border-[#ff00ff] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] uppercase tracking-wider"
                    onClick={() =>
                      window.open("https://Bookcelticaxe.as.me/?appointmentType=category:Rage%20Room%20", "_blank")
                    }
                  >
                    🔥 BOOK RAGE ROOM 🔥
                  </Button>
                </div>
              </div>
            </div>

            {/* Axe Throwing Card */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffff] to-[#0080ff] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-black border-2 border-[#00ffff]/50 rounded-2xl p-6 md:p-8 transform transition-all duration-300 hover:scale-105 hover:border-[#00ffff] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)]">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#00ffff] to-[#0080ff] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.6)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.8)] transition-all duration-300">
                    <Axe className="h-10 w-10 md:h-12 md:w-12 text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h2 className="font-black text-2xl md:text-3xl mb-4 text-[#00ffff] text-shadow-[0_0_20px_rgba(0,255,255,0.8)] uppercase tracking-wider">
                    AXE THROWING PORTLAND
                  </h2>
                  <p className="text-white/80 text-base md:text-lg mb-6 leading-relaxed">
                    Channel your inner Viking! Professional lanes with expert instruction. Portland's best axe throwing
                    experience.
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="text-3xl md:text-4xl font-black text-white mb-2">
                      FROM <span className="text-[#00ffff]">$25</span>
                    </div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">1 hour sessions</div>
                  </div>

                  {/* Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-[#00ffff] to-[#0080ff] hover:from-[#0080ff] hover:to-[#00ffff] text-black font-black text-lg py-4 rounded-xl border-2 border-[#00ffff] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-wider"
                    onClick={() =>
                      window.open(
                        "https://Bookcelticaxe.as.me/?appointmentType=category:Stormbreaker%20Axe%20Throwing",
                        "_blank",
                      )
                    }
                  >
                    ⚡ BOOK AXE THROWING ⚡
                  </Button>
                </div>
              </div>
            </div>

            {/* Combo Card */}
            <div className="group relative md:col-span-1">
              {/* Special glow effect for combo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff00ff] via-white to-[#00ffff] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              <div className="relative bg-black border-2 border-white/50 rounded-2xl p-6 md:p-8 transform transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                {/* Best Value Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-black font-black px-4 py-2 rounded-full text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    🔥 BEST VALUE 🔥
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#ff00ff] via-white to-[#00ffff] flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.6)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.8)] transition-all duration-300">
                    <div className="flex items-center space-x-1">
                      <Hammer className="h-6 w-6 md:h-8 md:w-8 text-black" />
                      <Zap className="h-4 w-4 md:h-6 md:w-6 text-black" />
                      <Axe className="h-6 w-6 md:h-8 md:w-8 text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h2 className="font-black text-2xl md:text-3xl mb-4 text-white text-shadow-[0_0_20px_rgba(255,255,255,0.8)] uppercase tracking-wider">
                    RAGE ROOM + AXE THROWING COMBO
                  </h2>
                  <p className="text-white/80 text-base md:text-lg mb-6 leading-relaxed">
                    Why choose? Get the full Portland experience! Rage room destruction + axe throwing mastery in one
                    epic session.
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="text-3xl md:text-4xl font-black text-white mb-2">
                      FROM{" "}
                      <span className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
                        $50
                      </span>
                    </div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">1.5 hour experience</div>
                    <div className="text-[#00ffff] text-sm font-bold mt-1 animate-pulse">SAVE $10!</div>
                  </div>

                  {/* Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-[#ff00ff] via-white to-[#00ffff] hover:from-[#00ffff] hover:via-white hover:to-[#ff00ff] text-black font-black text-lg py-4 rounded-xl border-2 border-white transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] uppercase tracking-wider"
                    onClick={() =>
                      window.open(
                        "https://Bookcelticaxe.as.me/?appointmentType=category:Rage%20%2F%20Axe%20Combo",
                        "_blank",
                      )
                    }
                  >
                    💀 BOOK ULTIMATE COMBO 💀
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 md:mt-20 text-center">
            <div className="relative max-w-4xl mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/10 via-transparent to-[#00ffff]/10 rounded-3xl blur-xl"></div>

              <div className="relative bg-black/60 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-10">
                <h3 className="font-black text-2xl md:text-4xl text-white mb-4 text-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  NEED HELP CHOOSING YOUR <span className="text-[#ff00ff]">PORTLAND RAGE EXPERIENCE</span>?
                </h3>
                <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Our Portland rage room experts are standing by to help you pick the perfect way to unleash your
                  stress!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 hover:border-[#00ffff] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] bg-transparent"
                  >
                    📞 CALL (503) 212-9031
                  </Button>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 hover:border-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-transparent"
                    >
                      🏠 BACK TO HOME
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
