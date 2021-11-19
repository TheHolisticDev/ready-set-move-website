import React from "react"

import PageHelmet from "components/PageHelmet"
import useTranslations from "i18n/useTranslations"

export default function Appointments() {
  const t = useTranslations()

  return (
    <div style={{ textAlign: "center" }}>
      <PageHelmet />
      <h1>{t("Appointments page headline")}</h1>
    </div>
  )
}
