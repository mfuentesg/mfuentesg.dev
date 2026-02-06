"use client"

import { useEffect, useState } from "react"

interface TerminalTypingProps {
  lines: string[]
  speed?: number
  onComplete?: () => void
}

export function TerminalTyping({ lines, speed = 40, onComplete }: TerminalTypingProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true)
      onComplete?.()
      return
    }

    const currentLine = lines[currentLineIndex]

    if (currentCharIndex <= currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev]
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex)
          return newLines
        })
        setCurrentCharIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }

    const lineBreakTimeout = setTimeout(() => {
      setCurrentLineIndex((prev) => prev + 1)
      setCurrentCharIndex(0)
    }, 200)

    return () => clearTimeout(lineBreakTimeout)
  }, [currentLineIndex, currentCharIndex, lines, speed, onComplete])

  return (
    <div className="font-mono text-sm leading-relaxed md:text-base">
      {displayedLines.map((line, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="select-none text-primary/50">{">"}</span>
          <span className="text-foreground">
            {line}
            {i === currentLineIndex && !isComplete && (
              <span
                className="ml-0.5 inline-block h-4 w-2 bg-primary align-middle"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            )}
          </span>
        </div>
      ))}
      {isComplete && (
        <div className="flex items-start gap-2">
          <span className="select-none text-primary/50">{">"}</span>
          <span
            className="inline-block h-4 w-2 bg-primary"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </div>
      )}
    </div>
  )
}
