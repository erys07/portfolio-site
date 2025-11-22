"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tag, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const coupons = [
  {
    partner: "DVLPR",
    logo: "",
    description: "Produtos exclusivos para desenvolvedores: canecas, mousepads, blusas e acessórios com designs únicos da comunidade tech.",
    discount: "15% OFF",
    code: "ERYSDEV15",
    link: "https://dvlpr.com.br",
  },
  {
    partner: "Rocketseat",
    logo: "",
    description: "A Rocketseat é uma empresa de educação em tecnologia que oferece cursos online para desenvolvedores. Aqui você pode encontrar cursos de programação, desenvolvimento web, desenvolvimento mobile, desenvolvimento de games, desenvolvimento de IA e muito mais.",
    discount: "5% OFF",
    code: "ERYSDEV",
    link: "https://rocketseat.com.br",
  },
]

export function PartnerCoupons() {
  const { t } = useLanguage()

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Tag className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">{t.partnerCoupons.title}</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t.partnerCoupons.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {coupons.map((coupon) => (
            <Card key={coupon.partner} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-4">
                    <img
                      src={coupon.logo || "/placeholder.svg"}
                      alt={`${coupon.partner} logo`}
                      className="w-12 h-12 rounded-lg"
                    />
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {coupon.partner}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {coupon.discount}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">{coupon.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t.partnerCoupons.couponCode}</p>
                    <code className="text-lg font-mono font-bold">{coupon.code}</code>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(coupon.code)}>
                    {t.partnerCoupons.copy}
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <a
                    href={coupon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <span>{t.partnerCoupons.visitSite}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
