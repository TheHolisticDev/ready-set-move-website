import React from "react"

import PageHelmet from "components/PageHelmet"
import useTranslations from "i18n/useTranslations"

export default function Training() {
  const t = useTranslations()

  return (
    <div style={{ textAlign: "center" }}>
      <PageHelmet
        description={t("Training page description")}
        title={t("Training page title")}
      />
      <h1>{t("Training page headline")}</h1>
    </div>
  )
}
