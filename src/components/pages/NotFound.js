// @flow
import React from "react"
import type { Node } from "react"
import { Typography } from "@material-ui/core"

import useTranslations from "i18n/useTranslations"
import { Link } from "components/Router"

export default function NotFound(): Node {
  const t = useTranslations()

  return (
    <>
      <h2>{t("Whops, this site does not exist.")}</h2>
      <Link to="/">
        <Typography color="textSecondary">
          {t("Go back to home page")}
        </Typography>
      </Link>
    </>
  )
}
