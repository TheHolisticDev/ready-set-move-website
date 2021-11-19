// @flow
import React, { useEffect, useState } from "react"
import type { Node } from "react"
import {
  Box,
  createStyles,
  makeStyles,
  Slide,
  Typography,
} from "@material-ui/core"

import quoteXL from "assets/images/quote.jpg"
import quoteLG from "assets/images/quote_lg.jpg"
import useTranslations from "i18n/useTranslations"
import {
  REFERENCE_POINTS,
  useElementScrolledIntoView,
} from "components/useElementScrolledIntoView"

const useStyles = makeStyles((theme) =>
  createStyles({
    quoteName: {
      color: theme.palette.primary.contrastText,
      fontSize: "1.25rem",
      fontWeight: "700",
      lineHeight: 1.8,
      letterSpacing: 0.4,
      fontFamily: "Aileron",
      marginTop: theme.spacing(3),
    },
    quoteTitle: {
      color: theme.palette.primary.contrastText,
      fontSize: "1rem",
      fontWeight: "400",
      fontStyle: "italic",
      lineHeight: "normal",
      letterSpacing: 0.32,
      fontFamily: "Aileron",
      opacity: 0.65,
    },
    quote: {
      color: theme.palette.primary.contrastText,
      fontSize: "2.25rem",
      lineHeight: "3.375rem",
      letterSpacing: 0.68,
      fontWeight: "800",
      fontFamily: "Eczar",
      maxWidth: 496,
      [theme.breakpoints.only("xs")]: {
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
      },
    },
    quoteImage: {
      minHeight: 700,
      backgroundColor: theme.palette.secondary.dark,
      [theme.breakpoints.up("md")]: {
        backgroundImage: `url("${quoteLG}")`,
      },
      [theme.breakpoints.up("lg")]: {
        justifyContent: "flex-end",
        paddingRight: 156,
        backgroundImage: `url("${quoteXL}")`,
      },
      [theme.breakpoints.only("lg")]: {
        paddingRight: theme.spacing(5),
      },
      [theme.breakpoints.down("md")]: {
        minHeight: 566,
        justifyContent: "center",
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(5),
      },
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  })
)

export default function Quote(): Node {
  const classes = useStyles()
  const t = useTranslations()

  const [showText, setShowText] = useState(false)
  const [containerElement, setContainerElement] = useState()
  const containerInView = useElementScrolledIntoView({
    element: containerElement,
    referencePoint: REFERENCE_POINTS.top,
    offset: 300,
  })
  useEffect(() => {
    if (containerInView) {
      setShowText(true)
    }
  }, [containerInView])

  return (
    <Box className={classes.quoteImage} ref={setContainerElement}>
      <Slide direction="up" in={showText} timeout={1000}>
        <Box>
          <Typography className={classes.quote}>{t("Quote")}</Typography>
          <Typography className={classes.quoteName}>
            {t("Quote name")}
          </Typography>
          <Typography className={classes.quoteTitle}>
            {t("Quote title")}
          </Typography>
        </Box>
      </Slide>
    </Box>
  )
}
