//@flow

import { getItem, persistItem } from "components/local-storage-service"
import type { Consent } from "components/local-storage-service"

export const DEFAULT_LANGUAGE = "de"

export const getUserLanguage = (): string => {
  const lang = getItem("userLanguage", DEFAULT_LANGUAGE)

  if (lang) {
    return lang
  }

  if (navigator.languages) {
    return navigator.languages[0]
  }

  return navigator.language
}

export const persistUserLanguage = (lang2Set: string, consent: Consent) => {
  persistItem("userLanguage", lang2Set, consent)
}
