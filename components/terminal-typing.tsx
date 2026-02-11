"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Props for the TerminalTyping component
 */
interface TerminalTypingProps {
  /** Array of text lines to display with typing animation */
  lines: readonly string[]
  /** Speed of typing animation in milliseconds (default: 40) */
  speed?: number
}

/**
 * Internal animation state for tracking typing progress
 */
interface LineState {
  /** Current line being typed (0-indexed) */
  lineIndex: number
  /** Current character position within the line */
  charIndex: number
  /** Array of fully completed/partial lines displayed so far */
  displayedLines: string[]
  /** Whether to show the blinking cursor */
  showCursor: boolean
}

/**
 * Terminal Typing Animation Component
 *
 * Animates text as if being typed in a terminal, printing one character at a time
 * for each line. Includes proper line breaks and cursor blinking.
 *
 * @component
 * @example
 * ```tsx
 * <TerminalTyping
 *   lines={["Hello", "World"]}
 *   speed={50}
 * />
 * ```
 */
export function TerminalTyping({ lines, speed = 40 }: TerminalTypingProps) {
  const [state, setState] = useState<LineState>({
    lineIndex: 0,
    charIndex: 0,
    displayedLines: [],
    showCursor: true
  })
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const animate = () => {
      setState((prevState) => {
        const { lineIndex, charIndex, displayedLines } = prevState

        // Animation complete
        if (lineIndex >= lines.length) {
          return {
            ...prevState,
            showCursor: true
          }
        }

        const currentLine = lines[lineIndex]

        if (charIndex < currentLine.length) {
          // Update current line with new character
          const newDisplayedLines = [...displayedLines]
          newDisplayedLines[lineIndex] = currentLine.slice(0, charIndex + 1)

          timeoutRef.current = setTimeout(animate, speed)

          return {
            ...prevState,
            charIndex: charIndex + 1,
            displayedLines: newDisplayedLines,
            showCursor: true
          }
        } else {
          // Move to next line
          if (lineIndex + 1 < lines.length) {
            const newDisplayedLines = [...displayedLines]
            newDisplayedLines[lineIndex + 1] = ""

            timeoutRef.current = setTimeout(animate, 300)

            return {
              ...prevState,
              lineIndex: lineIndex + 1,
              charIndex: 0,
              displayedLines: newDisplayedLines,
              showCursor: true
            }
          } else {
            // Final state
            return {
              ...prevState,
              lineIndex: lineIndex + 1,
              showCursor: true
            }
          }
        }
      })
    }

    timeoutRef.current = setTimeout(animate, 500)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [lines, speed])

  return (
    <div className="space-y-0">
      {lines.map((line, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <span className="select-none text-primary/50">{">"}</span>
          <span className="text-foreground">
            {state.displayedLines[idx] ?? ""}
            {idx === state.lineIndex && state.showCursor && (
              <span
                className="ml-0.5 inline-block h-4 w-2 bg-primary"
                style={{
                  animation: "blink 1s step-end infinite"
                }}
              />
            )}
          </span>
        </div>
      ))}
      {state.lineIndex >= lines.length && (
        <div className="flex items-start gap-2">
          <span className="select-none text-primary/50">{">"}</span>
          <span
            className="inline-block h-4 w-2 bg-primary"
            style={{
              animation: "blink 1s step-end infinite"
            }}
          />
        </div>
      )}
    </div>
  )
}
