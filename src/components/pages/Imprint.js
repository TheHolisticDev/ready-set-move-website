import React from "react"
import { useSiteData } from "react-static"

import useTranslations from "i18n/useTranslations"
import DocumentParagraph from "components/base/DocumentParagraph"
import { Typography } from "@material-ui/core"

export default function Imprint() {
  const t = useTranslations()
  const { mail, street, city, ceoName, companyName } = useSiteData()

  return (
    <>
      <DocumentParagraph title={t("TMG title")}>
        <Typography variant="body2">
          {ceoName} | {companyName}
          <br />
          {street}
          <br />
          {city}
        </Typography>
        <br />
        <Typography variant="body2">
          {t("TMG ceo")}: {ceoName}
        </Typography>
      </DocumentParagraph>
      <DocumentParagraph title={t("contact title")}>
        <Typography variant="body2">{mail}</Typography>
        <Typography variant="body2">
          {t("contact ust title")}
          <br />
          {t("contact ust")}
        </Typography>
      </DocumentParagraph>
      <DocumentParagraph title={t("conflict title")}>
        <Typography variant="body2">
          {t("conflict text 1")}
          <br />
          {t("conflict text 2")}
        </Typography>
        <Typography variant="body2">{t("conflict text 3")}</Typography>
      </DocumentParagraph>
      <DocumentParagraph title={t("content liability title")}>
        <Typography variant="body2">{t("content liability text 1")}</Typography>
        <Typography variant="body2">{t("content liability text 2")}</Typography>
      </DocumentParagraph>
      <DocumentParagraph title={t("links liability title")}>
        <Typography variant="body2">{t("links liability text 1")}</Typography>
        <Typography variant="body2">{t("links liability text 2")}</Typography>
      </DocumentParagraph>
      <DocumentParagraph title={t("copy right title")}>
        <Typography variant="body2">{t("copy right text 1")}</Typography>
        <Typography variant="body2">{t("copy right text 2")}</Typography>
      </DocumentParagraph>
    </>
  )
}
