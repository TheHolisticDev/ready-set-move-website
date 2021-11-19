// @flow
import React from "react"
import type { Node } from "react"
import {
  createStyles,
  ThemeProvider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"

import NavBar from "./Navigation/NavBar"

import { dark } from "theme"
import useTranslations from "i18n/useTranslations"
import headerImage from "assets/images/header.jpg"

const useStyles = () =>
  makeStyles((theme) => {
    return createStyles({
      header: {
        [theme.breakpoints.down("sm")]: {
          height: 520,
        },
        height: 975,
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.1) 20%, rgba(0,0,0,0) 70%), url("${headerImage}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "#FFF",
      },
      headerTitle: {
        textAlign: "center",
        filter: "drop-shadow(0px 2px 33px rgb(0, 0, 0, 0.30))",
      },
    })
  })()

export default function Header(): Node {
  const classes = useStyles()
  const t = useTranslations()

  return (
    <Grid container className={classes.header}>
      <Grid item xs={12}>
        <ThemeProvider theme={dark}>
          <NavBar />
        </ThemeProvider>
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <Grid item xs={7}>
          <Typography variant="h1" className={classes.headerTitle}>
            {t("Catch phrase")}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
