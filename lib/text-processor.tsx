import type React from "react"

export function processDescription(description: string): (string | React.ReactElement)[] {
  const parts: (string | React.ReactElement)[] = []
  let remaining = description
  let key = 0
  
  while (remaining.length > 0) {
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/)
    const mentionMatch = remaining.match(/@\w+(?:\.\w+)?/)
    
    let match: RegExpMatchArray | null = null
    let matchIndex = Infinity
    
    if (linkMatch && linkMatch.index !== undefined && linkMatch.index < matchIndex) {
      match = linkMatch
      matchIndex = linkMatch.index
    }
    if (mentionMatch && mentionMatch.index !== undefined && mentionMatch.index < matchIndex) {
      match = mentionMatch
      matchIndex = mentionMatch.index
    }
    
    if (match && match.index !== undefined) {
      if (match.index > 0) {
        parts.push(remaining.slice(0, match.index))
      }
      
      const matchedText = match[0]
      
      if (matchedText.startsWith('[')) {
        const linkMatchResult = matchedText.match(/\[([^\]]+)\]\(([^)]+)\)/)
        if (linkMatchResult) {
          const [, text, url] = linkMatchResult
          parts.push(
            <a
              key={key++}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              {text}
            </a>
          )
        }
      }
      else if (matchedText.startsWith('@')) {
        const username = matchedText.slice(1)
        parts.push(
          <a
            key={key++}
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {matchedText}
          </a>
        )
      }
      
      remaining = remaining.slice(match.index + matchedText.length)
    } else {
      parts.push(remaining)
      break
    }
  }
  
  return parts.length > 0 ? parts : [description]
}

