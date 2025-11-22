import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/i18n/context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Erys Dev - Professional Portfolio",
  description: "Desenvolvedor e criador de conteúdo. Explore meus projetos, palestras, newsletter e ofertas de parceiros.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="data:," />
      </head>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
