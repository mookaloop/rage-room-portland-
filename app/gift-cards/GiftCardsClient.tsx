"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Gift, CreditCard, Calendar, Zap } from "lucide-react"
import Footer from "@/components/Footer"

export default function GiftCardsClient() {
  const giftCardSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Digital Gift Card – Rage Room Portland",
    image: "https://rageroomportland.co/images/gift-card.jpg",
    description:
      "Buy a digital gift card for Rage Room Portland. Instantly delivered via email. Valid for rage room, axe throwing, or combo experiences.",
    offers: {
      "@type": "Offer",
      price: "50.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://rageroomportland.co/gift-cards",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/DigitalReturn",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        doesNotShip: true,
      },
    },
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(giftCardSchema) }} />

      {/* Header */}
      <div className="w-full bg-black py-6 px-6 border-b border-[#ff00ff]/30">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-[#ff00ff] transition-colors">
            <ArrowLeft className="h-6 w-6" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <div className="text-3xl md:text-5xl font-black italic transform -skew-x-12 drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]">
            <span className="text-[#ff00ff]">GIFT</span>
            <span className="text-[#00ffff]"> CARDS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/30 to-[#00ffff]/30 mix-blend-overlay z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Video element optimized for desktop and mobile */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
            }}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%285%29-o9Q0fU35G0qpGO2y5s1Z8XZTKXrXbV.mp4"
              type="video/mp4"
            />
          </video>

          {/* Fallback image for browsers that don't support video */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/placeholder.svg?height=800&width=1200&text=RAGE+ROOM+PORTLAND+GIFT+CARD')`,
              display: "none",
            }}
            onError={() => {
              // Show fallback if video fails
              const video = document.querySelector("video")
              if (video) {
                video.style.display = "none"
                document.querySelector('[style*="display: none"]').style.display = "block"
              }
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="font-flame text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight">
            <span className="block text-shadow-[0_0_20px_rgba(255,255,255,0.8)]">RAGE ROOM PORTLAND</span>
            <span className="block text-[#ff00ff] text-shadow-[0_0_25px_rgba(255,0,255,1)]">GIFT CARDS</span>
          </h1>

          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] mb-6 shadow-[0_0_30px_rgba(255,255,255,0.6)]">
              <Gift className="h-10 w-10 text-black" />
            </div>
            <h2 className="font-flame text-2xl sm:text-3xl md:text-4xl mb-4 text-white text-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              GIVE THE GIFT OF RAGE
            </h2>
          </div>

          <Button
            className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] hover:from-[#ff00ff]/80 hover:to-[#00ffff]/80 text-black font-black text-xl px-12 py-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] uppercase tracking-wider"
            onClick={() => window.open("https://squareup.com/gift/RE69XCSJNRQA5/order", "_blank")}
          >
            🎁 BUY A GIFT CARD 🎁
          </Button>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-16 bg-black">
        <div className="absolute inset-0 skew-y-1 bg-gradient-to-r from-[#ff00ff] to-[#00ffff]"></div>
      </div>

      {/* Perfect Gift Section */}
      <section className="py-16 bg-gradient-to-b from-black to-[#ff00ff]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-flame text-3xl md:text-4xl lg:text-5xl mb-8 text-white">
            THE PERFECT GIFT FOR ANYONE WHO NEEDS TO <span className="text-[#ff00ff]">LET OFF STEAM</span>
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
              Whether it's a birthday, breakup, or just a stressful week, Rage Room Portland gift cards are the most
              satisfying present you can give.{" "}
              <span className="text-[#00ffff] font-bold">Smash stuff. Feel better.</span>
            </p>
          </div>

          {/* Gift Card Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black/50 border border-[#ff00ff]/30 p-6 rounded-lg hover:border-[#ff00ff] transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#ff00ff]/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#ff00ff]" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">INSTANT STRESS RELIEF</h3>
              <p className="text-white/80">
                Perfect for anyone dealing with work stress, relationship drama, or just life in general.
              </p>
            </div>

            <div className="bg-black/50 border border-[#00ffff]/30 p-6 rounded-lg hover:border-[#00ffff] transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#00ffff]/20 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-[#00ffff]" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">UNIQUE EXPERIENCE</h3>
              <p className="text-white/80">
                Give something they'll never forget - not another boring gift card to a restaurant.
              </p>
            </div>

            <div className="bg-black/50 border border-white/30 p-6 rounded-lg hover:border-white transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">FLEXIBLE BOOKING</h3>
              <p className="text-white/80">
                No expiration date pressure - they can book when they're ready to unleash their rage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-flame text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              HOW IT <span className="text-[#00ffff]">WORKS</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Getting the perfect gift has never been easier. Three simple steps to giving the gift of destruction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#ff00ff] flex items-center justify-center text-black font-black text-xl">
                1
              </div>
              <div className="bg-gradient-to-b from-[#ff00ff]/20 to-black border-2 border-[#ff00ff] p-8 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-[#ff00ff] flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="h-10 w-10 text-black" />
                </div>
                <h3 className="font-flame text-2xl mb-4 text-[#ff00ff]">CHOOSE YOUR AMOUNT</h3>
                <p className="text-white/80 leading-relaxed">
                  Select any amount from $25 to $500. Perfect for single sessions or multiple visits to unleash maximum
                  rage.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#00ffff] flex items-center justify-center text-black font-black text-xl">
                2
              </div>
              <div className="bg-gradient-to-b from-[#00ffff]/20 to-black border-2 border-[#00ffff] p-8 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-[#00ffff] flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-black" />
                </div>
                <h3 className="font-flame text-2xl mb-4 text-[#00ffff]">INSTANTLY RECEIVE DIGITAL CARD</h3>
                <p className="text-white/80 leading-relaxed">
                  Get your digital gift card immediately via email. Print it, text it, or email it directly to your
                  lucky recipient.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-black text-xl">
                3
              </div>
              <div className="bg-gradient-to-b from-white/20 to-black border-2 border-white p-8 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-black" />
                </div>
                <h3 className="font-flame text-2xl mb-4 text-white">BOOK AND SMASH STRESS AWAY</h3>
                <p className="text-white/80 leading-relaxed">
                  They book online, show up, and destroy stuff. It's that simple. The most therapeutic gift ever given.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#ff00ff]/10 to-black border-t border-[#ff00ff]/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-flame text-3xl md:text-4xl mb-6 text-white">
              READY TO GIVE THE GIFT OF <span className="text-[#ff00ff]">DESTRUCTION</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Stop giving boring gifts. Give them something they'll actually use and love. Available in any amount,
              delivered instantly, never expires.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-black font-black text-lg px-8 py-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] uppercase tracking-wider"
                onClick={() => window.open("https://squareup.com/gift/RE69XCSJNRQA5/order", "_blank")}
              >
                🎁 BUY GIFT CARD NOW 🎁
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 font-bold text-lg px-8 py-6 rounded-xl bg-transparent"
                >
                  BACK TO HOME
                </Button>
              </Link>
            </div>

            <div className="bg-black/60 border border-white/20 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-bold text-white mb-4">🎯 Perfect Gift For:</h3>
              <div className="grid grid-cols-2 gap-2 text-white/80 text-sm">
                <div>• Birthdays</div>
                <div>• Holidays</div>
                <div>• Breakups</div>
                <div>• Promotions</div>
                <div>• Graduations</div>
                <div>• Bad Days</div>
                <div>• Team Building</div>
                <div>• Just Because</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
