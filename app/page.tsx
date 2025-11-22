import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Talks } from "@/components/talks"
import { NewsletterRecent } from "@/components/newsletter-recent"
import { Newsletter } from "@/components/newsletter"
import { PartnerCoupons } from "@/components/partner-coupons"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Talks />
      <NewsletterRecent />
      <Newsletter />
      <PartnerCoupons />
      <Footer />
    </main>
  )
}
