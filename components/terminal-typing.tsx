"use client"

import { useEffect, useRef, useCallback } from "react"

interface TerminalTypingProps {
  lines: string[]
  speed?: number
}

export function TerminalTyping({ lines, speed = 40 }: TerminalTypingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const animate = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    let lineIndex = 0
    let charIndex = 0

    function createLineElement(index: number) {
      const div = document.createElement("div")
      div.className = "flex items-start gap-2"
      const arrow = document.createElement("span")
      arrow.className = "select-none text-primary/50"
      arrow.textContent = ">"
      const text = document.createElement("span")
      text.className = "text-foreground"
      text.setAttribute("data-line", String(index))
      div.appendChild(arrow)
      div.appendChild(text)
      return { div, text }
    }

    function addCursor(parent: Element) {
      const existing = parent.querySelector("[data-cursor]")
      if (existing) return
      const cursor = document.createElement("span")
      cursor.className = "ml-0.5 inline-block h-4 w-2 bg-primary align-middle"
      cursor.style.animation = "blink 1s step-end infinite"
      cursor.setAttribute("data-cursor", "true")
      parent.appendChild(cursor)
    }

    function removeCursor() {
      const cursor = container?.querySelector("[data-cursor]")
      if (cursor) cursor.remove()
    }

    const { div: firstDiv, text: firstText } = createLineElement(0)
    addCursor(firstText)
    container.appendChild(firstDiv)

    function step() {
      if (lineIndex >= lines.length) {
        removeCursor()
        const finalDiv = document.createElement("div")
        finalDiv.className = "flex items-start gap-2"
        const finalArrow = document.createElement("span")
        finalArrow.className = "select-none text-primary/50"
        finalArrow.textContent = ">"
        const finalCursor = document.createElement("span")
        finalCursor.className = "inline-block h-4 w-2 bg-primary"
        finalCursor.style.animation = "blink 1s step-end infinite"
        finalDiv.appendChild(finalArrow)
        finalDiv.appendChild(finalCursor)
        container.appendChild(finalDiv)
        return
      }

      const currentLine = lines[lineIndex]
      const textEl = container.querySelector(`[data-line="${lineIndex}"]`)

      if (charIndex <= currentLine.length) {
        if (textEl) {
          removeCursor()
          textEl.textContent = currentLine.slice(0, charIndex)
          addCursor(textEl)
        }
        charIndex++
        animationRef.current = setTimeout(step, speed)
      } else {
        removeCursor()
        lineIndex++
        charIndex = 0
        if (lineIndex < lines.length) {
          const { div: nextDiv, text: nextText } = createLineElement(lineIndex)
          addCursor(nextText)
          container.appendChild(nextDiv)
        }
        animationRef.current = setTimeout(step, 300)
      }
    }

    animationRef.current = setTimeout(step, 500)
  }, [lines, speed])

  useEffect(() => {
    animate()
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current)
    }
  }, [animate])

  return (
    <div
      ref={containerRef}
      className="font-mono text-sm leading-relaxed md:text-base"
    />
  )
}
