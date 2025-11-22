"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function Newsletter() {
  const { t } = useLanguage()

  return (
    <section id="newsletter" className="container mx-auto px-4 pt-8 md:pt-12 pb-20 md:pb-32">
      <div className="max-w-2xl mx-auto">
        <Card className="border-2">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl text-balance">
              {t.newsletter.title}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {t.newsletter.description}
            </CardDescription>
          </CardHeader>
          <iframe
            className="w-full h-full"
            src="https://erysdev.substack.com/embed"
            width="480"
            height="320"
            style={{ border: "1px solid #EEE", background: "white" }}
            frameBorder="0"
            scrolling="no"
            title="Newsletter Subscription"
          />
        </Card>
      </div>
    </section>
  );
}
