import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Mail } from "lucide-react"

const recentNewsletters = [
  {
    title: "Java está morrendo? O mito que não quer morrer.",
    date: "22/Nov",
    summary: "Artigo explicando de onde esse mito surgiu e o que realmente mudou no Java moderno.",
    link: "https://open.substack.com/pub/erysdev/p/java-esta-morrendo-o-mito-que-nao?r=6wmvw3&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    tags: ["Java", "Spring Boot", "Clean Architecture"],
  },
]

export function NewsletterRecent() {
  return (
    <section id="newsletter-recent" className="container mx-auto px-4 pt-20 md:pt-32 pb-8 md:pb-12">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Newsletters Recentes</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Artigos e insights que compartilhei no meu newsletter. Confira as edições mais recentes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {recentNewsletters.map((newsletter) => (
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
                href={newsletter.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Ler Newsletter
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

