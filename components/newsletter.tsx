"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section id="newsletter" className="container mx-auto px-4 pt-8 md:pt-12 pb-20 md:pb-32">
      <div className="max-w-2xl mx-auto">
        <Card className="border-2">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl text-balance">
              Inscreva-se no Newsletter
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              Receba semanalmente insights sobre desenvolvimento, dicas de carreira e recursos selecionados entregues diretamente na sua caixa de entrada. Sem spam, desinscreva-se a qualquer momento.
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
