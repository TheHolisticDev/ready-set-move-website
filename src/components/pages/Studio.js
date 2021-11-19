import React from "react"

import PageHelmet from "components/PageHelmet"
import useTranslations from "i18n/useTranslations"

export default function Studio() {
  const t = useTranslations()

  return (
    <div style={{ textAlign: "center" }}>
      <PageHelmet
        description={t("Studio page description")}
        title={t("Studio page title")}
      />
      <h1>{t("Studio page headline")}</h1>
    </div>
  )
}
