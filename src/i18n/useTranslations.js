// @flow

import { useCallback } from "react"
import { useRouteData } from "react-static"

import { useLanguage } from "i18n/useLanguage"

type Return = (id: string) => string

export default function useTranslations(): Return {
  const { translations } = useRouteData()
  const language = useLanguage()

  return useCallback(
    (id) =>
      translations[id] ||
      (translations[language] && translations[language][id]) ||
      id,
    [language, translations]
  )
}
