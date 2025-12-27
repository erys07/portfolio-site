"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { processDescription } from "@/lib/text-processor"
import { useLanguage } from "@/lib/i18n/context"

const projectLinks = {
  "Kafka Go Scalable Worker": {
    github: "https://github.com/erys07/kafka-go-scalable-worker",
  },
  "Wishlist API": {
    github: "https://github.com/erys07/wishlist",
  },
  "Hackaween": {
    link: "https://discord.gg/5Xsptg3U",
  },
}

export function Projects() {
  const { t } = useLanguage()
  const projects = t.projects.items

  return (
    <section id="projects" className="container mx-auto px-4 py-20 md:py-32">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t.projects.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {t.projects.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const links = projectLinks[project.title as keyof typeof projectLinks] || {}
          return (
            <Card key={`${project.title}-${index}`} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {processDescription(project.description)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {"github" in links && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      {t.projects.viewCode}
                    </a>
                  )}
                  {"link" in links && (
                    <a
                      href={links.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.viewMore}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
