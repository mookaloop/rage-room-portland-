"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Recycle, Truck, Building2, Dog, Package } from "lucide-react"
import Footer from "@/components/Footer"

export default function GlassHoundClient() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full bg-black py-6 px-6 border-b border-[#ff00ff]/30">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-[#ff00ff] transition-colors">
            <ArrowLeft className="h-6 w-6" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <div className="text-4xl md:text-6xl font-black italic transform -skew-x-12 drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]">
            <span className="text-[#00ffff]">GLASS</span>
            <span className="text-[#ff00ff]"> HOUND</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Prominent Logo */}
      <section className="py-4 md:py-6 bg-gradient-to-b from-black to-[#00ffff]/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-1">
            <img 
              src="/images/glass-hound-logo.png" 
              alt="Glass Hound - Recycle Glass. Rescue Dogs." 
              className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto"
            />
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScf_AUgo1urUwTtbUGQmhlmx1w17OcqDNqLGHCFPEgy04-AZw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6"
          >
            <Button className="bg-[#00ffff] hover:bg-[#00ffff]/80 text-black font-black text-2xl md:text-4xl px-10 py-8 rounded-xl shadow-lg shadow-[#00ffff]/50 hover:shadow-[#00ffff]/70 transition-all hover:scale-105">
              SIGN UP YOUR BAR
            </Button>
          </a>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            When you smash at Rage Room Portland, you're helping rescue dogs find their forever homes. Our Glass Hound
            program recycles glass from local Portland and Vancouver bars and donates a portion of proceeds to our rescue partners.
          </p>
          
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-black to-[#00ffff]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white tracking-wide">
              HOW <span className="text-[#ff00ff]">GLASS HOUND</span> WORKS
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Portland bars can join our Glass Hound program in three easy steps. Together, we can help rescue dogs while keeping glass out of landfills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#ff00ff] flex items-center justify-center text-black font-black text-xl z-10">
                1
              </div>
              <div className="bg-gradient-to-b from-[#ff00ff]/20 to-black border-2 border-[#ff00ff]/50 p-8 rounded-lg text-center h-full pt-12">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/images/portland-bars-sign.png" 
                    alt="Portland Oregon Bars" 
                    className="w-48 h-auto"
                  />
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#ff00ff]">BARS SIGN UP</h3>
                <p className="text-white/80">
                  Portland bars and restaurants register for the Glass Hound program. It's free to join and helps the
                  community!
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#00ffff] flex items-center justify-center text-black font-black text-xl z-10">
                2
              </div>
              <div className="bg-gradient-to-b from-[#00ffff]/20 to-black border-2 border-[#00ffff]/50 p-8 rounded-lg text-center h-full pt-12">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/images/glass-hound-tote.png" 
                    alt="Glass Hound Collection Tote" 
                    className="w-48 h-auto"
                  />
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#00ffff]">WE DROP OFF TOTE</h3>
                <p className="text-white/80">
                  We deliver a Glass Hound collection tote to your location. Fill it with recyclable glass bottles and
                  materials.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-black text-xl z-10">
                3
              </div>
              <div className="bg-gradient-to-b from-white/20 to-black border-2 border-white/50 p-8 rounded-lg text-center h-full pt-12">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/images/glass-hound-truck.png" 
                    alt="Glass Hound Pickup Truck" 
                    className="w-48 h-auto"
                  />
                </div>
                <h3 className="font-bold text-xl mb-4 text-white">WEEKLY PICKUP</h3>
                <p className="text-white/80">
                  We pick up your full tote weekly and replace it with a fresh one. The glass gets smashed at Rage Room
                  Portland!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 px-6 py-3 rounded-lg border border-white/30">
              <Recycle className="h-5 w-5 text-[#00ffff]" />
              <span className="text-white font-bold">100% of collected glass is recycled through our rage rooms!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white">
              OUR <span className="text-[#00ffff]">RESCUE PARTNERS</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We're proud to partner with Oregon Dog Rescue and Puplandia to support rescue dogs in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Oregon Dog Rescue */}
            <a 
              href="https://www.oregondogrescue.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-[#ff00ff]/20 to-black border-2 border-[#ff00ff] p-8 rounded-lg text-center block hover:border-[#ff00ff] hover:shadow-lg hover:shadow-[#ff00ff]/30 transition-all group"
            >
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform">
                <img 
                  src="/images/oregon-dog-rescue-logo.jpg" 
                  alt="Oregon Dog Rescue Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-[#ff00ff]">Oregon Dog Rescue</h3>
              <p className="text-white/80 mb-4">
                A dedicated rescue organization saving dogs throughout Oregon and finding them loving forever homes.
              </p>
            </a>

            {/* Puplandia */}
            <a 
              href="https://www.puplandiadogrescue.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-[#00ffff]/20 to-black border-2 border-[#00ffff] p-8 rounded-lg text-center block hover:border-[#00ffff] hover:shadow-lg hover:shadow-[#00ffff]/30 transition-all group"
            >
              <div className="w-40 h-24 bg-transparent flex items-center justify-center mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform">
                <img 
                  src="/images/puplandia-logo.jpg" 
                  alt="Puplandia Dog Rescue Logo" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-[#00ffff]">Puplandia</h3>
              <p className="text-white/80 mb-4">
                A Portland-based rescue helping dogs in need with shelter, care, and adoption services.
              </p>
            </a>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 border border-white/30 p-8 rounded-lg max-w-3xl mx-auto">
              <h3 className="font-bold text-xl text-white mb-4">What Your Smashing Supports</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white/80">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">🛏️</span>
                  <span>Blankets</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">🧺</span>
                  <span>Towels</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">🍖</span>
                  <span>Food</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">🏠</span>
                  <span>Shelter</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">🎾</span>
                  <span>Toys</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">💊</span>
                  <span>Medical Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dogs Section */}
      <section className="py-16 bg-gradient-to-b from-black to-[#ff00ff]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white">
              MEET THE <span className="text-[#ff00ff]">RESCUE PUPS</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              These are some of the adorable dogs your support helps save through Oregon Dog Rescue and Puplandia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Dog Image 1 */}
            <a 
              href="https://www.oregondogrescue.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="aspect-square bg-gradient-to-br from-[#ff00ff]/30 to-black rounded-lg border-2 border-[#ff00ff]/50 overflow-hidden group cursor-pointer"
            >
              <img 
                src="/images/rescue-dog-1.jpg" 
                alt="Adoptable rescue dog from Oregon Dog Rescue" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Dog Image 2 */}
            <a 
              href="https://www.oregondogrescue.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="aspect-square bg-gradient-to-br from-[#00ffff]/30 to-black rounded-lg border-2 border-[#00ffff]/50 overflow-hidden group cursor-pointer"
            >
              <img 
                src="/images/rescue-dog-2.jpg" 
                alt="Adoptable rescue dog from Oregon Dog Rescue" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Dog Image 3 */}
            <a 
              href="https://www.oregondogrescue.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="aspect-square bg-gradient-to-br from-white/30 to-black rounded-lg border-2 border-white/50 overflow-hidden group cursor-pointer"
            >
              <img 
                src="/images/rescue-dog-3.jpg" 
                alt="Adoptable rescue dog from Oregon Dog Rescue" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white">
                JOIN <span className="text-[#00ffff]">GLASS HOUND</span>
              </h2>
              <p className="text-lg text-white/70">
                Are you a Portland or Vancouver bar or restaurant? Sign up for Glass Hound and help rescue dogs while we handle your
                glass recycling!
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#00ffff]/20 to-black border-2 border-[#00ffff] p-8 rounded-lg text-center">
              <div className="flex justify-center mb-6">
                <img 
                  src="/images/portland-bars-sign.png" 
                  alt="Portland and Vancouver Bars" 
                  className="w-48 h-auto"
                />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-[#00ffff]">BAR SIGN UP FORM</h3>
              <p className="text-white/80 mb-8">
                Click the button below to fill out our quick sign-up form. We'll be in touch to schedule your first tote
                delivery!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScf_AUgo1urUwTtbUGQmhlmx1w17OcqDNqLGHCFPEgy04-AZw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-[#00ffff] hover:bg-[#00ffff]/80 text-black font-bold text-lg px-8 py-6">
                  SIGN UP YOUR BAR
                </Button>
              </a>
              <p className="text-white/50 text-sm mt-4">Free to join - No commitment required</p>
            </div>

            <div className="text-center mt-8">
              <p className="text-white/70">
                Questions? Contact us at{" "}
                <a href="tel:5032129031" className="text-[#ff00ff] hover:underline">
                  (503) 212-9031
                </a>{" "}
                or email{" "}
                <a href="mailto:info@rageroomportland.co" className="text-[#00ffff] hover:underline">
                  info@rageroomportland.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white">
            READY TO <span className="text-[#ff00ff]">SMASH</span> FOR A CAUSE?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book your rage room session and know that your stress relief is helping rescue dogs in Portland!
          </p>
          <Link href="/book">
            <Button className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-black font-bold text-lg px-8 py-6">
              BOOK YOUR SESSION
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
