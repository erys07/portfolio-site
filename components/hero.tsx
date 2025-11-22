"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"
import { LanguageSelector } from "@/components/language-selector"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <LanguageSelector />
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">{t.hero.title}</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl">
        {t.hero.description}
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Button asChild size="lg">
            <a href="#projects">{t.hero.viewProjects}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#newsletter">{t.hero.subscribeNewsletter}</a>
          </Button>
        </div>
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/erys07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/erys-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:erys.dev.creator@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        </div>
        <div className="hidden md:block relative w-full aspect-square max-w-lg lg:max-w-xl mx-auto">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
            <Image
              src="/v2_7cb62f4a-94b6-440d-9655-9359672ba2ad.jpg"
              alt="Erys Dev"
              fill
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
