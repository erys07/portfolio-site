"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Mail } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const newsletterLinks = {
  "Java está morrendo? O mito que não quer morrer.": "https://open.substack.com/pub/erysdev/p/java-esta-morrendo-o-mito-que-nao?r=6wmvw3&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
  "Is Java dying? The myth that won't die.": "https://open.substack.com/pub/erysdev/p/java-esta-morrendo-o-mito-que-nao?r=6wmvw3&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
}

export function NewsletterRecent() {
  const { t } = useLanguage()
  const recentNewsletters = t.newsletterRecent.items

  return (
    <section id="newsletter-recent" className="container mx-auto px-4 pt-20 md:pt-32 pb-8 md:pb-12">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">{t.newsletterRecent.title}</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {t.newsletterRecent.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {recentNewsletters.map((newsletter) => {
          const link = newsletterLinks[newsletter.title as keyof typeof newsletterLinks] || "#"
          return (
            <Card key={newsletter.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors text-balance">
                  {newsletter.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {newsletter.date}
                </div>
                <p className="text-sm leading-relaxed">{newsletter.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {newsletter.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.newsletterRecent.readNewsletter}
                </a>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

