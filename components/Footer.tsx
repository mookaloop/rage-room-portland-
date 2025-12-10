"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#ff00ff]/30 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Business Info */}
          <div className="text-center lg:text-left">
            <h3 className="font-flame text-xl sm:text-2xl mb-3 sm:mb-4 text-[#ff00ff]">PORTLAND RAGE ROOM</h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
              Inside Stormbreaker Brewing
              <br />
              8409 N Lombard St, Portland, OR 97203
              <br />
              (503) 212-9031
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com/rageroomportland/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff00ff] transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/rageroompdx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff00ff] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.047 1.023.06 1.378.06 3.808v.63c0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center lg:text-left">
            <h3 className="font-flame text-lg sm:text-xl mb-3 sm:mb-4 text-[#00ffff]">HOURS</h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Monday - Tuesday: Private Event Bookings Only
              <br />
              Wednesday: 4pm - 9pm
              <br />
              Thursday: 4pm - 10pm
              <br />
              Friday: 4pm - 10pm
              <br />
              Saturday: 12pm - 10pm
              <br />
              Sunday: 12pm - 9pm
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="font-flame text-lg sm:text-xl mb-3 sm:mb-4 text-white">QUICK LINKS</h3>
            <div className="space-y-2 text-sm sm:text-base">
              <Link href="/book" className="block text-white/70 hover:text-[#ff00ff] transition-colors">
                Book Now
              </Link>
              <Link href="/how-it-works" className="block text-white/70 hover:text-[#ff00ff] transition-colors">
                How It Works
              </Link>
              <Link href="/parties-events" className="block text-white/70 hover:text-[#ff00ff] transition-colors">
                Team Building
              </Link>
              <Link href="/#faq" className="block text-white/70 hover:text-[#ff00ff] transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center lg:text-left">
            <h3 className="font-flame text-lg sm:text-xl mb-3 sm:mb-4 text-white">FIND US</h3>
            <div className="relative">
              <div className="aspect-[4/3] w-full max-w-sm mx-auto lg:mx-0 rounded-lg overflow-hidden border-2 border-[#ff00ff]/30 hover:border-[#ff00ff] transition-colors">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.03682785075!2d-122.75313659999999!3d45.5898044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a9e97c77e4db%3A0xe85aafa0c8963284!2sRage%20Room%20Portland!5e0!3m2!1sen!2sus!4v1751912685835!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rage Room Portland Location"
                  className="w-full h-full"
                  onError={(e) => {
                    // Fallback if map fails to load
                    const target = e.target as HTMLIFrameElement
                    target.style.display = "none"
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = "flex"
                  }}
                />
                {/* Fallback content if map fails to load */}
                <div
                  className="w-full h-full bg-gradient-to-br from-[#ff00ff]/20 to-[#00ffff]/20 flex flex-col items-center justify-center text-center p-4"
                  style={{ display: "none" }}
                >
                  <div className="text-white/80 text-sm mb-2">📍 Find Us At:</div>
                  <div className="text-white font-bold text-sm">
                    8409 N Lombard St
                    <br />
                    Portland, OR 97203
                  </div>
                  <a
                    href="https://maps.google.com/?q=Rage+Room+Portland,+8409+N+Lombard+St,+Portland,+OR+97203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[#ff00ff] hover:text-[#ff00ff]/80 text-xs underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <div className="mt-2 text-center lg:text-left">
                <a
                  href="https://maps.google.com/?q=Rage+Room+Portland,+8409+N+Lombard+St,+Portland,+OR+97203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ffff] hover:text-[#00ffff]/80 text-xs underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 text-center">
          {/* Add Waiver Button */}
          <div className="mb-6">
            <Button
              className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] hover:from-[#ff00ff]/80 hover:to-[#00ffff]/80 text-black font-bold text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://waiver.smartwaiver.com/w/tkfmatvzjuc5pg5n471dgf/web/", "_blank")}
            >
              📝 SIGN WAIVER ONLINE
            </Button>
          </div>

          <div className="text-white/70 text-sm mb-4">
            <p className="mb-2">Portland Rage Room - The Ultimate Stress Relief Experience</p>
            <p>Serving Portland, Beaverton, Lake Oswego, Tigard, and surrounding areas</p>
          </div>
          <div className="text-white/50 text-xs">
            © 2025 Rage Room Portland. All rights reserved. |
            <Link href="/privacy" className="hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
