"use client"

import { useEffect, useState } from "react"

export function StatusBar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-7 items-center justify-between border-t border-border bg-card/80 px-4 font-mono text-[11px] text-muted-foreground backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" style={{ animation: "glow-pulse 2s ease-in-out infinite" }} />
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
        <span>{time}</span>
      </div>
    </div>
  )
}
