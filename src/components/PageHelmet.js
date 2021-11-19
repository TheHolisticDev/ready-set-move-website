// @flow
import React from "react"
import type { Node } from "react"
import { Helmet } from "react-helmet-async"

import { useLanguage } from "i18n/useLanguage"
import { useRouteData } from "react-static"
import useTranslations from "i18n/useTranslations"

export default function PageHelmet(): Node {
  const { canonicalLink, alternateLinks } = useRouteData()
  const language = useLanguage()
  const t = useTranslations()

  const description = t("description")
  const title = t("title")

  // TODO: link rel me to social media etc. profiles in about me page
  // TODO: <link rel="prefetch" href="//example.com"> for external resource sources
  // TODO: about-me.html
  // TODO: rel="index" e.g. for articles => /articles | /services | …
  return (
    <Helmet>
      <html lang={language} />
      {canonicalLink && <link rel="canonical" href={canonicalLink} />}
      {canonicalLink && <link rel="self" href={canonicalLink} />}
      {alternateLinks &&
        alternateLinks.map((alternate) => (
          <link
            rel="alternate"
            href={alternate.link}
            hreflang={alternate.lang}
            key={alternate.lang}
          />
        ))}
      <meta name="description" content={description} />
      {title && <title>{title}</title>}
    </Helmet>
  )
}
