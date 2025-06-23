"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Axe, Hammer, ChevronDown } from "lucide-react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0) // Start with first item open

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "What can I smash in the rage room?",
      answer:
        "You can smash a variety of items including bottles, plates, electronics, small furniture, and other breakable objects. We provide a safe selection of items specifically chosen for maximum satisfaction and safety.",
    },
    {
      question: "How much does a rage room session cost?",
      answer:
        "Our rage room sessions start at $35 for a 15-minute session. We offer packages for groups, extended sessions, and combo deals with axe throwing. Check our booking page for current pricing and special offers.",
    },
    {
      question: "What safety equipment is provided?",
      answer:
        "We provide all necessary safety equipment including safety glasses, closed-toe shoes (if needed), coveralls, and gloves. Our staff will ensure you're properly equipped before entering any rage room.",
    },
    {
      question: "Is it safe for beginners?",
      answer:
        "Our experienced staff provides a full safety briefing before each session. All safety equipment is provided, and we maintain strict safety protocols to ensure everyone has a fun and safe experience.",
    },
    {
      question: "Do I need to make a reservation?",
      answer:
        "A reservation is the best way to ensure you get the time you desire. It's very easy to book online, even for same-day reservations. If you have any questions, you can talk online. Walk-ins are also welcome, but they are first come, first served, so we cannot guarantee a space.",
    },
    {
      question: "Can I cancel or reschedule?",
      answer:
        "Yes, you can cancel or reschedule your booking up to 24 hours before your session for a full refund. Same-day cancellations may be subject to a cancellation fee. Please contact us as soon as possible if you need to make changes.",
    },
    {
      question: "What is the minimum age? Any other requirements?",
      answer:
        "Participants must be at least 13 years old. Minors (13-17) must have a parent or guardian present to sign a waiver. All participants must wear closed-toe shoes and sign our liability waiver before participating.",
    },
    {
      question: "Are there food and drinks available?",
      answer:
        "Yes! Our brewpub offers a full menu of craft beers, cocktails, and food. You can enjoy drinks and food before or after your rage session. Please note that alcohol consumption is not permitted before rage room activities for safety reasons.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden m-0 p-0">
      {/* Brand Logo */}
      <div className="w-full bg-black py-4 sm:py-6 px-4 sm:px-6 flex justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center tracking-wider font-black leading-none">
          <span
            className="block text-[#00ffff] font-serif uppercase tracking-wider mb-2"
            style={{
              textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 80px #00ffff",
              fontFamily: "serif",
            }}
          >
            RAGE ROOM
          </span>
          <span
            className="block text-[#ff00ff] font-serif uppercase tracking-wider"
            style={{
              textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff",
              fontFamily: "serif",
            }}
          >
            PORTLAND
          </span>
        </h1>
      </div>

      {/* Sticky Navigation */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-sm border-b border-[#ff00ff]/30" : "bg-black"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" className="text-white hover:text-[#ff00ff] p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </Button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-6 items-center ml-auto">
              <Link
                href="/parties-events"
                className="text-white hover:text-[#ff00ff] font-bold transition-colors text-sm lg:text-base"
              >
                <span className="hidden lg:inline">Large Party / Team Building</span>
                <span className="lg:hidden">Team Building</span>
              </Link>
              <Link
                href="/how-it-works"
                className="text-white hover:text-[#ff00ff] font-bold transition-colors text-sm lg:text-base"
              >
                How It Works
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-[#ff00ff] font-bold transition-colors text-sm lg:text-base"
              >
                Contact
              </Link>
              <Link
                href="#faq"
                className="text-white hover:text-[#ff00ff] font-bold transition-colors text-sm lg:text-base"
              >
                FAQ
              </Link>
              <Link
                href="/gift-cards"
                className="text-white hover:text-[#ff00ff] font-bold transition-colors text-sm lg:text-base"
              >
                Gift Cards
              </Link>
              <Link href="/book">
                <Button className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-black font-bold text-sm lg:text-base px-3 lg:px-4 py-2">
                  BOOK NOW
                </Button>
              </Link>
            </div>

            {/* Mobile Book Now Button */}
            <div className="md:hidden">
              <Link href="/book">
                <Button className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-black font-bold text-sm px-4 py-2">
                  BOOK
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with YouTube Background */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* YouTube video background for desktop */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 mix-blend-overlay z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Desktop YouTube iframe */}
          <iframe
            src="https://www.youtube.com/embed/A505h-KRL_g?autoplay=1&mute=1&loop=1&playlist=A505h-KRL_g&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              transform: "scale(1.1)",
            }}
          ></iframe>

          {/* Mobile fallback image */}
          <div
            className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/placeholder.svg?height=800&width=400')`,
            }}
          ></div>

          {/* Mobile video attempt (will fallback to image if autoplay fails) */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="md:hidden absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
            }}
            onError={(e) => {
              // Hide video if it fails to load and show fallback image
              e.currentTarget.style.display = "none"
            }}
          >
            <source src="https://www.youtube.com/embed/A505h-KRL_g" type="video/mp4" />
          </video>
        </div>

        {/* Hero content */}
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center justify-center h-full w-full">
          <h2 className="font-flame text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 leading-tight">
            <span className="block text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] mb-1 sm:mb-0 sm:inline">
              Rage Room
            </span>
            <span className="block text-[#ff00ff] drop-shadow-[0_0_15px_rgba(255,0,255,0.8)] mb-1 sm:mb-0 sm:inline sm:mx-2 md:mx-4">
              Axe Throwing
            </span>
            <span className="block text-[#00ffff] drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] sm:inline">Brewpub</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto text-white/90 px-4">
            Smash stuff. Throw axes. Drink beer. Repeat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="/book">
              <Button className="bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                BOOK NOW
              </Button>
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white/70" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-16 bg-black">
        <div className="absolute inset-0 skew-y-1 bg-gradient-to-r from-[#ff00ff] to-[#00ffff]"></div>
      </div>

      {/* Axe Throwing Section */}
      <div className="mt-12 sm:mt-16 text-center relative">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 800 400" className="w-full h-full text-[#00ffff]">
            <path
              d="M100 200c0-50 50-100 100-100s100 50 100 100-50 100-100 100-100-50-100-100z M400 150c20-20 60-20 80 0l40 40-40 40c-20 20-60 20-80 0l-40-40 40-40z M600 200c0-50 50-100 100-100s100 50 100 100-50 100-100 100-100-50-100-100z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 text-shadow-[0_0_20px_rgba(255,255,255,0.8)] tracking-wide relative z-10">
          CHOOSE YOUR <span className="block text-[#dc2626] text-shadow-[0_0_25px_rgba(220,38,38,1)]">ADVENTURE</span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#dc2626] via-[#00ffff] to-[#dc2626] mx-auto mb-8"></div>
        <div className="max-w-4xl mx-auto">
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 font-medium">
            Sure, you can find axe throwing in Portland at other venues, but can you smash TVs afterward? Our unique
            combo experiences let you master your aim with professional axe throwing, then unleash your stress in our
            soundproof rage rooms.
          </p>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 font-medium">
            It's the perfect Portland adventure for couples, friends, and anyone looking for something completely
            different. Professional instruction included, no experience necessary!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {/* Axe Throwing Card */}
            <button
              className="bg-black/60 border-2 border-[#00ffff]/40 p-4 sm:p-6 rounded-lg transform transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:border-[#00ffff] cursor-pointer w-full relative overflow-hidden group"
              onClick={() =>
                window.open(
                  "https://Bookcelticaxe.as.me/?appointmentType=category:Stormbreaker%20Axe%20Throwing",
                  "_blank",
                )
              }
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#00ffff] flex items-center justify-center mb-4 mx-auto relative z-10">
                <Axe className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-black mb-3 text-[#00ffff] text-shadow-[0_0_10px_rgba(0,255,255,0.8)] uppercase tracking-wider">
                AXE THROWING
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-medium">
                Professional lanes with expert instruction. Perfect for Portland date nights!
              </p>
            </button>

            {/* Rage Room Card */}
            <button
              className="bg-black/60 border-2 border-[#dc2626]/40 p-4 sm:p-6 rounded-lg transform transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:border-[#dc2626] cursor-pointer w-full relative overflow-hidden group"
              onClick={() =>
                window.open("https://Bookcelticaxe.as.me/?appointmentType=category:Rage%20Room%20", "_blank")
              }
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#dc2626] flex items-center justify-center mb-4 mx-auto relative z-10">
                <Hammer className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-black mb-3 text-[#dc2626] text-shadow-[0_0_10px_rgba(220,38,38,0.8)] uppercase tracking-wider">
                RAGE ROOM
              </h3>
              <p className="text-white/80 text-sm sm:text-base font-medium">
                Smash stress away in soundproof rooms. Portland's #1 stress relief activity!
              </p>
            </button>

            {/* Combo Card */}
            <button
              className="bg-black/60 border-2 border-white/40 p-4 sm:p-6 rounded-lg transform transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:border-white cursor-pointer w-full relative overflow-hidden group"
              onClick={() =>
                window.open("https://Bookcelticaxe.as.me/?appointmentType=category:Rage%20%2F%20Axe%20Combo", "_blank")
              }
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-[#00ffff] to-[#dc2626] flex items-center justify-center mb-4 mx-auto relative z-10">
                <div className="flex items-center space-x-1">
                  <Axe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  <Hammer className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4 text-shadow-[0_0_15px_rgba(255,255,255,0.8)] uppercase tracking-wider relative z-10">
                COMBO EXPERIENCE
              </h3>
              <p className="text-white/85 text-base sm:text-lg mb-6 font-medium relative z-10">
                The ultimate Portland adventure! Axe throwing + rage room in one epic session.
              </p>
              <button
                className="bg-gradient-to-r from-[#dc2626] via-[#00ffff] to-[#dc2626] hover:from-[#dc2626]/90 hover:via-[#00ffff]/90 hover:to-[#dc2626]/90 text-black font-black text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-none border-2 border-white transform transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] uppercase tracking-widest relative z-10"
                onClick={() =>
                  window.open(
                    "https://Bookcelticaxe.as.me/?location=8409%20N%20Lombard%20St%2C%20Portland%2C%20OR%2097203",
                    "_blank",
                  )
                }
              >
                💀 BOOK YOUR PORTLAND ADVENTURE NOW 💀
              </button>
            </button>
          </div>

          <div className="bg-gradient-to-r from-[#dc2626]/20 via-black/60 to-[#00ffff]/20 p-6 sm:p-8 rounded-lg border-2 border-gradient-to-r border-[#dc2626]/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 400 200" className="w-full h-full text-[#00ffff]">
                <path
                  d="M50 100l50-25 50 25-50 25z M150 75l25-50 25 50-25 50z M250 100l50-25 50 25-50 25z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4 text-shadow-[0_0_15px_rgba(255,255,255,0.8)] uppercase tracking-wider relative z-10">
              READY FOR PORTLAND'S MOST{" "}
              <span className="text-[#dc2626] text-shadow-[0_0_15px_rgba(220,38,38,0.8)]">UNIQUE EXPERIENCE</span>?
            </h3>
            <p className="text-white/85 text-base sm:text-lg mb-6 font-medium relative z-10">
              Book now and discover why we're Portland's top-rated destination for stress relief, team building, and
              unforgettable fun. Easy online booking, walk-ins welcome!
            </p>
            <button
              className="bg-gradient-to-r from-[#dc2626] via-[#00ffff] to-[#dc2626] hover:from-[#dc2626]/90 hover:via-[#00ffff]/90 hover:to-[#dc2626]/90 text-black font-black text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-none border-2 border-white transform transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] uppercase tracking-widest relative z-10"
              onClick={() =>
                window.open(
                  "https://Bookcelticaxe.as.me/?location=8409%20N%20Lombard%20St%2C%20Portland%2C%20OR%2097203",
                  "_blank",
                )
              }
            >
              💀 BOOK YOUR PORTLAND ADVENTURE NOW 💀
            </button>
          </div>
        </div>
      </div>

      {/* SEO-Optimized Features Section - Gothic Punk Style */}
      <section id="choose-adventure" className="py-12 sm:py-16 bg-[#0a0a0a] relative overflow-hidden">
        {/* Subtle Rose Background Decorations */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 opacity-15">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#dc2626]">
              <path d="M50 20c-8 0-15 6-15 15 0 12 15 25 15 25s15-13 15-25c0-9-7-15-15-15z" fill="currentColor" />
              <path d="M35 45c-2-1-4-1-6 0-3 2-3 6 0 8l6 6 6-6c3-2 3-6 0-8-2-1-4-1-6 0z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute top-32 right-16 w-24 h-24 opacity-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#00ffff]">
              <path d="M20 50l10-5 10 5-10 5z M30 40l5-10 5 10-5 10z M40 30l10-5 10 5-10 5z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-20 w-28 h-28 opacity-15">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#dc2626]">
              <circle cx="50" cy="30" r="8" fill="currentColor" />
              <path d="M42 35c0 8 8 15 8 15s8-7 8-15" fill="currentColor" />
              <path d="M35 42c8 0 15-8 15-8s-7-8-15-8" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-32 right-12 w-20 h-20 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#00ffff]">
              <path d="M30 20l20 10-20 10 20 10-20 10 20 10" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Main SEO H1 - Gothic Block Style */}
          <div className="text-center mb-8 sm:mb-12 relative">
            <div className="absolute inset-0 opacity-5">
              <svg viewBox="0 0 400 200" className="w-full h-full text-[#dc2626]">
                <path
                  d="M50 100c0-20 20-40 40-40s40 20 40 40-20 40-40 40-40-20-40-40z M150 60c10-10 30-10 40 0l20 20-20 20c-10 10-30 10-40 0l-20-20 20-20z M250 100c0-20 20-40 40-40s40 20 40 40-20 40-40 40-40-20-40-40z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white relative z-10 tracking-wide leading-tight">
              <span className="block sm:inline text-shadow-[0_0_20px_rgba(0,255,255,0.8)]">SMASH STRESS AT</span>
              <br className="sm:hidden" />
              <span className="block sm:inline text-[#00ffff] text-shadow-[0_0_25px_rgba(0,255,255,1)]">
                {" "}
                PORTLAND'S{" "}
              </span>
              <br />
              <span className="block text-[#dc2626] text-shadow-[0_0_25px_rgba(220,38,38,1)] font-black">
                TOP RAGE ROOM
              </span>
              <br className="sm:hidden" />
              <span className="block sm:inline text-white text-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                {" "}
                EXPERIENCE
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#dc2626] via-[#00ffff] to-[#dc2626] mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-6 font-medium">
              Located in the heart of Portland, Oregon, we're your premier destination for stress relief, team building,
              and unforgettable experiences. Just minutes from downtown Portland!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
            {/* Team Building Section */}
            <div className="space-y-6 bg-black/40 p-6 sm:p-8 rounded-lg border border-[#00ffff]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-15">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#00ffff]">
                  <path d="M20 20l60 30-60 30z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-[#00ffff] mb-4 text-shadow-[0_0_15px_rgba(0,255,255,0.8)] tracking-wide">
                UNIQUE TEAM BUILDING
                <br />
                <span className="text-white">IN PORTLAND</span>
              </h2>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-4 font-medium">
                Skip the boring conference rooms! Our Portland team building activities combine rage room sessions with
                axe throwing for the most memorable corporate events in the city.
              </p>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                Perfect for Portland businesses looking to boost morale, improve communication, and create lasting
                bonds. We're conveniently located near downtown Portland, making us accessible for all your team
                building needs.
              </p>
              <button
                className="bg-[#00ffff] hover:bg-[#00ffff]/90 text-black font-black text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-none border-2 border-[#00ffff] transform transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] w-full sm:w-auto uppercase tracking-wider"
                onClick={() =>
                  window.open(
                    "https://Bookcelticaxe.as.me/?appointmentType=category:Rage%20%2F%20Axe%20Combo",
                    "_blank",
                  )
                }
              >
                ⚡ BOOK TEAM BUILDING NOW ⚡
              </button>
            </div>

            {/* Things to Do Section */}
            <div className="space-y-6 bg-black/40 p-6 sm:p-8 rounded-lg border border-[#dc2626]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 opacity-15">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#dc2626]">
                  <circle cx="50" cy="50" r="30" fill="currentColor" />
                  <circle cx="50" cy="50" r="15" fill="black" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-[#dc2626] mb-4 text-shadow-[0_0_15px_rgba(220,38,38,0.8)] tracking-wide">
                TOP THINGS TO DO
                <br />
                <span className="text-white">IN PORTLAND, OREGON</span>
              </h2>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-4 font-medium">
                When visitors ask "What are the best things to do in Portland?", locals point them our way. We're not
                your typical Portland attraction – we're an adrenaline-pumping experience that's perfect for date
                nights, bachelor parties, and friend groups.
              </p>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                Located inside Stormbreaker Brewing on N Lombard, we combine Portland's craft beer culture with
                high-energy entertainment. It's uniquely Portland – and uniquely unforgettable.
              </p>
              <button
                className="bg-[#dc2626] hover:bg-[#dc2626]/90 text-white font-black text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-none border-2 border-[#dc2626] transform transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] w-full sm:w-auto uppercase tracking-wider"
                onClick={() =>
                  window.open("https://Bookcelticaxe.as.me/?appointmentType=category:Rage%20Room%20", "_blank")
                }
              >
                🔥 EXPERIENCE PORTLAND'S BEST 🔥
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Jagged Divider */}
      <div className="relative h-24 bg-black overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#ff00ff"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39 116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#00ffff"
            opacity=".5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#ff00ff"
            opacity=".25"
          />
        </svg>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          {/* FAQ Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-4">
              <Hammer className="h-8 w-8 sm:h-12 sm:w-12 text-[#ff00ff]" />
            </div>
            <h2 className="font-flame text-3xl sm:text-4xl md:text-5xl text-white">
              RAGE ROOM <span className="text-[#ff00ff]">FAQS</span> ANSWERED
            </h2>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-3 sm:space-y-4">
              {faqData.slice(0, 4).map((faq, index) => (
                <div key={index} className="border-2 border-[#ff00ff] bg-black p-3 sm:p-4 rounded-lg">
                  <button
                    className="w-full flex justify-between items-start text-left gap-3"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-bold text-white text-base sm:text-lg leading-tight">{faq.question}</span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#ff00ff] flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg sm:text-xl">{openFaq === index ? "−" : "+"}</span>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="mt-3 sm:mt-4 text-white/80 leading-relaxed text-sm sm:text-base">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-3 sm:space-y-4">
              {faqData.slice(4, 8).map((faq, index) => {
                const actualIndex = index + 4
                return (
                  <div key={actualIndex} className="border-2 border-[#ff00ff] bg-black p-3 sm:p-4 rounded-lg">
                    <button
                      className="w-full flex justify-between items-start text-left gap-3"
                      onClick={() => toggleFaq(actualIndex)}
                    >
                      <span className="font-bold text-white text-base sm:text-lg leading-tight">{faq.question}</span>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#ff00ff] flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-lg sm:text-xl">
                          {openFaq === actualIndex ? "−" : "+"}
                        </span>
                      </div>
                    </button>
                    {openFaq === actualIndex && (
                      <div className="mt-3 sm:mt-4 text-white/80 leading-relaxed text-sm sm:text-base">
                        {actualIndex === 4 ? (
                          <div>
                            {faq.answer.split("book online").map((part, i) => (
                              <span key={i}>
                                {part}
                                {i === 0 && (
                                  <span
                                    className="text-[#ff00ff] cursor-pointer hover:text-[#ff00ff]/80"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      window.open(
                                        "https://Bookcelticaxe.as.me/?location=8409%20N%20Lombard%20St%2C%20Portland%2C%20OR%2097203",
                                        "_blank",
                                      )
                                    }}
                                  >
                                    book online
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                        ) : (
                          faq.answer
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#ff00ff]/30 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <h3 className="font-flame text-xl sm:text-2xl mb-3 sm:mb-4 text-[#ff00ff]">PORTLAND RAGE ROOM</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Inside Stormbreaker Brewing
                <br />
                8409 N Lombard St, Portland, OR 97203
                <br />
                (503) 212-9031
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-flame text-lg sm:text-xl mb-3 sm:mb-4 text-[#00ffff]">HOURS</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Monday - Thursday: 4pm - 11pm
                <br />
                Friday: 2pm - 1am
                <br />
                Saturday: 12pm - 1am
                <br />
                Sunday: 12pm - 10pm
              </p>
            </div>

            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="font-flame text-lg sm:text-xl mb-3 sm:mb-4 text-white">FOLLOW US</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="#" className="text-white hover:text-[#ff00ff] transition-colors">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#ff00ff] transition-colors">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427a4.902 4.902 0 011.772 1.772 4.902 4.902 0 011.153 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63c0-2.43.012-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
