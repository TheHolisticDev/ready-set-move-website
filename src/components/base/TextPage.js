// @flow
import React from "react"
import type { Node } from "react"
import { Box, createStyles, makeStyles, Typography } from "@material-ui/core"
import useTranslations from "i18n/useTranslations"
import Page from "./Page"
import SimpleHeader from "components/SimpleHeader"

type Props = {
  children: Node,
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 1000,
      paddingTop: theme.spacing(5),
    },
    title: {
      textTransform: "uppercase",
      marginBottom: theme.spacing(5),
    },
  })
)

const ToWrap = ({ children }: Props) => {
  const classes = useStyles()
  const t = useTranslations()
  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        {t("title")}
      </Typography>
      {children}
    </Box>
  )
}

export default function TextPage({ children }: Props): Node {
  return (
    <Page header={<SimpleHeader />}>
      <ToWrap>{children}</ToWrap>
    </Page>
  )
}
