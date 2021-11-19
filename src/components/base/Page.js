// @flow
import React, { useEffect, useRef, useState } from "react"
import type { Node } from "react"
import { Box, Container, createStyles, makeStyles } from "@material-ui/core"

import PageHelmet from "components/PageHelmet"
import Footer from "components/Footer"
import { SiteLanguageProvider } from "i18n/useLanguage"
import Header from "components/Header"
import { MonkeyFabProvider } from "components/MonkeyFab"
import { ConsentBar, ConsentProvider } from "components/useConsent"
import { useLocation } from "@reach/router"
import useSiteTranslations from "i18n/useSiteTranslations"

type Props = {
  children: Node,
  header?: Node,
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      "& a": {
        textDecoration: "none",
        color: "inherit",
      },
    },
    content: {
      maxWidth: 1024,
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(10),
      [theme.breakpoints.down("lg")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      [theme.breakpoints.up("xl")]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  })
)

const ScrollToComponent = ({ scrollToRef }): Node => {
  const { pathname } = useLocation()
  const setCurrentPath = useState()[1]
  const t = useSiteTranslations()
  const offersPath = `/${t("offers")}`
  useEffect(() => {
    setCurrentPath((prevPath) => {
      // deep link to offers => scroll products into view
      if (!prevPath && pathname.includes(offersPath)) {
        if (scrollToRef.current) {
          scrollToRef.current.scrollIntoView()
        }
        return pathname
      }
      // opening product details => don't scroll
      if (pathname.includes(offersPath)) return pathname
      // closing product details => don't scroll
      if (prevPath && prevPath.includes(offersPath)) return pathname

      // page reload => scroll to top
      window.scrollTo(0, 0)
      return pathname
    })
  }, [offersPath, pathname, scrollToRef, setCurrentPath])
  return null
}

export default function Page({ children, header = <Header /> }: Props): Node {
  const classes = useStyles()

  const containerRef = useRef()

  return (
    <ConsentProvider>
      <SiteLanguageProvider>
        <PageHelmet />
        <ScrollToComponent scrollToRef={containerRef} />
        <Box
          className={classes.root}
          display="flex"
          flexDirection="column"
          textAlign="left"
        >
          <Box>{header}</Box>
          <MonkeyFabProvider>
            <Container className={classes.content} ref={containerRef}>
              {children}
              <Footer />
            </Container>
          </MonkeyFabProvider>
          <ConsentBar />
        </Box>
      </SiteLanguageProvider>
    </ConsentProvider>
  )
}
