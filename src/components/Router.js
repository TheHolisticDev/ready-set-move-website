import React from "react"

import { Link as RouterLink } from "@reach/router"
import { useLanguage } from "i18n/useLanguage"
export { Router } from "@reach/router"

export const Link = React.forwardRef(
  ({ to, disableLanguagePrefixing, ...other }, ref) => {
    const language = useLanguage()
    const enrichedTo = disableLanguagePrefixing ? to : `${language}/${to}`
    return <RouterLink {...other} to={enrichedTo} ref={ref} />
  }
)
