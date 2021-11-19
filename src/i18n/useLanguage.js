// @flow
import React, { createContext, useContext } from "react"
import type { Node } from "react"
import { useRouteData } from "react-static"

import {
  DEFAULT_LANGUAGE,
  getUserLanguage,
  persistUserLanguage,
} from "i18n/user-language-service"
import { SUPPORTED_LANGUAGES } from "./translations"
import { useConsent } from "components/useConsent"

const SiteLanguageContext = createContext<string | void>()
type ProviderProps = {|
  children: Node,
|}

export const SiteLanguageProvider = ({ children }: ProviderProps): Node => {
  const routeData = useRouteData()
  const userLanguage = getUserLanguage()
  const { consent } = useConsent()

  let language = DEFAULT_LANGUAGE

  const langFromPath = routeData && routeData.langFromPath

  if (SUPPORTED_LANGUAGES.includes(routeData.langFromPath)) {
    // store lang from path for the user so they can access the same lang via root path without lang specifier later
    persistUserLanguage(langFromPath, consent)
    language = langFromPath
  } else {
    // we currently only support country unspecific languages
    const userLangWithoutCountry = userLanguage.split("-")[0]
    if (SUPPORTED_LANGUAGES.includes(userLangWithoutCountry)) {
      language = userLangWithoutCountry
    }
  }

  return (
    <SiteLanguageContext.Provider value={language}>
      {children}
    </SiteLanguageContext.Provider>
  )
}

export const useLanguage = (): string => {
  const lang = useContext(SiteLanguageContext)
  if (!lang)
    throw Error(
      "SiteLanguage not set, did you forget to wrap the component in a APIPathProvider?"
    )

  return lang
}
