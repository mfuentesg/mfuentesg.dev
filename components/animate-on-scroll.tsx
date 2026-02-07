"use client"

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react"

type AnimationVariant = "fade-up" | "fade-scale" | "fade-left"

interface AnimateOnScrollProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

const animationMap: Record<AnimationVariant, string> = {
  "fade-up": "reveal-up",
  "fade-scale": "reveal-scale",
  "fade-left": "reveal-left",
}

export function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationPlayState = "running"
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const style: CSSProperties = {
    opacity: 0,
    animation: `${animationMap[variant]} ${duration}s ease-out ${delay}s forwards`,
    animationPlayState: "paused",
  }

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
