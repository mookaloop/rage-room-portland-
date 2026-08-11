"use client"

import { useEffect, useState } from "react"
import { Recycle, X } from "lucide-react"

const SESSION_KEY = "recycling-banner-dismissed"

export default function RecyclingBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.sessionStorage.getItem(SESSION_KEY) === "1") return

    const timer = window.setTimeout(() => {
      setMounted(true)
      // Mount off-screen first, then flip to visible on the next frame so the
      // enter transition actually animates instead of snapping in.
      requestAnimationFrame(() => setVisible(true))
    }, 3000)

    return () => window.clearTimeout(timer)
  }, [])

  function handleDismiss() {
    setVisible(false)
    window.sessionStorage.setItem(SESSION_KEY, "1")
    window.setTimeout(() => setMounted(false), 300)
  }

  if (!mounted) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 px-4 transition-all duration-300 ease-out sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-full border border-border/60 bg-card/95 py-2 pl-3 pr-2 shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-md sm:pl-3.5 sm:pr-2.5">
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary"
        >
          <Recycle className="h-4 w-4 animate-[spin_4s_linear_infinite]" />
        </span>

        <div className="flex min-w-0 flex-col leading-tight">
          <span className="text-xs font-semibold tracking-wide text-foreground sm:text-sm">
            100% recycled materials used
          </span>
          <span className="text-[10px] text-muted-foreground sm:text-[11px]">Recycle Glass Rescue Dogs 🐾</span>
        </div>

        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss recycling banner"
          className="ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
