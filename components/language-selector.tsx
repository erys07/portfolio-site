"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/context"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        variant={language === "pt" ? "default" : "outline"}
        size="icon"
        onClick={() => setLanguage("pt")}
        className="h-9 w-9 text-lg"
        title="Português"
      >
        🇧🇷
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="icon"
        onClick={() => setLanguage("en")}
        className="h-9 w-9 text-lg"
        title="English"
      >
        🇺🇸
      </Button>
    </div>
  )
}

