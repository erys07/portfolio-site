import type React from "react"

export function processDescription(description: string): (string | React.ReactElement)[] {
  const parts = description.split(/(@\w+(?:\.\w+)?)/g)
  
  return parts.map((part, index) => {
    if (part.startsWith('@')) {
      const username = part.slice(1)
      return (
        <a
          key={index}
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          {part}
        </a>
      )
    }
    return part
  })
}

