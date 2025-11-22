import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { processDescription } from "@/lib/text-processor"

const projects = [
  {
    title: "Wishlist API",
    description: "API para gerenciamento de wishlists de produtos feita com Java 25 e Spring Boot.",
    github: "https://github.com/erys07/wishlist",
    stars: 0,
    tags: ["Java", "Spring Boot", "MongoDB"],
  },
  {
    title: "Hackaween",
    description: "Hackathon que promovi, junto com a @grazi.tech e a @mictalks, reunindo desenvolvedores para criar soluções inovadoras em tecnologia.",
    link: "https://discord.gg/5Xsptg3U",
    tags: ["Evento", "Hackathon", "Comunidade"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 md:py-32">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Projetos em Destaque</h2>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Projetos que desenvolvi durante minha jornada de aprendizado, explorando diferentes tecnologias e construindo soluções práticas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="group hover:shadow-lg transition-shadow">
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Ver Código
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Mais
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
