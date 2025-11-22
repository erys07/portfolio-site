import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">Erys Dev</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Desenvolvedor, Palestrante e Criador de Conteúdo
        </p>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl">
        Construo aplicações modernas e sou criador de conteúdo, compartilhando conhecimento por meio de palestras, artigos e tutoriais. Uso minha experiência como desenvolvedor para criar soluções de alto impacto e ajudar outros profissionais a evoluírem em suas carreiras.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Button asChild size="lg">
            <a href="#projects">Ver Projetos</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#newsletter">Inscreva-se no Newsletter</a>
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
    </section>
  )
}
