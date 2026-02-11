"use client"

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react"

/**
 * Supported animation variants for scroll-triggered reveal
 */
type AnimationVariant = "fade-up" | "fade-scale" | "fade-left"

/**
 * Props for the AnimateOnScroll component
 */
interface AnimateOnScrollProps {
  /** Content to animate when scrolled into view */
  children: ReactNode
  /** Animation style variant (default: "fade-up") */
  variant?: AnimationVariant
  /** Delay before animation starts in seconds (default: 0) */
  delay?: number
  /** Duration of animation in seconds (default: 0.6) */
  duration?: number
  /** Additional CSS classes */
  className?: string
  /** IntersectionObserver threshold for triggering animation (default: 0.15) */
  threshold?: number
}

/**
 * Maps animation variant names to CSS animation names
 */
const animationMap: Record<AnimationVariant, string> = {
  "fade-up": "reveal-up",
  "fade-scale": "reveal-scale",
  "fade-left": "reveal-left",
}

/**
 * Animate On Scroll Component
 * 
 * Triggers CSS animations when elements become visible during scrolling.
 * Uses IntersectionObserver for performance, only triggering the animation once.
 * 
 * @component
 * @example
 * ```tsx
 * <AnimateOnScroll variant="fade-up" delay={0.2}>
 *   <div>Content fades in when scrolled into view</div>
 * </AnimateOnScroll>
 * ```
 */
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
