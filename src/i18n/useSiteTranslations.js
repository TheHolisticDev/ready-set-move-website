// @flow

import { useCallback } from "react"
import { useSiteData } from "react-static"

import { useLanguage } from "i18n/useLanguage"

type Return = (id: string) => string

export default function useSiteTranslations(): Return {
  const language = useLanguage()
  const { translations } = useSiteData()

  return useCallback(
    (id) => (translations[language] && translations[language][id]) || id,
    [language, translations]
  )
}
