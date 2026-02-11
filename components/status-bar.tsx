"use client"

import { useEffect, useState, useMemo } from "react"
import { STATUS_BAR_CONFIG } from "@/lib/constants"

export function StatusBar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    // Set initial time immediately
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString(STATUS_BAR_CONFIG.LOCALE, STATUS_BAR_CONFIG.TIME_FORMAT))
    }
    
    updateTime()
    
    // Only update on minute change for performance (not every second)
    const now = new Date()
    const msUntilNextSecond = (60 - now.getSeconds()) * 1000 - now.getMilliseconds()
    
    const timeout = setTimeout(() => {
      updateTime()
      const interval = setInterval(updateTime, STATUS_BAR_CONFIG.TIME_UPDATE_INTERVAL)
      return () => clearInterval(interval)
    }, msUntilNextSecond)

    return () => clearTimeout(timeout)
  }, [])

  // Memoize the status bar content to avoid unnecessary re-renders
  const statusContent = useMemo(
    () => (
      <div className="fixed bottom-0 left-0 right-0 z-50 flex h-7 items-center justify-between border-t border-border bg-card/80 px-4 font-mono text-[11px] text-muted-foreground backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block h-2 w-2 rounded-full bg-emerald-500"
              style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
            />
            <span>online</span>
          </span>
          <span className="text-border">|</span>
          <span>main</span>
        </div>
        <div className="flex items-center gap-4">
          <span>UTF-8</span>
          <span className="text-border">|</span>
          <span>TypeScript React</span>
          <span className="text-border">|</span>
          <span>{time || "--:--:--"}</span>
        </div>
      </div>
    ),
    [time]
  )

  return statusContent
}
