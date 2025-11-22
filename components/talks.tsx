"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const talkLinks = {
  "Clean Architecture na prática: por que separar responsabilidades importa": "https://gdg.community.dev/gdg-arapiraca/",
  "Clean Architecture in practice: why separating responsibilities matters": "https://gdg.community.dev/gdg-arapiraca/",
}

export function Talks() {
  const { t } = useLanguage()
  const talks = t.talks.items

  return (
    <section id="talks" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t.talks.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t.talks.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {talks.map((talk) => {
            const link = talkLinks[talk.title as keyof typeof talkLinks] || "#"
            return (
              <Card key={talk.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors text-balance">
                    {talk.title}
                  </CardTitle>
                  <CardDescription className="text-base font-semibold">{talk.event}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {talk.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {talk.location}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{talk.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {talk.tags.map((tag) => (
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
                    {t.talks.eventDetails}
                  </a>
                </CardContent>
              </Card>
            )
          })}
          </div>
        </div>
      </section>
    )
  }
