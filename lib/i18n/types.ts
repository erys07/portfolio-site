import { pt } from "./translations/pt"
import { en } from "./translations/en"

export type Language = "pt" | "en"
export type Translations = typeof pt | typeof en

export const translations = {
  pt,
  en,
} as const

